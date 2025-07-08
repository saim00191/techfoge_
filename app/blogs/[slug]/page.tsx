"use client"
import { Poppins } from "next/font/google"
import type React from "react"

import { client } from "@/sanity/lib/client"
import { useState, useEffect, useRef, type ReactNode } from "react"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Eye } from "lucide-react"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"
import Image from "next/image"
import type { PortableTextBlock } from "@/types/Blog"
import type { PortableTextReactComponents } from "@portabletext/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  publishedAt: string
  mainImageTop?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  mainImageBottom?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  content: PortableTextBlock[]
  author?: {
    name: string
    image?: {
      asset: {
        _ref: string
      }
    }
  }
  categories?: Array<{
    title: string
    slug: { current: string }
  }>
  estimatedReadingTime?: number
}

interface SanityImage {
  asset: {
    _ref: string
  }
  alt?: string
  caption?: string
}

// Portable Text Components
const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="my-8 sm:my-12 -mx-2 sm:-mx-4 md:-mx-8 lg:-mx-12">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src={urlFor(value).url() || "/placeholder.svg"}
              alt={value.alt || "Blog image"}
              fill
   
            />
            {value.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-6">
                <p className="text-white text-xs sm:text-sm md:text-base">{value.caption}</p>
              </div>
            )}
          </div>
        </div>
      )
    },
    code: ({ value }: { value: { code: string } }) => (
      <div className="my-4 sm:my-6 -mx-2 sm:-mx-4 md:-mx-8 lg:-mx-12">
        <pre className="bg-[#0D1117] text-[#C9D1D9] p-3 sm:p-4 md:p-6 rounded-md sm:rounded-lg overflow-x-auto text-xs sm:text-sm leading-relaxed border border-[#00D1FF]/20 font-mono">
          <code className="language-javascript whitespace-pre-wrap break-words">{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00D1FF] mb-4 sm:mb-6 md:mb-8 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00D1FF] mb-3 sm:mb-4 md:mb-6 mt-8 sm:mt-10 md:mt-12 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 mt-6 sm:mt-8 md:mt-10 leading-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => {
      // Function to process text and detect code blocks
      const processTextWithCodeBlocks = (text: string) => {
        const codeBlockRegex = /<>([\s\S]*?)<\/>/g
        const parts = []
        let lastIndex = 0
        let match
        while ((match = codeBlockRegex.exec(text)) !== null) {
          // Add text before the code block
          if (match.index > lastIndex) {
            const beforeText = text.slice(lastIndex, match.index)
            if (beforeText.trim()) {
              parts.push(
                <span key={`text-${lastIndex}`} className="text-[#D1D5DB]">
                  {beforeText}
                </span>,
              )
            }
          }
          // Add the code block (multi-line support with proper newline handling)
          let codeContent = match[1]
          // Convert \n to actual newlines and preserve all whitespace
          codeContent = codeContent.replace(/\\n/g, "\n")
          // Always render as block-level code for better formatting
          parts.push(
            <div key={`code-block-${match.index}`} className="my-4 sm:my-6 -mx-2 sm:-mx-4 md:-mx-8 lg:-mx-12">
              <pre className="bg-[#0D1117] text-[#C9D1D9] p-3 sm:p-4 md:p-6 rounded-md sm:rounded-lg overflow-x-auto text-xs sm:text-sm leading-relaxed border border-[#00D1FF]/20 font-mono">
                <code className="whitespace-pre-wrap break-words">{codeContent}</code>
              </pre>
            </div>,
          )
          lastIndex = match.index + match[0].length
        }
        // Add remaining text after the last code block
        if (lastIndex < text.length) {
          const remainingText = text.slice(lastIndex)
          if (remainingText.trim()) {
            parts.push(
              <span key={`text-${lastIndex}`} className="text-[#D1D5DB]">
                {remainingText}
              </span>,
            )
          }
        }
        return parts.length > 0 ? parts : text
      }
      // Check if children contains text that needs processing
      const processChildren = (children: ReactNode): ReactNode => {
        if (typeof children === "string") {
          const processed = processTextWithCodeBlocks(children)
          // If we have code blocks, we need to handle them specially
          if (Array.isArray(processed)) {
            // Check if any part is a code block div
            const hasCodeBlocks = processed.some((part) => part && typeof part === "object" && part.type === "div")
            if (hasCodeBlocks) {
              // Return the parts directly without wrapping in <p>
              return (
                <div className="text-[#D1D5DB] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  {processed}
                </div>
              )
            }
          }
          return processed
        }
        if (Array.isArray(children)) {
          return children.map((child, index) => {
            if (typeof child === "string") {
              const processed = processTextWithCodeBlocks(child)
              if (Array.isArray(processed)) {
                const hasCodeBlocks = processed.some((part) => part && typeof part === "object" && part.type === "div")
                if (hasCodeBlocks) {
                  return (
                    <div
                      key={index}
                      className="text-[#D1D5DB] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
                    >
                      {processed}
                    </div>
                  )
                }
              }
              return <span key={index}>{processed}</span>
            }
            return child
          })
        }
        return children
      }
      const processedChildren = processChildren(children)
      // If we already have processed children with code blocks, return them directly
      if (
        Array.isArray(processedChildren) &&
        processedChildren.some((child) => child && typeof child === "object" && child.type === "div")
      ) {
        return <>{processedChildren}</>
      }
      return (
        <p className="text-[#D1D5DB] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
          {processedChildren}
        </p>
      )
    },
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 sm:border-l-4 border-[#00D1FF] pl-3 sm:pl-6 my-6 sm:my-8 bg-[#00D1FF]/5 py-3 sm:py-4 rounded-r-lg">
        <div className="text-[#D1D5DB] text-sm sm:text-base md:text-lg italic leading-relaxed">{children}</div>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => <em className="italic text-[#00D1FF]">{children}</em>,
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-[#0D1117] text-[#C9D1D9] px-1 sm:px-2 py-0.5 sm:py-1 rounded border border-[#00D1FF]/20 font-mono text-xs sm:text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00D1FF] hover:text-white underline underline-offset-2 transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-none space-y-2 sm:space-y-3 mb-4 sm:mb-6 ml-2 sm:ml-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-none space-y-2 sm:space-y-3 mb-4 sm:mb-6 ml-2 sm:ml-4 counter-reset-list">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 sm:gap-3">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00D1FF] rounded-full mt-2 sm:mt-3 flex-shrink-0" />
        <div className="text-[#D1D5DB] text-sm sm:text-base md:text-lg leading-relaxed">{children}</div>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-2 sm:gap-3 counter-increment-list">
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#00D1FF] text-[#020A15] rounded-full flex items-center justify-center text-xs sm:text-sm font-bold mt-0.5 sm:mt-1 flex-shrink-0">
          <span className="counter-content" />
        </div>
        <div className="text-[#D1D5DB] text-sm sm:text-base md:text-lg leading-relaxed">{children}</div>
      </li>
    ),
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isMounted, setIsMounted] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Fix hydration and mobile issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const query = `
          *[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            description,
            publishedAt,
            mainImageTop {
              asset,
              alt
            },
            mainImageBottom {
              asset,
              alt
            },
            content,
            author-> {
              name,
              image {
                asset
              }
            },
            categories[]-> {
              title,
              slug
            },
            estimatedReadingTime
          }
        `
        const post = await client.fetch(query, { slug: params.slug })
        if (!post) {
          setError("Blog post not found")
        } else {
          setBlogPost(post)
        }
      } catch (err) {
        console.error("Error fetching blog post:", err)
        setError("Failed to load blog post")
      } finally {
        setLoading(false)
      }
    }
    fetchBlogPost()
  }, [params.slug])

  useEffect(() => {
    if (!loading && blogPost && isMounted) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 100)

      // More lenient intersection observer for mobile
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("data-section")
              if (sectionId) {
                setVisibleSections((prev) => new Set([...Array.from(prev), sectionId]))
              }
            }
          })
        },
        {
          threshold: 0.1, // Reduced threshold for mobile
          rootMargin: "0px 0px -20px 0px", // Reduced margin for mobile
        },
      )

      // Add fallback timer for mobile devices
      const fallbackTimer = setTimeout(() => {
        setVisibleSections(new Set(["header", "content", "bottomImage", "cta"]))
      }, 1000)

      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref)
      })

      return () => {
        clearTimeout(timer)
        clearTimeout(fallbackTimer)
        observer.disconnect()
      }
    }
  }, [loading, blogPost, isMounted])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const sharePost = async () => {
    if (navigator.share && blogPost) {
      try {
        await navigator.share({
          title: blogPost.title,
          text: blogPost.description || "",
          url: window.location.href,
        })
      } catch (err) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  // Don't render until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className={`py-20 sm:py-40 bg-[#020A15] flex items-center justify-center ${poppins.className}`}>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#D1D5DB] text-base sm:text-lg">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={`py-40  bg-[#020A15] flex items-center justify-center ${poppins.className}`}>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#D1D5DB] text-base sm:text-lg">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (error || !blogPost) {
    return (
      <div className={`py-10 bg-[#020A15] flex items-center justify-center ${poppins.className}`}>
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">😕</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Post Not Found</h1>
          <p className="text-[#D1D5DB] mb-6 sm:mb-8 text-sm sm:text-base">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#00D1FF] text-[#020A15] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`py-6 sm:py-10 bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="#00D1FF" />
              <circle cx="100" cy="20" r="2" fill="#00D1FF" />
              <circle cx="20" cy="100" r="2" fill="#00D1FF" />
              <circle cx="100" cy="100" r="2" fill="#00D1FF" />
              <path d="M20 60h80M60 20v80" stroke="#00D1FF" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      {/* Glowing Orbs */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-[#00D1FF]/15 rounded-full blur-2xl animate-pulse-glow-delayed" />
      <div className="absolute bottom-16 sm:bottom-32 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-[#00D1FF]/8 rounded-full blur-3xl animate-pulse-glow-slow" />

      {/* Navigation Bar */}
      <nav className="backdrop-blur-md border-b border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link
            href="/blogs"
            className="flex items-center gap-1 sm:gap-2 text-[#00D1FF] hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
            <span className="font-semibold text-sm sm:text-base">Back to Blog</span>
          </Link>
          <button
            onClick={sharePost}
            className="flex items-center gap-1 sm:gap-2 bg-[#00D1FF]/10 text-[#00D1FF] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#00D1FF]/20 transition-all duration-200"
          >
            <Share2 size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline text-sm">Share</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-12 sm:pt-24">
        {/* Top Image */}
        {blogPost.mainImageTop && (
          <section className="px-3 sm:px-4 mb-8 sm:mb-16">
            <div
              className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
                isLoaded || visibleSections.size > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={urlFor(blogPost.mainImageTop).url() || "/placeholder.svg"}
                  alt={blogPost.mainImageTop.alt || blogPost.title}
                  fill
                  priority
                 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020A15]/60 via-transparent to-transparent" />
              </div>
            </div>
          </section>
        )}

        {/* Article Header */}
        <section className="px-3 sm:px-4 mb-8 sm:mb-16">
          <div className="max-w-5xl mx-auto">
            <div
              ref={(el) => {
                sectionRefs.current.header = el
              }}
              data-section="header"
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has("header") || isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Categories */}
              {blogPost.categories && blogPost.categories.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {blogPost.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-[#00D1FF]/10 text-[#00D1FF] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold border border-[#00D1FF]/20"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight relative">
                {blogPost.title}
                {/* Neon Glow Effects */}
                <div className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00D1FF] blur-sm opacity-20 animate-neon-pulse pointer-events-none" />
              </h1>
              {/* Description */}
              {blogPost.description && (
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#D1D5DB] leading-relaxed mb-6 sm:mb-8">
                  {blogPost.description}
                </p>
              )}
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[#D1D5DB] text-sm sm:text-base">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Calendar size={14} className="sm:w-[18px] sm:h-[18px] text-[#00D1FF]" />
                  <span>{formatDate(blogPost.publishedAt)}</span>
                </div>
                {blogPost.estimatedReadingTime && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock size={14} className="sm:w-[18px] sm:h-[18px] text-[#00D1FF]" />
                    <span>{blogPost.estimatedReadingTime} min read</span>
                  </div>
                )}
                {blogPost.author && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Eye size={14} className="sm:w-[18px] sm:h-[18px] text-[#00D1FF]" />
                    <span>By {blogPost.author.name}</span>
                  </div>
                )}
              </div>
              {/* Decorative Elements */}
              <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
                <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00D1FF] rounded-full animate-pulse" />
                <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-3 sm:px-4 mb-8 sm:mb-16">
          <div className="max-w-5xl mx-auto">
            <div
              ref={(el) => {
                sectionRefs.current.content = el
              }}
              data-section="content"
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has("content") || isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="prose prose-sm sm:prose-lg prose-invert max-w-none">
                <PortableText value={blogPost.content} components={portableTextComponents} />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Image */}
        {blogPost.mainImageBottom && (
          <section className="px-3 sm:px-4 mb-8 sm:mb-16">
            <div
              ref={(el) => {
                sectionRefs.current.bottomImage = el
              }}
              data-section="bottomImage"
              className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
                visibleSections.has("bottomImage") || isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={urlFor(blogPost.mainImageBottom).url() || "/placeholder.svg"}
                  alt={blogPost.mainImageBottom.alt || ""}
                  fill
                  
                />
              </div>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <section className="px-3 sm:px-4 py-8 sm:py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div
              ref={(el) => {
                sectionRefs.current.cta = el
              }}
              data-section="cta"
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has("cta") || isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-xl sm:rounded-2xl p-6 sm:p-12 border border-[#00D1FF]/20">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <BookOpen size={20} className="sm:w-6 sm:h-6 text-[#00D1FF]" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Enjoyed this article?</h3>
                  <BookOpen size={20} className="sm:w-6 sm:h-6 text-[#00D1FF]" />
                </div>
                <p className="text-base sm:text-lg text-[#D1D5DB] mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Share it with your network and explore more insights on our blog.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={sharePost}
                    className="bg-[#00D1FF] text-[#020A15] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <Share2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Share Article
                    </span>
                  </button>
                  <Link
                    href="/blogs"
                    className="border-2 border-[#00D1FF] text-[#00D1FF] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      <BookOpen size={16} className="sm:w-[18px] sm:h-[18px]" />
                      More Articles
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes neon-pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        @keyframes pulse-glow-delayed {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }
        @keyframes pulse-glow-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 5s ease-in-out infinite 1s;
        }
        .animate-pulse-glow-slow {
          animation: pulse-glow-slow 6s ease-in-out infinite;
        }
        /* Counter styles for numbered lists */
        .counter-reset-list {
          counter-reset: list-counter;
        }
        .counter-increment-list {
          counter-increment: list-counter;
        }
        .counter-content::before {
          content: counter(list-counter);
        }
      `}</style>
    </div>
  )
}

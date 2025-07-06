"use client"

import { Poppins } from "next/font/google"
import { client } from "@/sanity/lib/client"
import { useState, useEffect, useRef, ReactNode } from "react"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Eye } from "lucide-react"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"
import Image from "next/image"
import { PortableTextBlock } from "@/types/Blog"
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
const portableTextComponents:Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset?._ref) return null
      return (
        <div className="my-12 -mx-4 md:-mx-8 lg:-mx-12">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
            <Image
              src={urlFor(value).url() || "/placeholder.svg"}
              alt={value.alt || "Blog image"}
              fill
              className="object-cover"
            />
            {value.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-sm md:text-base">{value.caption}</p>
              </div>
            )}
          </div>
        </div>
      )
    },
    code: ({ value }: { value: { code: string } }) => (
      <pre className="bg-[#0D1117] text-[#C9D1D9] p-4 rounded-md overflow-x-auto my-6 text-sm leading-relaxed">
        <code className="language-javascript">{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#00D1FF] mb-8 leading-tight">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#00D1FF] mb-6 mt-12 leading-tight">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 mt-10 leading-tight">{children}</h3>
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
            <div key={`code-block-${match.index}`} className="my-6 -mx-4 md:-mx-8 lg:-mx-12">
              <pre className="bg-[#0D1117] text-[#C9D1D9] p-6 rounded-lg overflow-x-auto text-sm leading-relaxed border border-[#00D1FF]/20 font-mono">
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
              return <div className="text-[#D1D5DB] text-lg leading-relaxed mb-6">{processed}</div>
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
                    <div key={index} className="text-[#D1D5DB] text-lg leading-relaxed mb-6">
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

      return <p className="text-[#D1D5DB] text-lg leading-relaxed mb-6">{processedChildren}</p>
    },
    blockquote: ({ children }:  { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#00D1FF] pl-6 my-8 bg-[#00D1FF]/5 py-4 rounded-r-lg">
        <div className="text-[#D1D5DB] text-lg italic leading-relaxed">{children}</div>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }:  { children: React.ReactNode }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }:  { children: React.ReactNode }) => <em className="italic text-[#00D1FF]">{children}</em>,
    code: ({ children }:  { children: React.ReactNode }) => (
      <code className="bg-[#0D1117] text-[#C9D1D9] px-2 py-1 rounded border border-[#00D1FF]/20 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ children, value }:  { children: React.ReactNode , value?: { href?: string }}) => (
      <a
        href={value?.href }
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00D1FF] hover:text-white underline underline-offset-2 transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => <ul className="list-none space-y-3 mb-6 ml-4">{children}</ul>,
    number: ({ children }: { children?: React.ReactNode }) => <ol className="list-none space-y-3 mb-6 ml-4 counter-reset-list">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3">
        <div className="w-2 h-2 bg-[#00D1FF] rounded-full mt-3 flex-shrink-0" />
        <div className="text-[#D1D5DB] text-lg leading-relaxed">{children}</div>
      </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="flex items-start gap-3 counter-increment-list">
        <div className="w-6 h-6 bg-[#00D1FF] text-[#020A15] rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
          <span className="counter-content" />
        </div>
        <div className="text-[#D1D5DB] text-lg leading-relaxed">{children}</div>
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
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

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
    if (!loading && blogPost) {
      const timer = setTimeout(() => {
        setIsLoaded(true)
      }, 100)

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
          threshold: 0.2,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.observe(ref)
      })

      return () => {
        clearTimeout(timer)
        observer.disconnect()
      }
    }
  }, [loading, blogPost])

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

  if (loading) {
    return (
      <div className={`py-10 bg-[#020A15] flex items-center justify-center ${poppins.className}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#D1D5DB] text-lg">Loading blog post...</p>
        </div>
      </div>
    )
  }

  if (error || !blogPost) {
    return (
      <div className={`py-10 bg-[#020A15] flex items-center justify-center ${poppins.className}`}>
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">😕</div>
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-[#D1D5DB] mb-8">{error || "The blog post you're looking for doesn't exist."}</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#00D1FF] text-[#020A15] px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`py-10 bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
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
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#00D1FF]/15 rounded-full blur-2xl animate-pulse-glow-delayed" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#00D1FF]/8 rounded-full blur-3xl animate-pulse-glow-slow" />

      {/* Navigation Bar */}
      <nav className="  backdrop-blur-md border-b border-[#00D1FF]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-[#00D1FF] hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Blog</span>
          </Link>
          <button
            onClick={sharePost}
            className="flex items-center gap-2 bg-[#00D1FF]/10 text-[#00D1FF] px-4 py-2 rounded-lg hover:bg-[#00D1FF]/20 transition-all duration-200"
          >
            <Share2 size={16} />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Top Image */}
        {blogPost.mainImageTop && (
          <section className="px-4 mb-16">
            <div
              className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
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
        <section className="px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <div
              ref={(el) => {
                sectionRefs.current.header = el
              }}
              data-section="header"
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has("header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Categories */}
              {blogPost.categories && blogPost.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPost.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-[#00D1FF]/10 text-[#00D1FF] px-3 py-1 rounded-full text-sm font-semibold border border-[#00D1FF]/20"
                    >
                      {category.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {blogPost.title}
                {/* Neon Glow Effects */}
                <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-[#00D1FF] blur-sm opacity-20 animate-neon-pulse pointer-events-none" />
              </h1>

              {/* Description */}
              {blogPost.description && (
                <p className="text-xl md:text-2xl text-[#D1D5DB] leading-relaxed mb-8">{blogPost.description}</p>
              )}

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-[#D1D5DB]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#00D1FF]" />
                  <span>{formatDate(blogPost.publishedAt)}</span>
                </div>
                {blogPost.estimatedReadingTime && (
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-[#00D1FF]" />
                    <span>{blogPost.estimatedReadingTime} min read</span>
                  </div>
                )}
                {blogPost.author && (
                  <div className="flex items-center gap-2">
                    <Eye size={18} className="text-[#00D1FF]" />
                    <span>By {blogPost.author.name}</span>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
                <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <div
              ref={(el) => {
                sectionRefs.current.content = el
              }}
              data-section="content"
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has("content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <PortableText value={blogPost.content} components={portableTextComponents} />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Image */}
        {blogPost.mainImageBottom && (
          <section className="px-4 mb-16">
            <div
              ref={(el) => {
                sectionRefs.current.bottomImage = el
              }}
              data-section="bottomImage"
              className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
                visibleSections.has("bottomImage") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
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
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div
              ref={(el) => {
                sectionRefs.current.cta = el
              }}
              data-section="cta"
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <BookOpen size={24} className="text-[#00D1FF]" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Enjoyed this article?</h3>
                  <BookOpen size={24} className="text-[#00D1FF]" />
                </div>
                <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
                  Share it with your network and explore more insights on our blog.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={sharePost}
                    className="bg-[#00D1FF] text-[#020A15] px-8 py-3 rounded-lg font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Share2 size={18} />
                      Share Article
                    </span>
                  </button>
                  <Link
                    href="/blog"
                    className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-3 rounded-lg font-bold hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen size={18} />
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
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        @keyframes pulse-glow-delayed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }
        @keyframes pulse-glow-slow {
          0%, 100% {
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

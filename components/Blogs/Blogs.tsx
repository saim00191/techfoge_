"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Calendar, ArrowRight, Mail, Tag, Star } from "lucide-react"
import Link from "next/link"
import { fetchBlogPosts, type BlogPost } from "@/app/admin/blog/sanity-operation"


const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  disabled = false,
  ...props
}: {
  children: React.ReactNode
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-[#00D1FF] text-black hover:bg-[#00D1FF]/80 focus:ring-[#00D1FF]/50",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
    outline: "border border-[#00D1FF]/50 text-[#00D1FF] hover:bg-[#00D1FF]/10 focus:ring-[#00D1FF]/50",
  }

  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Input Component
const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}: {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  [key: string]: any
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 bg-slate-900/50 border border-slate-700/50 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:border-[#00D1FF]/50 transition-all duration-300 ${className}`}
      {...props}
    />
  )
}

// Particle system component
const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      pulse: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.02

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Pulsing effect
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 209, 255, ${pulseOpacity})`
        ctx.fill()

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 209, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Helper function to extract text from block content
const extractTextFromContent = (content: any[]): string => {
  if (!content || !Array.isArray(content)) return ""

  return (
    content
      .filter((block) => block._type === "block")
      .map((block) => block.children?.map((child: any) => child.text).join(""))
      .join(" ")
      .substring(0, 150) + "..."
  )
}

// Helper function to calculate read time
const calculateReadTime = (content: any[]): string => {
  const text = extractTextFromContent(content)
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime} min read`
}

// Blog card component
const BlogCard = ({ blog, featured = false }: { blog: BlogPost; featured?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)
  const slug = generateSlug(blog.title)
  const excerpt = extractTextFromContent(blog.content)
  const readTime = calculateReadTime(blog.content)

  return (
    <div
      className={`group relative bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-700 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] ${
        featured ? "lg:col-span-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.mainImageTop?.asset?.url || "/placeholder.svg?height=300&width=400"}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#00D1FF]/20 backdrop-blur-sm border border-[#00D1FF]/30 rounded-full text-xs text-[#00D1FF] font-medium">
            {blog.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(blog.publishedAt).toLocaleDateString()}
          </div>
          
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D1FF] transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-slate-300 mb-4 line-clamp-2">{blog.description || excerpt}</p>

       <Link
  href={`/blogs/${slug}`}
  className="group/btn flex items-center gap-2 text-[#00D1FF] group-hover:text-white font-medium cursor-pointer transition-all duration-300"
>
  Read More
  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
</Link>

      </div>
    </div>
  )
}

// Latest blog item component
const LatestBlogItem = ({ blog }: { blog: BlogPost }) => {
  const slug = generateSlug(blog.title)

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="group flex items-center gap-4 p-4 bg-slate-900/20 backdrop-blur-sm border border-slate-700/30 rounded-lg hover:border-[#00D1FF]/50 hover:bg-slate-900/40 transition-all duration-300 cursor-pointer">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-3 h-3 text-[#00D1FF]" />
            <span className="text-xs text-[#00D1FF]">{blog.status}</span>
          </div>
          <h4 className="text-white font-medium group-hover:text-[#00D1FF] transition-colors duration-300 mb-1">
            {blog.title}
          </h4>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#00D1FF] group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [email, setEmail] = useState("")
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Load blogs from Sanity
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true)
        const fetchedBlogs = await fetchBlogPosts()
        // Filter only published blogs
        const publishedBlogs = fetchedBlogs.filter((blog) => blog.status === "published")
        setBlogs(publishedBlogs)
      } catch (error) {
        console.error("Error loading blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations
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

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  // Get featured blogs (first 3 published blogs)
  const featuredBlogs = blogs.slice(0, 3)

  // Get latest blogs (remaining published blogs)
  const latestBlogs = blogs.slice(3)

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020A15] flex items-center justify-center">
        <div className="text-white text-xl">Loading blogs...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020A15] text-white font-['Poppins'] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <ParticleSystem />
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl" />
        {/* Circuit overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 L10,10 L10,0 M10,20 L10,10 L20,10" stroke="#00D1FF" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white relative">
              Blogs
              {/* Neon Glow Effects */}
              <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
              <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
              Explore our ideas, announcements, and tech discoveries
            </p>
          </div>

          {/* Decorative Elements */}
          <div
            className={`flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Blogs Grid */}
      {featuredBlogs.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-white mb-4">
                Featured <span className="text-[#00D1FF]">Articles</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts Section */}
      {latestBlogs.length > 0 && (
        <section className="px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
              {/* Latest Posts */}
              <div>
                <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-6 flex items-center gap-3">
                  <Star className="w-6 h-6 text-[#00D1FF]" />
                  Latest Posts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {latestBlogs.map((blog) => (
                    <LatestBlogItem key={blog._id} blog={blog} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* No Blogs Message */}
      {blogs.length === 0 && !loading && (
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold font-['Orbitron'] text-white mb-4">
                  No Published <span className="text-[#00D1FF]">Blogs</span> Yet
                </h3>
                <p className="text-slate-300 text-lg">Stay tuned! We're working on some amazing content for you.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 to-transparent animate-pulse" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-[#00D1FF]" />
                <h3 className="text-3xl font-bold font-['Orbitron'] text-white">
                  Stay in the <span className="text-[#00D1FF]">Loop</span>
                </h3>
              </div>
              <p className="text-slate-300 mb-8 text-lg">
                Get the latest tech insights, tutorials, and industry news delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-900/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-[#00D1FF]/50 focus:ring-2 focus:ring-[#00D1FF]/20"
                />
                <Button className="bg-gradient-to-r from-[#00D1FF] to-cyan-400 hover:from-[#00D1FF]/80 hover:to-cyan-400/80 text-black font-bold px-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,209,255,0.5)]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes neon-pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }

        .animate-neon-pulse-slow {
          animation: neon-pulse-slow 4s ease-in-out infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

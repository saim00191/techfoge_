"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Calendar, Clock, ArrowRight, Mail, Tag, TrendingUp, Star, Eye, MessageCircle } from 'lucide-react'
import Link from "next/link"

// Custom Button Component
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
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    default: "bg-[#00D1FF] text-black hover:bg-[#00D1FF]/80 focus:ring-[#00D1FF]/50",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
    outline: "border border-[#00D1FF]/50 text-[#00D1FF] hover:bg-[#00D1FF]/10 focus:ring-[#00D1FF]/50"
  }
  
  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base"
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

// Mock blog data
const featuredBlogs = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and deploy applications in 2024.",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Machine Learning",
    views: 2847,
    comments: 23,
    featured: true,
  },
  {
    id: 2,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt:
      "Discovering real-world applications of blockchain technology in supply chain, healthcare, and digital identity.",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Blockchain",
    views: 1923,
    comments: 15,
    featured: true,
  },
  {
    id: 3,
    title: "Quantum Computing: The Next Frontier",
    excerpt:
      "Understanding quantum computing principles and their potential impact on cybersecurity and data processing.",
    image: "/placeholder.svg?height=300&width=400",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Quantum Tech",
    views: 3156,
    comments: 31,
    featured: true,
  },
]

const latestBlogs = [
  {
    id: 4,
    title: "5G Networks and IoT Integration",
    date: "2024-01-08",
    category: "Networking",
    views: 1456,
    trending: true,
  },
  {
    id: 5,
    title: "Cybersecurity in the Cloud Era",
    date: "2024-01-05",
    category: "Security",
    views: 2134,
    trending: false,
  },
  {
    id: 6,
    title: "Sustainable Tech Solutions",
    date: "2024-01-03",
    category: "Green Tech",
    views: 987,
    trending: true,
  },
  {
    id: 7,
    title: "Edge Computing Revolution",
    date: "2024-01-01",
    category: "Cloud Computing",
    views: 1789,
    trending: false,
  },
]

const categories = [
  "All",
  "AI & Machine Learning",
  "Blockchain",
  "Quantum Tech",
  "Networking",
  "Security",
  "Green Tech",
  "Cloud Computing",
  "Web Development",
]

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

// Blog card component
const BlogCard = ({ blog, featured = false }: { blog: any; featured?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false)

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
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#00D1FF]/20 backdrop-blur-sm border border-[#00D1FF]/30 rounded-full text-xs text-[#00D1FF] font-medium">
            {blog.category}
          </span>
        </div>

        {/* Stats */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {blog.views.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" />
            {blog.comments}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(blog.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D1FF] transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-slate-300 mb-4 line-clamp-2">{blog.excerpt}</p>

        <Link href={`/blog/${blog.id}`}>
          <button className="group/btn p-0 h-auto text-[#00D1FF] hover:text-white font-medium bg-transparent border-none cursor-pointer flex items-center transition-colors duration-300">
            Read More
            <ArrowRight
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

// Latest blog item component
const LatestBlogItem = ({ blog }: { blog: any }) => {
  return (
    <div className="group flex items-center gap-4 p-4 bg-slate-900/20 backdrop-blur-sm border border-slate-700/30 rounded-lg hover:border-[#00D1FF]/50 hover:bg-slate-900/40 transition-all duration-300 cursor-pointer">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Tag className="w-3 h-3 text-[#00D1FF]" />
          <span className="text-xs text-[#00D1FF]">{blog.category}</span>
          {blog.trending && (
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-orange-400" />
              <span className="text-xs text-orange-400">Trending</span>
            </div>
          )}
        </div>

        <h4 className="text-white font-medium group-hover:text-[#00D1FF] transition-colors duration-300 mb-1">
          {blog.title}
        </h4>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {blog.views.toLocaleString()}
          </div>
        </div>
      </div>

      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#00D1FF] group-hover:translate-x-1 transition-all duration-300" />
    </div>
  )
}

export default function FuturisticBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")

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
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black font-['Orbitron'] mb-6 relative">
              <span className="bg-gradient-to-r from-white via-[#00D1FF] to-white bg-clip-text text-transparent animate-pulse">
                Tech Foge
              </span>
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#00D1FF] to-cyan-300 bg-clip-text text-transparent">
                Blog
              </span>

              {/* Neon glow effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-black font-['Orbitron'] text-[#00D1FF] opacity-20 blur-sm animate-pulse">
                Tech Foge
                <br />
                <span className="text-4xl md:text-6xl">Blog</span>
              </div>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fadeInUp opacity-0 animation-delay-500">
            Explore our ideas, announcements, and tech discoveries
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative animate-fadeInUp opacity-0 animation-delay-1000">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 bg-slate-900/50 backdrop-blur-sm border-slate-700/50 rounded-full text-white placeholder-slate-400 focus:border-[#00D1FF]/50 focus:ring-2 focus:ring-[#00D1FF]/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-[#00D1FF]/20 border-[#00D1FF] text-[#00D1FF] shadow-[0_0_20px_rgba(0,209,255,0.3)]"
                    : "bg-slate-900/30 border-slate-700/50 text-slate-300 hover:border-[#00D1FF]/50 hover:text-[#00D1FF]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-['Orbitron'] text-white mb-4">
              Featured <span className="text-[#00D1FF]">Articles</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Latest & Trending Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest Posts */}
            <div>
              <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-[#00D1FF]" />
                Latest Posts
              </h3>
              <div className="space-y-4">
                {latestBlogs.map((blog) => (
                  <LatestBlogItem key={blog.id} blog={blog} />
                ))}
              </div>
            </div>

            {/* Trending Posts */}
            <div>
              <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                Trending Now
              </h3>
              <div className="space-y-4">
                {latestBlogs
                  .filter((blog) => blog.trending)
                  .map((blog) => (
                    <LatestBlogItem key={blog.id} blog={blog} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

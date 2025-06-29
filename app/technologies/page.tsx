"use client"
import { Poppins } from "next/font/google"
import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Code,
  Brain,
  ShoppingCart,
  WorkflowIcon as Wordpress,
  Video,
  Palette,
  TrendingUp,
  Zap,
  Globe,
  Database,
  Search,
  Filter,
  Award,
  Users,
  ChevronDown,
  X,
  Info,
  ExternalLink,
} from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface Technology {
  name: string
  icon: string
  color: string
  proficiency: number
  experience: string
  description: string
  projects: number
  website?: string
  category: string
}

interface TechCategory {
  id: string
  title: string
  icon: React.ElementType
  description: string
  technologies: Technology[]
  gradient: string
  count: number
}

export default function TechnologiesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const particleCanvasRef = useRef<HTMLCanvasElement>(null)

  // Enhanced particle system
  useEffect(() => {
    const canvas = particleCanvasRef.current
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
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "#00D1FF" : "#0099CC",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
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
            ctx.strokeStyle = `#00D1FF${Math.floor((1 - distance / 100) * 50)
              .toString(16)
              .padStart(2, "0")}`
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const techCategories: TechCategory[] = [
    {
      id: "web",
      title: "Web Development",
      icon: Code,
      description: "Modern frameworks and tools for building scalable web applications",
      gradient: "from-[#00D1FF]/20 to-[#0099CC]/20",
      count: 12,
      technologies: [
        {
          name: "React.js",
          icon: "⚛️",
          color: "#61DAFB",
          proficiency: 95,
          experience: "5+ years",
          description: "A JavaScript library for building user interfaces with component-based architecture",
          projects: 150,
          website: "https://reactjs.org",
          category: "web",
        },
        {
          name: "Next.js",
          icon: "▲",
          color: "#000000",
          proficiency: 92,
          experience: "4+ years",
          description: "The React framework for production with server-side rendering and static generation",
          projects: 120,
          website: "https://nextjs.org",
          category: "web",
        },
        {
          name: "TypeScript",
          icon: "📘",
          color: "#3178C6",
          proficiency: 90,
          experience: "4+ years",
          description: "Typed superset of JavaScript that compiles to plain JavaScript",
          projects: 200,
          website: "https://typescriptlang.org",
          category: "web",
        },
        {
          name: "Node.js",
          icon: "🟢",
          color: "#339933",
          proficiency: 88,
          experience: "5+ years",
          description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
          projects: 180,
          website: "https://nodejs.org",
          category: "web",
        },
        {
          name: "Express.js",
          icon: "🚀",
          color: "#000000",
          proficiency: 85,
          experience: "4+ years",
          description: "Fast, unopinionated, minimalist web framework for Node.js",
          projects: 100,
          website: "https://expressjs.com",
          category: "web",
        },
        {
          name: "Tailwind CSS",
          icon: "💨",
          color: "#06B6D4",
          proficiency: 93,
          experience: "3+ years",
          description: "Utility-first CSS framework for rapidly building custom designs",
          projects: 160,
          website: "https://tailwindcss.com",
          category: "web",
        },
        {
          name: "Vue.js",
          icon: "💚",
          color: "#4FC08D",
          proficiency: 82,
          experience: "3+ years",
          description: "Progressive JavaScript framework for building user interfaces",
          projects: 80,
          website: "https://vuejs.org",
          category: "web",
        },
        {
          name: "Angular",
          icon: "🅰️",
          color: "#DD0031",
          proficiency: 78,
          experience: "3+ years",
          description: "Platform for building mobile and desktop web applications",
          projects: 60,
          website: "https://angular.io",
          category: "web",
        },
        {
          name: "Svelte",
          icon: "🧡",
          color: "#FF3E00",
          proficiency: 75,
          experience: "2+ years",
          description: "Cybernetically enhanced web apps with compile-time optimizations",
          projects: 40,
          website: "https://svelte.dev",
          category: "web",
        },
        {
          name: "GraphQL",
          icon: "🔗",
          color: "#E10098",
          proficiency: 80,
          experience: "3+ years",
          description: "Query language for APIs and runtime for executing queries",
          projects: 70,
          website: "https://graphql.org",
          category: "web",
        },
        {
          name: "MongoDB",
          icon: "🍃",
          color: "#47A248",
          proficiency: 85,
          experience: "4+ years",
          description: "Document-oriented NoSQL database program",
          projects: 90,
          website: "https://mongodb.com",
          category: "web",
        },
        {
          name: "PostgreSQL",
          icon: "🐘",
          color: "#336791",
          proficiency: 83,
          experience: "4+ years",
          description: "Advanced open source relational database",
          projects: 85,
          website: "https://postgresql.org",
          category: "web",
        },
      ],
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Cutting-edge artificial intelligence and machine learning technologies",
      gradient: "from-[#FF6B6B]/20 to-[#FF8E53]/20",
      count: 10,
      technologies: [
        {
          name: "Python",
          icon: "🐍",
          color: "#3776AB",
          proficiency: 94,
          experience: "6+ years",
          description: "High-level programming language perfect for AI and data science",
          projects: 200,
          website: "https://python.org",
          category: "ai",
        },
        {
          name: "TensorFlow",
          icon: "🧠",
          color: "#FF6F00",
          proficiency: 88,
          experience: "4+ years",
          description: "End-to-end open source platform for machine learning",
          projects: 80,
          website: "https://tensorflow.org",
          category: "ai",
        },
        {
          name: "PyTorch",
          icon: "🔥",
          color: "#EE4C2C",
          proficiency: 85,
          experience: "3+ years",
          description: "Open source machine learning library based on Torch",
          projects: 70,
          website: "https://pytorch.org",
          category: "ai",
        },
        {
          name: "OpenAI GPT",
          icon: "🤖",
          color: "#412991",
          proficiency: 90,
          experience: "2+ years",
          description: "Advanced language models for natural language processing",
          projects: 60,
          website: "https://openai.com",
          category: "ai",
        },
        {
          name: "Hugging Face",
          icon: "🤗",
          color: "#FFD21E",
          proficiency: 87,
          experience: "2+ years",
          description: "Platform for machine learning models and datasets",
          projects: 50,
          website: "https://huggingface.co",
          category: "ai",
        },
        {
          name: "LangChain",
          icon: "🔗",
          color: "#1C3A3A",
          proficiency: 82,
          experience: "1+ years",
          description: "Framework for developing applications powered by language models",
          projects: 40,
          website: "https://langchain.com",
          category: "ai",
        },
        {
          name: "Scikit-learn",
          icon: "📊",
          color: "#F7931E",
          proficiency: 86,
          experience: "4+ years",
          description: "Machine learning library for Python",
          projects: 90,
          website: "https://scikit-learn.org",
          category: "ai",
        },
        {
          name: "Pandas",
          icon: "🐼",
          color: "#150458",
          proficiency: 91,
          experience: "5+ years",
          description: "Data manipulation and analysis library for Python",
          projects: 120,
          website: "https://pandas.pydata.org",
          category: "ai",
        },
        {
          name: "NumPy",
          icon: "🔢",
          color: "#013243",
          proficiency: 89,
          experience: "5+ years",
          description: "Fundamental package for scientific computing with Python",
          projects: 150,
          website: "https://numpy.org",
          category: "ai",
        },
        {
          name: "Jupyter",
          icon: "📓",
          color: "#F37626",
          proficiency: 85,
          experience: "4+ years",
          description: "Interactive computing environment for data science",
          projects: 100,
          website: "https://jupyter.org",
          category: "ai",
        },
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      icon: ShoppingCart,
      description: "Comprehensive solutions for online stores and payment processing",
      gradient: "from-[#4ECDC4]/20 to-[#44A08D]/20",
      count: 8,
      technologies: [
        {
          name: "Shopify",
          icon: "🛍️",
          color: "#7AB55C",
          proficiency: 92,
          experience: "4+ years",
          description: "Leading e-commerce platform for online stores",
          projects: 100,
          website: "https://shopify.com",
          category: "ecommerce",
        },
        {
          name: "WooCommerce",
          icon: "🛒",
          color: "#96588A",
          proficiency: 89,
          experience: "5+ years",
          description: "WordPress e-commerce plugin for online selling",
          projects: 120,
          website: "https://woocommerce.com",
          category: "ecommerce",
        },
        {
          name: "Magento",
          icon: "🏪",
          color: "#EE672F",
          proficiency: 78,
          experience: "3+ years",
          description: "Open-source e-commerce platform for large businesses",
          projects: 40,
          website: "https://magento.com",
          category: "ecommerce",
        },
        {
          name: "Stripe",
          icon: "💳",
          color: "#635BFF",
          proficiency: 94,
          experience: "4+ years",
          description: "Online payment processing for internet businesses",
          projects: 150,
          website: "https://stripe.com",
          category: "ecommerce",
        },
        {
          name: "PayPal",
          icon: "💰",
          color: "#00457C",
          proficiency: 88,
          experience: "5+ years",
          description: "Digital payment platform for online transactions",
          projects: 130,
          website: "https://paypal.com",
          category: "ecommerce",
        },
        {
          name: "BigCommerce",
          icon: "🏬",
          color: "#121118",
          proficiency: 75,
          experience: "2+ years",
          description: "SaaS e-commerce platform for growing businesses",
          projects: 30,
          website: "https://bigcommerce.com",
          category: "ecommerce",
        },
        {
          name: "Square",
          icon: "⬜",
          color: "#3E4348",
          proficiency: 80,
          experience: "3+ years",
          description: "Payment processing and point-of-sale solutions",
          projects: 60,
          website: "https://squareup.com",
          category: "ecommerce",
        },
        {
          name: "Klarna",
          icon: "💎",
          color: "#FFB3C7",
          proficiency: 72,
          experience: "2+ years",
          description: "Buy now, pay later payment solutions",
          projects: 25,
          website: "https://klarna.com",
          category: "ecommerce",
        },
      ],
    },
    {
      id: "wordpress",
      title: "WordPress Ecosystem",
      icon: Wordpress,
      description: "Powerful WordPress development and customization tools",
      gradient: "from-[#667eea]/20 to-[#764ba2]/20",
      count: 8,
      technologies: [
        {
          name: "WordPress",
          icon: "📝",
          color: "#21759B",
          proficiency: 95,
          experience: "6+ years",
          description: "World's most popular content management system",
          projects: 200,
          website: "https://wordpress.org",
          category: "wordpress",
        },
        {
          name: "Elementor",
          icon: "🏗️",
          color: "#92003B",
          proficiency: 90,
          experience: "4+ years",
          description: "Leading WordPress page builder plugin",
          projects: 150,
          website: "https://elementor.com",
          category: "wordpress",
        },
        {
          name: "WPBakery",
          icon: "🧱",
          color: "#00A0D2",
          proficiency: 85,
          experience: "4+ years",
          description: "Drag and drop page builder for WordPress",
          projects: 100,
          website: "https://wpbakery.com",
          category: "wordpress",
        },
        {
          name: "ACF Pro",
          icon: "🔧",
          color: "#00A0D2",
          proficiency: 92,
          experience: "5+ years",
          description: "Advanced Custom Fields for WordPress development",
          projects: 180,
          website: "https://advancedcustomfields.com",
          category: "wordpress",
        },
        {
          name: "Yoast SEO",
          icon: "📊",
          color: "#A4286A",
          proficiency: 88,
          experience: "5+ years",
          description: "WordPress SEO plugin for better search rankings",
          projects: 160,
          website: "https://yoast.com",
          category: "wordpress",
        },
        {
          name: "Wordfence",
          icon: "🛡️",
          color: "#00709E",
          proficiency: 83,
          experience: "4+ years",
          description: "WordPress security plugin for malware protection",
          projects: 140,
          website: "https://wordfence.com",
          category: "wordpress",
        },
        {
          name: "Gutenberg",
          icon: "📄",
          color: "#0073AA",
          proficiency: 87,
          experience: "3+ years",
          description: "WordPress block editor for content creation",
          projects: 120,
          website: "https://wordpress.org/gutenberg",
          category: "wordpress",
        },
        {
          name: "WP Rocket",
          icon: "🚀",
          color: "#F56640",
          proficiency: 85,
          experience: "3+ years",
          description: "WordPress caching plugin for performance optimization",
          projects: 100,
          website: "https://wp-rocket.me",
          category: "wordpress",
        },
      ],
    },
    {
      id: "video",
      title: "Video Production",
      icon: Video,
      description: "Professional video editing and motion graphics software",
      gradient: "from-[#f093fb]/20 to-[#f5576c]/20",
      count: 6,
      technologies: [
        {
          name: "Adobe Premiere Pro",
          icon: "🎬",
          color: "#9999FF",
          proficiency: 88,
          experience: "4+ years",
          description: "Industry-standard video editing software",
          projects: 80,
          website: "https://adobe.com/premiere",
          category: "video",
        },
        {
          name: "After Effects",
          icon: "✨",
          color: "#9999FF",
          proficiency: 85,
          experience: "4+ years",
          description: "Motion graphics and visual effects software",
          projects: 70,
          website: "https://adobe.com/aftereffects",
          category: "video",
        },
        {
          name: "Final Cut Pro",
          icon: "🎞️",
          color: "#000000",
          proficiency: 82,
          experience: "3+ years",
          description: "Professional video editing for Mac",
          projects: 60,
          website: "https://apple.com/final-cut-pro",
          category: "video",
        },
        {
          name: "DaVinci Resolve",
          icon: "🎨",
          color: "#233A51",
          proficiency: 78,
          experience: "2+ years",
          description: "Professional color grading and video editing",
          projects: 40,
          website: "https://blackmagicdesign.com/davinci",
          category: "video",
        },
        {
          name: "Cinema 4D",
          icon: "🎭",
          color: "#011A6A",
          proficiency: 75,
          experience: "2+ years",
          description: "3D modeling and animation software",
          projects: 30,
          website: "https://maxon.net/cinema-4d",
          category: "video",
        },
        {
          name: "Blender",
          icon: "🌀",
          color: "#F5792A",
          proficiency: 72,
          experience: "2+ years",
          description: "Open-source 3D creation suite",
          projects: 25,
          website: "https://blender.org",
          category: "video",
        },
      ],
    },
    {
      id: "design",
      title: "Creative Design",
      icon: Palette,
      description: "Creative design tools for stunning visual experiences",
      gradient: "from-[#a8edea]/20 to-[#fed6e3]/20",
      count: 7,
      technologies: [
        {
          name: "Figma",
          icon: "🎯",
          color: "#F24E1E",
          proficiency: 95,
          experience: "4+ years",
          description: "Collaborative interface design tool",
          projects: 200,
          website: "https://figma.com",
          category: "design",
        },
        {
          name: "Adobe Photoshop",
          icon: "🖼️",
          color: "#31A8FF",
          proficiency: 92,
          experience: "6+ years",
          description: "Industry-standard image editing software",
          projects: 250,
          website: "https://adobe.com/photoshop",
          category: "design",
        },
        {
          name: "Adobe Illustrator",
          icon: "🎨",
          color: "#FF9A00",
          proficiency: 89,
          experience: "5+ years",
          description: "Vector graphics and illustration software",
          projects: 180,
          website: "https://adobe.com/illustrator",
          category: "design",
        },
        {
          name: "Adobe XD",
          icon: "💎",
          color: "#FF61F6",
          proficiency: 85,
          experience: "3+ years",
          description: "UX/UI design and prototyping tool",
          projects: 120,
          website: "https://adobe.com/xd",
          category: "design",
        },
        {
          name: "Sketch",
          icon: "💠",
          color: "#F7B500",
          proficiency: 80,
          experience: "3+ years",
          description: "Digital design toolkit for Mac",
          projects: 90,
          website: "https://sketch.com",
          category: "design",
        },
        {
          name: "Canva",
          icon: "📐",
          color: "#00C4CC",
          proficiency: 88,
          experience: "3+ years",
          description: "Graphic design platform for everyone",
          projects: 150,
          website: "https://canva.com",
          category: "design",
        },
        {
          name: "InVision",
          icon: "👁️",
          color: "#FF3366",
          proficiency: 78,
          experience: "2+ years",
          description: "Digital product design platform",
          projects: 60,
          website: "https://invisionapp.com",
          category: "design",
        },
      ],
    },
    {
      id: "seo",
      title: "SEO & Analytics",
      icon: TrendingUp,
      description: "Advanced SEO tools and analytics for digital marketing success",
      gradient: "from-[#ffecd2]/20 to-[#fcb69f]/20",
      count: 8,
      technologies: [
        {
          name: "Google Analytics",
          icon: "📈",
          color: "#E37400",
          proficiency: 93,
          experience: "5+ years",
          description: "Web analytics service for tracking website traffic",
          projects: 180,
          website: "https://analytics.google.com",
          category: "seo",
        },
        {
          name: "Google Search Console",
          icon: "🔍",
          color: "#4285F4",
          proficiency: 91,
          experience: "5+ years",
          description: "Monitor and troubleshoot website presence in Google Search",
          projects: 170,
          website: "https://search.google.com/search-console",
          category: "seo",
        },
        {
          name: "Ahrefs",
          icon: "🔗",
          color: "#FF7A00",
          proficiency: 88,
          experience: "4+ years",
          description: "SEO toolset for backlink analysis and keyword research",
          projects: 100,
          website: "https://ahrefs.com",
          category: "seo",
        },
        {
          name: "SEMrush",
          icon: "📊",
          color: "#FF642D",
          proficiency: 85,
          experience: "4+ years",
          description: "All-in-one digital marketing toolkit",
          projects: 90,
          website: "https://semrush.com",
          category: "seo",
        },
        {
          name: "Moz Pro",
          icon: "🦎",
          color: "#004C91",
          proficiency: 82,
          experience: "3+ years",
          description: "SEO software suite for better search rankings",
          projects: 70,
          website: "https://moz.com",
          category: "seo",
        },
        {
          name: "Screaming Frog",
          icon: "🐸",
          color: "#8CC152",
          proficiency: 80,
          experience: "3+ years",
          description: "Website crawler for technical SEO audits",
          projects: 80,
          website: "https://screamingfrog.co.uk",
          category: "seo",
        },
        {
          name: "Hotjar",
          icon: "🔥",
          color: "#FD3A69",
          proficiency: 78,
          experience: "2+ years",
          description: "Behavior analytics and user feedback tool",
          projects: 60,
          website: "https://hotjar.com",
          category: "seo",
        },
        {
          name: "GTM",
          icon: "🏷️",
          color: "#4285F4",
          proficiency: 85,
          experience: "3+ years",
          description: "Google Tag Manager for tracking code management",
          projects: 120,
          website: "https://tagmanager.google.com",
          category: "seo",
        },
      ],
    },
  ]

  const filteredCategories = techCategories.filter((category) => {
    if (selectedCategory !== "all" && category.id !== selectedCategory) return false
    if (searchQuery) {
      return category.technologies.some(
        (tech) =>
          tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tech.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }
    return true
  })

  const totalTechnologies = techCategories.reduce((sum, cat) => sum + cat.technologies.length, 0)
  const averageProficiency = Math.round(
    techCategories.reduce(
      (sum, cat) => sum + cat.technologies.reduce((techSum, tech) => techSum + tech.proficiency, 0),
      0,
    ) / totalTechnologies,
  )

  const ProficiencyBar = ({ proficiency }: { proficiency: number }) => (
    <div className="w-full bg-[#020A15]/60 rounded-full h-2 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#00D1FF] to-[#0099CC] rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${proficiency}%` }}
      />
    </div>
  )

  const TechModal = ({ tech, onClose }: { tech: Technology; onClose: () => void }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-[#020A15] border-2 border-[#00D1FF] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="text-4xl">{tech.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
            <p className="text-[#00D1FF]">{tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-[#00D1FF]/10 rounded-xl">
            <div className="text-2xl font-bold text-[#00D1FF] mb-1">{tech.proficiency}%</div>
            <div className="text-sm text-[#D1D5DB]">Proficiency</div>
          </div>
          <div className="text-center p-4 bg-[#00D1FF]/10 rounded-xl">
            <div className="text-2xl font-bold text-[#00D1FF] mb-1">{tech.experience}</div>
            <div className="text-sm text-[#D1D5DB]">Experience</div>
          </div>
          <div className="text-center p-4 bg-[#00D1FF]/10 rounded-xl">
            <div className="text-2xl font-bold text-[#00D1FF] mb-1">{tech.projects}</div>
            <div className="text-sm text-[#D1D5DB]">Projects</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Proficiency Level</h4>
          <ProficiencyBar proficiency={tech.proficiency} />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
          <p className="text-[#D1D5DB] leading-relaxed">{tech.description}</p>
        </div>

        {tech.website && (
          <div className="flex justify-center">
            <a
              href={tech.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00D1FF] text-[#020A15] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
            >
              <ExternalLink size={18} />
              Visit Official Website
            </a>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Enhanced Particle Canvas */}
      <canvas ref={particleCanvasRef} className="absolute inset-0 pointer-events-none opacity-30" />

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

      {/* Enhanced Header Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative">
              Our Technology Stack
              <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
              Cutting-edge technologies powering innovation across web, AI, design, and beyond
            </p>
          </div>

          {/* Enhanced Tech Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">{totalTechnologies}+</div>
              <div className="text-sm md:text-base text-[#D1D5DB]">Technologies</div>
            </div>
            <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">{techCategories.length}</div>
              <div className="text-sm md:text-base text-[#D1D5DB]">Categories</div>
            </div>
            <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">{averageProficiency}%</div>
              <div className="text-sm md:text-base text-[#D1D5DB]">Avg Proficiency</div>
            </div>
            <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">500+</div>
              <div className="text-sm md:text-base text-[#D1D5DB]">Projects</div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ease-out delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D1D5DB]" />
                <input
                  type="text"
                  placeholder="Search technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 bg-[#00D1FF]/10 border-2 border-[#00D1FF]/30 text-[#00D1FF] px-6 py-3 rounded-xl hover:bg-[#00D1FF]/20 hover:border-[#00D1FF]/50 transition-all duration-300"
                >
                  <Filter size={18} />
                  Filter Categories
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${showFilters ? "rotate-180" : ""}`}
                  />
                </button>

                {showFilters && (
                  <div className="absolute top-full mt-2 right-0 bg-[#020A15] border-2 border-[#00D1FF]/30 rounded-xl p-4 min-w-48 z-20">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === "all"
                          ? "bg-[#00D1FF]/20 text-[#00D1FF]"
                          : "text-[#D1D5DB] hover:bg-[#00D1FF]/10"
                      }`}
                    >
                      All Categories
                    </button>
                    {techCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-[#00D1FF]/20 text-[#00D1FF]"
                            : "text-[#D1D5DB] hover:bg-[#00D1FF]/10"
                        }`}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Grid */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {filteredCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.id}
                  ref={(el) => (sectionRefs.current[category.id] = el)}
                  data-section={category.id}
                  className={`transition-all duration-1000 ease-out ${
                    visibleSections.has(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                    />

                    <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 group-hover:border-[#00D1FF]/50 group-hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500">
                      {/* Enhanced Category Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                            <IconComponent size={24} className="text-[#00D1FF]" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#00D1FF] transition-colors duration-300">
                              {category.title}
                            </h2>
                            <p className="text-sm text-[#D1D5DB] mt-1">{category.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#00D1FF]">{category.technologies.length}</div>
                          <div className="text-xs text-[#D1D5DB]">Tools</div>
                        </div>
                      </div>

                      {/* Enhanced Technologies Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {category.technologies.map((tech, techIndex) => (
                          <div
                            key={tech.name}
                            className={`transition-all duration-500 ease-out ${
                              visibleSections.has(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                            }`}
                            style={{ transitionDelay: `${categoryIndex * 150 + techIndex * 100}ms` }}
                          >
                            <div
                              className="group/tech relative bg-[#020A15]/60 border border-[#00D1FF]/10 rounded-xl p-4 hover:border-[#00D1FF]/30 hover:bg-[#00D1FF]/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] transition-all duration-300 cursor-pointer"
                              onClick={() => setSelectedTech(tech)}
                              onMouseEnter={() => setHoveredTech(tech.name)}
                              onMouseLeave={() => setHoveredTech(null)}
                            >
                              {/* Tech Icon and Info Button */}
                              <div className="flex items-center justify-between mb-3">
                                <div className="text-2xl group-hover/tech:scale-110 transition-transform duration-300">
                                  {tech.icon}
                                </div>
                                <Info
                                  size={14}
                                  className="text-[#D1D5DB]/50 group-hover/tech:text-[#00D1FF] transition-colors"
                                />
                              </div>

                              {/* Proficiency Bar */}
                              <div className="mb-3">
                                <ProficiencyBar proficiency={tech.proficiency} />
                                <div className="flex justify-between items-center mt-1">
                                  <span className="text-xs text-[#D1D5DB]">{tech.proficiency}%</span>
                                  <span className="text-xs text-[#D1D5DB]">{tech.experience}</span>
                                </div>
                              </div>

                              {/* Tech Name */}
                              <h3 className="text-sm font-semibold text-white text-center group-hover/tech:text-[#00D1FF] transition-colors duration-300 mb-2">
                                {tech.name}
                              </h3>

                              {/* Projects Count */}
                              <div className="text-center">
                                <div className="text-xs text-[#D1D5DB]">
                                  <Users size={12} className="inline mr-1" />
                                  {tech.projects} projects
                                </div>
                              </div>

                              {/* Hover Glow Effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Bottom CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={(el) => (sectionRefs.current.cta = el)}
            data-section="cta"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award size={24} className="text-[#00D1FF]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Build Something Extraordinary?</h3>
                <Zap size={24} className="text-[#00D1FF]" />
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
                Let's leverage these cutting-edge technologies to transform your vision into reality. Our expert team
                combines innovation with proven expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-lg font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Globe size={18} />
                    Start Your Project
                  </span>
                </button>
                <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-lg font-bold hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Database size={18} />
                    View Portfolio
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Detail Modal */}
      {selectedTech && <TechModal tech={selectedTech} onClose={() => setSelectedTech(null)} />}

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

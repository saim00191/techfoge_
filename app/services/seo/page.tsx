"use client"
import { Poppins } from 'next/font/google'
import { useState, useEffect, useRef } from "react"
import { Search, Zap, CheckCircle, ArrowRight, Rocket, Monitor, Target, Users, Award, Settings, TrendingUp, BarChart3 } from 'lucide-react'
import Image from 'next/image'
import SEO from '@/images/seo.png'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function SEOOptimization() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

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
              setVisibleSections((prev) => new Set([...prev, sectionId]))
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

  const services = [
    {
      icon: Search,
      title: "Technical SEO Optimization",
      description:
        "Optimize your website's technical foundation with Core Web Vitals, site speed, mobile-first indexing, and crawlability improvements for better search rankings.",
      color: "#00D1FF",
    },
    {
      icon: BarChart3,
      title: "Keyword Research & Strategy",
      description:
        "Comprehensive keyword research and content strategy to target high-value search terms and drive qualified organic traffic to your website.",
      color: "#00D1FF",
    },
    {
      icon: TrendingUp,
      title: "Content & Link Building",
      description:
        "Create high-quality content and build authoritative backlinks to improve domain authority and search engine rankings across all major search engines.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Technical SEO",
      icon: Settings,
      services: [
        "Core Web Vitals Optimization",
        "Site Speed & Performance",
        "Mobile-First Optimization",
        "Schema Markup Implementation",
        "XML Sitemap Generation",
      ],
    },
    {
      category: "Content Strategy",
      icon: BarChart3,
      services: [
        "Keyword Research & Analysis",
        "Content Gap Analysis",
        "SEO Content Creation",
        "Content Optimization",
        "Competitor Content Analysis",
      ],
    },
    {
      category: "Link Building & Authority",
      icon: TrendingUp,
      services: [
        "High-Quality Backlink Acquisition",
        "Digital PR & Outreach",
        "Local SEO & Citations",
        "Internal Link Optimization",
        "Brand Mention Monitoring",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive website audit to identify technical issues, content gaps, and optimization opportunities.",
      icon: Target,
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Creating data-driven SEO strategy with keyword research, competitor analysis, and content planning.",
      icon: BarChart3,
    },
    {
      step: "03",
      title: "Implementation & Optimization",
      description:
        "Executing technical fixes, content optimization, and link building campaigns for improved rankings.",
      icon: Settings,
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Continuous monitoring, performance tracking, and detailed reporting with actionable insights.",
      icon: Rocket,
    },
  ]

  const features = [
    "Comprehensive SEO audits and analysis",
    "Technical SEO optimization",
    "Keyword research and strategy",
    "Content optimization and creation",
    "Link building and digital PR",
    "Local SEO and Google My Business",
    "Performance monitoring and reporting",
    "24/7 SEO support and consultation",
  ]

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
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

      {/* Services Badge */}
      <div className="fixed top-8 right-8 z-50">
        <div className="relative">
          <div className="bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-full font-bold text-sm animate-pulse-badge">
            <span className="flex items-center gap-2">
              <Search size={16} />
              SEO Optimization
            </span>
          </div>
          <div className="absolute inset-0 bg-[#00D1FF]/30 rounded-full blur-lg animate-pulse" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white relative mb-4">
              SEO Optimization & Digital Marketing
              {/* Neon Glow Effects */}
              <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
              <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
            </h1>
          </div>

          {/* Hero Headline */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Dominate Search Rankings With Data-Driven SEO Strategies That Drive Organic Growth
            </h2>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">
              We specialize in comprehensive SEO optimization, technical audits, content strategy, and link building to
              boost your search rankings and drive qualified organic traffic.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group relative bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                <Rocket size={20} className="group-hover:animate-pulse" />
                Get Free SEO Audit
              </span>
              <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div
            className={`flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.services = el)}
            data-section="services"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                Comprehensive SEO solutions designed to improve your search rankings and drive organic growth.
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[#D1D5DB] leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.tech = el)}
            data-section="tech"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("tech") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our SEO Tech Stack</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                We use cutting-edge SEO tools and technologies to deliver exceptional search optimization results.
              </p>
            </div>

            {/* SEO Analysis Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">🔍 SEO Analysis Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Google Search Console", icon: "🔍", description: "Google's official SEO tool" },
                  { name: "SEMrush", icon: "📊", description: "All-in-one SEO platform" },
                  { name: "Ahrefs", icon: "🔗", description: "Backlink & keyword research" },
                  { name: "Moz Pro", icon: "🦎", description: "SEO software suite" },
                  { name: "Screaming Frog", icon: "🐸", description: "Website crawler" },
                  { name: "Sitebulb", icon: "💡", description: "Technical SEO auditing" },
                  { name: "DeepCrawl", icon: "🕷️", description: "Enterprise SEO platform" },
                  { name: "Botify", icon: "🤖", description: "Enterprise SEO platform" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics & Tracking */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">📊 Analytics & Tracking</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Google Analytics 4", icon: "📈", description: "Web analytics platform" },
                  { name: "Google Tag Manager", icon: "🏷️", description: "Tag management system" },
                  { name: "Adobe Analytics", icon: "🎨", description: "Enterprise analytics" },
                  { name: "Hotjar", icon: "🔥", description: "User behavior analytics" },
                  { name: "Mixpanel", icon: "📊", description: "Product analytics" },
                  { name: "Amplitude", icon: "📈", description: "Digital analytics" },
                  { name: "Segment", icon: "🔗", description: "Customer data platform" },
                  { name: "Matomo", icon: "📊", description: "Privacy-focused analytics" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword Research Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">🔑 Keyword Research Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Google Keyword Planner", icon: "🔍", description: "Google's keyword tool" },
                  { name: "Ubersuggest", icon: "💡", description: "Keyword research tool" },
                  { name: "KeywordTool.io", icon: "🔧", description: "Keyword suggestions" },
                  { name: "AnswerThePublic", icon: "❓", description: "Question-based keywords" },
                  { name: "KWFinder", icon: "🔍", description: "Long-tail keyword tool" },
                  { name: "Serpstat", icon: "🐍", description: "SEO & PPC platform" },
                  { name: "SpyFu", icon: "🕵️", description: "Competitor keyword research" },
                  { name: "WordStream", icon: "💬", description: "Keyword research tool" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${200 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical SEO Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">⚡ Technical SEO Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Google PageSpeed Insights", icon: "⚡", description: "Page speed analysis" },
                  { name: "GTmetrix", icon: "📊", description: "Website performance" },
                  { name: "WebPageTest", icon: "🧪", description: "Performance testing" },
                  { name: "Lighthouse", icon: "💡", description: "Web performance auditing" },
                  { name: "Core Web Vitals", icon: "⚡", description: "User experience metrics" },
                  { name: "Mobile-Friendly Test", icon: "📱", description: "Mobile optimization" },
                  { name: "Rich Results Test", icon: "🎯", description: "Structured data testing" },
                  { name: "Security Headers", icon: "🔒", description: "Security analysis" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Optimization */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">📝 Content Optimization</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Surfer SEO", icon: "🏄", description: "Content optimization" },
                  { name: "Clearscope", icon: "🎯", description: "Content optimization" },
                  { name: "MarketMuse", icon: "📝", description: "Content planning" },
                  { name: "Frase", icon: "📄", description: "Content research" },
                  { name: "ContentKing", icon: "👑", description: "Content monitoring" },
                  { name: "BuzzSumo", icon: "📢", description: "Content research" },
                  { name: "Grammarly", icon: "✍️", description: "Writing assistant" },
                  { name: "Hemingway Editor", icon: "📝", description: "Readability tool" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Link Building & Outreach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">🔗 Link Building & Outreach</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "HARO", icon: "📰", description: "Help a Reporter Out" },
                  { name: "Pitchbox", icon: "📧", description: "Outreach platform" },
                  { name: "BuzzStream", icon: "📢", description: "Link building CRM" },
                  { name: "NinjaOutreach", icon: "🥷", description: "Influencer outreach" },
                  { name: "Respona", icon: "📬", description: "Link building tool" },
                  { name: "LinkResearchTools", icon: "🔗", description: "Link analysis" },
                  { name: "Majestic", icon: "👑", description: "Link intelligence" },
                  { name: "Monitor Backlinks", icon: "👀", description: "Backlink monitoring" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${500 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.why = el)}
            data-section="why"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("why") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                We deliver exceptional SEO results through data-driven strategies, technical expertise, and proven
                methodologies.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Features List */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 transition-all duration-500 ease-out ${
                        visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle size={24} className="text-[#00D1FF]" />
                      </div>
                      <p className="text-[#D1D5DB] text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-4 mb-8">
                      <Users size={48} className="text-[#00D1FF]" />
                      <Award size={48} className="text-[#00D1FF]" />
                      <Target size={48} className="text-[#00D1FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Expert SEO Specialists</h3>
                    <p className="text-[#D1D5DB] leading-relaxed">
                      Our experienced SEO specialists combine technical expertise with strategic thinking to deliver
                      outstanding search optimization results that drive organic traffic, improve rankings, and grow
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.process = el)}
            data-section="process"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our SEO Process</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                A proven methodology that ensures successful SEO optimization from audit to ongoing growth.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-6 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00D1FF] rounded-full flex items-center justify-center text-[#020A15] font-bold text-lg">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="mb-6 mt-4">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-[#D1D5DB] leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.detailed = el)}
            data-section="detailed"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("detailed") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Comprehensive Solutions</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                From technical optimization to content strategy, we cover every aspect of modern SEO.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {detailedServices.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("detailed") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {category.category}
                        </h3>
                        <ul className="space-y-3">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-center gap-3">
                              <CheckCircle size={16} className="text-[#00D1FF] flex-shrink-0" />
                              <span className="text-[#D1D5DB] text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Optimization Image Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.image = el)}
            data-section="image"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("image") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("image") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Crafting SEO Strategies That Dominate Search Results
                </h2>
                <p className="text-lg text-[#D1D5DB] mb-8 leading-relaxed">
                  Our team combines technical SEO expertise with content strategy and data analysis to build
                  comprehensive optimization campaigns that not only improve rankings but also drive qualified organic
                  traffic and business growth.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Zap size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Technical SEO Excellence</h4>
                      <p className="text-[#D1D5DB] text-sm">Core Web Vitals and performance optimization</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <BarChart3 size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Data-Driven Strategy</h4>
                      <p className="text-[#D1D5DB] text-sm">Keyword research and competitor analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <TrendingUp size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Sustainable Growth</h4>
                      <p className="text-[#D1D5DB] text-sm">Long-term SEO strategies that last</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("image") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/20 via-transparent to-[#00D1FF]/20 rounded-2xl blur-xl"></div>
                  <Image
                    src={SEO}
                    alt="SEO Optimization - Modern SEO workspace with multiple screens showing analytics dashboards, keyword research tools, and search ranking reports"
                    className="relative rounded-2xl border border-[#00D1FF]/20 w-full h-auto shadow-[0_0_50px_rgba(0,209,255,0.1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020A15]/50 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={(el) => (sectionRefs.current.finalCta = el)}
            data-section="finalCta"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("finalCta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket size={32} className="text-[#00D1FF]" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Dominate Search Rankings?</h3>
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
                Transform your online visibility with data-driven SEO strategies. Let's boost your search rankings and
                drive qualified organic traffic to your website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Start SEO Campaign
                  </span>
                </button>
                <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Monitor size={20} />
                    View Case Studies
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        @keyframes pulse-badge {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }

        .animate-neon-pulse-slow {
          animation: neon-pulse-slow 4s ease-in-out infinite;
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

        .animate-pulse-badge {
          animation: pulse-badge 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { CheckCircle, ArrowRight, Rocket, Monitor, type LucideIcon } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

interface TechCategory {
  name: string
  emoji: string
  technologies: Array<{
    name: string
    icon: string
    description: string
  }>
}

interface ServicesPageProps {
  // SEO & Meta
  title: string
  subtitle: string
  description: string
  badgeText: string
  badgeIcon: LucideIcon

  // Content
  services: Service[]
  techStack: TechCategory[]
  features: string[]

  // CTA
  ctaTitle: string
  ctaDescription: string
  primaryButtonText: string
  secondaryButtonText: string

  // Image
  imageAlt: string
  imageFeatures: Array<{
    icon: LucideIcon
    title: string
    description: string
  }>
}

export default function ServicesPageTemplate({
  title,
  subtitle,
  description,
  badgeText,
  badgeIcon: BadgeIcon,
  services,
  techStack,
  features,
  ctaTitle,
  ctaDescription,
  primaryButtonText,
  secondaryButtonText,
  imageAlt,
  imageFeatures,
}: ServicesPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Background Effects */}
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
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#00D1FF]/15 rounded-full blur-2xl animate-pulse-glow-delayed" />

      {/* Badge */}
      <div className="fixed top-8 right-8 z-50">
        <div className="relative">
          <div className="bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-full font-bold text-sm animate-pulse-badge">
            <span className="flex items-center gap-2">
              <BadgeIcon size={16} />
              {badgeText}
            </span>
          </div>
          <div className="absolute inset-0 bg-[#00D1FF]/30 rounded-full blur-lg animate-pulse" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`mb-6 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white relative mb-4">
              {title}
              <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
            </h1>
          </div>

          <div
            className={`mb-6 transition-all duration-1000 ease-out delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-5xl mx-auto">
              {subtitle}
            </h2>
          </div>

          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">{description}</p>
          </div>

          <div
            className={`mb-12 transition-all duration-1000 ease-out delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="group relative bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                <Rocket size={20} className="group-hover:animate-pulse" />
                Get a Free Quote
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.services = el)}
            data-section="services"
            className={`transition-all duration-1000 ease-out ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>
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
            className={`transition-all duration-1000 ease-out ${visibleSections.has("tech") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Tech Stack</h2>
            </div>

            {techStack.map((category, categoryIndex) => (
              <div key={category.name} className="mb-12">
                <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">
                  {category.emoji} {category.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {category.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-out ${visibleSections.has("tech") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-75"}`}
                      style={{ transitionDelay: `${categoryIndex * 100 + index * 50}ms` }}
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.why = el)}
            data-section="why"
            className={`transition-all duration-1000 ease-out ${visibleSections.has("why") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all duration-700 ease-out ${visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 transition-all duration-500 ease-out ${visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle size={24} className="text-[#00D1FF] flex-shrink-0" />
                      <p className="text-[#D1D5DB] text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`transition-all duration-700 ease-out ${visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              >
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt={imageAlt}
                    className="relative rounded-2xl border border-[#00D1FF]/20 w-full h-auto shadow-[0_0_50px_rgba(0,209,255,0.1)]"
                  />
                </div>
                <div className="mt-8 space-y-4">
                  {imageFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                          <IconComponent size={20} className="text-[#00D1FF]" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{feature.title}</h4>
                          <p className="text-[#D1D5DB] text-sm">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
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
            className={`transition-all duration-1000 ease-out ${visibleSections.has("finalCta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket size={32} className="text-[#00D1FF]" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">{ctaTitle}</h3>
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {primaryButtonText}
                  </span>
                </button>
                <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Monitor size={20} />
                    {secondaryButtonText}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes neon-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
        @keyframes pulse-glow-delayed { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.15); } }
        @keyframes pulse-badge { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-neon-pulse { animation: neon-pulse 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-pulse-glow-delayed { animation: pulse-glow-delayed 5s ease-in-out infinite 1s; }
        .animate-pulse-badge { animation: pulse-badge 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

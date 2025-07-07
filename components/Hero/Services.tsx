"use client"

import Link from "next/link"
import type React from "react"
import { useCallback, useEffect, useRef, useState } from "react"

// Service icons as inline SVG components for better performance
const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
)

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12,2 C14.5,6 14.5,18 12,22 C9.5,18 9.5,6 12,2 Z" />
  </svg>
)

const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const WordpressIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M7,7 L17,7" />
    <path d="M7,12 L17,12" />
    <path d="M7,17 L17,17" />
  </svg>
)

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="M21,21 L16.65,16.65" />
  </svg>
)

const VideoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="23,7 16,12 23,17 23,7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
)

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12,2 C13.5,2 22,8.5 22,15.5 C22,18.5 19.5,21 16.5,21 C15.5,21 14.5,20.5 14,19.5 C13.5,18.5 13.5,17.5 14,16.5 C14.5,15.5 15,14.5 15,13.5 C15,12.5 14.5,12 13.5,12 L12,12 C6.5,12 2,8.5 2,5 C2,3.5 3.5,2 5,2 L12,2 Z" />
  </svg>
)

const ShoppingCartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1,1 L5,1 L7,13 L19,13" />
    <path d="M7,13 L5.68,4.68 C5.47,3.68 4.62,3 3.58,3 L1,3" />
  </svg>
)

const BotIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12,7 L12,11" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
)

const WrenchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14.7,6.3 C16.1,7.7 16.1,10 14.7,11.4 L11.4,14.7 C10,16.1 7.7,16.1 6.3,14.7 C4.9,13.3 4.9,11 6.3,9.6 L9.6,6.3 C11,4.9 13.3,4.9 14.7,6.3 Z" />
    <path d="M15.5,6.5 L20.5,1.5" />
    <path d="M7,17 L9,19" />
  </svg>
)

const services = [
  {
    icon: CodeIcon,
    name: "Custom Software Development",
    id: "custom-software",
    description: "Tailored software solutions built to your exact specifications",
    color: "#FF6B6B",
  },
  {
    icon: GlobeIcon,
    name: "Web Development",
    id: "web-dev",
    description: "Modern, responsive websites that drive results",
    color: "#4ECDC4",
  },
  {
    icon: SmartphoneIcon,
    name: "Mobile App Development",
    id: "mobile-dev",
    description: "Native and cross-platform mobile applications",
    color: "#45B7D1",
  },
  {
    icon: WordpressIcon,
    name: "WordPress Development",
    id: "wordpress",
    description: "Custom WordPress themes and plugin development",
    color: "#96CEB4",
  },
  {
    icon: SearchIcon,
    name: "SEO",
    id: "seo",
    description: "Search engine optimization to boost your visibility",
    color: "#FFEAA7",
  },
  {
    icon: VideoIcon,
    name: "Video Editing",
    id: "video-editing",
    description: "Professional video editing and post-production",
    color: "#DDA0DD",
  },
  {
    icon: PaletteIcon,
    name: "Graphic Designing",
    id: "graphic-design",
    description: "Creative visual designs that capture attention",
    color: "#98D8C8",
  },
  {
    icon: ShoppingCartIcon,
    name: "E-Commerce Development",
    id: "ecommerce",
    description: "Complete e-commerce solutions for online success",
    color: "#F7DC6F",
  },
  {
    icon: BotIcon,
    name: "AI Solutions",
    id: "ai-solutions",
    description: "Cutting-edge AI integration and automation",
    color: "#BB8FCE",
  },
  {
    icon: WrenchIcon,
    name: "Maintenance & Technical Support",
    id: "maintenance",
    description: "Ongoing support and maintenance services",
    color: "#85C1E9",
  },
]

// Triple the services for seamless infinite loop
const extendedServices = [...services, ...services, ...services]

export default function ServicesCarousel() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [currentTransform, setCurrentTransform] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>(Date.now())
  const pausedAtRef = useRef<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Enhanced smooth animation with pause/resume functionality
  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      if (!isPaused) {
        const now = Date.now()
        const elapsed = now - startTimeRef.current
        // Calculate the transform value (moving left)
        // Complete cycle in 30 seconds, moving through 33.333% (one third of the tripled content)
        const progress = (elapsed / 30000) % 1
        const transform = -(progress * 33.333)
        setCurrentTransform(transform)

        if (carouselRef.current) {
          carouselRef.current.style.transform = `translate3d(${transform}%, 0, 0)`
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, isPaused])

  const handleServiceClick = useCallback(
    (service: (typeof services)[0]) => {
      setSelectedService(selectedService === service.id ? null : service.id)
      // Add haptic feedback for mobile devices
      if ("vibrate" in navigator) {
        navigator.vibrate(50)
      }
    },
    [selectedService],
  )

  const handleKeyDown = (event: React.KeyboardEvent, service: (typeof services)[0]) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleServiceClick(service)
    }
  }

  const handleMouseEnter = useCallback(
    (serviceId: string) => {
      if (!isPaused) {
        // Store the current position when pausing
        pausedAtRef.current = Date.now()
      }
      setIsPaused(true)
      setHoveredService(serviceId)
    },
    [isPaused],
  )

  const handleMouseLeave = useCallback(() => {
    if (isPaused) {
      // Calculate how long we were paused and adjust the start time
      const pauseDuration = Date.now() - pausedAtRef.current
      startTimeRef.current += pauseDuration
    }
    setIsPaused(false)
    setHoveredService(null)
  }, [isPaused])

  return (
    <div className="w-full " style={{ backgroundColor: "#020A15" }}>
      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px #00D1FF40;
          }
          50% {
            box-shadow: 0 0 40px #00D1FF80, 0 0 60px #00D1FF40;
          }
        }
        @keyframes nudge {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-nudge {
          animation: nudge 0.6s ease-in-out infinite;
        }
        .will-change-transform {
          will-change: transform;
        }
        /* Interactive card effects */
        .service-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .service-card:hover {
          transform: scale(1.05) translateY(-4px);
        }
        .service-card.selected {
          transform: scale(1.08) translateY(-8px);
          box-shadow: 0 15px 30px #00D1FF40, 0 0 0 2px #00D1FF;
        }
        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020a15;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00d1ff, #0099cc);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00d1ff, #00b8e6);
          box-shadow: 0 0 12px #00d1ff60;
        }
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        /* Enhanced touch interactions */
        @media (hover: none) and (pointer: coarse) {
          .service-card:hover {
            transform: none;
          }
          .service-card:active {
            transform: scale(1.05) translateY(-4px);
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full py-20 overflow-hidden"
        style={{ backgroundColor: "#020A15" }}
        aria-labelledby="services-heading"
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D1FF]/5 rounded-full blur-2xl animate-float" />

        <div className="relative w-full">
          {/* Enhanced Animated Header */}
          <div
            className={`text-center mb-16 px-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              id="services-heading"
              className="text-5xl md:text-6xl font-bold text-white mb-4 animate-float"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Services We Offer
            </h1>
            <p className="text-xl md:text-2xl mb-6" style={{ color: "#00D1FF", fontFamily: "Poppins, sans-serif" }}>
              Empowering businesses through digital excellence
            </p>
            {/* Enhanced animated underline */}
            <div className="relative w-32 h-1 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-transparent animate-wave" />
            </div>
          </div>

          {/* Enhanced Carousel Container - Full Width */}
          <div className="relative w-full overflow-hidden">
            {/* Enhanced Carousel Track */}
            <div
              ref={carouselRef}
              className={`flex gap-6 md:gap-8 transition-all duration-1000 ease-out will-change-transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              role="region"
              aria-label="Interactive services carousel"
              style={{
                transform: `translate3d(${currentTransform}%, 0, 0)`,
                width: "fit-content",
              }}
            >
              {extendedServices.map((service, index) => {
                const IconComponent = service.icon
                const delay = (index % services.length) * 100
                const isSelected = selectedService === service.id
                const isHovered = hoveredService === service.id

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className={`flex-shrink-0 group cursor-pointer transition-all duration-1000 ease-out will-change-transform ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } ${isHovered ? "animate-nudge" : ""}`}
                    style={{
                      transitionDelay: `${delay}ms`,
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Learn more about ${service.name}`}
                    aria-pressed={isSelected}
                    onKeyDown={(e) => handleKeyDown(e, service)}
                    onClick={() => handleServiceClick(service)}
                    onMouseEnter={() => handleMouseEnter(service.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Enhanced Service Card */}
                    <div
                      className={`service-card relative w-48 md:w-56 h-64 md:h-72 rounded-2xl bg-gradient-to-br from-[#00D1FF]/10 to-[#00D1FF]/5 border border-[#00D1FF]/20 backdrop-blur-sm ${
                        isSelected ? "selected animate-glow" : ""
                      }`}
                    >
                      {/* Enhanced glow effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/20 to-transparent transition-opacity duration-300 ${
                          isHovered || isSelected ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      {/* Animated border */}
                      {isSelected && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#00D1FF] animate-pulse" />
                      )}
                      {/* Card Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                        {/* Enhanced Icon Container */}
                        <div
                          className={`mb-6 p-4 rounded-full bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/10 border border-[#00D1FF]/30 transition-all duration-300 ${
                            isHovered || isSelected ? "border-[#00D1FF]/80 scale-110" : ""
                          }`}
                        >
                          <IconComponent
                            className={`w-12 h-12 md:w-14 md:h-14 transition-all duration-300 ${
                              isHovered || isSelected ? "text-white scale-110" : "text-[#00D1FF]"
                            }`}
                          />
                        </div>
                        {/* Service Name */}
                        <h3
                          className={`text-lg md:text-xl font-bold leading-tight transition-all duration-300 ${
                            isHovered || isSelected ? "text-[#00D1FF] scale-105" : "text-white"
                          }`}
                          style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                          {service.name}
                        </h3>
                        {/* Enhanced accent line */}
                        <div
                          className={`mt-4 h-0.5 bg-gradient-to-r from-transparent to-transparent transition-all duration-300 ${
                            isHovered || isSelected ? "w-16 via-[#00D1FF] animate-pulse" : "w-12 via-[#00D1FF]/50"
                          }`}
                        />
                        {/* Service description (shows on selection) */}
                        {isSelected && (
                          <p
                            className="mt-3 text-sm text-[#D1D5DB] opacity-0 animate-pulse"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              animation: "fadeIn 0.5s ease-in-out 0.2s forwards",
                            }}
                          >
                            {service.description}
                          </p>
                        )}
                      </div>
                      {/* Enhanced corner accent */}
                      <div
                        className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                          isHovered || isSelected
                            ? "bg-[#00D1FF] shadow-[0_0_12px_#00D1FF] scale-150"
                            : "bg-[#00D1FF]/60"
                        }`}
                      />
                      {/* Interactive pulse effect */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/50 animate-ping" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Enhanced Bottom CTA */}
          <div
            className={`text-center mt-16 px-4 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-[#D1D5DB] text-lg mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              Ready to transform your business with cutting-edge technology?
            </p>
            <Link href={"/contact"}>
            <button
              className="px-8 py-3 bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/80 text-[#020A15] font-bold outline-none rounded-full hover:shadow-[0_0_30px_#00D1FF80] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15] animate-float"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {
                if ("vibrate" in navigator) {
                  navigator.vibrate([100, 50, 100])
                }
              }}
            >
              Get Started Today
            </button>
            </Link>
          </div>

        
        </div>
      </section>

      {/* Add fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}




"use client"

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
    <div className="w-full" style={{ backgroundColor: "#020A15" }}>
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

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .will-change-transform {
          will-change: transform;
        }

        /* Interactive card effects */
        .service-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .service-card:hover {
          transform: scale(1.08) translateY(-8px);
        }

        .service-card.selected {
          transform: scale(1.1) translateY(-12px);
          box-shadow: 0 20px 40px #00D1FF60, 0 0 0 2px #00D1FF;
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
        className="relative w-full py-20 px-4 overflow-hidden"
        style={{ backgroundColor: "#020A15" }}
        aria-labelledby="services-heading"
      >
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D1FF]/5 rounded-full blur-2xl animate-float" />

        <div className="relative ">
          {/* Enhanced Animated Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out ${
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

          {/* Enhanced Carousel Container */}
          <div className="relative">
            {/* Enhanced gradient overlays */}
            <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />

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
                    }`}
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
                      } ${isHovered ? "animate-float" : ""}`}
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
            className={`text-center mt-16 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <p className="text-[#D1D5DB] text-lg mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              Ready to transform your business with cutting-edge technology?
            </p>
            <button
              className="px-8 py-3 bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/80 text-[#020A15] font-bold rounded-full hover:shadow-[0_0_30px_#00D1FF80] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15] animate-float"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {
                console.log("Get Started clicked")
                if ("vibrate" in navigator) {
                  navigator.vibrate([100, 50, 100])
                }
              }}
            >
              Get Started Today
            </button>
          </div>

          {/* Service counter and status */}
          <div className="text-center mt-8">
            <p className="text-[#00D1FF]/60 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
              {selectedService
                ? `Selected: ${services.find((s) => s.id === selectedService)?.name}`
                : `${services.length} Services Available`}
            </p>
            {isPaused && (
              <p className="text-[#00D1FF]/40 text-xs mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                Carousel paused - hover away to resume
              </p>
            )}
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







// "use client"

// import type React from "react"
// import { useCallback, useEffect, useRef, useState } from "react"

// // Service icons as inline SVG components
// const CodeIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <polyline points="16,18 22,12 16,6" />
//     <polyline points="8,6 2,12 8,18" />
//   </svg>
// )

// const GlobeIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="12" cy="12" r="10" />
//     <line x1="2" y1="12" x2="22" y2="12" />
//     <path d="M12,2 C14.5,6 14.5,18 12,22 C9.5,18 9.5,6 12,2 Z" />
//   </svg>
// )

// const SmartphoneIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
//     <line x1="12" y1="18" x2="12.01" y2="18" />
//   </svg>
// )

// const WordpressIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//     <path d="M7,7 L17,7" />
//     <path d="M7,12 L17,12" />
//     <path d="M7,17 L17,17" />
//   </svg>
// )

// const SearchIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="11" cy="11" r="8" />
//     <path d="M21,21 L16.65,16.65" />
//   </svg>
// )

// const VideoIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <polygon points="23,7 16,12 23,17 23,7" />
//     <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
//   </svg>
// )

// const PaletteIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="13.5" cy="6.5" r=".5" />
//     <circle cx="17.5" cy="10.5" r=".5" />
//     <circle cx="8.5" cy="7.5" r=".5" />
//     <circle cx="6.5" cy="12.5" r=".5" />
//     <path d="M12,2 C13.5,2 22,8.5 22,15.5 C22,18.5 19.5,21 16.5,21 C15.5,21 14.5,20.5 14,19.5 C13.5,18.5 13.5,17.5 14,16.5 C14.5,15.5 15,14.5 15,13.5 C15,12.5 14.5,12 13.5,12 L12,12 C6.5,12 2,8.5 2,5 C2,3.5 3.5,2 5,2 L12,2 Z" />
//   </svg>
// )

// const ShoppingCartIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="9" cy="21" r="1" />
//     <circle cx="20" cy="21" r="1" />
//     <path d="M1,1 L5,1 L7,13 L19,13" />
//     <path d="M7,13 L5.68,4.68 C5.47,3.68 4.62,3 3.58,3 L1,3" />
//   </svg>
// )

// const BotIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <rect x="3" y="11" width="18" height="10" rx="2" ry="2" />
//     <circle cx="12" cy="5" r="2" />
//     <path d="M12,7 L12,11" />
//     <line x1="8" y1="16" x2="8" y2="16" />
//     <line x1="16" y1="16" x2="16" y2="16" />
//   </svg>
// )

// const WrenchIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path d="M14.7,6.3 C16.1,7.7 16.1,10 14.7,11.4 L11.4,14.7 C10,16.1 7.7,16.1 6.3,14.7 C4.9,13.3 4.9,11 6.3,9.6 L9.6,6.3 C11,4.9 13.3,4.9 14.7,6.3 Z" />
//     <path d="M15.5,6.5 L20.5,1.5" />
//     <path d="M7,17 L9,19" />
//   </svg>
// )

// const services = [
//   {
//     icon: CodeIcon,
//     name: "Custom Software Development",
//     id: "custom-software",
//     description: "Tailored software solutions built to your exact specifications",
//     code: "DEV_001",
//   },
//   {
//     icon: GlobeIcon,
//     name: "Web Development",
//     id: "web-dev",
//     description: "Modern, responsive websites that drive results",
//     code: "WEB_002",
//   },
//   {
//     icon: SmartphoneIcon,
//     name: "Mobile App Development",
//     id: "mobile-dev",
//     description: "Native and cross-platform mobile applications",
//     code: "MOB_003",
//   },
//   {
//     icon: WordpressIcon,
//     name: "WordPress Development",
//     id: "wordpress",
//     description: "Custom WordPress themes and plugin development",
//     code: "WP_004",
//   },
//   {
//     icon: SearchIcon,
//     name: "SEO Optimization",
//     id: "seo",
//     description: "Search engine optimization to boost your visibility",
//     code: "SEO_005",
//   },
//   {
//     icon: VideoIcon,
//     name: "Video Editing",
//     id: "video-editing",
//     description: "Professional video editing and post-production",
//     code: "VID_006",
//   },
//   {
//     icon: PaletteIcon,
//     name: "Graphic Design",
//     id: "graphic-design",
//     description: "Creative visual designs that capture attention",
//     code: "GFX_007",
//   },
//   {
//     icon: ShoppingCartIcon,
//     name: "E-Commerce Solutions",
//     id: "ecommerce",
//     description: "Complete e-commerce solutions for online success",
//     code: "ECM_008",
//   },
//   {
//     icon: BotIcon,
//     name: "AI Integration",
//     id: "ai-solutions",
//     description: "Cutting-edge AI integration and automation",
//     code: "AI_009",
//   },
//   {
//     icon: WrenchIcon,
//     name: "Technical Support",
//     id: "maintenance",
//     description: "Ongoing support and maintenance services",
//     code: "SUP_010",
//   },
// ]

// // Triple the services for seamless infinite loop
// const extendedServices = [...services, ...services, ...services]

// export default function ServicesCarousel() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [isPaused, setIsPaused] = useState(false)
//   const [selectedService, setSelectedService] = useState<string | null>(null)
//   const [hoveredService, setHoveredService] = useState<string | null>(null)
//   const [currentTransform, setCurrentTransform] = useState(0)

//   const sectionRef = useRef<HTMLElement>(null)
//   const carouselRef = useRef<HTMLDivElement>(null)
//   const animationRef = useRef<number>()
//   const startTimeRef = useRef<number>(Date.now())
//   const pausedAtRef = useRef<number>(0)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   // Smooth animation with pause/resume functionality
//   useEffect(() => {
//     if (!isVisible) return

//     const animate = () => {
//       if (!isPaused) {
//         const now = Date.now()
//         const elapsed = now - startTimeRef.current

//         // Complete cycle in 30 seconds
//         const progress = (elapsed / 30000) % 1
//         const transform = -(progress * 33.333)

//         setCurrentTransform(transform)

//         if (carouselRef.current) {
//           carouselRef.current.style.transform = `translate3d(${transform}%, 0, 0)`
//         }
//       }

//       animationRef.current = requestAnimationFrame(animate)
//     }

//     animationRef.current = requestAnimationFrame(animate)

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current)
//       }
//     }
//   }, [isVisible, isPaused])

//   const handleServiceClick = useCallback(
//     (service: (typeof services)[0]) => {
//       setSelectedService(selectedService === service.id ? null : service.id)
//       if ("vibrate" in navigator) {
//         navigator.vibrate(50)
//       }
//     },
//     [selectedService],
//   )

//   const handleKeyDown = (event: React.KeyboardEvent, service: (typeof services)[0]) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault()
//       handleServiceClick(service)
//     }
//   }

//   const handleMouseEnter = useCallback(
//     (serviceId: string) => {
//       if (!isPaused) {
//         pausedAtRef.current = Date.now()
//       }
//       setIsPaused(true)
//       setHoveredService(serviceId)
//     },
//     [isPaused],
//   )

//   const handleMouseLeave = useCallback(() => {
//     if (isPaused) {
//       const pauseDuration = Date.now() - pausedAtRef.current
//       startTimeRef.current += pauseDuration
//     }
//     setIsPaused(false)
//     setHoveredService(null)
//   }, [isPaused])

//   return (
//     <div className="w-full min-h-screen" style={{ backgroundColor: "#020A15" }}>
//       {/* Custom Cyberpunk Styles */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&family=Poppins:wght@400;600;700;800&display=swap');

//         @keyframes hologram-flicker {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.8; }
//           75% { opacity: 0.9; }
//         }

//         @keyframes neon-pulse {
//           0%, 100% { 
//             filter: drop-shadow(0 0 5px #00D1FF) drop-shadow(0 0 10px #00D1FF) drop-shadow(0 0 15px #00D1FF);
//           }
//           50% { 
//             filter: drop-shadow(0 0 10px #00D1FF) drop-shadow(0 0 20px #00D1FF) drop-shadow(0 0 30px #00D1FF);
//           }
//         }

//         @keyframes cyber-scan {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         @keyframes holographic-border {
//           0% { border-color: #00D1FF; }
//           25% { border-color: #00A8CC; }
//           50% { border-color: #0080A0; }
//           75% { border-color: #00A8CC; }
//           100% { border-color: #00D1FF; }
//         }

//         @keyframes data-stream {
//           0% { background-position: 0% 0%; }
//           100% { background-position: 100% 100%; }
//         }

//         @keyframes float-cyber {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-15px) rotate(1deg); }
//           66% { transform: translateY(-5px) rotate(-1deg); }
//         }

//         .hologram-flicker {
//           animation: hologram-flicker 3s ease-in-out infinite;
//         }

//         .neon-pulse {
//           animation: neon-pulse 2s ease-in-out infinite;
//         }

//         .cyber-scan {
//           position: relative;
//           overflow: hidden;
//         }

//         .cyber-scan::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(90deg, transparent, #00D1FF, transparent);
//           animation: cyber-scan 3s ease-in-out infinite;
//         }

//         .holographic-border {
//           animation: holographic-border 4s ease-in-out infinite;
//         }

//         .data-stream {
//           background: linear-gradient(45deg, transparent 30%, #00D1FF20 50%, transparent 70%);
//           background-size: 200% 200%;
//           animation: data-stream 3s linear infinite;
//         }

//         .float-cyber {
//           animation: float-cyber 6s ease-in-out infinite;
//         }

//         .service-card {
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-style: preserve-3d;
//           position: relative;
//         }

//         .service-card:hover {
//           transform: translateY(-10px) scale(1.02);
//         }

//         .service-card.selected {
//           transform: translateY(-15px) scale(1.05);
//         }

//         .service-card::before {
//           content: '';
//           position: absolute;
//           inset: -2px;
//           background: linear-gradient(45deg, #00D1FF, transparent, #00D1FF);
//           border-radius: inherit;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           z-index: -1;
//         }

//         .service-card:hover::before,
//         .service-card.selected::before {
//           opacity: 1;
//         }

//         .glitch-text {
//           position: relative;
//         }

//         .glitch-text::before,
//         .glitch-text::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .glitch-text:hover::before {
//           opacity: 0.1;
//           color: #00D1FF;
//           transform: translate(-2px, -2px);
//           animation: hologram-flicker 0.5s ease-in-out;
//         }

//         .glitch-text:hover::after {
//           opacity: 0.1;
//           color: #FF0080;
//           transform: translate(2px, 2px);
//           animation: hologram-flicker 0.7s ease-in-out;
//         }

//         /* Reduce motion for accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           * {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="relative w-full py-24 px-4 overflow-hidden"
//         aria-labelledby="services-heading"
//       >
//         {/* Cyberpunk Background Elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Grid Pattern */}
//           <div
//             className="absolute inset-0 opacity-10"
//             style={{
//               backgroundImage: `
//                 linear-gradient(#00D1FF 1px, transparent 1px),
//                 linear-gradient(90deg, #00D1FF 1px, transparent 1px)
//               `,
//               backgroundSize: "50px 50px",
//             }}
//           />

//           {/* Floating Holographic Elements */}
//           <div className="absolute top-20 left-10 w-64 h-64 border border-[#00D1FF] rounded-full opacity-20 float-cyber" />
//           <div
//             className="absolute bottom-20 right-10 w-48 h-48 border border-[#00D1FF] opacity-15 float-cyber"
//             style={{ animationDelay: "2s", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
//           />
//           <div
//             className="absolute top-1/2 left-1/4 w-32 h-32 border border-[#00D1FF] opacity-10 float-cyber"
//             style={{ animationDelay: "4s", transform: "rotate(45deg)" }}
//           />

//           {/* Scanning Lines */}
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-50 cyber-scan" />
//           <div
//             className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-30 cyber-scan"
//             style={{ animationDelay: "1.5s" }}
//           />
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           {/* Cyberpunk Header */}
//           <div
//             className={`text-center mb-20 transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//           >
//             {/* Status Badge */}
//             <div className="inline-block mb-8">
//               <div className="px-6 py-2 border border-[#00D1FF] bg-[#00D1FF]/10 backdrop-blur-sm holographic-border">
//                 <span
//                   className="text-[#00D1FF] text-sm font-bold tracking-wider"
//                   style={{ fontFamily: "Rajdhani, sans-serif" }}
//                 >
//                   [ SERVICES_MATRIX.EXE ]
//                 </span>
//               </div>
//             </div>

//             {/* Main Title */}
//             <h1
//               id="services-heading"
//               className="glitch-text text-7xl md:text-8xl font-black text-white mb-6 neon-pulse"
//               style={{ fontFamily: "Orbitron, sans-serif" }}
//               data-text="DIGITAL ARSENAL"
//             >
//               DIGITAL ARSENAL
//             </h1>

//             {/* Subtitle */}
//             <p
//               className="text-2xl md:text-3xl text-[#00D1FF] font-bold mb-8 hologram-flicker"
//               style={{ fontFamily: "Rajdhani, sans-serif" }}
//             >
//               {">"} CYBERNETIC SOLUTIONS FOR THE FUTURE {"<"}
//             </p>

//             {/* Animated Divider */}
//             <div className="flex justify-center items-center gap-4">
//               <div className="w-16 h-0.5 bg-[#00D1FF] neon-pulse" />
//               <div className="w-3 h-3 border border-[#00D1FF] rotate-45 neon-pulse" />
//               <div className="w-16 h-0.5 bg-[#00D1FF] neon-pulse" />
//             </div>
//           </div>

//           {/* Carousel Container */}
//           <div className="relative">
//             {/* Holographic Overlays */}
//             <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />
//             <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020A15] via-[#020A15]/90 to-transparent z-10 pointer-events-none" />

//             {/* Carousel Track */}
//             <div
//               ref={carouselRef}
//               className={`flex gap-8 transition-all duration-1000 ease-out ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
//               }`}
//               role="region"
//               aria-label="Interactive services carousel"
//               style={{
//                 transform: `translate3d(${currentTransform}%, 0, 0)`,
//               }}
//             >
//               {extendedServices.map((service, index) => {
//                 const IconComponent = service.icon
//                 const delay = (index % services.length) * 150
//                 const isSelected = selectedService === service.id
//                 const isHovered = hoveredService === service.id

//                 return (
//                   <div
//                     key={`${service.id}-${index}`}
//                     className={`flex-shrink-0 group cursor-pointer transition-all duration-1000 ease-out ${
//                       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                     }`}
//                     style={{
//                       transitionDelay: `${delay}ms`,
//                     }}
//                     tabIndex={0}
//                     role="button"
//                     aria-label={`Learn more about ${service.name}`}
//                     aria-pressed={isSelected}
//                     onKeyDown={(e) => handleKeyDown(e, service)}
//                     onClick={() => handleServiceClick(service)}
//                     onMouseEnter={() => handleMouseEnter(service.id)}
//                     onMouseLeave={handleMouseLeave}
//                   >
//                     {/* Cyberpunk Service Card */}
//                     <div
//                       className={`service-card relative w-72 h-96 bg-[#020A15] border-2 border-[#00D1FF]/30 backdrop-blur-sm overflow-hidden ${
//                         isSelected ? "selected holographic-border" : ""
//                       } ${isHovered ? "holographic-border" : ""}`}
//                       style={{
//                         clipPath:
//                           "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
//                       }}
//                     >
//                       {/* Data Stream Background */}
//                       <div className="absolute inset-0 data-stream opacity-20" />

//                       {/* Holographic Glow */}
//                       {(isHovered || isSelected) && (
//                         <div className="absolute inset-0 bg-[#00D1FF]/5 hologram-flicker" />
//                       )}

//                       {/* Corner Accents */}
//                       <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#00D1FF]" />
//                       <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#00D1FF]" />

//                       {/* Service Code */}
//                       <div className="absolute top-4 left-4">
//                         <span
//                           className="text-[#00D1FF] text-xs font-bold tracking-wider opacity-60"
//                           style={{ fontFamily: "Rajdhani, sans-serif" }}
//                         >
//                           {service.code}
//                         </span>
//                       </div>

//                       {/* Card Content */}
//                       <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
//                         {/* Holographic Icon Container */}
//                         <div
//                           className={`mb-8 p-6 border-2 border-[#00D1FF]/50 bg-[#00D1FF]/10 backdrop-blur-sm transition-all duration-300 ${
//                             isHovered || isSelected ? "neon-pulse scale-110" : ""
//                           }`}
//                           style={{
//                             clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
//                           }}
//                         >
//                           <IconComponent className="w-12 h-12 text-[#00D1FF]" />
//                         </div>

//                         {/* Service Name */}
//                         <h3
//                           className="text-xl font-bold text-white mb-4 leading-tight tracking-wide"
//                           style={{ fontFamily: "Poppins, sans-serif" }}
//                         >
//                           {service.name}
//                         </h3>

//                         {/* Cyber Accent Line */}
//                         <div className="flex items-center gap-2 mb-6">
//                           <div className="w-2 h-2 bg-[#00D1FF] rotate-45" />
//                           <div
//                             className={`h-0.5 bg-[#00D1FF] transition-all duration-500 ${
//                               isHovered || isSelected ? "w-24 neon-pulse" : "w-16"
//                             }`}
//                           />
//                           <div className="w-2 h-2 bg-[#00D1FF] rotate-45" />
//                         </div>

//                         {/* Service Description */}
//                         <div
//                           className={`transition-all duration-500 overflow-hidden ${
//                             isSelected ? "opacity-100 max-h-32" : "opacity-0 max-h-0"
//                           }`}
//                         >
//                           <p
//                             className="text-[#00D1FF]/80 text-sm leading-relaxed font-medium"
//                             style={{ fontFamily: "Rajdhani, sans-serif" }}
//                           >
//                             {service.description}
//                           </p>
//                         </div>

//                         {/* Status Indicator */}
//                         <div className="absolute bottom-4 right-4">
//                           <div
//                             className={`w-3 h-3 bg-[#00D1FF] transition-all duration-300 ${
//                               isHovered || isSelected ? "neon-pulse scale-150" : "opacity-60"
//                             }`}
//                             style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
//                           />
//                         </div>
//                       </div>

//                       {/* Scanning Effect */}
//                       {isHovered && (
//                         <div className="absolute inset-0 border-2 border-[#00D1FF] opacity-50 hologram-flicker" />
//                       )}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>

//           {/* Cyberpunk CTA Section */}
//           <div
//             className={`text-center mt-24 transition-all duration-1000 ease-out ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//             }`}
//             style={{ transitionDelay: "1000ms" }}
//           >
//             <p
//               className="text-[#00D1FF]/80 text-xl mb-8 font-bold tracking-wide"
//               style={{ fontFamily: "Rajdhani, sans-serif" }}
//             >
//               {">"} INITIALIZE_COLLABORATION.PROTOCOL {"<"}
//             </p>

//             <button
//               className="group relative px-12 py-4 bg-[#020A15] border-2 border-[#00D1FF] text-[#00D1FF] font-bold tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none neon-pulse cyber-scan"
//               style={{
//                 fontFamily: "Orbitron, sans-serif",
//                 clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
//               }}
//               onClick={() => {
//                 console.log("Cyberpunk CTA clicked")
//                 if ("vibrate" in navigator) {
//                   navigator.vibrate([100, 50, 100])
//                 }
//               }}
//             >
//               <span className="relative z-10">ENGAGE PROTOCOL</span>
//               <div className="absolute inset-0 bg-[#00D1FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           </div>

//           {/* System Status */}
//           <div className="text-center mt-12">
//             <div
//               className="inline-flex items-center gap-4 px-8 py-3 bg-[#020A15] border border-[#00D1FF]/30 backdrop-blur-sm"
//               style={{
//                 clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
//               }}
//             >
//               <div className={`w-2 h-2 bg-[#00D1FF] ${isPaused ? "opacity-50" : "neon-pulse"}`} />
//               <span
//                 className="text-[#00D1FF]/80 text-sm font-bold tracking-wider"
//                 style={{ fontFamily: "Rajdhani, sans-serif" }}
//               >
//                 {selectedService
//                   ? `ACTIVE: ${services.find((s) => s.id === selectedService)?.name?.toUpperCase()}`
//                   : `SYSTEMS_ONLINE: ${services.length} MODULES_LOADED`}
//               </span>
//               <div className="w-2 h-2 bg-[#00D1FF] rotate-45" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

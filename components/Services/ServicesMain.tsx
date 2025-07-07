"use client"
import { Poppins } from "next/font/google"
import type React from "react"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, ArrowRight, Rocket, Target, Users, Award } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

type TechItem = {
  name: string
  icon: string
  description: string
}

type TechStack = Record<string, TechItem[]>

interface Props {
  mainHeading: string
  subHeading: string
  subtitle: string
  servicesMainHeading: string
  servicesSubHeading: string
  services: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  techStack: TechStack
  techStackDescription: string
  techStackCategory: Record<string, string>
  finalCtaHeading: string
  finalCtaDescription: string
  features: string[]
  illustrationHeading: string
  illustrationDescription: string
  developmentProcessMainHeading: string
  developmentProcessDescription: string
  imageSectionLeftSideHeading: string
  imageSectionLeftSideDescription: string
  imageSectionLeftSideFeatures: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  imageSectionRightSideImage: string | StaticImageData
  detailServices: {
    category: string
    icon: React.ReactNode
    services: string[]
  }[]
  developmentProcess: {
    step: string
    title: string
    description: string
    icon: React.ReactNode
  }[]
  comprehensiveSolutionsDescription: string
  whyChooseUsDescription: string
}

export default function ServicesPageTemplate({
  mainHeading,
  subHeading,
  subtitle,
  servicesMainHeading,
  servicesSubHeading,
  services,
  techStack,
  techStackDescription,
  techStackCategory,
  finalCtaHeading,
  finalCtaDescription,
  features,
  illustrationHeading,
  illustrationDescription,
  developmentProcessMainHeading,
  developmentProcessDescription,
  imageSectionLeftSideHeading,
  imageSectionLeftSideDescription,
  imageSectionLeftSideFeatures,
  imageSectionRightSideImage,
  detailServices,
  developmentProcess,
  comprehensiveSolutionsDescription,
  whyChooseUsDescription,
}: Props) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations with more lenient settings
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
        threshold: 0.1, // Reduced from 0.2 to 0.1 for easier triggering
        rootMargin: "0px 0px -20px 0px", // Reduced from -50px to -20px
      },
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    // Fallback: Add tech section to visible sections after a delay if not already visible
    const fallbackTimer = setTimeout(() => {
      setVisibleSections((prev) => new Set([...Array.from(prev), "tech"]))
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [])

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
              {mainHeading}
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
              {subHeading}
            </h2>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">{subtitle}</p>
          </div>

          {/* CTA Button */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/quote">
              <button className="group relative bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]">
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket size={20} className="group-hover:animate-pulse" />
                  Get a Free Quote
                </span>
                <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </button>
            </Link>
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
            ref={(el) => {
              sectionRefs.current.services = el
            }}
            data-section="services"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{servicesMainHeading}</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">{servicesSubHeading}</p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
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
                        <div className="w-16 h-16 text-[#00D1FF] bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          {service.icon}
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

      {/* Tech Stack Section - FIXED */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => {
              sectionRefs.current.tech = el
            }}
            data-section="tech"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("tech") || isLoaded // Added fallback to isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Tech Stack</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">{techStackDescription}</p>
            </div>

            {/* Tech Categories */}
            {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center capitalize">
                  {techStackCategory[category] || category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-out ${
                        visibleSections.has("tech") || isLoaded // Added fallback to isLoaded
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-10 scale-75"
                      }`}
                      style={{
                        transitionDelay: `${categoryIndex * 100 + index * 50}ms`,
                      }}
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
            ref={(el) => {
              sectionRefs.current.why = el
            }}
            data-section="why"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("why") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">{whyChooseUsDescription}</p>
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
                    <h3 className="text-2xl font-bold text-white mb-4">{illustrationHeading}</h3>
                    <p className="text-[#D1D5DB] leading-relaxed">{illustrationDescription}</p>
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
            ref={(el) => {
              sectionRefs.current.process = el
            }}
            data-section="process"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {developmentProcessMainHeading}
              </h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">{developmentProcessDescription}</p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((step, index) => {
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
                        <div className="w-16 h-16 text-[#00D1FF] bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          {step.icon}
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
            ref={(el) => {
              sectionRefs.current.detailed = el
            }}
            data-section="detailed"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("detailed") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Comprehensive Solutions</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">{comprehensiveSolutionsDescription}</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {detailServices.map((category, index) => {
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
                        <div className="w-16 h-16 text-[#00D1FF] bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          {category.icon}
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

      {/* Image Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => {
              sectionRefs.current.image = el
            }}
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{imageSectionLeftSideHeading}</h2>
                <p className="text-lg text-[#D1D5DB] mb-8 leading-relaxed">{imageSectionLeftSideDescription}</p>
                <div className="space-y-4">
                  {imageSectionLeftSideFeatures.map((item, index) => {
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 text-[#00D1FF] bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{item.title}</h4>
                          <p className="text-[#D1D5DB] text-sm">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
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
                    src={imageSectionRightSideImage || "/placeholder.svg"}
                    alt="Service Image"
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
            ref={(el) => {
              sectionRefs.current.finalCta = el
            }}
            data-section="finalCta"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("finalCta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket size={32} className="text-[#00D1FF]" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">{finalCtaHeading}</h3>
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">{finalCtaDescription}</p>
              <div className="flex items-center justify-center">
                <Link
                  href="/contact"
                  className="group bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Let&apos;s Work Together
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes neon-pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
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
        @keyframes pulse-badge {
          0%,
          100% {
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

"use client"
import { useState, useEffect } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function MinimalHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`relative min-h-screen bg-[#020A15] flex items-center ${poppins.className}`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 209, 255, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div
            className={`transform transition-all duration-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ willChange: "transform, opacity" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              <span className="block">Innovate.</span>
              <span className="block bg-gradient-to-r from-[#00D1FF] to-white bg-clip-text text-transparent">
                Create.
              </span>
              <span className="block">Succeed.</span>
            </h1>
          </div>

          {/* Subheading */}
          <div
            className={`transform transition-all duration-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              willChange: "transform, opacity",
              transitionDelay: "200ms",
            }}
          >
            <p className="text-xl sm:text-2xl text-[#D1D5DB] font-normal leading-relaxed max-w-3xl mx-auto">
              We transform ambitious ideas into exceptional digital experiences that drive growth and inspire
              innovation.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transform transition-all duration-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              willChange: "transform, opacity",
              transitionDelay: "400ms",
            }}
          >
            <button
              className="group relative px-10 py-5 bg-[#00D1FF] text-white font-bold text-xl rounded-full transition-all duration-300 ease-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:ring-offset-4 focus:ring-offset-[#020A15]"
              style={{ willChange: "transform, box-shadow" }}
              aria-label="Start your project with us"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Start Your Project</span>
                <svg
                  className="w-6 h-6 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out blur-xl -z-10" />
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm -z-10" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 transform transition-all duration-500 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{
              willChange: "transform, opacity",
              transitionDelay: "600ms",
            }}
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl sm:text-4xl font-bold text-[#00D1FF] mb-2 transition-transform duration-300 ease-out group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-base text-[#D1D5DB] font-normal">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          willChange: "transform, opacity",
          transitionDelay: "800ms",
        }}
      >
        <div className="flex flex-col items-center space-y-2 text-[#D1D5DB]">
          <span className="text-sm font-normal">Discover More</span>
          <div className="w-6 h-10 border-2 border-[#00D1FF]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00D1FF] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

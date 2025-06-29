"use client"
import { useState, useEffect } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function LightweightHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`relative min-h-screen bg-[#020A15] overflow-hidden ${poppins.className}`}>
      {/* Lightweight Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 209, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 209, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#020A15]" />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Main Headline */}
              <div
                className={`transform transition-all duration-600 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ willChange: "transform, opacity" }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="block mb-2">Build the</span>
                  <span className="block bg-gradient-to-r from-[#00D1FF] via-white to-[#00D1FF] bg-clip-text text-transparent mb-2">
                    Future
                  </span>
                  <span className="block">Today</span>
                </h1>
              </div>

              {/* Subheading */}
              <div
                className={`transform transition-all duration-600 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "150ms",
                }}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-[#D1D5DB] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Transform your ideas into powerful digital solutions with our cutting-edge development expertise and
                  innovative approach.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-600 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "300ms",
                }}
              >
                {/* Primary CTA */}
                <button
                  className="group relative px-8 py-4 bg-[#00D1FF] text-white font-bold text-lg rounded-full transition-all duration-300 ease-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:ring-offset-2 focus:ring-offset-[#020A15]"
                  style={{ willChange: "transform, box-shadow" }}
                  aria-label="Get started with our services"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <svg
                      className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out blur-lg -z-10" />
                </button>

                {/* Secondary CTA */}
                <button
                  className="group px-8 py-4 bg-transparent border-2 border-white/20 text-white font-medium text-lg rounded-full transition-all duration-300 ease-out hover:border-[#00D1FF] hover:text-[#00D1FF] hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:ring-offset-2 focus:ring-offset-[#020A15]"
                  style={{ willChange: "transform, border-color, color" }}
                  aria-label="Learn more about our services"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Learn More</span>
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 transform transition-all duration-600 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "450ms",
                }}
              >
                {[
                  { number: "500+", label: "Projects Delivered" },
                  { number: "99%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left group">
                    <div className="text-2xl sm:text-3xl font-bold text-[#00D1FF] mb-1 transition-transform duration-300 ease-out group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#D1D5DB] font-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div
                className={`relative w-full max-w-lg transform transition-all duration-600 ease-out ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "300ms",
                }}
              >
                {/* Main Visual Container */}
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-2 border-[#00D1FF]/30 rounded-full animate-spin-slow" />

                  {/* Middle Ring */}
                  <div className="absolute inset-4 border border-[#00D1FF]/20 rounded-full animate-spin-reverse" />

                  {/* Inner Ring */}
                  <div className="absolute inset-8 border border-[#00D1FF]/10 rounded-full animate-spin-slow" />

                  {/* Central Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#00D1FF]/20 to-transparent rounded-full border border-[#00D1FF]/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#00D1FF]/30 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {[
                    { icon: "⚡", position: "top-4 right-8", delay: "0s" },
                    { icon: "🚀", position: "bottom-8 left-4", delay: "0.5s" },
                    { icon: "💡", position: "top-8 left-8", delay: "1s" },
                    { icon: "🎯", position: "bottom-4 right-4", delay: "1.5s" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`absolute ${item.position} text-2xl animate-bounce`}
                      style={{
                        animationDelay: item.delay,
                        animationDuration: "3s",
                      }}
                    >
                      {item.icon}
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="#00D1FF" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="#00D1FF" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="#00D1FF" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#00D1FF" strokeWidth="1" strokeDasharray="4,4" />
                  </svg>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#00D1FF]/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-600 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          willChange: "transform, opacity",
          transitionDelay: "600ms",
        }}
      >
        <div className="flex flex-col items-center space-y-2 text-[#D1D5DB]">
          <span className="text-sm font-normal">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-[#00D1FF]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00D1FF] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Optimized CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        /* GPU Acceleration */
        .transform {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  )
}

"use client"
import { useState, useEffect } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function ProfessionalHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`relative  bg-[#020A15] overflow-hidden ${poppins.className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/8 via-transparent to-[#020A15]" />

        {/* Geometric Pattern */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#00D1FF]/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#00D1FF]/5 rounded-full" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 209, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 209, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lgl:px-8">
        <div className="py-12 flex items-center">
          <div className="grid grid-cols-1 lgl:grid-cols-12 gap-8 lgl:gap-12 items-center w-full">
            {/* Left Column - Content */}
            <div className="lgl:col-span-7 text-center lgl:text-left space-y-8">
              {/* Badge */}
              <div
                className={`transform transition-all duration-400 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ willChange: "transform, opacity" }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full text-[#00D1FF] text-sm font-medium">
                  <span className="w-2 h-2 bg-[#00D1FF] rounded-full mr-2 animate-pulse" />
                  Trusted by <b> 100+ </b> Companies
                </div>
              </div>

              {/* Main Headline */}
              <div
                className={`transform transition-all duration-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "100ms",
                }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lgl:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="block">Digital Solutions</span>
                  <span className="block">That Drive</span>
                  <span className="block bg-gradient-to-r from-[#00D1FF] via-white to-[#00D1FF] bg-clip-text text-transparent">
                    Real Results
                  </span>
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
                <p className="text-lg sm:text-xl text-[#D1D5DB] font-normal leading-relaxed max-w-2xl mx-auto lgl:mx-0">
                  We partner with forward-thinking businesses to create innovative digital experiences that accelerate
                  growth and transform industries.
                </p>
              </div>

              {/* CTA Section */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lgl:justify-start transform transition-all duration-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "300ms",
                }}
              >
                {/* Primary CTA */}
                <button
                  className="group relative px-8 py-4 bg-[#00D1FF] text-white font-bold text-lg rounded-full transition-all duration-300 ease-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:ring-offset-2 focus:ring-offset-[#020A15]"
                  style={{ willChange: "transform" }}
                  aria-label="Get started with our services"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get In Touch</span>
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

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out blur-lg -z-10" />
                </button>

              
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-6 pt-8 transform transition-all duration-500 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "400ms",
                }}
              >
                {[
                  { number: "500+", label: "Projects" },
                  { number: "99%", label: "Success Rate" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lgl:text-left group">
                    <div className="text-2xl sm:text-3xl font-bold text-[#00D1FF] mb-1 transition-transform duration-300 ease-out group-hover:scale-110">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#D1D5DB] font-normal">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="lgl:col-span-5 flex items-center justify-center">
              <div
                className={`relative w-full max-w-md transform transition-all duration-600 ease-out ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{
                  willChange: "transform, opacity",
                  transitionDelay: "200ms",
                }}
              >
                {/* Main Visual Container */}
                <div className="relative aspect-square">
                  {/* Orbital Rings */}
                  <div className="absolute inset-0 border-2 border-[#00D1FF]/20 rounded-full animate-orbit-slow" />
                  <div className="absolute inset-4 border border-[#00D1FF]/30 rounded-full animate-orbit-reverse" />
                  <div className="absolute inset-8 border border-[#00D1FF]/15 rounded-full animate-orbit-slow" />

                  {/* Central Content */}
                  <div className="absolute inset-12 bg-gradient-to-br from-[#00D1FF]/10 to-transparent border border-[#00D1FF]/40 rounded-full backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-[#00D1FF]/20 rounded-full mx-auto flex items-center justify-center animate-pulse">
                        <svg className="w-8 h-8 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div className="text-white font-bold text-lg">Innovation</div>
                      <div className="text-[#D1D5DB] text-sm">Powered by Technology</div>
                    </div>
                  </div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0">
                    {/* Orbit 1 - Outer */}
                    <div className="absolute inset-0 animate-orbit-slow">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00D1FF] rounded-full shadow-lg shadow-[#00D1FF]/50" />
                    </div>

                    {/* Orbit 2 - Middle */}
                    <div className="absolute inset-6 animate-orbit-reverse">
                      <div className="absolute top-0 right-0 w-3 h-3 bg-[#00D1FF]/80 rounded-full shadow-md shadow-[#00D1FF]/40" />
                    </div>

                    {/* Orbit 3 - Inner */}
                    <div className="absolute inset-12 animate-orbit-slow" style={{ animationDuration: "15s" }}>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#00D1FF]/60 rounded-full" />
                    </div>

                    {/* Additional Orbital Elements */}
                    <div className="absolute inset-2 animate-orbit-reverse" style={{ animationDuration: "25s" }}>
                      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 bg-[#00D1FF]/70 rounded-full" />
                    </div>

                    <div className="absolute inset-8 animate-orbit-slow" style={{ animationDuration: "18s" }}>
                      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-2 h-2 bg-[#00D1FF]/50 rounded-full" />
                    </div>
                  </div>

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="#00D1FF"
                      strokeWidth="1"
                      strokeDasharray="2,4"
                      className="animate-orbit-slow"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35%"
                      fill="none"
                      stroke="#00D1FF"
                      strokeWidth="1"
                      strokeDasharray="3,6"
                      className="animate-orbit-reverse"
                    />
                  </svg>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#00D1FF]/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
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
          transitionDelay: "500ms",
        }}
      >
     
      </div>
      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes orbit-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-orbit-slow {
          animation: orbit-slow 20s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 15s linear infinite;
        }
        
        /* GPU Acceleration */
        .transform {
          transform: translateZ(0);
        }
      `}</style>
    </section>
  )
}

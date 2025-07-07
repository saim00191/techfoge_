"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { MessageCircle, FileText } from "lucide-react"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function MiniContactCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])


  return (
    <section
      ref={sectionRef}
      className={`relative bg-[#020A15] py-16 md:py-20 lg:py-24 px-4 overflow-hidden ${poppins.className}`}
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#00D1FF]/10 rounded-full blur-xl animate-float-slow" />
        <div className="absolute top-32 right-16 w-16 h-16 bg-[#00D1FF]/15 rounded-full blur-lg animate-float-medium" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#00D1FF]/8 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-[#00D1FF]/12 rounded-full blur-xl animate-float-fast" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#00D1FF]/5 rounded-full blur-3xl animate-pulse-glow" />

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/3 animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020A15] via-transparent to-[#020A15]/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <div
          className={`mb-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
            Have a project in mind?{" "}
            <span className="text-[#00D1FF] relative">
            Let &apos;s make it real.
              {/* Underline glow effect */}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-60 blur-sm" />
            </span>
          </h2>
        </div>

        {/* Subheading */}
        <div
          className={`mb-10 md:mb-12 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">
            Whether you need a product MVP or an enterprise-grade system —{" "}
            <span className="text-white font-semibold">Tech Foge</span> is ready to build it with you.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Primary Button - Request a Quote */}
          <Link href="/quote">
          <button
 
            className="group relative w-full sm:w-auto bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <FileText size={20} className="group-hover:animate-pulse" />
              Request a Quote
            </span>
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </button>
          </Link>

          {/* Secondary Button - Contact Us */}
          <Link href="/contact">
          <button
 
            className="group relative w-full sm:w-auto bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#00D1FF]/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.3)] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <MessageCircle size={20} className="group-hover:animate-pulse" />
              Contact Us
            </span>
            {/* Button border glow effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#00D1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </button>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div
          className={`mt-12 flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-10px) translateX(5px);
          }
          66% {
            transform: translateY(5px) translateX(-5px);
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(-8px);
          }
          50% {
            transform: translateY(8px) translateX(8px);
          }
          75% {
            transform: translateY(-5px) translateX(5px);
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

        @keyframes gradient-shift {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

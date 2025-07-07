"use client"
import { Poppins } from "next/font/google"
import type React from "react"

import { useState, useEffect } from "react"
import { Home, Search, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function NotFoundPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleGoHome: () => void = () => {
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <div className={` bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
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
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#00D1FF] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Holographic Waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-[#00D1FF]/5 animate-wave" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#00D1FF]/8 via-transparent to-[#00D1FF]/3 animate-wave-reverse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-40 pb-20 flex flex-col items-center justify-center px-4 text-center">
        {/* Animated Robot/Satellite Icon */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="animate-float-slow"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot Body */}
              <rect
                x="30"
                y="40"
                width="60"
                height="50"
                rx="8"
                fill="#00D1FF"
                fillOpacity="0.2"
                stroke="#00D1FF"
                strokeWidth="2"
              />

              {/* Robot Head */}
              <rect x="40" y="20" width="40" height="30" rx="6" fill="#020A15" stroke="#00D1FF" strokeWidth="2" />

              {/* Eyes */}
              <circle cx="50" cy="30" r="3" fill="#00D1FF" className="animate-blink" />
              <circle cx="70" cy="30" r="3" fill="#00D1FF" className="animate-blink" />

              {/* Antenna */}
              <line x1="60" y1="20" x2="60" y2="10" stroke="#00D1FF" strokeWidth="2" />
              <circle cx="60" cy="8" r="2" fill="#00D1FF" className="animate-pulse" />

              {/* Arms */}
              <rect
                x="15"
                y="50"
                width="20"
                height="8"
                rx="4"
                fill="#00D1FF"
                fillOpacity="0.3"
                stroke="#00D1FF"
                strokeWidth="1"
              />
              <rect
                x="85"
                y="50"
                width="20"
                height="8"
                rx="4"
                fill="#00D1FF"
                fillOpacity="0.3"
                stroke="#00D1FF"
                strokeWidth="1"
              />

              {/* Legs */}
              <rect
                x="45"
                y="90"
                width="8"
                height="20"
                rx="4"
                fill="#00D1FF"
                fillOpacity="0.3"
                stroke="#00D1FF"
                strokeWidth="1"
              />
              <rect
                x="67"
                y="90"
                width="8"
                height="20"
                rx="4"
                fill="#00D1FF"
                fillOpacity="0.3"
                stroke="#00D1FF"
                strokeWidth="1"
              />

              {/* Scanning Line */}
              <line
                x1="20"
                y1="35"
                x2="100"
                y2="35"
                stroke="#00D1FF"
                strokeWidth="1"
                opacity="0.6"
                className="animate-scan"
              />
            </svg>

            {/* Robot Glow Effect */}
            <div className="absolute inset-0 bg-[#00D1FF]/20 rounded-full blur-xl animate-pulse-glow" />
          </div>
        </div>

        {/* 404 Text */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-[#00D1FF] relative animate-neon-flicker">
            404
            {/* Neon Glow Effects */}
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-bold text-[#00D1FF] blur-sm opacity-50 animate-pulse" />
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-bold text-[#00D1FF] blur-lg opacity-30 animate-pulse-slow" />
          </h1>
        </div>

        {/* Heading */}
        <div
          className={`mb-4 transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Oops! Page not found.</h2>
        </div>

        {/* Subheading */}
        <div
          className={`mb-12 transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-[#D1D5DB] max-w-2xl leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

       

        {/* Return Home Button */}
        <div
          className={`transition-all duration-1000 ease-out delay-1100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={handleGoHome}
            className="group relative bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Home size={20} className="group-hover:animate-pulse" />
              Return Home
              <div className="transform transition-transform duration-300 group-hover:translate-x-1">→</div>
            </span>

            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

            {/* Button Border Animation */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#00D1FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-spin" />
          </button>
        </div>

        {/* Tech Foge Branding */}
        <div
          className={`mt-16 transition-all duration-1000 ease-out delay-1300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 text-[#D1D5DB]/60">
            <Zap size={16} className="text-[#00D1FF]" />
            <span className="text-sm">Powered by Tech Foge</span>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes neon-flicker {
          0%, 100% {
            text-shadow: 0 0 10px #00D1FF, 0 0 20px #00D1FF, 0 0 30px #00D1FF;
          }
          50% {
            text-shadow: 0 0 5px #00D1FF, 0 0 10px #00D1FF, 0 0 15px #00D1FF;
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

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0%) rotate(0deg);
          }
          50% {
            transform: translateX(10%) rotate(1deg);
          }
        }

        @keyframes wave-reverse {
          0%, 100% {
            transform: translateX(0%) rotate(0deg);
          }
          50% {
            transform: translateX(-10%) rotate(-1deg);
          }
        }

        @keyframes blink {
          0%, 90%, 100% {
            opacity: 1;
          }
          95% {
            opacity: 0.3;
          }
        }

        @keyframes scan {
          0%, 100% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(0%);
          }
        }

        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-neon-flicker {
          animation: neon-flicker 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }

        .animate-wave-reverse {
          animation: wave-reverse 10s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }

        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }

        .animate-border-spin {
          animation: border-spin 2s linear infinite;
        }
      `}</style>
    </div>
  )
}

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { Shield, Lock, AlertTriangle, ArrowRight } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true"
    setIsAuthenticated(authStatus)

    // Trigger animations after auth check
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div
        className={`min-h-screen bg-[#020A15] relative overflow-hidden flex items-center justify-center ${poppins.className}`}
      >
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
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Loading Content */}
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto" />
            <div className="absolute inset-0 w-16 h-16 bg-[#00D1FF]/20 rounded-full blur-xl mx-auto animate-pulse" />
          </div>
          <p className="text-[#D1D5DB] text-lg animate-pulse">Verifying authentication...</p>
        </div>
      </div>
    )
  }

  // Not authenticated state
  if (!isAuthenticated) {
    return (
      <div
        className={`min-h-screen bg-[#020A15] relative overflow-hidden flex items-center justify-center ${poppins.className}`}
      >
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
              className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
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

        
        {/* Main Content */}
        <div className="relative z-10 w-full max-w-lg mx-auto px-4">
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow border-2 border-red-500/30">
                  <Lock size={32} className="text-red-400" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-red-500/20 rounded-full blur-xl mx-auto animate-pulse" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                Access Restricted
                <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-red-400 blur-sm opacity-30 animate-neon-pulse" />
              </h1>

              <p className="text-lg text-[#D1D5DB]">Authentication required</p>

              {/* Decorative Elements */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent" />
              </div>
            </div>

            {/* Message Card */}
            <div className="relative">
              {/* Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5 rounded-2xl blur-xl" />

              <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <div
                  className={`text-center transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {/* Warning Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30">
                      <AlertTriangle size={28} className="text-red-400" />
                    </div>
                  </div>

                  {/* Message */}
                  <h2 className="text-2xl font-bold text-white mb-4">You are not logged in</h2>
                  <p className="text-[#D1D5DB] leading-relaxed mb-8">
                    Please authenticate to access the admin dashboard and manage your resources.
                  </p>

                  {/* Login Button */}
                  <Link
                    href="/admin-signin"
                    className="group relative inline-flex items-center gap-3 bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Shield size={20} className="group-hover:animate-pulse" />
                      Go to Login
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  </Link>
                </div>

                {/* Security Notice */}
                <div
                  className={`mt-6 text-center transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <p className="text-[#D1D5DB]/60 text-xs flex items-center justify-center gap-2">
                    <Lock size={12} />
                    Secure admin portal - Authentication required
                    <Lock size={12} />
                  </p>
                </div>
              </div>
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

  return <>{children}</>
}

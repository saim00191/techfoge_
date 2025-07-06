"use client"

import type React from "react"

import { Poppins } from "next/font/google"
import { useState, useEffect } from "react"
import { Lock, User, Eye, EyeOff, Shield, Zap, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface LoginFormData {
  username: string
  password: string
}

export default function AdminLoginPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState("")

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (loginError) setLoginError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setLoginError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simple validation (replace with actual authentication)
      if (formData.username === "admin" && formData.password === "password123") {
        setLoginSuccess(true)
         localStorage.setItem("isAuthenticated", "true")

        router.push("/admin")
        setTimeout(() => {
          window.location.href = "/admin"
        }, 2000)
      } else {
        setLoginError("Invalid username or password")
      }
    } catch (error) {
      setLoginError("Login failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

      

      {/* Success Modal */}
      {loginSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
          <div className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-8 max-w-sm w-full mx-4 animate-modal-enter">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <CheckCircle size={64} className="text-[#00D1FF] animate-bounce-in" />
                <div className="absolute inset-0 w-16 h-16 bg-[#00D1FF]/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4 animate-slide-up">Login Successful!</h3>
            <p className="text-[#D1D5DB] text-center animate-slide-up-delayed">Redirecting to admin dashboard...</p>
          </div>
        </div>
      )}

      {/* Main Login Container */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-[#00D1FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Lock size={32} className="text-[#00D1FF]" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-[#00D1FF]/20 rounded-full blur-xl mx-auto animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
              Admin Login
              <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
            </h1>

            <p className="text-lg text-[#D1D5DB]">Secure access to your dashboard</p>

            {/* Decorative Elements */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
              <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            </div>
          </div>

          {/* Login Form */}
          <div className="relative">
            {/* Form Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl blur-xl" />

            <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">
                    <User size={16} className="inline mr-2" />
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    required
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                    placeholder="Enter your username"
                  />
                </div>

                {/* Password Field */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">
                    <Lock size={16} className="inline mr-2" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 pr-14 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Error Message */}
                {loginError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 animate-shake">
                    <p className="text-red-400 text-sm text-center">{loginError}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#020A15]/30 border-t-[#020A15] rounded-full animate-spin" />
                          Signing In...
                        </>
                      ) : (
                        <>
                          <Shield size={20} className="group-hover:animate-pulse" />
                          Sign In
                        </>
                      )}
                    </span>
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  </button>
                </div>
              </form>

              {/* Security Notice */}
              <div
                className={`mt-6 text-center transition-all duration-700 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <p className="text-[#D1D5DB]/60 text-xs flex items-center justify-center gap-2">
                  <Zap size={12} />
                  Secured By <b>TECHFOGE</b>
                  <Zap size={12} />
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
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
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
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-modal-enter {
          animation: modal-enter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.3s both;
        }
        .animate-slide-up-delayed {
          animation: slide-up 0.6s ease-out 0.5s both;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}

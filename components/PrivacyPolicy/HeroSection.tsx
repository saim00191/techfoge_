import { CheckCircle } from "lucide-react"
import type { HeroSectionProps } from "@/types/Privacy"

export const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  return (
    <section className="relative z-10 pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div
          className={`mb-6 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative">
            Privacy Policy
            {/* Neon Glow Effects */}
            <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
            <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
            Your privacy matters to us. Learn how we protect and handle your data.
          </p>
        </div>

        {/* Last Updated */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full px-6 py-3">
            <CheckCircle size={18} className="text-[#00D1FF]" />
            <span className="text-[#D1D5DB] text-sm">Last updated: January 2024</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className={`flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}

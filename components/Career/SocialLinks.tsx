"use client"
import { motion } from "framer-motion"
import type { SocialLinksProps } from "@/types/Career"

export const SocialLinks = ({ isLoaded, socialLinks }: SocialLinksProps) => {
  return (
    <div
      className={`transition-all duration-1000 ease-out delay-900 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 animate-fade-in">Follow us on</h3>
        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#00D1FF]/20 flex items-center justify-center transition-all duration-300 hover:border-[#00D1FF]/60 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] ${social.bgColor} animate-float`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${3 + index * 0.5}s`,
                }}
                aria-label={social.label}
              >
                {/* Icon */}
                <IconComponent
                  size={24}
                  className={`text-[#00D1FF] transition-all duration-300 group-hover:scale-110 ${social.color}`}
                />
                {/* Glowing background effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-[#00D1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/0 group-hover:border-[#00D1FF]/40 transition-all duration-300 animate-border-glow" />
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1 left-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  <div className="absolute top-1 right-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200" />
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-400" />
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-600" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

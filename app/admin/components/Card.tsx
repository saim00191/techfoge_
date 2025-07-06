import type React from "react"
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-6 ${
        hover ? "hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)]" : ""
      } transition-all duration-500 animate-fade-in ${className}`}
    >
      {/* Card Glow Effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

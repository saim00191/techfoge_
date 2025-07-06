import type React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[#020A15]/60 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

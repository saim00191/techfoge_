"use client"
import type { ButtonProps } from "@/types/Blog"

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    default: "bg-[#00D1FF] text-black hover:bg-[#00D1FF]/80 focus:ring-[#00D1FF]/50",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
    outline: "border border-[#00D1FF]/50 text-[#00D1FF] hover:bg-[#00D1FF]/10 focus:ring-[#00D1FF]/50",
  }

  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

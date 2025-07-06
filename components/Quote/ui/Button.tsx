
import type { ButtonProps } from "@/types/Quote"

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"

  const variants = {
    default:
      "bg-gradient-to-r from-[#00D1FF] to-[#0099CC] text-white hover:shadow-[0_0_20px_rgba(0,209,255,0.5)] hover:scale-105",
    ghost: "text-[#00D1FF] hover:bg-[#00D1FF]/10 border border-[#00D1FF]/30 hover:border-[#00D1FF]",
    outline: "border border-[#00D1FF] text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white",
  }

  const sizes = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

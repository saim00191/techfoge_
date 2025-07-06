"use client"
import type { InputProps } from "@/types/Blog"

export const Input = ({ type = "text", placeholder, value, onChange, className = "", ...props }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 bg-slate-900/50 border border-slate-700/50 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:border-[#00D1FF]/50 transition-all duration-300 ${className}`}
      {...props}
    />
  )
}

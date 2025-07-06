"use client"
import { useState } from "react"
import type { TextareaProps } from "@/types/Quote"

export const Textarea = ({ label, className = "", error = "", ...props }: TextareaProps) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative">
      <textarea
        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-300 focus:outline-none resize-none ${
          focused || props.value
            ? "border-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.3)]"
            : "border-slate-600 hover:border-slate-500"
        } ${error ? "border-red-500" : ""} ${className}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={4}
        {...props}
      />
      {label && (
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focused || props.value ? "-top-2 text-xs text-[#00D1FF] bg-[#020A15] px-2" : "top-3 text-slate-400"
          }`}
        >
          {label}
        </label>
      )}
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  )
}

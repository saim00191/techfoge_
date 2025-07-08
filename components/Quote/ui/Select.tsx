"use client"
import { useState } from "react"
import type { SelectProps } from "@/types/Quote"

export const Select = ({ label, options = [], className = "", error = "", ...props }: SelectProps) => {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative">
      <select
        className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white transition-all duration-300 focus:outline-none appearance-none ${
          focused || props.value
            ? "border-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.3)]"
            : "border-slate-600 hover:border-slate-500"
        } ${error ? "border-red-500" : ""} ${className}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      >
      <option
  value=""
  disabled
  aria-hidden="true"
  className="bg-slate-800 hidden-option"
>
  Select {label}
</option>
{options.map((option, index) => (
  <option key={index} value={option.value} className="bg-slate-800">
    {option.label}
  </option>
))}

      </select>

   
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  )
}

  <style jsx>{`
        select option.hidden-option {
          display: none;
        }
      `}</style>
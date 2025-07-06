"use client"

import { X } from "lucide-react"
import type { SuccessModalProps } from "@/types/Contact"

export const SuccessModal = ({ showSuccess, setShowSuccess }: SuccessModalProps) => {
  if (!showSuccess) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setShowSuccess(false)}
      />

      {/* Modal Content */}
      <div className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-8 md:p-12 max-w-md w-full mx-4 animate-modal-enter">
        {/* Close Button */}
        <button
          onClick={() => setShowSuccess(false)}
          className="absolute top-4 right-4 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors duration-200"
        >
          <X size={24} />
        </button>

        {/* Animated Tick Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg
              className="w-20 h-20 animate-tick-draw"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Circle background */}
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#00D1FF"
                strokeWidth="3"
                fill="none"
                className="animate-circle-draw"
              />
              {/* Checkmark */}
              <path
                d="M25 40L35 50L55 30"
                stroke="#00D1FF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                className="animate-check-draw"
              />
            </svg>
            {/* Glow effect */}
            <div className="absolute inset-0 w-20 h-20 bg-[#00D1FF]/20 rounded-full blur-xl animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 animate-slide-up">
          Message Sent Successfully!
        </h3>

        {/* Subtext */}
        <p className="text-[#D1D5DB] text-center leading-relaxed animate-slide-up-delayed">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center items-center gap-2 mt-6 animate-slide-up-delayed-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          <div className="w-1.5 h-1.5 bg-[#00D1FF] rounded-full animate-pulse" />
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
        </div>
      </div>
    </div>
  )
}

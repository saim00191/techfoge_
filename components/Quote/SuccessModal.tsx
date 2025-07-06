"use client"
import { CheckCircle } from "lucide-react"
import { Button } from "./ui/Button"
import type { SuccessModalProps } from "@/types/Quote"

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#020A15] border border-[#00D1FF]/30 rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/10 to-transparent animate-pulse"></div>

        <div className="relative z-10">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-[#00D1FF] mx-auto animate-bounce" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Quote Request Sent!</h3>

          <p className="text-slate-300 mb-6">
            Your request has been received. We'll be in touch within 24 hours with a custom plan tailored to your needs.
          </p>

          <Button onClick={onClose} className="w-full">
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

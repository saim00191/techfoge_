"use client"
import { MessageCircle } from "lucide-react"
import type { FloatingSupportButtonProps } from "@/types/Quote"

export const FloatingSupportButton = ({ onClick }: FloatingSupportButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00D1FF] to-[#0099CC] p-4 rounded-full shadow-[0_0_20px_rgba(0,209,255,0.5)] hover:scale-110 transition-all duration-300 z-40 animate-float"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </button>
  )
}

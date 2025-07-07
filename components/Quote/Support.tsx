"use client"
import { MessageCircle, Send, X } from "lucide-react"
import type { SupportModalProps } from "@/types/Quote"

export const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#020A15] border border-[#00D1FF]/30 rounded-2xl p-6 max-w-md w-full relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Need Help?</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <MessageCircle className="w-5 h-5 text-[#00D1FF]" />
            <div>
              <p className="text-white font-medium">Live Chat</p>
              <p className="text-slate-400 text-sm">Get instant help</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <Send className="w-5 h-5 text-[#00D1FF]" />
            <div>
              <p className="text-white font-medium">Email Support</p>
              <p className="text-slate-400 text-sm">techfoge1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

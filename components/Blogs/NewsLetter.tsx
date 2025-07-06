"use client"
import { Mail } from "lucide-react"
import type { NewsletterSectionProps } from "@/types/Blog"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"

export const NewsletterSection = ({ email, setEmail }: NewsletterSectionProps) => {
  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 to-transparent animate-pulse" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-[#00D1FF]" />
              <h3 className="text-3xl font-bold font-['Orbitron'] text-white">
                Stay in the <span className="text-[#00D1FF]">Loop</span>
              </h3>
            </div>
            <p className="text-slate-300 mb-8 text-lg">
              Get the latest tech insights, tutorials, and industry news delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-900/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-[#00D1FF]/50 focus:ring-2 focus:ring-[#00D1FF]/20"
              />
              <Button className="bg-gradient-to-r from-[#00D1FF] to-cyan-400 hover:from-[#00D1FF]/80 hover:to-cyan-400/80 text-black font-bold px-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,209,255,0.5)]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

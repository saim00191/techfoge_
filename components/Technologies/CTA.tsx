"use client"
import { Award, Zap, Globe } from "lucide-react"
import type { CTASectionProps } from "@/types/Technology"
import Link from "next/link"

export const CTASection = ({ visibleSections, sectionRefs }: CTASectionProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={(el) => { sectionRefs.current.cta = el; }}
          data-section="cta"
          className={`transition-all duration-1000 ease-out ${
            visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award size={24} className="text-[#00D1FF]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Build Something Extraordinary?</h3>
              <Zap size={24} className="text-[#00D1FF]" />
            </div>
            <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
              Let&apos;s leverage these cutting-edge technologies to transform your vision into reality. Our expert team
              combines innovation with proven expertise.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
              <button className="bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-lg font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Globe size={18} />
                  Start Your Project
                </span>
              </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

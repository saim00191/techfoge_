import { Zap, Globe, MessageCircle } from "lucide-react"
import type { FooterCTAProps } from "@/types/Privacy"
import Link from "next/link"

export const FooterCTA = ({ visibleSections, sectionRefs }: FooterCTAProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={(el) => {
            sectionRefs.current.cta = el
          }}
          data-section="cta"
          className={`transition-all duration-1000 ease-out ${
            visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap size={24} className="text-[#00D1FF]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Work Together?</h3>
              <Zap size={24} className="text-[#00D1FF]" />
            </div>
            <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
              Now that you understand how we protect your privacy, let &apos;s discuss your next project.
            </p>
           <div className="flex  justify-center">
             <Link href="/contact">
              <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-3 rounded-lg font-bold hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  Contact Us
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

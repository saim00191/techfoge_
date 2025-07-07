import { AlertTriangle } from "lucide-react"
import type { IntroductionSectionProps } from "@/types/Privacy"

export const IntroductionSection = ({ visibleSections, sectionRefs }: IntroductionSectionProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          ref={(el) => {
            sectionRefs.current.intro = el
          }}
          data-section="intro"
          className={`transition-all duration-1000 ease-out ${
            visibleSections.has("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl blur-xl" />
            <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full xsm:flex hidden items-center justify-center">
                  <AlertTriangle size={24} className="text-[#00D1FF]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Important Notice</h2>
              </div>
              <div className="space-y-4 text-[#D1D5DB] leading-relaxed">
                <p>
                  At Tech Foge, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information in accordance with this
                  policy. We will not use or share your information with anyone except as described in this Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

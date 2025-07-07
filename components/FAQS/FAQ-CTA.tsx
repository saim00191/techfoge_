import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export default function FAQCTA() {
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-8 md:p-12 border border-[#00D1FF]/20 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-[#D1D5DB] mb-8 text-lg leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help you with any questions about our
            services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/80 text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300 group"
          >
            <span>Contact Us</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}

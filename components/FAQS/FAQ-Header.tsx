import { FaQuestionCircle } from "react-icons/fa"

export default function FAQHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#00D1FF] to-[#00D1FF]/70 rounded-xl flex items-center justify-center">
          <FaQuestionCircle className="text-[#020A15] text-xl" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Frequently Asked Questions</h1>
      </div>
      <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">
        Find answers to common queries about Tech Foge&apos;s services, processes, and support.
      </p>

      {/* Decorative Line */}
      <div className="flex items-center justify-center mt-8 mb-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
        <div className="w-2 h-2 bg-[#00D1FF] rounded-full mx-4 animate-pulse" />
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
      </div>
    </div>
  )
}

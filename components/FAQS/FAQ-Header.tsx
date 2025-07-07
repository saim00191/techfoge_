

export default function FAQHeader() {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
     
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

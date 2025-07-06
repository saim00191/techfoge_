import type { ContactInfoProps } from "@/types/Contact"

export const ContactInfo = ({ visibleSections, contactInfo, sectionRefs }: ContactInfoProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={(el) => {
            sectionRefs.current.info = el
          }}
          data-section="info"
          className={`transition-all duration-1000 ease-out ${
            visibleSections.has("info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    visibleSections.has("info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500">
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={28} className="text-[#00D1FF]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative text-center">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D1FF] transition-colors duration-300">
                        {info.title}
                      </h3>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-[#D1D5DB] text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

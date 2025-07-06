import type { PrivacySectionsProps } from "@/types/Privacy"

export const PrivacySections = ({ privacySections, visibleSections, sectionRefs }: PrivacySectionsProps) => {
  return (
    <>
      {privacySections.map((section, sectionIndex) => (
        <section key={section.id} className="relative z-10 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div
              ref={(el) => {
                sectionRefs.current[section.id] = el
              }}
              data-section={section.id}
              className={`transition-all duration-1000 ease-out ${
                visibleSections.has(section.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                    <section.icon size={32} className="text-[#00D1FF]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h2>
                </div>
              </div>

              {/* Content Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {section.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has(section.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${itemIndex * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-6 h-full hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {item.subtitle}
                        </h3>
                        <p className="text-[#D1D5DB] leading-relaxed text-sm">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

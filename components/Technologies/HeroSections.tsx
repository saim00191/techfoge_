import type { HeroSectionProps } from "@/types/Technology"

export const HeroSection = ({ isLoaded, totalTechnologies, techCategories, averageProficiency }: HeroSectionProps) => {
  return (
    <section className="relative z-10 pt-40 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div
          className={`mb-6 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative">
            Our Technology Stack
            <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
          </h1>
        </div>

        {/* Enhanced Subtitle */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
            Cutting-edge technologies powering innovation across web, AI, design, and beyond
          </p>
        </div>

        {/* Enhanced Tech Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">{totalTechnologies}+</div>
            <div className="text-sm md:text-base text-[#D1D5DB]">Technologies</div>
          </div>
          <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">{techCategories.length}</div>
            <div className="text-sm md:text-base text-[#D1D5DB]">Categories</div>
          </div>
          <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">{averageProficiency}%</div>
            <div className="text-sm md:text-base text-[#D1D5DB]">Avg Proficiency</div>
          </div>
          <div className="bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-6 hover:border-[#00D1FF]/50 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-[#00D1FF] mb-2">200+</div>
            <div className="text-sm md:text-base text-[#D1D5DB]">Projects</div>
          </div>
        </div>
      </div>
    </section>
  )
}

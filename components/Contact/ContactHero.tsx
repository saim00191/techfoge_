import type { ContactHeroProps } from "@/types/Contact"

export const ContactHero = ({ isLoaded }: ContactHeroProps) => {
  return (
    <section className="relative z-10 pt-40 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <div
          className={`mb-6 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white relative">
            Contact
            {/* Neon Glow Effects */}
            <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
            <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
            Let&apos;s connect — we&apos;d love to hear from you.
          </p>
        </div>

        {/* Decorative Elements */}
        <div
          className={`flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}

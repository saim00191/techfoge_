"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import ParticleSystem from "./ParticlesSystem"
import CircuitPattern from "./CircuitPattern"
import GlowingOrb from "./GlowingOrb"

const HeroBanner = () => {
  const { scrollYProgress } = useScroll()
  const bannerY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"])

  return (
    <>
      {/* SECTION 1: About Banner */}
      <motion.section className="relative flex items-center justify-center" style={{ y: bannerY }}>
        {/* Background Elements */}
        <CircuitPattern />
        <ParticleSystem />
        {/* Glowing Orbs */}
        <GlowingOrb size="w-40 h-40" position="top-20 left-16" delay={0} />
        <GlowingOrb size="w-32 h-32" position="top-32 right-20" delay={1} />
        <GlowingOrb size="w-48 h-48" position="bottom-20 left-1/4" delay={2} color="#66E5FF" />
      </motion.section>

      <section className="relative z-10 pt-20 pb-16 px-4 w-full">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading - CAREERS */}
          <div className={`mb-6 transition-all duration-1000 ease-out`}>
            <h1 className="text-6xl md:text-7xl font-bold text-white relative">
              Who We Are?
              {/* Neon Glow Effects */}
              <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
              <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
            </h1>
          </div>
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
            Explore our ideas, announcements, and tech discoveries as we shape the future of intelligent software
            solutions.
          </p>
          {/* Decorative Elements */}
          <div
            className={`flex justify-center items-center gap-4 mb-12 mt-12 transition-all duration-1000 ease-out delay-500`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner

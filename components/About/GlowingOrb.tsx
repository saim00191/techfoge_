"use client"

import { motion } from "framer-motion"

interface GlowingOrbProps {
  size?: string
  position?: string
  delay?: number
  color?: string
}

const GlowingOrb = ({
  size = "w-32 h-32",
  position = "top-20 left-10",
  delay = 0,
  color = "#00D1FF",
}: GlowingOrbProps) => (
  <motion.div
    className={`absolute ${position} ${size} rounded-full blur-3xl pointer-events-none`}
    style={{ backgroundColor: `${color}20` }}
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  />
)

export default GlowingOrb

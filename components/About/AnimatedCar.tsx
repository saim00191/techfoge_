"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { Car } from "lucide-react"

interface AnimatedCarProps {
  isVisible: boolean
}

const AnimatedCar = ({ isVisible }: AnimatedCarProps) => {
  const controls = useAnimation()

  useEffect(() => {
    if (isVisible) {
      const animateSequence = async () => {
        // Start from off-screen top-left
        await controls.start({
          x: -100,
          y: -50,
          opacity: 0,
          transition: { duration: 0 },
        })
        // Fade in and move to starting position (from Europe/Middle East area)
        await controls.start({
          x: 200,
          y: 120,
          opacity: 1,
          transition: { duration: 1.2, ease: "easeOut" },
        })
        // Travel across the map to Hyderabad position (center of the map)
        await controls.start({
          x: "50%", // Center horizontally (Hyderabad location)
          y: "50%", // Center vertically (Hyderabad location)
          transition: {
            duration: 4,
            ease: "easeInOut",
            type: "tween",
          },
        })
        // Pulse effect when reaching destination
        await controls.start({
          scale: [1, 1.3, 1, 1.2, 1],
          transition: {
            duration: 1.5,
            repeat: 3,
            ease: "easeInOut",
          },
        })
        // Final settling animation
        await controls.start({
          y: [0, -8, 0],
          transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        })
      }
      animateSequence()
    }
  }, [isVisible, controls])

  return (
    <motion.div
      className="absolute z-30 pointer-events-none"
      animate={controls}
      initial={{ x: -100, y: -50, opacity: 0 }}
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <motion.div
        className="relative"
        animate={{
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Car size={32} className="text-[#FFD700] drop-shadow-2xl filter brightness-110" />
        </motion.div>
        {/* Multiple glow layers for enhanced effect */}
        <motion.div
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#FFD700]/60 rounded-full blur-md"
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleX: [1, 1.4, 1],
            scaleY: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 w-16 h-16 -translate-x-2 -translate-y-2 border-2 border-[#FFD700]/40 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Pulsing background circle */}
        <motion.div
          className="absolute inset-0 w-20 h-20 -translate-x-4 -translate-y-4 bg-[#FFD700]/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default AnimatedCar

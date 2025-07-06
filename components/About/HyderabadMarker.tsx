"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

interface HyderabadMarkerProps {
  isVisible: boolean
}

const HyderabadMarker = ({ isVisible }: HyderabadMarkerProps) => {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Main marker pin */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <MapPin size={40} className="text-[#FFD700] drop-shadow-lg" />
        {/* Pulsing rings around marker */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-[#FFD700]/60 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#FFD700]/80 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            delay: 0.5,
          }}
        />
        {/* Glow effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#FFD700]/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      {/* Location label */}
      <motion.div
        className="absolute -bottom-12 right-[-10%] xms:right-0 xms:left-1/2 transform -translate-x-1/2 bg-[#020A15]/90 backdrop-blur-sm border border-[#FFD700]/40 rounded-lg px-4 py-2 min-w-max"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="text-[#FFD700] font-bold text-sm">Hyderabad, Pakistan</div>
        <div className="text-white text-xs">Tech Foge Headquarters</div>
      </motion.div>
    </motion.div>
  )
}

export default HyderabadMarker

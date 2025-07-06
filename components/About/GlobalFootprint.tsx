"use client"

import { motion } from "framer-motion"
import GoogleMapsWorldMap from "./GoogleMapsWorldMap"

const GlobalFootprint = () => {
  return (
    <motion.section
      className="relative py-20 px-4 bg-[#020A15] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020A15] via-[#041018] to-[#020A15]" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                "0 0 10px rgba(0, 209, 255, 0.3)",
                "0 0 20px rgba(0, 209, 255, 0.6)",
                "0 0 10px rgba(0, 209, 255, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            Global Footprint
          </motion.h2>
          <motion.p
            className="text-lg text-[#D1D5DB] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our worldwide presence enables us to serve clients across different time zones and cultures
          </motion.p>
        </motion.div>
        {/* Google Maps Container */}
        <GoogleMapsWorldMap />
        {/* Bottom decorative line */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default GlobalFootprint

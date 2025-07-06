"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import FloatingParticles from "./FloatingParticles"
import AnimatedCar from "./AnimatedCar"
import HyderabadMarker from "./HyderabadMarker"

const GoogleMapsWorldMap = () => {
  const [mapVisible, setMapVisible] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <motion.div
      className="relative w-full h-[500px] bg-gradient-to-b from-[#020A15] to-[#0A1525] rounded-2xl overflow-hidden border border-[#00D1FF]/20 shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onViewportEnter={() => setMapVisible(true)}
    >
      {/* Floating Particles */}
      <FloatingParticles />
      {/* Google Maps Iframe */}
      <motion.iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.16999866092!2d68.28450533896759!3d25.383703646846616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc00bbc183d41e285!2sHyderabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1750784047191!5m2!1sen!2s"
        className="w-full h-full rounded-2xl"
        style={{
          border: 0,
          filter: "hue-rotate(200deg) saturate(0.8) brightness(0.7) contrast(1.2)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setMapLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: mapVisible ? 1 : 0 }}
        transition={{ duration: 1.5 }}
      />
      {/* Map Overlay for Dark Theme */}
      <div className="absolute inset-0 bg-[#020A15]/20 rounded-2xl pointer-events-none" />
      {/* Animated Car */}
      <AnimatedCar isVisible={mapVisible && mapLoaded} />
      {/* Hyderabad Marker */}
      <HyderabadMarker isVisible={mapVisible} />
      {/* Corner glow effects */}
      <motion.div
        className="absolute top-4 left-4 w-24 h-24 bg-[#00D1FF]/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-20 h-20 bg-[#FFD700]/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 209, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 209, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </motion.div>
  )
}

export default GoogleMapsWorldMap

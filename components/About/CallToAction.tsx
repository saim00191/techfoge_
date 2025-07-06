"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const CallToAction = () => {
  return (
    <motion.section
      className="relative py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Background Orb */}
        <motion.div
          className="absolute inset-0 bg-[#00D1FF]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Want to work with us?</h2>
          <p className="text-lg text-[#D1D5DB] mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <motion.button
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] font-semibold text-lg rounded-full hover:bg-[#00D1FF] hover:text-[#020A15] transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Let's Build Something Great</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0, 209, 255, 0)",
                  "0 0 0 20px rgba(0, 209, 255, 0.1)",
                  "0 0 0 0 rgba(0, 209, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CallToAction

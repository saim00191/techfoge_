"use client"

import { motion } from "framer-motion"
import { Eye } from "lucide-react"

const MissionVision = () => {
  return (
    <motion.section
      className="relative py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 relative"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 209, 255, 0.5)",
                    "0 0 20px rgba(0, 209, 255, 0.8)",
                    "0 0 10px rgba(0, 209, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Our Mission
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#00D1FF] via-[#66E5FF] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.h2>
              <p className="text-lg text-[#D1D5DB] leading-relaxed">
                To revolutionize how businesses interact with technology by creating intelligent, intuitive software
                solutions that empower human potential and drive meaningful innovation across industries.
              </p>
            </div>
            <motion.div
              className="bg-gradient-to-r from-[#00D1FF]/10 via-[#00D1FF]/20 to-transparent p-6 rounded-2xl border border-[#00D1FF]/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02, borderColor: "rgba(0, 209, 255, 0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-xl font-medium text-white italic">
                "We don't just build software; we craft digital experiences that transform possibilities into
                realities."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 relative"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(102, 229, 255, 0.5)",
                    "0 0 20px rgba(102, 229, 255, 0.8)",
                    "0 0 10px rgba(102, 229, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                Our Vision
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#66E5FF] via-[#00D1FF] to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h2>
              <p className="text-lg text-[#D1D5DB] leading-relaxed">
                To be the global leader in AI-powered software solutions, creating a future where technology seamlessly
                integrates with human creativity to solve the world's most complex challenges.
              </p>
            </div>
            <motion.div
              className="relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-24 h-24 bg-[#66E5FF]/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-[#66E5FF]/30">
                <Eye size={48} className="text-[#66E5FF]" />
              </div>
              <motion.div
                className="absolute inset-0 bg-[#66E5FF]/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default MissionVision

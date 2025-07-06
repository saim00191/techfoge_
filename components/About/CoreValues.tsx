"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Shield, Users, Zap, Heart } from "lucide-react"

const CoreValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI and emerging technologies",
      color: "#FFD700",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency and ethical business practices",
      color: "#00D1FF",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering teamwork and strong partnerships with our clients",
      color: "#FF6B6B",
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Leveraging artificial intelligence to solve complex challenges",
      color: "#9D4EDD",
    },
    {
      icon: Heart,
      title: "User-First",
      description: "Designing experiences that put human needs at the center",
      color: "#FF8C42",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake",
      color: "#06FFA5",
    },
  ]

  return (
    <motion.section
      className="relative py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Values</h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            The fundamental principles that guide our decisions and shape our company culture
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${value.color}20, transparent)`,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <div className="relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-xl p-8 group-hover:border-[#00D1FF]/50 transition-all duration-500 h-full">
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: `${value.color}20`,
                        border: `2px solid ${value.color}40`,
                      }}
                    >
                      <IconComponent size={28} style={{ color: value.color }} />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-[#00D1FF] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#D1D5DB] text-center leading-relaxed">{value.description}</p>
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: 1,
                      boxShadow: `0 0 30px ${value.color}40`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default CoreValues

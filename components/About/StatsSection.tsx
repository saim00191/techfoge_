"use client"

import { motion } from "framer-motion"
import { Users, Repeat, Headphones, CheckCircle } from "lucide-react"

const StatsSection = () => {
  const stats = [
    {
      number: "30+",
      label: "Team Members",
      icon: Users,
    },
    {
      number: "80%",
      label: "Client Retention",
      icon: Repeat,
    },
    {
      number: "24/7",
      label: "Support",
      icon: Headphones,
    },
    {
      number: "150+",
      label: "Projects Completed",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              {/* Icon Container */}
              <motion.div
                className="mb-4 flex justify-center"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                <motion.div
                  className="relative w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 transition-colors duration-300 border border-[#00D1FF]/20"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0, 209, 255, 0)",
                      "0 0 0 8px rgba(0, 209, 255, 0.1)",
                      "0 0 0 0 rgba(0, 209, 255, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.4,
                  }}
                >
                  <IconComponent size={24} className="text-[#00D1FF]" />
                  {/* Inner glow */}
                  <motion.div
                    className="absolute inset-0 bg-[#00D1FF]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
              {/* Stats Number */}
              <motion.div
                className="text-4xl font-bold text-[#00D1FF] mb-2"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(0, 209, 255, 0.5)",
                    "0 0 15px rgba(0, 209, 255, 0.8)",
                    "0 0 5px rgba(0, 209, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {stat.number}
              </motion.div>
              {/* Stats Label */}
              <div className="text-[#D1D5DB] font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-[#00D1FF]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default StatsSection

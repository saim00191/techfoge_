"use client"

import { motion } from "framer-motion"
import { Cpu, LayoutDashboard, Expand, ShieldCheck } from "lucide-react"

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "We build with the latest tools to keep your business ahead.",
    },
    {
      icon: LayoutDashboard,
      title: "User-Centric Design",
      description: "Our solutions focus on smooth, intuitive user experiences.",
    },
    {
      icon: Expand,
      title: "Agile & Scalable",
      description: "Flexible systems that grow with your needs.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Expertise",
      description: "A proven team delivering quality software, every time.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            What sets us apart in the competitive technology landscape
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <motion.div
                key={index}
                className="group relative text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative mb-6 flex justify-center"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="w-20 h-20 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 transition-colors duration-300"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(0, 209, 255, 0)",
                          "0 0 0 15px rgba(0, 209, 255, 0.1)",
                          "0 0 0 0 rgba(0, 209, 255, 0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.4,
                      }}
                    >
                      <IconComponent size={32} className="text-[#00D1FF]" />
                    </motion.div>
                    {/* Corner pulse dots */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-[#66E5FF] rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D1FF] transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-[#D1D5DB] leading-relaxed mb-4">{advantage.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default WhyChooseUs

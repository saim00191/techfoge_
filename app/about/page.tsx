"use client"
import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import {
  Target,
  Lightbulb,
  Shield,
  Users,
  Zap,
 Repeat, Headphones, CheckCircle ,
  Heart,
  Eye,
  ArrowRight,
  Car,
  MapPin,
} from "lucide-react"

import { Cpu, LayoutDashboard, Expand, ShieldCheck } from "lucide-react"

// Particle System Component
const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 3 + 1
        this.color = Math.random() > 0.5 ? "#00D1FF" : "#66E5FF"
        this.opacity = Math.random() * 0.8 + 0.2
        this.life = Math.random() * 200 + 100
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life--

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas!.width) this.vx *= -1
        if (this.y <= 0 || this.y >= canvas!.height) this.vy *= -1

        // Fade out as life decreases
        this.opacity = Math.max(0, this.life / 200)
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 20
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      isDead() {
        return this.life <= 0
      }
    }

    const particles: Particle[] = []

    // Create initial particles
    for (let i = 0; i < 35; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].isDead()) {
          particles.splice(i, 1)
          particles.push(new Particle()) // Replace with new particle
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

// Circuit Pattern SVG Component
const CircuitPattern = () => (
  <div className="absolute inset-0 opacity-10">
    <svg className="w-full h-full" viewBox="0 0 1200 800">
      <defs>
        <pattern id="circuit-about" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.8" />
          <circle cx="20" cy="20" r="3" fill="#00D1FF" />
          <circle cx="100" cy="20" r="3" fill="#00D1FF" />
          <circle cx="20" cy="100" r="3" fill="#00D1FF" />
          <circle cx="100" cy="100" r="3" fill="#00D1FF" />
          <path d="M20 60h80M60 20v80" stroke="#00D1FF" strokeWidth="0.5" />
          <path d="M40 40h40v40h-40z" fill="none" stroke="#66E5FF" strokeWidth="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-about)" />
    </svg>
  </div>
)

// Glowing Orb Component
const GlowingOrb = ({ size = "w-32 h-32", position = "top-20 left-10", delay = 0, color = "#00D1FF" }) => (
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

// Animated Car Component for Google Maps
const AnimatedCar = ({ isVisible }: { isVisible: boolean }) => {
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

// Hyderabad Marker Component
const HyderabadMarker = ({ isVisible }: { isVisible: boolean }) => {
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

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00D1FF]/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}

// Enhanced Google Maps World Map Component
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

export default function AboutTechFoge() {
  const { scrollYProgress } = useScroll()
  const bannerY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"])

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
    <div className="py-12 bg-[#020A15] relative overflow-hidden font-['Poppins']">
      {/* SECTION 1: About Banner */}
      <motion.section className="relative  flex items-center justify-center" style={{ y: bannerY }}>
        {/* Background Elements */}
        <CircuitPattern />
        <ParticleSystem />

        {/* Glowing Orbs */}
        <GlowingOrb size="w-40 h-40" position="top-20 left-16" delay={0} />
        <GlowingOrb size="w-32 h-32" position="top-32 right-20" delay={1} />
        <GlowingOrb size="w-48 h-48" position="bottom-20 left-1/4" delay={2} color="#66E5FF" />
      </motion.section>

      <section className="relative z-10 pt-20 pb-16 px-4 w-full">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading - CAREERS */}
          <div className={`mb-6 transition-all duration-1000 ease-out `}>
            <h1 className="text-6xl md:text-7xl   font-bold text-white relative">
              Who We Are?
              {/* Neon Glow Effects */}
              <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
              <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
            Explore our ideas, announcements, and tech discoveries as we shape the future of intelligent software
            solutions.
          </p>

          {/* Decorative Elements */}
          <div
            className={`flex justify-center items-center gap-4 mb-12 mt-12 transition-all duration-1000 ease-out delay-500`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2: Our Mission / Vision */}
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
                  To be the global leader in AI-powered software solutions, creating a future where technology
                  seamlessly integrates with human creativity to solve the world's most complex challenges.
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

      {/* SECTION 3: Core Values */}
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

      {/* SECTION 4: Why Choose Us */}
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

     
      {/* SECTION 5: Call to Action */}
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

       <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
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
].map((stat, index) => {
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

      {/* SECTION 6: Global Footprint with Google Maps */}
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

          {/* Office Stats */}
        

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
    </div>
  )
}

"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { Linkedin, Twitter, Github, Instagram, Youtube, Mail, Briefcase } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function CareersHeroBannerPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const particleCanvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation system
  useEffect(() => {
    const canvas = particleCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? "#00D1FF" : "#66E5FF",
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
      bgColor: "hover:bg-[#0077B5]/20",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter/X",
      color: "hover:text-[#1DA1F2]",
      bgColor: "hover:bg-[#1DA1F2]/20",
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      color: "hover:text-[#333]",
      bgColor: "hover:bg-white/20",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-[#E4405F]",
      bgColor: "hover:bg-[#E4405F]/20",
    },
    {
      icon: Youtube,
      href: "#",
      label: "YouTube",
      color: "hover:text-[#FF0000]",
      bgColor: "hover:bg-[#FF0000]/20",
    },
    {
      icon: Mail,
      href: "#",
      label: "Email",
      color: "hover:text-[#00D1FF]",
      bgColor: "hover:bg-[#00D1FF]/20",
    },
  ]

  return (
    <div className={` bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="#00D1FF" />
              <circle cx="100" cy="20" r="2" fill="#00D1FF" />
              <circle cx="20" cy="100" r="2" fill="#00D1FF" />
              <circle cx="100" cy="100" r="2" fill="#00D1FF" />
              <path d="M20 60h80M60 20v80" stroke="#00D1FF" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#00D1FF]/15 rounded-full blur-2xl animate-pulse-glow-delayed" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#00D1FF]/8 rounded-full blur-3xl animate-pulse-glow-slow" />

      {/* Careers Badge */}
      <div className="fixed top-8 right-8 z-50">
        <div className="relative">
          <div className="bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-full font-bold text-sm animate-pulse-badge">
            <span className="flex items-center gap-2">
              <Briefcase size={16} />
              Careers
            </span>
          </div>
          <div className="absolute inset-0 bg-[#00D1FF]/30 rounded-full blur-lg animate-pulse" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        {/* Hero Section - Contact Page Style */}
        <section className="relative z-10 pt-20 pb-16 px-4 w-full">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Heading - CAREERS */}
            <div
              className={`mb-6 transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white relative">
                Careers
                {/* Neon Glow Effects */}
                <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
                <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
                Join our innovative team — opportunities are coming soon.
              </p>
            </div>

            {/* Decorative Elements */}
            <div
              className={`flex justify-center items-center gap-4 mb-12 transition-all duration-1000 ease-out delay-500 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
              <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker">
              JOBS/INTERNSHIPS
              {/* Text glow effects */}
              <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
                JOBS/INTERNSHIPS
              </div>
              <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-glow-pulse-slow">
                JOBS/INTERNSHIPS
              </div>
            </h2>

            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00D1FF] animate-coming-soon-glow">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Follow Us Section */}
        <div
          className={`transition-all duration-1000 ease-out delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 animate-fade-in">Follow us on</h3>

            {/* Social Icons Grid */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#00D1FF]/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#00D1FF]/60 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] ${social.bgColor} animate-float`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationDuration: `${3 + index * 0.5}s`,
                    }}
                    aria-label={social.label}
                  >
                    {/* Icon */}
                    <IconComponent
                      size={24}
                      className={`text-[#00D1FF] transition-all duration-300 group-hover:scale-110 ${social.color}`}
                    />

                    {/* Glowing background effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-[#00D1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/0 group-hover:border-[#00D1FF]/40 transition-all duration-300 animate-border-glow" />

                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1 left-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                      <div className="absolute top-1 right-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200" />
                      <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-400" />
                      <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-600" />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes neon-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes neon-pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes text-flicker {
          0%, 100% {
            opacity: 1;
            text-shadow: 0 0 10px #00d1ff, 0 0 20px #00d1ff, 0 0 30px #00d1ff;
          }
          2% {
            opacity: 0.8;
          }
          4% {
            opacity: 1;
          }
          8% {
            opacity: 0.9;
          }
          10% {
            opacity: 1;
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 15px #00d1ff, 0 0 25px #00d1ff, 0 0 35px #00d1ff;
          }
          52% {
            opacity: 0.85;
          }
          54% {
            opacity: 1;
          }
        }

        @keyframes coming-soon-glow {
          0%, 100% {
            text-shadow: 0 0 15px #00d1ff, 0 0 25px #00d1ff, 0 0 35px #00d1ff;
            opacity: 0.9;
          }
          50% {
            text-shadow: 0 0 20px #00d1ff, 0 0 35px #00d1ff, 0 0 50px #00d1ff;
            opacity: 1;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes glow-pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-glow-delayed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.15);
          }
        }

        @keyframes pulse-glow-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-badge {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes border-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 209, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 209, 255, 0.4);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }

        .animate-neon-pulse-slow {
          animation: neon-pulse-slow 4s ease-in-out infinite;
        }

        .animate-text-flicker {
          animation: text-flicker 4s ease-in-out infinite;
        }

        .animate-coming-soon-glow {
          animation: coming-soon-glow 2.5s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-glow-pulse-slow {
          animation: glow-pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 5s ease-in-out infinite 1s;
        }

        .animate-pulse-glow-slow {
          animation: pulse-glow-slow 6s ease-in-out infinite;
        }

        .animate-pulse-badge {
          animation: pulse-badge 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 2s ease-out;
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}

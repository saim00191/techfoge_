"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import {
  Headphones,
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  Monitor,
  Target,
  Users,
  Award,
  Settings,
  Wrench,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import SupportImage from '@/images/technical-support.png'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function TechnicalSupportServices() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]))
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const services = [
    {
      icon: Headphones,
      title: "24/7 Help Desk Support",
      description:
        "Round-the-clock technical assistance with multi-channel support including phone, email, chat, and remote desktop to resolve your IT issues quickly and efficiently.",
      color: "#00D1FF",
    },
    {
      icon: Wrench,
      title: "System Maintenance & Monitoring",
      description:
        "Proactive system monitoring, preventive maintenance, and performance optimization to ensure your IT infrastructure runs smoothly and efficiently.",
      color: "#00D1FF",
    },
    {
      icon: Monitor,
      title: "Network & Infrastructure Support",
      description:
        "Comprehensive network management, server administration, and infrastructure support to maintain optimal performance and security of your IT environment.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Help Desk Services",
      icon: Headphones,
      services: [
        "24/7 Technical Support",
        "Multi-Channel Support (Phone/Email/Chat)",
        "Remote Desktop Assistance",
        "Incident Management",
        "User Account Management",
      ],
    },
    {
      category: "System Administration",
      icon: Wrench,
      services: [
        "Server Management & Maintenance",
        "System Monitoring & Alerts",
        "Software Installation & Updates",
        "Backup & Recovery Solutions",
        "Performance Optimization",
      ],
    },
    {
      category: "Network Support",
      icon: Settings,
      services: [
        "Network Configuration & Setup",
        "Firewall Management",
        "VPN Setup & Support",
        "Network Security Monitoring",
        "Bandwidth Optimization",
      ],
    },
  ]

  const supportProcess = [
    {
      step: "01",
      title: "Issue Identification",
      description:
        "We quickly identify and categorize technical issues through our advanced ticketing system and diagnostic tools.",
      icon: Target,
    },
    {
      step: "02",
      title: "Rapid Response",
      description:
        "Our certified technicians provide immediate response with remote access tools and comprehensive troubleshooting.",
      icon: Headphones,
    },
    {
      step: "03",
      title: "Problem Resolution",
      description:
        "Systematic problem-solving using proven methodologies, documentation, and escalation procedures when needed.",
      icon: Settings,
    },
    {
      step: "04",
      title: "Follow-up & Prevention",
      description:
        "Post-resolution follow-up, documentation updates, and preventive measures to avoid future occurrences.",
      icon: Rocket,
    },
  ]

  const features = [
    "24/7 technical support availability",
    "Multi-channel support options",
    "Remote desktop assistance",
    "Proactive system monitoring",
    "Rapid response times (SLA)",
    "Certified technical experts",
    "Comprehensive documentation",
    "Escalation management system",
  ]

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
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

      {/* Services Badge */}
      <div className="fixed top-8 right-8 z-50">
        <div className="relative">
          <div className="bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-full font-bold text-sm animate-pulse-badge">
            <span className="flex items-center gap-2">
              <Headphones size={16} />
              Technical Support Services
            </span>
          </div>
          <div className="absolute inset-0 bg-[#00D1FF]/30 rounded-full blur-lg animate-pulse" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white relative mb-4">
              Technical Support & IT Services
              {/* Neon Glow Effects */}
              <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
              <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
            </h1>
          </div>

          {/* Hero Headline */}
          <div
            className={`mb-6 transition-all duration-1000 ease-out delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-5xl mx-auto">
              Expert Technical Support That Keeps Your Business Running Smoothly 24/7
            </h2>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">
              We provide comprehensive technical support services including 24/7 help desk, system monitoring, network
              management, and proactive maintenance to ensure your IT infrastructure operates at peak performance.
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`mb-12 transition-all duration-1000 ease-out delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group relative bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                <Rocket size={20} className="group-hover:animate-pulse" />
                Get Technical Support
              </span>
              <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div
            className={`flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
            <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.services = el)}
            data-section="services"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Support Services</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                Comprehensive technical support solutions that ensure your IT systems run efficiently and your team
                stays productive.
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-[#D1D5DB] leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Tools Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.tech = el)}
            data-section="tech"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("tech") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Support Tech Stack</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                We use industry-leading tools and platforms to deliver exceptional technical support and IT services.
              </p>
            </div>

            {/* Help Desk Software */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">🎧 Help Desk Software</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Zendesk", icon: "🎫", description: "Customer service platform" },
                  { name: "ServiceNow", icon: "🔧", description: "IT service management" },
                  { name: "Freshdesk", icon: "🍃", description: "Cloud-based help desk" },
                  { name: "Jira Service Management", icon: "🔷", description: "Atlassian ITSM solution" },
                  { name: "ManageEngine", icon: "⚙️", description: "IT management suite" },
                  { name: "BMC Remedy", icon: "🏥", description: "Enterprise service management" },
                  { name: "Spiceworks", icon: "🌶️", description: "Free help desk software" },
                  { name: "osTicket", icon: "🎟️", description: "Open source ticketing" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Remote Support Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">🖥️ Remote Support Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "TeamViewer", icon: "👥", description: "Remote access & support" },
                  { name: "AnyDesk", icon: "🖱️", description: "Fast remote desktop" },
                  { name: "LogMeIn", icon: "🔐", description: "Remote access solution" },
                  { name: "Chrome Remote Desktop", icon: "🌐", description: "Google remote access" },
                  { name: "Windows Remote Desktop", icon: "🪟", description: "Microsoft RDP" },
                  { name: "VNC Connect", icon: "🔗", description: "Cross-platform remote access" },
                  { name: "Splashtop", icon: "💧", description: "Remote desktop software" },
                  { name: "ConnectWise Control", icon: "🎮", description: "Remote support platform" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring & Management */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">📊 Monitoring & Management</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Nagios", icon: "👁️", description: "Infrastructure monitoring" },
                  { name: "Zabbix", icon: "⚡", description: "Network monitoring" },
                  { name: "PRTG", icon: "📈", description: "Network monitoring tool" },
                  { name: "SolarWinds", icon: "☀️", description: "IT management software" },
                  { name: "Datadog", icon: "🐕", description: "Cloud monitoring" },
                  { name: "New Relic", icon: "🔮", description: "Application monitoring" },
                  { name: "Splunk", icon: "🔍", description: "Data analytics platform" },
                  { name: "Grafana", icon: "📊", description: "Monitoring & observability" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${200 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">💬 Communication Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Slack", icon: "💬", description: "Team communication" },
                  { name: "Microsoft Teams", icon: "👥", description: "Collaboration platform" },
                  { name: "Discord", icon: "🎮", description: "Voice & text chat" },
                  { name: "Zoom", icon: "📹", description: "Video conferencing" },
                  { name: "Skype", icon: "📞", description: "Voice & video calls" },
                  { name: "Google Meet", icon: "🎥", description: "Video meetings" },
                  { name: "WebEx", icon: "🌐", description: "Cisco collaboration" },
                  { name: "GoToMeeting", icon: "🚀", description: "Online meetings" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Administration */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">⚙️ System Administration</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Windows Server", icon: "🪟", description: "Microsoft server OS" },
                  { name: "Linux", icon: "🐧", description: "Open source OS" },
                  { name: "VMware", icon: "☁️", description: "Virtualization platform" },
                  { name: "Docker", icon: "🐳", description: "Containerization" },
                  { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
                  { name: "Active Directory", icon: "📁", description: "Directory service" },
                  { name: "PowerShell", icon: "💙", description: "Command-line shell" },
                  { name: "Bash", icon: "🐚", description: "Unix shell" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${400 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Tools */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">🌐 Network Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Wireshark", icon: "🦈", description: "Network protocol analyzer" },
                  { name: "Nmap", icon: "🗺️", description: "Network discovery tool" },
                  { name: "PuTTY", icon: "🔧", description: "SSH & Telnet client" },
                  { name: "Cisco Tools", icon: "🔗", description: "Network equipment tools" },
                  { name: "pfSense", icon: "🛡️", description: "Open source firewall" },
                  { name: "Nessus", icon: "🔍", description: "Vulnerability scanner" },
                  { name: "OpenVPN", icon: "🔐", description: "VPN solution" },
                  { name: "SNMP", icon: "📊", description: "Network management protocol" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${500 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation & Knowledge Base */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">📚 Documentation & Knowledge Base</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {[
                  { name: "Confluence", icon: "🌊", description: "Team collaboration" },
                  { name: "Notion", icon: "📝", description: "All-in-one workspace" },
                  { name: "GitBook", icon: "📖", description: "Documentation platform" },
                  { name: "MediaWiki", icon: "📄", description: "Wiki software" },
                  { name: "SharePoint", icon: "🔗", description: "Microsoft collaboration" },
                  { name: "OneNote", icon: "📓", description: "Digital notebook" },
                  { name: "Evernote", icon: "🐘", description: "Note-taking app" },
                  { name: "Obsidian", icon: "💎", description: "Knowledge management" },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("tech")
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-10 scale-75"
                    }`}
                    style={{ transitionDelay: `${600 + index * 50}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-4 hover:border-[#00D1FF]/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.2)] transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <p className="text-white font-semibold text-sm mb-1">{tech.name}</p>
                        <p className="text-[#D1D5DB] text-xs opacity-80">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.why = el)}
            data-section="why"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("why") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                We deliver exceptional technical support through expertise, reliability, and commitment to your success.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Features List */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 transition-all duration-500 ease-out ${
                        visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle size={24} className="text-[#00D1FF]" />
                      </div>
                      <p className="text-[#D1D5DB] text-lg">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("why") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-4 mb-8">
                      <Users size={48} className="text-[#00D1FF]" />
                      <Award size={48} className="text-[#00D1FF]" />
                      <Target size={48} className="text-[#00D1FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Expert Technical Support Team</h3>
                    <p className="text-[#D1D5DB] leading-relaxed">
                      Our certified technical support specialists combine deep technical knowledge with excellent
                      customer service skills to resolve issues quickly, minimize downtime, and keep your business
                      operations running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.process = el)}
            data-section="process"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Support Process</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                A systematic approach that ensures rapid issue resolution and exceptional customer satisfaction.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportProcess.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-6 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#00D1FF] rounded-full flex items-center justify-center text-[#020A15] font-bold text-lg">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className="mb-6 mt-4">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-[#D1D5DB] leading-relaxed text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.detailed = el)}
            data-section="detailed"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("detailed") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Comprehensive Support Solutions
              </h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                From help desk to system administration, we cover every aspect of technical support and IT management.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {detailedServices.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("detailed") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent size={28} className="text-[#00D1FF]" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#00D1FF] transition-colors duration-300">
                          {category.category}
                        </h3>
                        <ul className="space-y-3">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-center gap-3">
                              <CheckCircle size={16} className="text-[#00D1FF] flex-shrink-0" />
                              <span className="text-[#D1D5DB] text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support Image Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current.image = el)}
            data-section="image"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("image") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("image") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Reliable Technical Support That Keeps Your Business Operations Running Seamlessly
                </h2>
                <p className="text-lg text-[#D1D5DB] mb-8 leading-relaxed">
                  Our technical support team provides comprehensive IT assistance, proactive monitoring, and rapid issue
                  resolution to ensure your technology infrastructure supports your business goals without interruption.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Zap size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Rapid Response</h4>
                      <p className="text-[#D1D5DB] text-sm">Quick issue identification & resolution</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Wrench size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Proactive Maintenance</h4>
                      <p className="text-[#D1D5DB] text-sm">Preventive care & system optimization</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <TrendingUp size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Performance Monitoring</h4>
                      <p className="text-[#D1D5DB] text-sm">Continuous system health tracking</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div
                className={`transition-all duration-700 ease-out ${
                  visibleSections.has("image") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/20 via-transparent to-[#00D1FF]/20 rounded-2xl blur-xl"></div>
                  <Image
                    src={SupportImage}
                    alt="Technical Support Center - Modern IT support workspace with multiple monitors showing system monitoring dashboards, help desk tickets, and network management tools"
                    width={600}
                    height={400}
                    className="relative rounded-2xl border border-[#00D1FF]/20 w-full h-auto shadow-[0_0_50px_rgba(0,209,255,0.1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020A15]/50 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={(el) => (sectionRefs.current.finalCta = el)}
            data-section="finalCta"
            className={`transition-all duration-1000 ease-out ${
              visibleSections.has("finalCta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Rocket size={32} className="text-[#00D1FF]" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Need Technical Support?</h3>
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
                Get expert technical support that keeps your systems running smoothly. Our team is ready to help you
                resolve issues and optimize your IT infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Get Support Now
                  </span>
                </button>
                <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Monitor size={20} />
                    View Support Plans
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-neon-pulse {
          animation: neon-pulse 3s ease-in-out infinite;
        }

        .animate-neon-pulse-slow {
          animation: neon-pulse-slow 4s ease-in-out infinite;
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
      `}</style>
    </div>
  )
}

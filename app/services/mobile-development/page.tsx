"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import {
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  Monitor,
  Target,
  Users,
  Award,
  Database,
  Shield,
  Tablet,
  Globe,
} from "lucide-react"
import Image from "next/image"
import MobileAppDevelopmentImg from '@/images/app-development.png'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function MobileAppDevelopment() {
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
      icon: Smartphone,
      title: "Native Mobile App Development",
      description:
        "Build high-performance native apps for iOS and Android with platform-specific features and optimal user experience.",
      color: "#00D1FF",
    },
    {
      icon: Globe,
      title: "Cross-Platform Development",
      description:
        "Create apps that work seamlessly on both iOS and Android with a single codebase for faster delivery.",
      color: "#00D1FF",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimize your mobile apps for lightning-fast performance, smooth animations, and efficient battery usage.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Native iOS & Android",
      icon: Smartphone,
      services: [
        "Native iOS Apps (Swift/SwiftUI)",
        "Native Android Apps (Kotlin/Jetpack Compose)",
        "Platform-specific UI/UX Design",
        "App Store Optimization",
        "Device-specific Features Integration",
      ],
    },
    {
      category: "Cross-Platform Solutions",
      icon: Globe,
      services: [
        "React Native Applications",
        "Flutter Development",
        "Ionic Framework Apps",
        "Xamarin Applications",
        "Single Codebase Maintenance",
      ],
    },
    {
      category: "Backend & Cloud Services",
      icon: Database,
      services: [
        "Mobile API Development",
        "Real-time Data Synchronization",
        "Push Notifications",
        "Cloud Storage Integration",
        "Authentication Systems",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "App Strategy & Planning",
      description: "We analyze your requirements and create a comprehensive mobile app strategy and roadmap.",
      icon: Target,
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating intuitive and engaging mobile interfaces optimized for touch interactions.",
      icon: Tablet,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your mobile app with rigorous testing across multiple devices and platforms.",
      icon: Smartphone,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "App store submission, launch support, and ongoing maintenance with regular updates.",
      icon: Rocket,
    },
  ]

  const techStack = {
    native: {
      android: [
        { name: "Kotlin", icon: "🎯", description: "Modern Android language" },
        { name: "Java", icon: "☕", description: "Traditional Android dev" },
        { name: "Android Studio", icon: "🤖", description: "Official Android IDE" },
        { name: "Android SDK", icon: "📱", description: "Android development kit" },
        { name: "Jetpack Compose", icon: "🧩", description: "Modern Android UI" },
      ],
      ios: [
        { name: "Swift", icon: "🍎", description: "Modern iOS language" },
        { name: "Objective-C", icon: "📱", description: "Traditional iOS dev" },
        { name: "Xcode", icon: "🔨", description: "Official iOS IDE" },
        { name: "iOS SDK", icon: "📲", description: "iOS development kit" },
        { name: "SwiftUI", icon: "🎨", description: "Modern iOS UI framework" },
      ],
    },
    crossPlatform: [
      { name: "React Native", icon: "⚛️", description: "JavaScript cross-platform" },
      { name: "Flutter", icon: "🎪", description: "Dart cross-platform" },
      { name: "Ionic", icon: "⚡", description: "Web-based mobile apps" },
      { name: "Xamarin", icon: "🔷", description: "C# cross-platform" },
      { name: "NativeScript", icon: "📱", description: "JavaScript native apps" },
      { name: "Expo", icon: "🚀", description: "React Native toolkit" },
    ],
    hybrid: [
      { name: "HTML", icon: "🌐", description: "Markup language" },
      { name: "CSS", icon: "🎨", description: "Styling language" },
      { name: "JavaScript", icon: "⚡", description: "Programming language" },
      { name: "Ionic", icon: "⚡", description: "Hybrid app framework" },
      { name: "Cordova", icon: "📱", description: "Mobile app platform" },
      { name: "Capacitor", icon: "🔋", description: "Native bridge" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Express.js", icon: "🚀", description: "Web framework" },
      { name: "Firebase", icon: "🔥", description: "Google mobile platform" },
      { name: "Django", icon: "🐍", description: "Python framework" },
      { name: "Flask", icon: "🌶️", description: "Python micro framework" },
      { name: "Ruby on Rails", icon: "💎", description: "Ruby framework" },
      { name: "Laravel", icon: "🎭", description: "PHP framework" },
      { name: "Supabase", icon: "⚡", description: "Open source Firebase" },
    ],
    databases: [
      { name: "SQLite", icon: "📦", description: "Local mobile database" },
      { name: "Realm", icon: "🏰", description: "Mobile database" },
      { name: "Firebase Firestore", icon: "🔥", description: "Cloud database" },
      { name: "MongoDB Atlas", icon: "🍃", description: "Cloud MongoDB" },
      { name: "Core Data", icon: "🍎", description: "iOS data framework" },
      { name: "Room DB", icon: "🤖", description: "Android database" },
    ],
    auth: [
      { name: "Firebase Auth", icon: "🔥", description: "Google authentication" },
      { name: "OAuth 2.0", icon: "🔐", description: "Authorization framework" },
      { name: "Auth0", icon: "🛡️", description: "Identity platform" },
      { name: "JWT", icon: "🎫", description: "JSON Web Tokens" },
      { name: "Apple Sign-In", icon: "🍎", description: "Apple authentication" },
      { name: "Google Sign-In", icon: "🔍", description: "Google authentication" },
    ],
    testing: [
      { name: "Jest", icon: "🃏", description: "React Native testing" },
      { name: "Espresso", icon: "☕", description: "Android UI testing" },
      { name: "XCTest", icon: "🍎", description: "iOS testing framework" },
      { name: "Detox", icon: "🧪", description: "E2E mobile testing" },
      { name: "Appium", icon: "📱", description: "Mobile automation" },
      { name: "Selenium", icon: "🕷️", description: "Web automation" },
    ],
    cicd: [
      { name: "Git", icon: "📝", description: "Version control" },
      { name: "GitHub", icon: "🐙", description: "Code hosting" },
      { name: "GitLab", icon: "🦊", description: "DevOps platform" },
      { name: "Bitbucket", icon: "🪣", description: "Atlassian Git" },
      { name: "Fastlane", icon: "🏎️", description: "iOS/Android automation" },
      { name: "Codemagic", icon: "🎩", description: "Flutter CI/CD" },
      { name: "Firebase App Distribution", icon: "🔥", description: "App distribution" },
    ],
  }

  const features = [
    "Native performance optimization",
    "Cross-platform compatibility",
    "Intuitive user interface design",
    "Secure authentication systems",
    "Real-time data synchronization",
    "Push notification integration",
    "App store optimization",
    "Offline functionality support",
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
              <Smartphone size={16} />
              Mobile Apps
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
              Mobile App Development Services
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
              Transform Your Vision Into Reality With Powerful Mobile Applications
            </h2>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">
              We specialize in crafting fast, secure, and user-friendly mobile applications for iOS and Android
              platforms.
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
                Get a Free Quote
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                Comprehensive mobile app development solutions designed to bring your ideas to life.
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

      {/* Tech Stack Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Tech Stack</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                We use cutting-edge technologies to build robust and scalable mobile applications.
              </p>
            </div>

            {/* Native Development */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center">📱 Native Mobile App Development</h3>

              {/* Android */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 text-center">🟦 Android Development</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {techStack.native.android.map((tech, index) => (
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

              {/* iOS */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 text-center">🍎 iOS Development</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {techStack.native.ios.map((tech, index) => (
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
            </div>

            {/* Other Tech Categories */}
            {Object.entries(techStack)
              .filter(([key]) => key !== "native")
              .map(([category, technologies], categoryIndex) => (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center capitalize">
                    {category === "crossPlatform"
                      ? "🔁 Cross-Platform App Development"
                      : category === "hybrid"
                        ? "🌐 Hybrid Mobile Apps"
                        : category === "backend"
                          ? "☁️ Backend for Mobile Apps"
                          : category === "databases"
                            ? "🗃️ Databases for Mobile Apps"
                            : category === "auth"
                              ? "🔐 Authentication"
                              : category === "testing"
                                ? "🧪 Testing Tools"
                                : category === "cicd"
                                  ? "🧰 Version Control & CI/CD"
                                  : category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {(technologies as any[]).map((tech, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-700 ease-out ${
                          visibleSections.has("tech")
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-10 scale-75"
                        }`}
                        style={{ transitionDelay: `${categoryIndex * 100 + index * 50}ms` }}
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
              ))}
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
                We deliver exceptional mobile experiences through expertise, innovation, and dedication.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Expert Mobile Development Team</h3>
                    <p className="text-[#D1D5DB] leading-relaxed">
                      Our experienced mobile developers combine technical expertise with creative problem-solving to
                      deliver outstanding mobile applications that drive user engagement and business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                A proven methodology that ensures successful mobile app delivery from concept to app store.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((step, index) => {
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Comprehensive Solutions</h2>
              <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
                From native apps to cross-platform solutions, we cover every aspect of modern mobile development.
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

      {/* Mobile App Development Image Section */}
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
                  Crafting Mobile Experiences That Engage Users
                </h2>
                <p className="text-lg text-[#D1D5DB] mb-8 leading-relaxed">
                  Our team combines technical expertise with user-centered design to build mobile applications that not
                  only look stunning but also deliver exceptional performance and user engagement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Zap size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Native Performance</h4>
                      <p className="text-[#D1D5DB] text-sm">Optimized for each platform's capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Smartphone size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Intuitive User Interface</h4>
                      <p className="text-[#D1D5DB] text-sm">Designed for optimal user experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Shield size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Secure & Reliable</h4>
                      <p className="text-[#D1D5DB] text-sm">Built with security and reliability in mind</p>
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
                    src={MobileAppDevelopmentImg}
                    alt="Mobile App Development - Modern mobile development workspace with smartphones, tablets, and development tools showing iOS and Android app interfaces"
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
                <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Build Your Mobile App?</h3>
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
                Transform your ideas into powerful mobile applications. Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Let's Work Together
                  </span>
                </button>
                <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Monitor size={20} />
                    View Portfolio
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

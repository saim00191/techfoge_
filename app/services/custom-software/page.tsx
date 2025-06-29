"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import {
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  Monitor,
  Target,
  Users,
  Award,
  Settings,
  Database,
  Shield,
} from "lucide-react"
import CustomSoftwareImage from "@/images/software-development.png"
import Image from "next/image"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function CustomSoftwareDevelopment() {
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
      icon: Code,
      title: "Custom Software Development",
      description:
        "Build fully customized software solutions with clean code, modern frameworks, and business-focused architecture.",
      color: "#00D1FF",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed matters. We optimize every layer to deliver lightning-fast software experiences.",
      color: "#00D1FF",
    },
    {
      icon: Settings,
      title: "Scalable Architecture",
      description: "From desktop to cloud, your software will scale seamlessly with your business growth.",
      color: "#00D1FF",
    },
  ]

  const detailedServices = [
    {
      category: "Desktop Applications",
      icon: Monitor,
      services: [
        "Cross-platform Desktop Apps",
        "Native Windows Applications",
        "macOS Applications",
        "Linux Applications",
        "Enterprise Software Solutions",
      ],
    },
    {
      category: "Backend Systems",
      icon: Database,
      services: [
        "RESTful API Development",
        "GraphQL APIs",
        "Microservices Architecture",
        "Database Design & Integration",
        "Real-time Systems",
      ],
    },
    {
      category: "Enterprise Solutions",
      icon: Shield,
      services: [
        "CRM & ERP Systems",
        "Business Process Automation",
        "Data Analytics Platforms",
        "Integration Solutions",
        "Legacy System Modernization",
      ],
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We analyze your business needs and create a comprehensive software specification.",
      icon: Target,
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Creating scalable system architecture and technical specifications for optimal performance.",
      icon: Monitor,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your software with clean code, rigorous testing, and quality assurance protocols.",
      icon: Code,
    },
    {
      step: "04",
      title: "Deployment & Maintenance",
      description: "Deploying your software and providing ongoing support, updates, and maintenance.",
      icon: Rocket,
    },
  ]

  const techStack = {
    programming: [
      { name: "JavaScript", icon: "⚡", description: "Dynamic web language" },
      { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
      { name: "Python", icon: "🐍", description: "Versatile programming" },
      { name: "Java", icon: "☕", description: "Enterprise development" },
      { name: "C#", icon: "🔷", description: "Microsoft ecosystem" },
      { name: "C++", icon: "⚙️", description: "High-performance apps" },
      { name: "C", icon: "🔧", description: "System programming" },
      { name: "Go", icon: "🐹", description: "Concurrent programming" },
      { name: "Rust", icon: "🦀", description: "Memory-safe systems" },
      { name: "Ruby", icon: "💎", description: "Elegant development" },
      { name: "PHP", icon: "🐘", description: "Web development" },
      { name: "Swift", icon: "🍎", description: "iOS development" },
      { name: "Kotlin", icon: "🎯", description: "Android development" },
      { name: "Dart", icon: "🎪", description: "Flutter development" },
    ],
    frontend: [
      { name: "HTML", icon: "🌐", description: "Semantic markup" },
      { name: "CSS", icon: "🎨", description: "Modern styling" },
      { name: "JavaScript", icon: "⚡", description: "Dynamic interactions" },
      { name: "TypeScript", icon: "📘", description: "Type-safe development" },
      { name: "React.js", icon: "⚛️", description: "Component-based UI" },
      { name: "Angular", icon: "🅰️", description: "Enterprise applications" },
      { name: "Vue.js", icon: "💚", description: "Progressive framework" },
      { name: "Svelte", icon: "🔥", description: "Compile-time optimization" },
      { name: "Tailwind CSS", icon: "🌊", description: "Utility-first CSS" },
      { name: "Bootstrap", icon: "🅱️", description: "Responsive framework" },
      { name: "Next.js", icon: "▲", description: "Full-stack framework" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", description: "JavaScript runtime" },
      { name: "Express.js", icon: "🚀", description: "Web framework" },
      { name: "Django", icon: "🐍", description: "Python framework" },
      { name: "Flask", icon: "🌶️", description: "Micro framework" },
      { name: "Spring Boot", icon: "🍃", description: "Java framework" },
      { name: "ASP.NET", icon: "🔷", description: "Microsoft framework" },
      { name: "NestJS", icon: "🐱", description: "Scalable Node.js" },
      { name: "Laravel", icon: "🎭", description: "PHP framework" },
      { name: "Ruby on Rails", icon: "💎", description: "Convention over config" },
      { name: "FastAPI", icon: "⚡", description: "Modern Python API" },
      { name: "Koa.js", icon: "🥥", description: "Next-gen Node.js" },
      { name: ".NET Core", icon: "🔷", description: "Cross-platform .NET" },
    ],
    databases: [
      { name: "PostgreSQL", icon: "🐘", description: "Advanced SQL database" },
      { name: "MySQL", icon: "🐬", description: "Popular SQL database" },
      { name: "SQLite", icon: "📦", description: "Lightweight database" },
      { name: "SQL Server", icon: "🏢", description: "Microsoft database" },
      { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
      { name: "Firebase Firestore", icon: "🔥", description: "Cloud database" },
      { name: "Cassandra", icon: "🏛️", description: "Distributed database" },
      { name: "CouchDB", icon: "🛋️", description: "Document database" },
      { name: "DynamoDB", icon: "⚡", description: "AWS NoSQL" },
      { name: "Redis", icon: "🔴", description: "In-memory cache" },
    ],
    cloud: [
      { name: "AWS", icon: "☁️", description: "Amazon cloud" },
      { name: "Google Cloud", icon: "🌤️", description: "Google cloud platform" },
      { name: "Azure", icon: "🔷", description: "Microsoft cloud" },
      { name: "Docker", icon: "🐳", description: "Containerization" },
      { name: "Kubernetes", icon: "⚓", description: "Container orchestration" },
      { name: "Jenkins", icon: "👨‍🔧", description: "CI/CD automation" },
      { name: "GitHub Actions", icon: "🐙", description: "GitHub CI/CD" },
      { name: "GitLab CI/CD", icon: "🦊", description: "GitLab automation" },
      { name: "Terraform", icon: "🏗️", description: "Infrastructure as code" },
      { name: "Ansible", icon: "🔴", description: "Configuration management" },
      { name: "Vercel", icon: "▲", description: "Frontend deployment" },
      { name: "Netlify", icon: "🌐", description: "JAMstack hosting" },
      { name: "Heroku", icon: "💜", description: "Platform as a service" },
      { name: "DigitalOcean", icon: "🌊", description: "Developer cloud" },
    ],
    auth: [
      { name: "OAuth 2.0", icon: "🔐", description: "Authorization framework" },
      { name: "JWT", icon: "🎫", description: "JSON Web Tokens" },
      { name: "Auth0", icon: "🛡️", description: "Identity platform" },
      { name: "Firebase Auth", icon: "🔥", description: "Google authentication" },
      { name: "Keycloak", icon: "🗝️", description: "Identity management" },
      { name: "Passport.js", icon: "📋", description: "Node.js authentication" },
      { name: "Bcrypt/Argon2", icon: "🔒", description: "Password hashing" },
    ],
    testing: [
      { name: "Jest", icon: "🃏", description: "JavaScript testing" },
      { name: "Mocha", icon: "☕", description: "JavaScript test framework" },
      { name: "Jasmine", icon: "🌸", description: "Behavior-driven testing" },
      { name: "Cypress", icon: "🌲", description: "E2E testing" },
      { name: "Playwright", icon: "🎭", description: "Cross-browser testing" },
      { name: "Selenium", icon: "🕷️", description: "Web automation" },
      { name: "JUnit", icon: "☕", description: "Java testing" },
      { name: "PyTest", icon: "🐍", description: "Python testing" },
      { name: "Postman", icon: "📮", description: "API testing" },
      { name: "Insomnia", icon: "😴", description: "REST client" },
    ],
    version: [
      { name: "Git", icon: "📝", description: "Version control" },
      { name: "GitHub", icon: "🐙", description: "Code hosting" },
      { name: "GitLab", icon: "🦊", description: "DevOps platform" },
      { name: "Bitbucket", icon: "🪣", description: "Atlassian Git" },
    ],
    ides: [
      { name: "VS Code", icon: "💻", description: "Code editor" },
      { name: "IntelliJ IDEA", icon: "🧠", description: "Java IDE" },
      { name: "PyCharm", icon: "🐍", description: "Python IDE" },
      { name: "Eclipse", icon: "🌙", description: "Java development" },
      { name: "Android Studio", icon: "🤖", description: "Android development" },
      { name: "Xcode", icon: "🍎", description: "iOS development" },
    ],
  }

  const features = [
    "Lightning-fast performance optimization",
    "Scalable architecture design",
    "Cross-platform compatibility",
    "Modern security practices",
    "Cloud-native infrastructure",
    "24/7 monitoring & support",
    "Custom integration solutions",
    "Enterprise-grade reliability",
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
              <Code size={16} />
              Software Development
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
              Custom Software Development
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
              Transform Your Vision Into Reality With Scalable Software Solutions
            </h2>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-[#D1D5DB] leading-relaxed max-w-3xl mx-auto">
              We specialize in crafting fast, secure, and scalable software applications tailored to your business
              needs.
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
                Comprehensive software development solutions designed to elevate your business operations.
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
                We use cutting-edge technologies to build robust and scalable software solutions.
              </p>
            </div>

            {/* Tech Categories */}
            {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-[#00D1FF] mb-8 text-center capitalize">
                  {category === "programming"
                    ? "💻 Programming Languages"
                    : category === "frontend"
                      ? "🧱 Frontend Development"
                      : category === "backend"
                        ? "🔧 Backend Development"
                        : category === "databases"
                          ? "🗃️ Databases"
                          : category === "cloud"
                            ? "☁️ Cloud & DevOps"
                            : category === "auth"
                              ? "🔐 Authentication & Security"
                              : category === "testing"
                                ? "🧪 Testing Tools"
                                : category === "version"
                                  ? "🧰 Version Control & Collaboration"
                                  : category === "ides"
                                    ? "🛠️ IDEs & Editors"
                                    : category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {technologies.map((tech, index) => (
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
                We deliver exceptional results through expertise, innovation, and dedication.
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
                    <h3 className="text-2xl font-bold text-white mb-4">Expert Development Team</h3>
                    <p className="text-[#D1D5DB] leading-relaxed">
                      Our experienced developers combine technical expertise with creative problem-solving to deliver
                      outstanding software solutions that drive business growth.
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
                A proven methodology that ensures successful project delivery from concept to launch.
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
                From desktop applications to enterprise systems, we cover every aspect of modern software development.
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

      {/* Software Development Image Section */}
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
                  Crafting Software Solutions That Drive Success
                </h2>
                <p className="text-lg text-[#D1D5DB] mb-8 leading-relaxed">
                  Our team combines technical expertise with innovative thinking to build software applications that not
                  only meet your requirements but also deliver exceptional performance and scalability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Zap size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">High Performance Architecture</h4>
                      <p className="text-[#D1D5DB] text-sm">Optimized for speed and scalability</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Settings size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Cross-Platform Compatibility</h4>
                      <p className="text-[#D1D5DB] text-sm">Works seamlessly across all platforms</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
                      <Shield size={20} className="text-[#00D1FF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Enterprise Security</h4>
                      <p className="text-[#D1D5DB] text-sm">Built with security-first approach</p>
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
                    src={CustomSoftwareImage}
                    alt="Custom Software Development - Modern development workspace with multiple screens showing code, architecture diagrams, and development tools"
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
                <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Build Something Amazing?</h3>
              </div>
              <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
                Transform your ideas into powerful software solutions. Let's create something extraordinary together.
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

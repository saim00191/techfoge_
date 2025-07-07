"use client"
import { useEffect } from "react"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function IndustriesInfiniteCarouselFixed() {
  const industries = [
    { emoji: "🏥", title: "Healthcare Tech" },
    { emoji: "📈", title: "Fintech & Banking" },
    { emoji: "🛒", title: "E-Commerce & Retail" },
    { emoji: "🏗️", title: "Construction & Logistics" },
    { emoji: "🎓", title: "EdTech & E-Learning" },
    { emoji: "🌍", title: "Web3, Blockchain & Crypto" },
    { emoji: "🎮", title: "Gaming & Interactive Media" },
    { emoji: "🧠", title: "AI & Machine Learning" },
    { emoji: "✈️", title: "Travel & Hospitality" },
    { emoji: "📡", title: "Telecommunications & IoT" },
    { emoji: "🏛️", title: "Government & Public Sector" },
    { emoji: "⚖️", title: "LegalTech & Compliance" },
    { emoji: "🎬", title: "Media & Entertainment" },
    { emoji: "🚗", title: "Automotive & Mobility" },
    { emoji: "🏢", title: "Real Estate & PropTech" },
    { emoji: "🧘", title: "Wellness & Lifestyle" },
  ]

  // Add CSS animations to document head
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes scroll-up {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-33.333%);
        }
      }

      @keyframes scroll-down {
        0% {
          transform: translateY(-33.333%);
        }
        100% {
          transform: translateY(0);
        }
      }

      .animate-scroll-up {
        animation: scroll-up 30s linear infinite;
      }

      .animate-scroll-down {
        animation: scroll-down 30s linear infinite;
      }

      .carousel-container:hover .animate-scroll-up,
      .carousel-container:hover .animate-scroll-down {
        animation-play-state: paused;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Distribute industries across 4 columns
  const getColumnItems = (columnIndex: number) => {
    const itemsPerColumn = Math.ceil(industries.length / 4)
    const startIndex = columnIndex * itemsPerColumn
    const endIndex = Math.min(startIndex + itemsPerColumn, industries.length)
    return industries.slice(startIndex, endIndex)
  }

  const IndustryCard = ({ industry, index }: { industry: { emoji: string; title: string }; index: number }) => (
    <div className="group relative bg-[#06111F] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#00D1FF] hover:bg-[#00D1FF]/5 transition-all duration-300 ease-out cursor-pointer overflow-hidden mb-6 min-h-[180px]">
      {/* Hover glow effects */}
      <div className="absolute inset-0 bg-[#00D1FF]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
      <div className="absolute inset-0 bg-[#00D1FF]/5 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-4 group-hover:scale-105 transition-transform duration-300 ease-out">
        {/* Emoji/Icon */}
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 ease-out">
          {industry.emoji}
        </div>

        {/* Industry Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-[#00D1FF] transition-colors duration-300 leading-tight">
          {industry.title}
        </h3>
      </div>

      {/* Subtle inner border */}
      <div className="absolute inset-1 rounded-lg border border-white/5 group-hover:border-[#00D1FF]/20 transition-colors duration-300"></div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-[#00D1FF]/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
    </div>
  )

  const ScrollingColumn = ({ columnIndex, direction }: { columnIndex: number; direction: "up" | "down" }) => {
    const columnItems = getColumnItems(columnIndex)
    // Duplicate items for seamless loop
    const duplicatedItems = [...columnItems, ...columnItems, ...columnItems]

    return (
      <div className="relative h-full overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#020A15] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#020A15] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling content */}
        <div className={`flex flex-col ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}>
          {duplicatedItems.map((industry, index) => (
            <IndustryCard key={`${columnIndex}-${index}`} industry={industry} index={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className={`bg-[#020A15] py-16 px-4 sm:py-20 lg:py-28 relative overflow-hidden ${poppins.className}`}>
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 209, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 209, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="text-center flex flex-col mb-16 lg:mb-20 px-4">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight">
             Industries We Serve
            </h2>
            {/* Consciousness wave */}
            <div
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-2000 `}
            >
              <svg width="320" height="20" viewBox="0 0 320 20">
                <path
                  d="M 0 10 Q 80 5 160 10 T 320 10"
                  stroke="url(#consciousnessGradient)"
                  strokeWidth="3"
                  fill="none"
                />
                <defs>
                  <linearGradient id="consciousnessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D1FF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00D1FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className="relative inline-block">
             <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-medium leading-relaxed">
              We empower businesses across a wide range of industries with cutting-edge, scalable digital solutions.
            </p>
          </div>
          </div>
        </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">

      

        {/* Infinite Carousel Container */}

        <div className="carousel-container relative max-w-6xl mx-auto">
          <div className="h-[450px] overflow-hidden rounded-2xl">
            {/* Desktop: 4 columns */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-6 h-full">
              <ScrollingColumn columnIndex={0} direction="down" />
              <ScrollingColumn columnIndex={1} direction="up" />
              <ScrollingColumn columnIndex={2} direction="down" />
              <ScrollingColumn columnIndex={3} direction="up" />
            </div>

            {/* Tablet: 2 columns */}
            <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-6 h-full">
              <ScrollingColumn columnIndex={0} direction="down" />
              <ScrollingColumn columnIndex={1} direction="up" />
            </div>

            {/* Mobile: 1 column */}
            <div className="grid sm:hidden grid-cols-1 gap-6 h-full">
              <ScrollingColumn columnIndex={0} direction="down" />
            </div>
          </div>

          {/* Side gradient masks for better visual containment */}
          <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-[#020A15] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[#020A15] to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-lg lg:text-xl text-white/70 mb-6 font-medium">Not sure if we cover your industry?</p>

          <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden font-semibold text-white border border-[#00D1FF] rounded-full shadow-md hover:scale-105 hover:shadow-lg hover:shadow-[#00D1FF]/25 transition-all duration-300 ease-out">
            {/* Button glow effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00D1FF] via-[#005377] to-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>

            {/* Button content */}
            <Link href="https://wa.me/923253848828">

            <span className="relative z-10 flex items-center space-x-2">
              <span>Let &apos;s Talk</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            </Link>
          </button>

          {/* Alternative subtle link */}
          <div className="mt-6">
            <a
              href="/contact"
              className="group inline-flex items-center text-white/70 hover:text-[#00D1FF] transition-colors duration-300"
            >
              <span className="relative font-medium">
                Or send us a message
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00D1FF] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#00D1FF]/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-16 w-1 h-1 bg-[#00D1FF]/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#00D1FF]/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  )
}

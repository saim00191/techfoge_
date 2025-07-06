"use client"

import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function HowToStartSection() {
  const steps = [
    {
      number: 1,
      title: "YOU ASK",
      description: "Share your project vision and requirements with our expert team",
    },
    {
      number: 2,
      title: "WE PROCEED",
      description: "Our specialists analyze and craft the perfect solution strategy",
    },
    {
      number: 3,
      title: "NEGOTIATE",
      description: "We discuss terms, timeline, and finalize project agreements",
    },
    {
      number: 4,
      title: "YOU GET",
      description: "Receive your cutting-edge solution delivered on schedule",
    },
  ]

  return (
    <section
      className={`bg-[#020A15] py-16 px-4 sm:py-20 lg:py-28 w-full relative overflow-hidden ${poppins.className}`}
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className="text-center flex flex-col mb-16 lg:mb-20 px-4">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight">
              How to Start
            </h2>
            {/* Consciousness wave */}
            <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-2000 `}>
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
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#00D1FF] font-medium relative z-10">Easy Process</p>
            <div className="absolute inset-0 text-[#00D1FF] blur-sm opacity-50 text-xl sm:text-2xl lg:text-3xl font-medium">
              Easy Process
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6 xl:gap-8 px-2 sm:px-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center text-center group relative">
              {/* Card */}
              <div className="relative mb-6 lg:mb-8">
                <div className="absolute inset-0 bg-[#00D1FF]/20 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-[#00D1FF]/10 rounded-2xl blur-2xl scale-125 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-2xl border-2 border-[#00D1FF]/50 bg-[#020A15]/80 backdrop-blur-sm flex items-center justify-center group-hover:border-[#00D1FF] group-hover:bg-[#00D1FF]/5 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#00D1FF]/25 transition-all duration-500 ease-out overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-[#00D1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/20 group-hover:border-[#00D1FF]/40 transition-all duration-500"></div>
                  <span className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#00D1FF] group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300 z-10">
                    {step.number}
                  </span>
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Desktop horizontal lines - show on lg and above */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-6 xl:w-8 h-0.5 transform -translate-y-1/2 ml-4 xl:ml-6">
                    <div className="w-full h-full bg-gradient-to-r from-[#00D1FF]/40 via-[#00D1FF]/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] via-[#00D1FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="space-y-3 lg:space-y-4 max-w-xs px-2">
                <h3 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-[#00D1FF] transition-all duration-300 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 group-hover:text-white/90 transition-all duration-300 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {/* Mobile vertical lines - show only on sm and below, hide on md and above */}
              {index < steps.length - 1 && (
                <div className="sm:hidden mt-8 mb-4 flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#00D1FF]/50 to-[#00D1FF]/20">
                    <div className="w-full h-full bg-gradient-to-b from-[#00D1FF] to-[#00D1FF]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="w-2 h-2 bg-[#00D1FF]/60 rounded-full mt-2 group-hover:bg-[#00D1FF] group-hover:shadow-lg group-hover:shadow-[#00D1FF]/50 transition-all duration-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decorations */}
        <div className="mt-16 lg:mt-20 flex justify-center items-center space-x-4">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#00D1FF]/40 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s`, animationDuration: "2s" }}
              ></div>
            ))}
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#00D1FF]/30 to-transparent"></div>
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]/30 animate-pulse"
                style={{ animationDelay: `${i * 0.3 + 1}s`, animationDuration: "2s" }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

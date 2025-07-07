"use client"

import { FaQuestionCircle, FaChevronDown } from "react-icons/fa"
import type { FAQ } from "./FAQS-Data"

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: (id: number) => void
}

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="group border-b border-[#00D1FF]/20 last:border-b-0 transition-all duration-300 hover:border-[#00D1FF]/40">
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full text-left py-6 md:py-8 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 focus:ring-offset-2 focus:ring-offset-[#020A15] rounded-lg transition-all duration-300"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Question Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 bg-[#00D1FF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00D1FF]/30 transition-all duration-300">
                <FaQuestionCircle className="text-[#00D1FF] text-sm" />
              </div>
            </div>

            {/* Question Text */}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#00D1FF] transition-colors duration-300 leading-tight">
                {faq.question}
              </h3>
            </div>
          </div>

          {/* Chevron Icon */}
          <div className="flex-shrink-0 mt-1">
            <FaChevronDown
              className={`text-[#00D1FF] text-sm transition-all duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              } group-hover:scale-110`}
            />
          </div>
        </div>
      </button>

      {/* Answer Section */}
      <div
        id={`faq-answer-${faq.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pb-6 md:pb-8 pl-12 pr-4">
          <div className="bg-gradient-to-r from-[#00D1FF]/5 to-transparent rounded-lg p-4 md:p-6 border-l-4 border-[#00D1FF]/50">
            <p className="text-[#D1D5DB] leading-relaxed text-sm md:text-base">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

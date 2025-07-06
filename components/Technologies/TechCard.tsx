"use client"
import { Info, Users } from "lucide-react"
import { ProficiencyBar } from "./ProficiencyBar"
import type { TechCardProps } from "@/types/Technology"

export const TechCard = ({
  tech,
  techIndex,
  categoryIndex,
  visibleSections,
  categoryId,
  onTechClick,
  onTechHover,
}: TechCardProps) => {
  return (
    <div
      className={`transition-all duration-500 ease-out ${
        visibleSections.has(categoryId) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${categoryIndex * 150 + techIndex * 100}ms` }}
    >
      <div
        className="group/tech relative bg-[#020A15]/60 border border-[#00D1FF]/10 rounded-xl p-4 hover:border-[#00D1FF]/30 hover:bg-[#00D1FF]/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)] transition-all duration-300 cursor-pointer"
        onClick={() => onTechClick(tech)}
        onMouseEnter={() => onTechHover(tech.name)}
        onMouseLeave={() => onTechHover(null)}
      >
        {/* Tech Icon and Info Button */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl group-hover/tech:scale-110 transition-transform duration-300">{tech.icon}</div>
          <Info size={14} className="text-[#D1D5DB]/50 group-hover/tech:text-[#00D1FF] transition-colors" />
        </div>

        {/* Proficiency Bar */}
        <div className="mb-3">
          <ProficiencyBar proficiency={tech.proficiency} />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-[#D1D5DB]">{tech.proficiency}%</span>
            <span className="text-xs text-[#D1D5DB]">{tech.experience}</span>
          </div>
        </div>

        {/* Tech Name */}
        <h3 className="text-sm font-semibold text-white text-center group-hover/tech:text-[#00D1FF] transition-colors duration-300 mb-2">
          {tech.name}
        </h3>

        {/* Projects Count */}
        <div className="text-center">
          <div className="text-xs text-[#D1D5DB]">
            <Users size={12} className="inline mr-1" />
            {tech.projects} projects
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  )
}

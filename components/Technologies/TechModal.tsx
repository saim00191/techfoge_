"use client"
import { X, ExternalLink } from "lucide-react"
import { ProficiencyBar } from "./ProficiencyBar"
import type { TechModalProps } from "@/types/Technology"

export const TechModal = ({ tech, onClose }: TechModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
    <div className="relative bg-[#020A15] border-2 border-[#00D1FF] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors"
      >
        <X size={24} />
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl">{tech.icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
          <p className="text-[#00D1FF]">{tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="text-center p-4 bg-[#00D1FF]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#00D1FF] mb-1">{tech.proficiency}%</div>
          <div className="text-sm text-[#D1D5DB]">Proficiency</div>
        </div>
        <div className="text-center p-4 bg-[#00D1FF]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#00D1FF] mb-1">{tech.experience}</div>
          <div className="text-sm text-[#D1D5DB]">Experience</div>
        </div>
        <div className="text-center p-4 bg-[#00D1FF]/10 rounded-xl">
          <div className="text-2xl font-bold text-[#00D1FF] mb-1">{tech.projects}</div>
          <div className="text-sm text-[#D1D5DB]">Projects</div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Proficiency Level</h4>
        <ProficiencyBar proficiency={tech.proficiency} />
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
        <p className="text-[#D1D5DB] leading-relaxed">{tech.description}</p>
      </div>

      {tech.website && (
        <div className="flex justify-center">
          <a
            href={tech.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00D1FF] text-[#020A15] px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            <ExternalLink size={18} />
            Visit Official Website
          </a>
        </div>
      )}
    </div>
  </div>
)

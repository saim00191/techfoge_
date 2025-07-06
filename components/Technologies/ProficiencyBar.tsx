import type { ProficiencyBarProps } from "@/types/Technology"

export const ProficiencyBar = ({ proficiency }: ProficiencyBarProps) => (
  <div className="w-full bg-[#020A15]/60 rounded-full h-2 overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-[#00D1FF] to-[#0099CC] rounded-full transition-all duration-1000 ease-out"
      style={{ width: `${proficiency}%` }}
    />
  </div>
)

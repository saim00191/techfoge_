import { ParticleSystem } from "./ParticlesSystem"
import type { BackgroundEffectsProps } from "@/types/Blog"

export const BackgroundEffects = ({}: BackgroundEffectsProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <ParticleSystem />
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl" />
      {/* Circuit overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L10,10 L10,0 M10,20 L10,10 L20,10" stroke="#00D1FF" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
    </div>
  )
}

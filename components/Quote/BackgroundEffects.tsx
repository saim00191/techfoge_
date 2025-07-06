import { ParticleSystem } from "./ParticlesSystem"

export const BackgroundEffects = () => {
  return (
    <>
      {/* Particle System */}
      <ParticleSystem />

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10h20M10 0v20M5 5h10v10H5z" stroke="#00D1FF" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Corner Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl"></div>
    </>
  )
}

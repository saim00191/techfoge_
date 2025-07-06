import { ParticleCanvas } from "./ParticleSystem"

export const BackgroundEffects = () => {
  return (
    <>
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
      <ParticleCanvas />

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
    </>
  )
}

import type { NoJobsStateProps } from "@/types/Career"

export const NoJobsState = ({ isLoaded }: NoJobsStateProps) => {
  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ease-out delay-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker">
          JOBS/INTERNSHIPS
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
            JOBS/INTERNSHIPS
          </div>
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-glow-pulse-slow">
            JOBS/INTERNSHIPS
          </div>
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00D1FF] animate-coming-soon-glow">
          Coming Soon
        </p>
      </div>
    </div>
  )
}

import type { LoadingStateProps } from "@/types/Career"

export const LoadingState = ({ isLoaded }: LoadingStateProps) => {
  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ease-out delay-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="space-y-6 flex flex-col items-center justify-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin" />

        {/* Loading Text with Flicker + Glow */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker">
          LOADING...
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
            LOADING...
          </div>
        </h2>
      </div>
    </div>
  )
}

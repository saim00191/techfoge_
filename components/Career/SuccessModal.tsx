import type { SuccessModalProps } from "@/types/Career"

export const SuccessModal = ({ showSuccessModal, showCheckmark }: SuccessModalProps) => {
  if (!showSuccessModal) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{
          animation: "fadeIn 0.3s ease-out",
        }}
      />
      <div
        className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-8 max-w-md w-full text-center"
        style={{
          animation: "modalSlideIn 0.4s ease-out",
        }}
      >
        {/* Checkmark Animation */}
        <div className="mb-6 flex justify-center">
          <div
            className={`w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center transition-all duration-500 ${
              showCheckmark ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              background: "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
            }}
          >
            <svg
              className={`w-10 h-10 text-green-400 transition-all duration-700 ${
                showCheckmark ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                strokeDasharray: showCheckmark ? "0" : "50",
                strokeDashoffset: showCheckmark ? "0" : "50",
                transition:
                  "stroke-dasharray 0.6s ease-in-out 0.2s, stroke-dashoffset 0.6s ease-in-out 0.2s, transform 0.3s ease-out 0.1s, opacity 0.3s ease-out 0.1s",
              }}
            >
              <polyline points="9,12 12,15 22,5"></polyline>
            </svg>
          </div>
        </div>
        {/* Success Message */}
        <h3
          className="text-2xl font-bold text-white mb-4"
          style={{
            animation: "fadeInUp 0.5s ease-out 0.2s both",
          }}
        >
          Application Submitted!
        </h3>
        <p
          className="text-[#D1D5DB] text-lg leading-relaxed"
          style={{
            animation: "fadeInUp 0.5s ease-out 0.3s both",
          }}
        >
          Your application has been submitted successfully! We'll review your application and get back to you soon.
        </p>
        {/* Animated border glow */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-green-400/0 pointer-events-none"
          style={{
            animation: showCheckmark ? "borderGlow 0.8s ease-out 0.4s" : "none",
          }}
        />
      </div>
    </div>
  )
}

"use client"
import { useState } from "react"
import { Mail, X, Check } from "lucide-react"
import { client } from "@/sanity/lib/client"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"

export const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleSubscribe = async () => {
    if (!email) return alert("Please enter your email.")

    setIsSubmitting(true)
    try {
      await client.create({
        _type: "newsletter",
        email,
        submittedAt: new Date().toISOString(),
      })
      setEmail("")
      setShowModal(true)
    } catch (error) {
      console.error("Failed to subscribe:", error)
      alert("Subscription failed. Try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 to-transparent animate-pulse" />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-[#00D1FF]" />
                <h3 className="text-3xl font-bold font-['Orbitron'] text-white">
                  Stay in the <span className="text-[#00D1FF]">Loop</span>
                </h3>
              </div>
              <p className="text-slate-300 mb-8 text-lg">
                Get the latest tech insights, tutorials, and industry news delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-900/50 border-slate-700/50 text-white placeholder-slate-400 focus:border-[#00D1FF]/50 focus:ring-2 focus:ring-[#00D1FF]/20"
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleSubscribe()}
                />
                <Button
                  onClick={handleSubscribe}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#00D1FF] to-cyan-400 hover:from-[#00D1FF]/80 hover:to-cyan-400/80 text-black font-bold px-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,209,255,0.5)] disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={closeModal} />

          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-8 max-w-md mx-4 animate-modal-appear shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Content */}
            <div className="text-center">
              {/* Animated Checkmark */}
              <div className="relative mx-auto mb-6 w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF] to-cyan-400 rounded-full animate-pulse-ring" />
                <div className="relative bg-gradient-to-r from-[#00D1FF] to-cyan-400 rounded-full w-full h-full flex items-center justify-center animate-scale-in">
                  <Check className="w-10 h-10 text-black animate-check-draw" />
                </div>
              </div>

              {/* Success Text */}
              <h3 className="text-2xl font-bold text-white mb-2 animate-slide-up">Subscribed Successfully!</h3>
              <p className="text-slate-300 mb-6 animate-slide-up-delayed">
                Thank you for joining our newsletter. We&apos;ll keep you updated with the latest news and insights.
              </p>

              {/* Close Button */}
              <Button
                onClick={closeModal}
                className="bg-gradient-to-r from-[#00D1FF] to-cyan-400 hover:from-[#00D1FF]/80 hover:to-cyan-400/80 text-black font-bold px-6 py-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,209,255,0.5)]"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modal-appear {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        @keyframes check-draw {
          0% {
            transform: scale(0) rotate(45deg);
            opacity: 0;
          }
          50% {
            transform: scale(0.8) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-modal-appear {
          animation: modal-appear 0.4s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out 0.2s both;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }

        .animate-check-draw {
          animation: check-draw 0.6s ease-out 0.4s both;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out 0.6s both;
        }

        .animate-slide-up-delayed {
          animation: slide-up-delayed 0.5s ease-out 0.8s both;
        }
      `}</style>
    </>
  )
}

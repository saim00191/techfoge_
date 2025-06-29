"use client"
import { Poppins } from "next/font/google"
import type React from "react"

import { useState } from "react"
import { FaQuoteLeft, FaQuoteRight, FaStar, FaTimes } from "react-icons/fa"
import { MessageCircle } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface Review {
  id: string
  name: string
  role: string
  feedback: string
}

interface ReviewFormData {
  name: string
  role: string
  rating: number
  feedback: string
}

export default function ClientReviewsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    role: "",
    rating: 5,
    feedback: "",
  })

  const topRowReviews: Review[] = [
    {
      id: "t1",
      name: "Sarah Chen",
      role: "CTO at NeuralTech Industries",
      feedback:
        "Revolutionary AI solutions that transformed our entire operational framework. The quantum processing capabilities exceeded our most optimistic projections by 340%. Absolutely game-changing technology.",
    },
    {
      id: "t2",
      name: "Marcus Rodriguez",
      role: "Head of Innovation at Cyber Dynamics",
      feedback:
        "Working with this team felt like stepping into the future. Their cybersecurity protocols are military-grade, and the implementation was seamless. Our data breach incidents dropped to zero.",
    },
    {
      id: "t3",
      name: "Elena Vasquez",
      role: "Research Director at Quantum Labs",
      feedback:
        "The space technology integration they provided for our satellite network was phenomenal. Real-time global connectivity with 99.9% uptime. This is next-generation infrastructure.",
    },
    {
      id: "t4",
      name: "James Park",
      role: "CEO at FutureTech Solutions",
      feedback:
        "From concept to deployment, their expertise in quantum computing helped us solve problems we thought were impossible. The ROI was immediate and substantial.",
    },
    {
      id: "t5",
      name: "Lisa Wang",
      role: "Director of Engineering at TechNova",
      feedback:
        "Next-generation infrastructure that scales beyond our wildest expectations. Their cloud solutions handle our global traffic with zero latency issues.",
    },
  ]

  const bottomRowReviews: Review[] = [
    {
      id: "b1",
      name: "David Thompson",
      role: "VP of Technology at DataFlow Corp",
      feedback:
        "Cutting-edge blockchain solutions with enterprise-grade security. Performance metrics exceeded all benchmarks. Their distributed ledger technology is revolutionary.",
    },
    {
      id: "b2",
      name: "Maria Santos",
      role: "Chief Data Officer at Analytics Pro",
      feedback:
        "Advanced machine learning algorithms delivered insights we never thought possible. Their AI models process terabytes of data in real-time with incredible accuracy.",
    },
    {
      id: "b3",
      name: "Robert Kim",
      role: "Innovation Lead at SmartSystems",
      feedback:
        "Seamless integration of IoT systems across our global network. Zero downtime during the entire migration. Their edge computing solutions are unmatched.",
    },
    {
      id: "b4",
      name: "Amanda Foster",
      role: "Head of Digital Strategy at CloudTech",
      feedback:
        "Cloud infrastructure that scales infinitely. Their expertise in distributed systems and microservices architecture transformed our entire platform.",
    },
    {
      id: "b5",
      name: "Carlos Mendez",
      role: "Senior Architect at SecureNet",
      feedback:
        "Quantum encryption protocols that redefined our security standards. Absolutely bulletproof implementation with zero vulnerabilities detected in penetration testing.",
    },
  ]

  // Function to get initials from name
  const getInitials = (name: string) => {
    const names = name.split(" ")
    const firstInitial = names[0]?.charAt(0) || ""
    const lastInitial = names[1]?.charAt(0) || ""
    return (firstInitial + lastInitial).toUpperCase()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowThankYou(true)

    // Auto-close modal after thank you message
    setTimeout(() => {
      setIsModalOpen(false)
      setShowThankYou(false)
      setFormData({ name: "", role: "", rating: 5, feedback: "" })
    }, 2000)
  }

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="text-2xl transition-colors duration-200"
          >
            <FaStar className={star <= rating ? "text-[#00D1FF]" : "text-gray-600"} />
          </button>
        ))}
      </div>
    )
  }

  const ReviewItem = ({ review }: { review: Review }) => (
    <div className="flex-shrink-0 mx-8 md:mx-12 max-w-md md:max-w-lg">
      <div className="flex items-start gap-4">
        <FaQuoteLeft className="text-[#00D1FF] text-xl md:text-2xl mt-1 flex-shrink-0" />
        <div>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed italic mb-3">{review.feedback}</p>

          {/* Client Avatar with Initials */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#00D1FF] bg-[#020A15] flex items-center justify-center">
              <span className="text-[#00D1FF] text-sm font-bold">{getInitials(review.name)}</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm md:text-base">{review.name}</h4>
              <p className="text-[#D1D5DB] text-xs md:text-sm">{review.role}</p>
            </div>
          </div>
        </div>
        <FaQuoteRight className="text-[#00D1FF] text-xl md:text-2xl mt-1 flex-shrink-0" />
      </div>
    </div>
  )

  const ScrollingRow = ({ reviews, direction }: { reviews: Review[]; direction: "left" | "right" }) => (
    <div className="relative overflow-hidden py-8">
      <div
        className={`flex ${direction === "left" ? "scroll-left" : "scroll-right"}`}
        style={{
          width: "max-content",
          animation: direction === "left" ? "scrollLeft 40s linear infinite" : "scrollRight 45s linear infinite",
        }}
      >
        {/* First set */}
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
        {/* Duplicate for seamless loop */}
        {reviews.map((review) => (
          <ReviewItem key={`${review.id}-dup`} review={review} />
        ))}
      </div>
    </div>
  )

  return (
    <>
      <section className={`relative bg-[#020A15] py-16 md:py-24 overflow-hidden ${poppins.className}`}>
        {/* Section Header */}
      
         <div className="text-center flex flex-col mb-16 lg:mb-20 px-4">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl sm:text-6xl  xl:text-8xl font-bold text-white tracking-tight">
               What Our Clients Say
            </h2>
            {/* Consciousness wave */}
            <div
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-2000 `}
            >
              <svg width="320" height="20" viewBox="0 0 320 20">
                <path
                  d="M 0 10 Q 80 5 160 10 T 320 10"
                  stroke="url(#consciousnessGradient)"
                  strokeWidth="3"
                  fill="none"
                />
                <defs>
                  <linearGradient id="consciousnessGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D1FF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00D1FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className="relative inline-block">
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#00D1FF] font-medium relative z-10">Trusted by innovators around the world</p>
            <div className="absolute inset-0 text-[#00D1FF] blur-sm opacity-50 text-xl sm:text-2xl lg:text-3xl font-medium">
              Trusted by innovators around the world
            </div>
          </div>
        </div>

        {/* Desktop: Dual Scrolling Rows */}
        <div className="hidden md:block">
          {/* Top Row - Left to Right */}
          <ScrollingRow reviews={topRowReviews} direction="left" />

          {/* Glowing Divider */}
          <div className="flex justify-center py-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-60" />
          </div>

          {/* Bottom Row - Right to Left */}
          <ScrollingRow reviews={bottomRowReviews} direction="right" />
        </div>

        {/* Mobile: Single Scrolling Row */}
        <div className="md:hidden">
          <ScrollingRow reviews={[...topRowReviews, ...bottomRowReviews]} direction="left" />
        </div>

        {/* Leave a Review Button */}
        <div className="text-center mt-16 px-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00D1FF] hover:text-[#020A15] transition-colors duration-300"
          >
            <span className="flex items-center gap-3">
              <MessageCircle size={20} />
              Leave a Review
            </span>
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsModalOpen(false)} />

          {/* Modal Content */}
          <div className="relative bg-[#020A15] border-2 border-[#00D1FF] rounded-2xl p-6 md:p-8 w-full max-w-md md:max-w-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#D1D5DB] hover:text-[#00D1FF]"
            >
              <FaTimes size={20} />
            </button>

            {showThankYou ? (
              /* Thank You Message */
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-[#00D1FF] mb-2">Thank You!</h3>
                <p className="text-[#D1D5DB]">Your review has been submitted successfully.</p>
              </div>
            ) : (
              /* Review Form */
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Leave a Review</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-bold mb-2">👤 Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#020A15] border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Role Field */}
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-bold mb-2">🧑‍💼 Role/Position</label>
                    <input
                      type="text"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-[#020A15] border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none"
                      placeholder="e.g., CEO at TechCorp"
                    />
                  </div>

                  {/* Star Rating */}
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-bold mb-2">⭐ Rating</label>
                    <StarRating
                      rating={formData.rating}
                      onRatingChange={(rating) => setFormData({ ...formData, rating })}
                    />
                  </div>

                  {/* Feedback Textarea */}
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-bold mb-2">📝 Feedback</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.feedback}
                      onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                      className="w-full px-4 py-3 bg-[#020A15] border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none resize-none"
                      placeholder="Share your experience with us..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00D1FF] text-[#020A15] py-4 rounded-lg font-bold text-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes shimmerText {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  )
}

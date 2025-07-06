"use client"

import { Poppins } from "next/font/google"
import type React from "react"
import { useState, useEffect } from "react"
import { FaQuoteLeft, FaQuoteRight, FaStar, FaTimes } from "react-icons/fa"
import { MessageCircle } from "lucide-react"
import { client } from "@/sanity/lib/client"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

interface Review {
  id: string
  name: string
  role?: string // Keep for hardcoded reviews
  workCompleted?: string // New field for Sanity reviews
  feedback: string
  rating?: number
  date?: string
}

interface ReviewFormData {
  name: string
  workCompleted: string
  rating: number
  feedback: string
}

export default function SecondClientReview() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [sanityReviews, setSanityReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<ReviewFormData>({
    name: "",
    workCompleted: "",
    rating: 5,
    feedback: "",
  })

  // Hardcoded reviews (keeping them exactly the same)
 const hardcodedTopRowReviews: Review[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    workCompleted: "E-commerce Website Development",
    feedback:
      "We trusted TechFoge with our e-commerce solution and were amazed by the results. Their communication and skills are unmatched.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Rodriguez",
    workCompleted: "SEO Optimization & Content Strategy",
    feedback:
      "Their SEO strategies helped us rank on the first page within months. We have seen a dramatic increase in organic traffic.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Mohammad Noor",
    workCompleted: "Corporate Branding & Graphic Design",
    feedback:
      "Our brand got a complete uplift thanks to their graphic designing expertise. Highly recommended.",
    rating: 4,
  },
  {
    id: "t4",
    name: "James Park",
    workCompleted: "AI Chatbot Integration",
    feedback:
      "The team is extremely talented. Their work ethic and creativity shine through in every project.",
    rating: 5,
  },
  {
    id: "t5",
    name: "Grace Kim",
    workCompleted: "Video Editing & Post Production",
    feedback:
      "Top-tier work. They revamped our video content with stunning visuals and animations.Highly recommended.",
    rating: 5,
  },
  {
    id: "t6",
    name: "Emily Johnson",
    workCompleted: "Custom Software Development",
    feedback:
      "Working with TechFoge has been a game-changer for our business. Their ability to understand our unique challenges and deliver a customized software solution made the entire process smooth and result-driven.",
    rating: 5,
  },
  {
    id: "t7",
    name: "Maria Santos",
    workCompleted: "Mobile App Development",
    feedback:
      "From initial concept to final deployment, the team was proactive, communicative, and committed.",
    rating: 4,
  },
  {
    id: "t8",
    name: "Robert Kim",
    workCompleted: "Website Development",
    feedback:
      "The web development team at TechFoge did not just build us a site—they helped us establish a modern, trustworthy online presence.",
    rating: 5,
  },
  {
    id: "t9",
    name: "Grace Kim",
    workCompleted: "Promotional Video Editing",
    feedback: "Their video editing work was truly cinematic. From scripting support to the final cut, everything felt seamless and highly professional",
    rating: 5,
  },
  {
    id: "10",
    name: "Zara Mehmood",
    workCompleted: "Web App Design",
    feedback:
      "We needed a bold, futuristic design and their team delivered beautifully. The layout, color palette, and interactions all aligned perfectly with our brand vision.",
    rating: 5,
  },
];

 
  // Fetch reviews from Sanity
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const query = `
          *[_type == "review"] | order(date desc) {
            _id,
            name,
            workCompleted,
            feedback,
            rating,
            date
          }
        `
        const reviews = await client.fetch(query)

        // Transform Sanity reviews to match our interface
        const transformedReviews: Review[] = reviews.map((review: any) => ({
          id: review._id,
          name: review.name,
          workCompleted: review.workCompleted,
          feedback: review.feedback,
          rating: review.rating,
          date: review.date,
        }))

        setSanityReviews(transformedReviews)
      } catch (error) {
        console.error("Error fetching reviews:", error)
        setSanityReviews([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  // Merge hardcoded and Sanity reviews
  const getAllReviews = () => {
    const allReviews = hardcodedTopRowReviews 
    return allReviews
  }

  // Split reviews into two rows for dual scrolling
  const getTopRowReviews = () => {
    const allReviews = getAllReviews()
    const midPoint = Math.ceil(allReviews.length / 2)
    return allReviews.slice(0, midPoint)
  }

  const getBottomRowReviews = () => {
    return sanityReviews 
  }

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

    try {
      // Create the review document in Sanity
      const reviewDoc = {
        _type: "review",
        name: formData.name,
        workCompleted: formData.workCompleted,
        feedback: formData.feedback,
        rating: formData.rating,
        date: new Date().toISOString(),
      }

      await client.create(reviewDoc)

      // Refresh the reviews after successful submission
      const query = `
        *[_type == "review"] | order(date desc) {
          _id,
          name,
          workCompleted,
          feedback,
          rating,
          date
        }
      `
      const reviews = await client.fetch(query)
      const transformedReviews: Review[] = reviews.map((review: any) => ({
        id: review._id,
        name: review.name,
        workCompleted: review.workCompleted,
        feedback: review.feedback,
        rating: review.rating,
        date: review.date,
      }))
      setSanityReviews(transformedReviews)

      setShowThankYou(true)
    } catch (error) {
      console.error("Error submitting review:", error)
      alert("Failed to submit review. Please try again.")
    } finally {
      setIsSubmitting(false)
    }

    // Auto-close modal after thank you message
    setTimeout(() => {
      setIsModalOpen(false)
      setShowThankYou(false)
      setFormData({ name: "", workCompleted: "", rating: 5, feedback: "" })
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
    <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-12 max-w-sm sm:max-w-md md:max-w-lg">
      <div className="flex items-start gap-3 md:gap-4 ">
        <FaQuoteLeft className="text-[#00D1FF] text-lg sm:text-xl md:text-2xl mt-1 flex-shrink-0" />
        <div>
          <p className="text-[#D1D5DB] h-[145px] overflow-hidden text-sm sm:text-base md:text-lg leading-relaxed italic mb-3 line-clamp-[7]">
            {review.feedback}
          </p>
          {/* Client Avatar with Initials */}
          <div className="flex items-center justify-start gap-3 mb-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#00D1FF] bg-[#020A15] flex items-center justify-center">
              <span className="text-[#00D1FF] text-xs sm:text-sm font-bold">{getInitials(review.name)}</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm md:text-base">{review.name}</h4>
              <p className="text-[#D1D5DB] text-xs md:text-sm">{review.role || review.workCompleted}</p>
              {review.rating && (
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-xs ${i < review.rating! ? "text-[#00D1FF]" : "text-gray-600"}`} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <FaQuoteRight className="text-[#00D1FF] text-lg sm:text-xl md:text-2xl mt-1 flex-shrink-0" />
      </div>
    </div>
  )

  const ScrollingRow = ({ reviews, direction }: { reviews: Review[]; direction: "left" | "right" }) => (
    <div className="relative overflow-hidden py-4 sm:py-6 md:py-8">
      <div
        className={`flex ${direction === "left" ? "scroll-left" : "scroll-right"}`}
        style={{
          width: "max-content",
          animation: direction === "left" ? "scrollLeft 60s linear infinite" : "scrollRight 65s linear infinite",
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

  if (loading) {
    return (
      <section className={`relative bg-[#020A15] py-16 md:py-24 overflow-hidden ${poppins.className}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#D1D5DB] text-lg">Loading reviews...</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className={`relative bg-[#020A15] py-16 md:py-24 overflow-hidden ${poppins.className}`}>
        {/* Section Header */}
        <div className="text-center flex flex-col mb-12 sm:mb-16 lg:mb-20 px-4">
          <div className="relative inline-block mb-6 sm:mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-bold text-white tracking-tight">
              What Our Clients Say
            </h2>
            {/* Consciousness wave */}
            <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-2000`}>
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
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#00D1FF] font-medium relative z-10">
              Trusted by innovators around the world
            </p>
            <div className="absolute inset-0 text-[#00D1FF] blur-sm opacity-50 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Trusted by innovators around the world
            </div>
          </div>
        </div>

        {/* Dual Scrolling Rows - Now on all screen sizes */}
        <div>
          {/* Top Row - Left to Right */}
          <ScrollingRow reviews={getTopRowReviews()} direction="left" />

          {/* Glowing Divider */}
          <div className="flex justify-center py-4 sm:py-6 md:py-8">
            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-60" />
          </div>

          {/* Bottom Row - Right to Left */}
          <ScrollingRow reviews={getBottomRowReviews()} direction="right" />
        </div>

        {/* Leave a Review Button */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border-2 border-[#00D1FF] text-[#00D1FF] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#00D1FF] hover:text-[#020A15] transition-colors duration-300"
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
                  {/* Work Completed Field */}
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-bold mb-2">🛠️ Work Completed</label>
                    <input
                      type="text"
                      required
                      value={formData.workCompleted}
                      onChange={(e) => setFormData({ ...formData, workCompleted: e.target.value })}
                      className="w-full px-4 py-3 bg-[#020A15] border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none"
                      placeholder="e.g., Website Redesign, Mobile App Development"
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

      {/* Global Styles for Animations with Responsive Speeds */}
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

        /* Responsive animation speeds */
        @media (max-width: 640px) {
          .scroll-left {
            animation: scrollLeft 80s linear infinite !important;
          }
          .scroll-right {
            animation: scrollRight 85s linear infinite !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .scroll-left {
            animation: scrollLeft 60s linear infinite !important;
          }
          .scroll-right {
            animation: scrollRight 65s linear infinite !important;
          }
        }

        @media (min-width: 1025px) {
          .scroll-left {
            animation: scrollLeft 40s linear infinite !important;
          }
          .scroll-right {
            animation: scrollRight 45s linear infinite !important;
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

"use client"

import { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"
import { Star, User, Calendar, Search, ThumbsUp, Trash2, AlertTriangle } from "lucide-react"
import { client } from "@/sanity/lib/client"

interface Review {
  _id: string
  name: string
  workCompleted: string
  feedback: string
  rating: number
  date: string
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRating, setFilterRating] = useState("all")
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

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
        const fetchedReviews = await client.fetch(query)
        setReviews(fetchedReviews)
      } catch (error) {
        console.error("Error fetching reviews:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  // Delete review function
  const handleDeleteReview = async (reviewId: string) => {
    setDeleting(reviewId)
    try {
      await client.delete(reviewId)
      setReviews(reviews.filter((review) => review._id !== reviewId))
      setDeleteConfirm(null)
    } catch (error) {
      console.error("Error deleting review:", error)
      alert("Failed to delete review. Please try again.")
    } finally {
      setDeleting(null)
    }
  }

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.workCompleted.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.feedback.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRating = filterRating === "all" || review.rating.toString() === filterRating
    return matchesSearch && matchesRating
  })

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0
  const totalReviews = reviews.length

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star key={i} size={16} className={`${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
    ))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020A15] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="2" fill="#00D1FF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        <div className="relative z-10 p-6">
          <PageHeader title="Customer Reviews" description="Manage and monitor customer feedback and testimonials." />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto mb-4" />
              <p className="text-[#D1D5DB] text-lg">Loading reviews...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020A15] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="#00D1FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 p-6">
        <PageHeader title="Customer Reviews" description="Manage and monitor customer feedback and testimonials." />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Total Reviews</p>
                <p className="text-2xl font-bold text-white mt-1">{totalReviews}</p>
              </div>
              <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                <Star size={24} className="text-[#00D1FF]" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Average Rating</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-2xl font-bold text-white">{averageRating.toFixed(1)}</p>
                  <div className="flex">{renderStars(Math.round(averageRating))}</div>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <ThumbsUp size={24} className="text-yellow-500" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">5-Star Reviews</p>
                <p className="text-2xl font-bold text-white mt-1">{reviews.filter((r) => r.rating === 5).length}</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <User size={24} className="text-green-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D1D5DB]" />
                <input
                  type="text"
                  placeholder="Search reviews by name, work completed, or feedback..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review, index) => (
            <Card key={review._id} className="animate-slide-in-up">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                        <User size={20} className="text-[#00D1FF]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{review.name}</h3>
                        <p className="text-[#00D1FF] text-sm font-medium">{review.workCompleted}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-[#D1D5DB] text-sm">({review.rating}/5)</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-[#D1D5DB] leading-relaxed mb-4">{review.feedback}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-[#D1D5DB]">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(review.date)}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {deleteConfirm === review._id ? (
                        <div className="flex items-center gap-2">
                          <span className="text-red-400 text-sm flex items-center gap-1">
                            <AlertTriangle size={14} />
                            Are you sure?
                          </span>
                          <button
                            onClick={() => handleDeleteReview(review._id)}
                            disabled={deleting === review._id}
                            className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300 text-sm disabled:opacity-50"
                          >
                            {deleting === review._id ? "Deleting..." : "Yes"}
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30 transition-colors duration-300 text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirm(review._id)}
                          className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300 flex items-center gap-2"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredReviews.length === 0 && !loading && (
          <Card className="text-center py-12">
            <Star size={48} className="text-[#D1D5DB] mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">No Reviews Found</h3>
            <p className="text-[#D1D5DB]">
              {reviews.length === 0
                ? "No reviews have been submitted yet."
                : "Try adjusting your search or filter criteria."}
            </p>
          </Card>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

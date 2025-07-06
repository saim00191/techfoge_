"use client"

import { useState, useEffect } from "react"
import PageHeader from "./PageHeader"
import Card from "./Card"
import { getStats, getRecentActivity } from "./Dashboard-operation"
import {
  MessageSquare,
  FileText,
  Star,
  TrendingUp,
  DollarSign,
  Activity,
  ThumbsUp,
  Clock,
  Briefcase,
  BarChart3,
} from "lucide-react"

interface Stats {
  posts: number
  contacts: number
  jobPosts: number
  quoteRequests: number
  reviews: number
}

interface ActivityItem {
  _id: string
  _createdAt: string
  type: string
  title?: string
  name?: string
  subject?: string
  clientName?: string
  projectType?: string
  company?: string
  rating?: number
}

const quickActions = [
  { name: "Add New Blog Post", href: "/blog", icon: FileText, color: "#00D1FF" },
  { name: "View Messages", href: "/contacts", icon: MessageSquare, color: "#10B981" },
  { name: "Check Reviews", href: "/reviews", icon: Star, color: "#F59E0B" },
  { name: "Post New Job", href: "/jobs", icon: Briefcase, color: "#EF4444" },
]

function formatTimeAgo(dateString: string): string {
  const now = new Date()
  const date = new Date(dateString)
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  return `${Math.floor(diffInSeconds / 86400)} days ago`
}

function getActivityContent(activity: ActivityItem): string {
  switch (activity.type) {
    case "post":
      return `Blog post "${activity.title}" published`
    case "contact":
      return `New contact message from ${activity.name}${activity.subject ? ` about "${activity.subject}"` : ""}`
    case "jobPost":
      return `New job "${activity.title}" posted${activity.company ? ` at ${activity.company}` : ""}`
    case "quoteRequest":
      return `Quote request from ${activity.clientName}${activity.projectType ? ` for ${activity.projectType}` : ""}`
    case "review":
      return `New ${activity.rating ? `${activity.rating}-star` : ""} review from ${activity.name}`
    default:
      return "New activity"
  }
}

function getActivityIcon(type: string) {
  switch (type) {
    case "post":
      return FileText
    case "contact":
      return MessageSquare
    case "jobPost":
      return Briefcase
    case "quoteRequest":
      return DollarSign
    case "review":
      return Star
    default:
      return Activity
  }
}

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [stats, setStats] = useState<Stats>({
    posts: 0,
    contacts: 0,
    jobPosts: 0,
    quoteRequests: 0,
    reviews: 0,
  })
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, activityData] = await Promise.all([getStats(), getRecentActivity()])

        setStats(statsData)
        setRecentActivity(activityData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const dynamicStats = [
    {
      name: "Total Quotes",
      value: loading ? "..." : stats.quoteRequests.toString(),
      change: "+12%",
      icon: DollarSign,
      color: "#00D1FF",
    },
    {
      name: "Messages",
      value: loading ? "..." : stats.contacts.toString(),
      change: "+8%",
      icon: MessageSquare,
      color: "#10B981",
    },
    {
      name: "Blog Posts",
      value: loading ? "..." : stats.posts.toString(),
      change: "+23%",
      icon: FileText,
      color: "#F59E0B",
    },
    {
      name: "Reviews",
      value: loading ? "..." : stats.reviews.toString(),
      change: "+15%",
      icon: Star,
      color: "#EF4444",
    },
  ]

  return (
    <div className="min-h-screen bg-[#020A15] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="#00D1FF" />
              <circle cx="100" cy="20" r="2" fill="#00D1FF" />
              <circle cx="20" cy="100" r="2" fill="#00D1FF" />
              <circle cx="100" cy="100" r="2" fill="#00D1FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6">
        <PageHeader
          title="Dashboard Overview"
          description="Welcome back! Here's what's happening with your platform."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dynamicStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.name}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group transition-all duration-700 ease-out ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Card>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#D1D5DB] text-sm font-medium">{stat.name}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      <p className="text-green-400 text-sm mt-1 flex items-center gap-1">
                        <TrendingUp size={14} />
                        {stat.change}
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <Icon size={24} style={{ color: stat.color }} />
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <Card className="h-fit">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={24} className="text-[#00D1FF]" />
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            </div>
            <div className="space-y-4">
              {loading ? (
                <div className="text-[#D1D5DB] text-center py-4">Loading recent activity...</div>
              ) : recentActivity.length === 0 ? (
                <div className="text-[#D1D5DB] text-center py-4">No recent activity</div>
              ) : (
                recentActivity.map((activity, index) => {
                  const Icon = getActivityIcon(activity.type)
                  return (
                    <div
                      key={activity._id}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#00D1FF]/5 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 bg-[#00D1FF]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-[#00D1FF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm">{getActivityContent(activity)}</p>
                        <p className="text-[#D1D5DB] text-xs mt-1 flex items-center gap-1">
                          <Clock size={12} />
                          {formatTimeAgo(activity._createdAt)}
                        </p>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={24} className="text-[#00D1FF]" />
              <h2 className="text-xl font-bold text-white">Quick Actions</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <button
                    key={action.name}
                    className="group p-4 bg-[#020A15]/60 border border-[#00D1FF]/20 rounded-xl hover:border-[#00D1FF]/50 hover:bg-[#00D1FF]/5 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${action.color}20` }}
                      >
                        <Icon size={20} style={{ color: action.color }} />
                      </div>
                      <span className="text-white font-medium group-hover:text-[#00D1FF] transition-colors duration-300">
                        {action.name}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Performance Overview */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 size={24} className="text-[#00D1FF]" />
            <h2 className="text-xl font-bold text-white">Performance Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D1FF]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Briefcase size={24} className="text-[#00D1FF]" />
              </div>
              <p className="text-2xl font-bold text-white">{loading ? "..." : stats.jobPosts.toString()}</p>
              <p className="text-[#D1D5DB] text-sm">Total Jobs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <ThumbsUp size={24} className="text-green-500" />
              </div>
              <p className="text-2xl font-bold text-white">{loading ? "..." : stats.reviews.toString()}</p>
              <p className="text-[#D1D5DB] text-sm">Total Reviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign size={24} className="text-yellow-500" />
              </div>
              <p className="text-2xl font-bold text-white">{loading ? "..." : stats.quoteRequests.toString()}</p>
              <p className="text-[#D1D5DB] text-sm">Quote Requests</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

"use client"
import { useState, useEffect, useRef } from "react"
import { fetchBlogPosts, type BlogPost } from "@/app/admin/blog/sanity-operation"
import { BackgroundEffects } from "./BackgroundEffects"
import { HeroSection } from "./HeroSection"
import { FeaturedBlogsSection } from "./FeaturedBlog"
import { LatestPostsSection } from "./LatestBlog"
import { NoBlogsMessage } from "./NoBlogSection"
import { NewsletterSection } from "./NewsLetter"
import { CustomStyles } from "./CustomStyle"

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Load blogs from Sanity
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true)
        const fetchedBlogs = await fetchBlogPosts()
        // Filter only published blogs
        const publishedBlogs = fetchedBlogs.filter((blog) => blog.status === "published")
        setBlogs(publishedBlogs)
      } catch (error) {
        console.error("Error loading blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setVisibleSections((prev) => new Set([...Array.from(prev), sectionId]))
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  // Get featured blogs (first 3 published blogs)
  const featuredBlogs = blogs.slice(0, 3)
  // Get latest blogs (remaining published blogs)
  const latestBlogs = blogs.slice(3)

if (loading) {
  return (
    <div className="mt-12 bg-[#020A15] flex items-center justify-center min-h-[300px]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#00D1FF]/30 border-t-[#00D1FF] rounded-full animate-spin mx-auto mb-4" />
        <p className="text-[#D1D5DB] text-lg">Loading blog...</p>
      </div>
    </div>
  );
}


  return (
    <div className=" bg-[#020A15] text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Hero Banner */}
      <HeroSection isLoaded={isLoaded} />

      {/* Featured Blogs Grid */}
      <FeaturedBlogsSection featuredBlogs={featuredBlogs} />


      {/* Latest Posts Section */}
      <LatestPostsSection latestBlogs={latestBlogs} />

      {/* No Blogs Message */}
      <NoBlogsMessage blogs={blogs} loading={loading} />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Custom styles */}
      <CustomStyles />
    </div>
  )
}

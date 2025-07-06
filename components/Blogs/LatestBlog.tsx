import { Star } from "lucide-react"
import type { LatestPostsSectionProps } from "@/types/Blog"
import { LatestBlogItem } from "./LatestBlogItem"

export const LatestPostsSection = ({ latestBlogs }: LatestPostsSectionProps) => {
  if (latestBlogs.length === 0) return null

  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Latest Posts */}
          <div>
            <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-[#00D1FF]" />
              Latest Posts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {latestBlogs.map((blog) => (
                <LatestBlogItem key={blog._id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

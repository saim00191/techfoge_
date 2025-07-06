import type { FeaturedBlogsSectionProps } from "@/types/Blog"
import { BlogCard } from "./BlogCard"

export const FeaturedBlogsSection = ({ featuredBlogs }: FeaturedBlogsSectionProps) => {
  if (featuredBlogs.length === 0) return null

  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-[#00D1FF]">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} featured />
          ))}
        </div>
      </div>
    </section>
  )
}

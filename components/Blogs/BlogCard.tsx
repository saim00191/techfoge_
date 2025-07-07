"use client"
import { useState } from "react"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { BlogCardProps } from "@/types/Blog"
import { generateSlug, extractTextFromContent, calculateReadTime } from "./utils/BlogHelper"

export const BlogCard = ({ blog, featured = false }: BlogCardProps) => {
  const [,setIsHovered] = useState(false)
  const slug = generateSlug(blog.title)
  const excerpt = extractTextFromContent(blog.content)

  return (
    <div
      className={`group relative bg-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-700 hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] ${
        featured ? "lg:col-span-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.mainImageTop?.asset?.url || "/placeholder.svg?height=300&width=400"}
          alt={blog.title}
          className="w-full h-48 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#00D1FF]/20 backdrop-blur-sm border border-[#00D1FF]/30 rounded-full text-xs text-[#00D1FF] font-medium">
            {blog.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(blog.publishedAt).toLocaleDateString()}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D1FF] transition-colors duration-300">
          {blog.title}
        </h3>

        <p className="text-slate-300 mb-4 line-clamp-2">{blog.description || excerpt}</p>

         <Link
          href={`/blogs/${slug}`}
          className="group inline-flex items-center gap-2 text-[#00D1FF] font-medium transition-all duration-300 hover:text-white"
        >
 
           {/* <span className="group">Read More</span> */}
          <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
         
        </Link>
      </div>
    </div>
  )
}

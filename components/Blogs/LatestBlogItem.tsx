import { Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { LatestBlogItemProps } from "@/types/Blog"
import { generateSlug } from "./utils/BlogHelper"

export const LatestBlogItem = ({ blog }: LatestBlogItemProps) => {
  const slug = generateSlug(blog.title)

  return (
    <Link href={`/blogs/${slug}`}>
      <div className="group flex items-center gap-4 p-4 bg-slate-900/20 backdrop-blur-sm border border-slate-700/30 rounded-lg hover:border-[#00D1FF]/50 hover:bg-slate-900/40 transition-all duration-300 cursor-pointer">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="w-3 h-3 text-[#00D1FF]" />
            <span className="text-xs text-[#00D1FF]">{blog.status}</span>
          </div>
          <h4 className="text-white font-medium group-hover:text-[#00D1FF] transition-colors duration-300 mb-1">
            {blog.title}
          </h4>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#00D1FF] group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </Link>
  )
}

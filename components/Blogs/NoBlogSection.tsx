import type { NoBlogsMessageProps } from "@/types/Blog"

export const NoBlogsMessage = ({ blogs, loading }: NoBlogsMessageProps) => {
  if (blogs.length > 0 || loading) return null

  return (
    <section className="px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold font-['Orbitron'] text-white mb-4">
              No Published <span className="text-[#00D1FF]">Blogs</span> Yet
            </h3>
            <p className="text-slate-300 text-lg">Stay tuned! We&apos;re working on some amazing content for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

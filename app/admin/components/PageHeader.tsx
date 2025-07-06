import type React from "react"
interface PageHeaderProps {
  title: string
  description: string
  children?: React.ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8 animate-slide-in-up">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 relative">
            {title}
            <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
          </h1>
          <p className="text-[#D1D5DB] text-lg">{description}</p>
        </div>
        {children && <div className="flex-shrink-0">{children}</div>}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
        <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
      </div>
    </div>
  )
}

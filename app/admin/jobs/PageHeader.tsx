import type React from "react"

interface PageHeaderProps {
  title: string
  description: string
  children?: React.ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
      <div className="mb-6 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-[#D1D5DB] text-lg">{description}</p>
      </div>
      {children && <div className="flex gap-4">{children}</div>}
    </div>
  )
}

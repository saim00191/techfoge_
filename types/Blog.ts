import type React from "react"


export interface PortableTextSpan {
  _key: string
  _type: "span"
  text: string
  marks: string[]
}

export interface PortableTextBlock {
  _key: string
  _type: "block"
  style: string
  markDefs: {
    _key: string
    _type: string
  }[]
  children: PortableTextSpan[]
}

export type BlogContentBlock = PortableTextBlock

export interface BlogPost {
  _id: string
  title: string
  description?: string
  content: BlogContentBlock[]
  status: string
  publishedAt: string
  mainImageTop?: {
    asset?: {
      url?: string
    }
  }
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  [key: string]: unknown
}

export interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  [key: string]: unknown
}

export interface BlogCardProps {
  blog: BlogPost
  featured?: boolean
}

export interface LatestBlogItemProps {
  blog: BlogPost
}

export interface HeroSectionProps {
  isLoaded: boolean
}

export interface FeaturedBlogsSectionProps {
  featuredBlogs: BlogPost[]
}

export interface LatestPostsSectionProps {
  latestBlogs: BlogPost[]
}

export interface NoBlogsMessageProps {
  blogs: BlogPost[]
  loading: boolean
}

export interface NewsletterSectionProps {
  email: string
  setEmail: (email: string) => void
}

export type BackgroundEffectsProps = {}

export type CustomStylesProps = {}

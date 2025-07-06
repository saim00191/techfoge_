// Helper function to generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Helper function to extract text from block content
export const extractTextFromContent = (content: any[]): string => {
  if (!content || !Array.isArray(content)) return ""

  return (
    content
      .filter((block) => block._type === "block")
      .map((block) => block.children?.map((child: any) => child.text).join(""))
      .join(" ")
      .substring(0, 150) + "..."
  )
}

// Helper function to calculate read time
export const calculateReadTime = (content: any[]): string => {
  const text = extractTextFromContent(content)
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  const readTime = Math.ceil(wordCount / wordsPerMinute)
  return `${readTime} min read`
}

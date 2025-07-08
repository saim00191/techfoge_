import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techfoge.com"
  const lastModified = new Date().toISOString()

  // Static main pages
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/quote",
    "/faqs",
    "/privacy-policy",
    "/technologies",
    "/services",
    "/blogs",
  ]

  // Service pages
  const serviceRoutes = [
    "/services/web-development",
    "/services/mobile-development",
    "/services/ai-ml",
    "/services/ecommerce",
    "/services/woo-commerce",
    "/services/graphic-design",
    "/services/video-editing",
    "/services/seo",
    "/services/support",
    "/services/wordpress",
  ]

  // Combine all routes
  const allRoutes = [...staticRoutes, ...serviceRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}

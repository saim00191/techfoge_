import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/dashboard", "/api/"], // Block sensitive or backend routes
      },
    ],
    sitemap: "https://techfoge.com/sitemap.xml",
    host: "https://techfoge.com",
  }
}

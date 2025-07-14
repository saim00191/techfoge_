import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin", 
      },
    ],
    sitemap: "https://techfoge.com/sitemap.xml",
    host: "https://techfoge.com",
  }
}

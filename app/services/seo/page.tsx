import SEOOptimization from '@/components/Services/SEO'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services | Boost Your Online Presence",
  description:
    "Boost your online visibility with TechFoge's expert SEO services. We help your website rank higher on search engines and drive organic traffic for real business growth.",
  keywords: [
    "SEO Services",
    "Search Engine Optimization",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "SEO Experts Pakistan",
    "TechFoge SEO",
    "Digital Marketing",
    "Website SEO",
  ],
  openGraph: {
    title: "SEO Services",
    description:
      "Enhance your search engine rankings with TechFoge. We offer expert SEO strategies including keyword optimization, link building, and technical SEO audits.",
    url: "https://techfoge.com/services/seo",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/images/seo.png",
        width: 1200,
        height: 630,
        alt: "SEO Services - TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Boost Your Online Presence",
    description:
      "Get discovered online with TechFoge’s SEO services. We help you rank higher, reach more people, and grow your business organically.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/images/seo.png"],
  },
  alternates: {
    canonical: "https://techfoge.com/services/seo",
  },
}

const Home = () => {
  return (
    <div>
      <SEOOptimization/>
    </div>
  )
}

export default Home

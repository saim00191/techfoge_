import GraphicDesignServices from '@/components/Services/graphic'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Graphic Design Services | Creative Branding & Visual Design ",
  description:
    "TechFoge offers top-tier graphic design services including logo design, branding, social media creatives, UI/UX design, and marketing materials. Elevate your brand's visual identity.",
  keywords: [
    "Graphic Design Services",
    "Logo Design",
    "Brand Identity",
    "Visual Design",
    "UI/UX Design",
    "Social Media Design",
    "Business Cards",
    "Creative Branding",
    "Brochure Design",
    "Poster Design",
    "TechFoge Graphic Design",
    "Professional Designers Pakistan"
  ],
  openGraph: {
    title: "Graphic Design Services",
    description:
      "Stand out with TechFoge’s creative graphic design services. We craft visually compelling logos, branding, social media content, and more.",
    url: "https://techfoge.com/services/graphic-design",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-graphic-design.png", 
        width: 1200,
        height: 630,
        alt: "TechFoge Graphic Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Graphic Design Experts",
    description:
      "Need stunning visuals? TechFoge delivers logo, branding, and UI/UX design that strengthens your brand presence.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["/images/twitter-graphic-design.png"], 
  },
  alternates: {
    canonical: "https://techfoge.com/services/graphic-design",
  },
  metadataBase: new URL("https://techfoge.com"),
}

const Home = () => {
  return (
    <div>
      <GraphicDesignServices/>
    </div>
  )
}

export default Home

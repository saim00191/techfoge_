import VideoEditingServices from '@/components/Services/video'
import React from 'react'


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Video Editing Services",
  description:
    "Enhance your brand with TechFoge's professional video editing services. We create engaging, high-quality videos tailored for businesses, brands, and creators.",
  keywords: [
    "Video Editing Services",
    "Professional Video Editors",
    "Corporate Video Editing",
    "Social Media Videos",
    "Promotional Video Editing",
    "YouTube Video Editing",
    "Post-Production Services",
    "Motion Graphics",
    "TechFoge Video Services",
    "Brand Storytelling"
  ],
  openGraph: {
    title: "Professional Video Editing Services",
    description:
      "Stand out with professional video editing from TechFoge. We craft compelling visuals to elevate your business and brand across all platforms.",
    url: "https://techfoge.com/services/video-editing",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/images/video-editing.png", 
        width: 1200,
        height: 630,
        alt: "Video Editing by TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Video Editing for Brands & Businesses",
    description:
      "TechFoge delivers high-quality video editing and post-production services to make your content visually engaging and impactful.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/images/video-editing.png"],
  },
  alternates: {
    canonical: "https://techfoge.com/services/video-editing",
  },
  metadataBase: new URL("https://techfoge.com"),
}

const Home = () => {
  return (
    <div>
      <VideoEditingServices/>
    </div>
  )
}

export default Home

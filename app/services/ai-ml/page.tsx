import AIMLServices from '@/components/Services/ai-ml'
import React from 'react'


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions",
  description:
    "Unlock intelligent automation and predictive insights with TechFoge’s AI & Machine Learning solutions. We develop smart applications tailored for your business success.",
  keywords: [
    "AI Development",
    "Machine Learning Solutions",
    "Artificial Intelligence Services",
    "Data Science",
    "Predictive Analytics",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "AI App Development",
    "TechFoge AI",
    "ML Algorithms",
    "Business Automation with AI",
  ],
  openGraph: {
    title: "AI & Machine Learning Solutions",
    description:
      "TechFoge delivers innovative AI and ML-based solutions using advanced algorithms to help businesses grow intelligently and efficiently.",
    url: "https://techfoge.com/services/ai-ml",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-ai-and-ml.png", 
        width: 1200,
        height: 630,
        alt: "AI & ML Solutions by TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Machine Learning",
    description:
      "Explore TechFoge’s AI & ML services for data-driven growth, intelligent systems, and automation using advanced technologies.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["/images/twitter-ai-and-ml.png"], 
  },
  alternates: {
    canonical: "https://techfoge.com/services/ai-ml",
  },
}


const Home = () => {
  return (
    <div>
      <AIMLServices/>
    </div>
  )
}

export default Home

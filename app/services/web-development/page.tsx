import WebDevelopmentServices from '@/components/Services/web-development'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Agency",
  description:
    "Discover custom web development services by TechFoge — responsive, fast, and SEO-optimized websites built using cutting-edge technologies like React, Next.js, and more.",
  keywords: [
    "Web Development",
    "Custom Website Development",
    "Next.js Web Apps",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Web App Development",
    "React Development",
    "Business Website",
    "TechFoge Web Solutions",
  ],
  openGraph: {
    title: "Web Development Services | TechFoge",
    description:
      "TechFoge offers scalable and high-performance web development solutions tailored to your business. Let's build your online presence today.",
    url: "https://techfoge.com/web-development",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/og-web-development.png", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Web Development - TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | TechFoge",
    description:
      "Build responsive and high-performing websites with TechFoge's expert web development team.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/og-web-development.png"], // Replace with actual image
  },
  alternates: {
    canonical: "https://techfoge.com/web-development",
  },
}



const Home = () => {
  return (
    <div>
      <WebDevelopmentServices/>
    </div>
  )
}

export default Home

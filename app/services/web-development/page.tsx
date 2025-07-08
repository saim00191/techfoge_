import WebDevelopmentServices from '@/components/Services/web-development'
import React from 'react'

import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Web Development Services | Custom Websites by TechFoge",
  description:
    "Boost your digital presence with custom web development services by TechFoge. We build responsive, fast, and scalable websites tailored to your business needs.",
  keywords: [
    "Web Development Services",
    "Custom Websites",
    "Next.js Development",
    "React Web Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Business Website Development",
    "Responsive Web Design",
    "TechFoge Web Services"
  ],
  openGraph: {
    title: "Custom Web Development Services",
    description:
      "We design and develop high-performance websites using modern technologies like React, Next.js, and Tailwind CSS to help businesses succeed online.",
    url: "https://techfoge.com/services/web-development",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/images/web-development.png", // Make sure this exists in /public/images/
        width: 1200,
        height: 630,
        alt: "Web Development by TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Experts",
    description:
      "Get professional web development services with modern tools like Next.js, React, and Tailwind. Custom websites that drive business growth.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/images/web-development.png"],
  },
  alternates: {
    canonical: "https://techfoge.com/services/web-development",
  },
  metadataBase: new URL("https://techfoge.com"),
}




const Home = () => {
  return (
    <div>
      <WebDevelopmentServices/>
    </div>
  )
}

export default Home

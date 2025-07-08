import MobileAppDevelopment from '@/components/Services/mobile-development'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android Apps",
  description:
    "TechFoge provides custom mobile app development services for iOS and Android. Build high-performance, user-friendly mobile applications with our expert team.",
  keywords: [
    "Mobile App Development",
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Mobile Apps",
    "React Native",
    "Flutter App Development",
    "Custom Mobile Solutions",
    "TechFoge Mobile Services",
    "Mobile UI/UX Design",
    "Mobile App Company Pakistan"
  ],
  openGraph: {
    title: "Mobile App Development Services",
    description:
      "Build robust iOS and Android mobile apps with TechFoge. From UI/UX to development, we deliver user-centric mobile experiences.",
    url: "https://techfoge.com/services/mobile-development",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/app-development.png",
        width: 1200,
        height: 630,
        alt: "TechFoge Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom iOS & Android App Development",
    description:
      "Launch your mobile app with TechFoge’s expert developers. Scalable and secure iOS and Android app development services.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["/images/app-development.png"],
  },
  alternates: {
    canonical: "https://techfoge.com/services/mobile-development",
  },
  metadataBase: new URL("https://techfoge.com"),
}

const Home = () => {
  return (
    <div>
      <MobileAppDevelopment/>
    </div>
  )
}

export default Home

import TechnicalSupportServices from '@/components/Services/Support'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "24/7 Technical & IT Support Services",
  description:
    "Get reliable 24/7 technical support and IT maintenance services from TechFoge. We ensure your systems run smoothly, securely, and without downtime.",
  keywords: [
    "Technical Support",
    "IT Support Services",
    "Remote IT Help",
    "24/7 Tech Support",
    "TechFoge Support Services",
    "Website Support",
    "System Maintenance",
    "Server Monitoring",
    "Business IT Support",
    "IT Helpdesk",
    "Managed IT Services"
  ],
  openGraph: {
    title: "24/7 Technical & IT Support Services",
    description:
      "TechFoge offers expert technical support and ongoing IT maintenance to keep your digital systems secure and operational around the clock.",
    url: "https://techfoge.com/services/support",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/images/technical-support.png",
        width: 1200,
        height: 630,
        alt: "TechFoge Technical Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert IT Support & Maintenance",
    description:
      "Experience seamless digital performance with TechFoge's 24/7 IT support and technical maintenance services.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/images/technical-support.png"],
  },
  alternates: {
    canonical: "https://techfoge.com/services/support",
  },
  metadataBase: new URL("https://techfoge.com"),
}

const Home = () => {
  return (
    <div>
      <TechnicalSupportServices/>
    </div>
  )
}

export default Home

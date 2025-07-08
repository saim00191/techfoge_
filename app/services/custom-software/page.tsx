import CustomSoftwareDevelopment from '@/components/Services/custom-software'
import React from 'react'


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Software Development",
  description:
    "TechFoge provides scalable and secure custom software development services tailored to your business needs. From concept to deployment, we build powerful digital solutions.",
  keywords: [
    "Custom Software Development",
    "Software Engineering",
    "Enterprise Software",
    "Bespoke Software Solutions",
    "Business Automation",
    "SaaS Development",
    "Software Development Pakistan",
    "TechFoge Custom Software",
    "Scalable Software Solutions",
    "Business Software Development",
  ],
  openGraph: {
    title: "Custom Software Development",
    description:
      "Build reliable, secure, and scalable custom software with TechFoge. We turn your business ideas into powerful applications.",
    url: "https://techfoge.com/services/custom-software",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-custom-software.png", 
        width: 1200,
        height: 630,
        alt: "Custom Software Development by TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development",
    description:
      "TechFoge delivers tailored software development solutions for startups and enterprises using modern technologies and secure architectures.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["/images/twitter-custom-software.png"], 
  },
  alternates: {
    canonical: "https://techfoge.com/services/custom-software",
  },
}


const Home = () => {
  return (
    <div>
      <CustomSoftwareDevelopment/>
    </div>
  )
}

export default Home

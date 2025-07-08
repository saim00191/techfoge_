import FAQPage from '@/components/FAQS/FAQ-Main'
import React from 'react'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Get Your Answers",
  description:
    "Find answers to commonly asked questions about our services, process, support, pricing, technologies, and more.",
  keywords: [
    "FAQs",
    "Frequently Asked Questions",
    "Service Help",
    "Customer Support",
    "Tech Questions",
    "Web Development Queries",
    "AI Solutions Help",
    "Mobile App Support",
    "Pricing Questions",
    "How It Works",
    "Troubleshooting",
    "General Information"
  ],
  openGraph: {
    title: "Frequently Asked Questions | Get Your Answers",
    description:
      "Have questions? We’ve got answers. Check out the most common queries about our process, pricing, and technical services.",
    url: "https://techfoge.com/faqs",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Frequently Asked Questions | Get Your Answers",
    description:
      "Explore our FAQs to learn about our services, processes, pricing, and support.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
  },
  alternates: {
    canonical: "https://techfoge.com/faqs",
  },
  metadataBase: new URL("https://techfoge.com"),
}

const Home = () => {
  return (
    <div>
        <FAQPage/>
    </div>
  )
}

export default Home

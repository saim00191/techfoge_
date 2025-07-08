import EcommerceSolutions from '@/components/Services/ecommerce'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ecommerce Website & WooCommerce Development",
  description:
    "TechFoge provides professional Ecommerce website and WooCommerce development services tailored to your brand. We build secure, scalable, and conversion-focused online stores that grow your business.",
  keywords: [
    "Ecommerce Website Development",
    "WooCommerce Development",
    "Online Store Development",
    "WordPress Ecommerce",
    "WooCommerce Experts Pakistan",
    "Custom Ecommerce Solutions",
    "Ecommerce Agency",
    "Mobile-Friendly Ecommerce Website",
    "Ecommerce Website Design",
    "Secure Payment Integration",
    "Shopping Cart Development",
    "TechFoge Ecommerce",
  ],
  openGraph: {
    title: "Ecommerce & WooCommerce Development",
    description:
      "Launch your online store with TechFoge. We offer scalable Ecommerce and WooCommerce development services to help your business sell more.",
    url: "https://techfoge.com/services/ecommerce",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-ecommerce.png", 
        width: 1200,
        height: 630,
        alt: "TechFoge Ecommerce Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce & WooCommerce Website Experts",
    description:
      "Get expert Ecommerce and WooCommerce development services with TechFoge. We build online stores that are fast, secure, and SEO-optimized.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["/images/twitter-ecommerce.png"], 
  },
  alternates: {
    canonical: "https://techfoge.com/services/ecommerce",
  },
  metadataBase: new URL("https://techfoge.com"),
}


const Home = () => {
  return (
    <div>
      <EcommerceSolutions/>
    </div>
  )
}

export default Home

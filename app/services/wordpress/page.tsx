import WordPressDevelopment from '@/components/Services/wordpress'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WordPress Development Services | Custom WordPress Solutions",
  description:
    "TechFoge offers expert WordPress development services, including custom themes, plugins, and WooCommerce solutions tailored to your business goals.",
  keywords: [
    "WordPress Development",
    "Custom WordPress Themes",
    "WooCommerce Development",
    "WordPress Plugins",
    "CMS Development",
    "WordPress Agency Pakistan",
    "TechFoge WordPress Services",
    "Responsive WordPress Sites",
    "WordPress SEO",
    "WordPress Support"
  ],
  openGraph: {
    title: "Custom WordPress Development ",
    description:
      "Build powerful, scalable, and fully customized WordPress websites with TechFoge. From WooCommerce stores to theme and plugin development, we do it all.",
    url: "https://techfoge.com/services/wordpress",
    siteName: "TechFoge",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://techfoge.com/images/wordpress.png",
        width: 1200,
        height: 630,
        alt: "WordPress Development by TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Experts",
    description:
      "Get tailor-made WordPress solutions with TechFoge. From eCommerce stores to enterprise websites, we build with performance and design in mind.",
    site: "@Tech_Foge",
    creator: "@Tech_Foge",
    images: ["https://techfoge.com/images/wordpress.png"],
  },
  alternates: {
    canonical: "https://techfoge.com/services/wordpress",
  },
  metadataBase: new URL("https://techfoge.com"),
}


const Home = () => {
  return (
    <div>
      <WordPressDevelopment/>
    </div>
  )
}

export default Home

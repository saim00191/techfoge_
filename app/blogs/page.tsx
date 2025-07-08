import BlogPage from '@/components/Blogs/BlogMainPage'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore the latest insights, tutorials, and updates on software, AI, mobile apps, and digital innovation from TechFoge.",
   openGraph: {
    title: "TechFoge Blog",
    description:
      "Stay updated with TechFoge’s blog – featuring expert tips, industry news, and guides on web development, AI, design, and more.",
    url: "https://techfoge.com/blogs",
    siteName: "TechFoge",
    images: [
      {
        url: "https://techfoge.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechFoge Blog - News, Insights, Tutorials",
      },
    ],
    locale: "en_US",
    type: "blog",
  },
  alternates: {
    canonical: "https://techfoge.com/blogs",
  },
};


const Home = () => {
  return (
    <div>
      <BlogPage/>
    </div>
  )
}

export default Home

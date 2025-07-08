import BlogPage from '@/components/Blogs/BlogMainPage'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore the latest insights, tutorials, and updates on software, AI, mobile apps, and digital innovation from TechFoge.",  
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

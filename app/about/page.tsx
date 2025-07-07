

import HeroBanner from "@/components/About/HeroBanner"
import MissionVision from "@/components/About/MissionVision"
import CoreValues from "@/components/About/CoreValues"
import WhyChooseUs from "@/components/About/WhyChooseUs"
import CallToAction from "@/components/About/CallToAction"
import StatsSection from "@/components/About/StatsSection"
import GlobalFootprint from "@/components/About/GlobalFootprint"

// app/about/metadata.ts
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about TechFoge, a future-driven tech company offering AI, software, mobile, and web development services. Discover our mission, team, and values.",
  openGraph: {
    title: "About Us | TechFoge",
    description:
      "Meet the team behind TechFoge and explore our journey in building cutting-edge digital solutions with AI and modern tech stacks.",
    url: "https://techfoge.com/about",
    siteName: "TechFoge",
    images: [
      {
        url: "https://techfoge.com/og-about.jpg", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "About TechFoge Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Explore TechFoge's mission, values, and the creative minds behind your digital success." ,
    images: ["https://techfoge.com/twitter-about.jpg"], // Replace with actual image
  },
  alternates: {
    canonical: "https://techfoge.com/about",
  },
}


export default function AboutTechFoge() {
  return (
    <>
    <div className="py-12 bg-[#020A15] relative overflow-hidden font-['Poppins']">
      <HeroBanner />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <CallToAction />
      <StatsSection />
      <GlobalFootprint />
    </div>
    </>
  )
}

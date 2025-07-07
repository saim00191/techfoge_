

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
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About TechFoge",
              "url": "https://techfoge.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "TechFoge",
                "url": "https://techfoge.com",
                "logo": "https://techfoge.com/logo.png",
                "sameAs": [
                  "https://www.facebook.com/TechFoge",
                  "https://twitter.com/Tech_Foge",
                  "https://www.instagram.com/tech_foge",
                  "https://wa.me/923253848828",
                  "https://www.threads.net/@tech_foge",
                  "https://www.linkedin.com/company/tech-foge",
                  "https://www.tiktok.com/@tech_foge"
                ],
                "description": "TechFoge is a modern tech company offering web development, AI solutions, IT support, design, and digital transformation services.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Sindh",
                  "postalCode": "72000",
                  "addressCountry": "PK"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+92-325-3848828",
                  "contactType": "customer support",
                  "availableLanguage": ["English", "Urdu"]
                },
                "founder": {
                  "@type": "Person",
                  "name": "Saim Raza"
                },
                "foundingDate": "2025",
                "employee": {
                  "@type": "OrganizationRole",
                  "name": "Team of expert developers and designers"
                }
              }
            }),
          }}
        />
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

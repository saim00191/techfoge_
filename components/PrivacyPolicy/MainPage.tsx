"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { privacySections } from "./data"
import { BackgroundEffects } from "./BackgroundEffects"

import { HeroSection } from "./HeroSection"
import { IntroductionSection } from "./IntroductionSection"
import { PrivacySections } from "./PrivacySection"
import { FooterCTA } from "./CTA"
import { CustomStyles } from "./CustomStyles"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function PrivacyPolicyPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setVisibleSections((prev) => new Set([...Array.from(prev), sectionId]))
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Hero Section */}
      <HeroSection isLoaded={isLoaded} />

      {/* Introduction Section */}
      <IntroductionSection visibleSections={visibleSections} sectionRefs={sectionRefs} />

      {/* Privacy Sections */}
      <PrivacySections privacySections={privacySections} visibleSections={visibleSections} sectionRefs={sectionRefs} />

      {/* Footer CTA */}
      <FooterCTA visibleSections={visibleSections} sectionRefs={sectionRefs} />

      {/* Custom CSS Animations */}
      <CustomStyles />
    </div>
  )
}

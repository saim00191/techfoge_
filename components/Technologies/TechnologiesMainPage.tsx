"use client"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import type { Technology } from "@/types/Technology"
import { techCategories } from "./data"
import { BackgroundEffects } from "./BackgroundEffects"
import { HeroSection } from "./HeroSections"
import { SearchFilterSection } from "./SearchFilterSection"
import { TechnologiesGrid } from "./TechnologiesGrid"
import { CTASection } from "./CTA"
import { TechModal } from "./TechModal"
import { CustomStyles } from "./CustomStyle"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function TechnologiesPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const particleCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const filteredCategories = techCategories.filter((category) => {
    if (selectedCategory !== "all" && category.id !== selectedCategory) return false
    if (searchQuery) {
      return category.technologies.some(
        (tech) =>
          tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tech.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }
    return true
  })

  const totalTechnologies = techCategories.reduce((sum, cat) => sum + cat.technologies.length, 0)
  const averageProficiency = Math.round(
    techCategories.reduce(
      (sum, cat) => sum + cat.technologies.reduce((techSum, tech) => techSum + tech.proficiency, 0),
      0,
    ) / totalTechnologies,
  )

  const handleTechClick = (tech: Technology) => {
    setSelectedTech(tech)
  }

  const handleTechHover = (techName: string | null) => {
    setHoveredTech(techName)
  }

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Background Effects */}
      <BackgroundEffects particleCanvasRef={particleCanvasRef} />

      {/* Enhanced Header Section */}
      <HeroSection
        isLoaded={isLoaded}
        totalTechnologies={totalTechnologies}
        techCategories={techCategories}
        averageProficiency={averageProficiency}
      />

      {/* Search and Filter Section */}
      <SearchFilterSection
        isLoaded={isLoaded}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        techCategories={techCategories}
      />

      {/* Enhanced Technologies Grid */}
      <TechnologiesGrid
        filteredCategories={filteredCategories}
        visibleSections={visibleSections}
        sectionRefs={sectionRefs}
        onTechClick={handleTechClick}
        onTechHover={handleTechHover}
      />

      {/* Enhanced Bottom CTA Section */}
      <CTASection visibleSections={visibleSections} sectionRefs={sectionRefs} />

      {/* Technology Detail Modal */}
      {selectedTech && <TechModal tech={selectedTech} onClose={() => setSelectedTech(null)} />}

      {/* Custom CSS Animations */}
      <CustomStyles />
    </div>
  )
}

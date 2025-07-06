"use client"
import { Search, Filter, ChevronDown } from "lucide-react"
import type { SearchFilterSectionProps } from "@/types/Technology"

export const SearchFilterSection = ({
  isLoaded,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showFilters,
  setShowFilters,
  techCategories,
}: SearchFilterSectionProps) => {
  return (
    <div
      className={`max-w-4xl mx-auto transition-all duration-1000 ease-out delay-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D1D5DB]" />
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
          />
        </div>

      </div>
    </div>
  )
}

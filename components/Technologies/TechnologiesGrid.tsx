"use client"
import { CategoryCard } from "./CategoryCard"
import type { TechnologiesGridProps } from "@/types/Technology"

export const TechnologiesGrid = ({
  filteredCategories,
  visibleSections,
  sectionRefs,
  onTechClick,
  onTechHover,
}: TechnologiesGridProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredCategories.map((category, categoryIndex) => (
            <CategoryCard
              key={category.id}
              category={category}
              categoryIndex={categoryIndex}
              visibleSections={visibleSections}
              sectionRefs={sectionRefs}
              onTechClick={onTechClick}
              onTechHover={onTechHover}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

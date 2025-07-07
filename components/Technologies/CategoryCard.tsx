"use client"
import { TechCard } from "./TechCard"
import type { CategoryCardProps } from "@/types/Technology"

export const CategoryCard = ({
  category,
  categoryIndex,
  visibleSections,
  sectionRefs,
  onTechClick,
  onTechHover,
}: CategoryCardProps) => {
  const IconComponent = category.icon

  return (
    <div
      key={category.id}
      ref={el => { sectionRefs.current[category.id] = el; }}
      data-section={category.id}
      className={`transition-all duration-1000 ease-out ${
        visibleSections.has(category.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${categoryIndex * 150}ms` }}
    >
      <div className="group relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
        />
        <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 group-hover:border-[#00D1FF]/50 group-hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500">
          {/* Enhanced Category Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-xl hidden smx:flex items-center justify-center group-hover:bg-[#00D1FF]/20 group-hover:scale-110 transition-all duration-300">
                <IconComponent size={24} className="text-[#00D1FF]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#00D1FF] transition-colors duration-300">
                  {category.title}
                </h2>
                <p className="text-sm text-[#D1D5DB] mt-1">{category.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-[#00D1FF]">{category.technologies.length}</div>
              <div className="text-xs text-[#D1D5DB]">Tools</div>
            </div>
          </div>

          {/* Enhanced Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.technologies.map((tech, techIndex) => (
              <TechCard
                key={tech.name}
                tech={tech}
                techIndex={techIndex}
                categoryIndex={categoryIndex}
                visibleSections={visibleSections}
                categoryId={category.id}
                onTechClick={onTechClick}
                onTechHover={onTechHover}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

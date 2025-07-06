
export interface Technology {
  name: string
  icon: string
  color: string
  proficiency: number
  experience: string
  description: string
  projects: number
  website?: string
  category: string
}

export interface TechCategory {
  id: string
  title: string
  icon: React.ElementType
  description: string
  technologies: Technology[]
  gradient: string
  count: number
}

export interface ProficiencyBarProps {
  proficiency: number
}

export interface TechModalProps {
  tech: Technology
  onClose: () => void
}

export interface TechCardProps {
  tech: Technology
  techIndex: number
  categoryIndex: number
  visibleSections: Set<string>
  categoryId: string
  onTechClick: (tech: Technology) => void
  onTechHover: (techName: string | null) => void
}

export interface CategoryCardProps {
  category: TechCategory
  categoryIndex: number
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  onTechClick: (tech: Technology) => void
  onTechHover: (techName: string | null) => void
}

export interface HeroSectionProps {
  isLoaded: boolean
  totalTechnologies: number
  techCategories: TechCategory[]
  averageProficiency: number
}

export interface SearchFilterSectionProps {
  isLoaded: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  showFilters: boolean
  setShowFilters: (show: boolean) => void
  techCategories: TechCategory[]
}

export interface TechnologiesGridProps {
  filteredCategories: TechCategory[]
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  onTechClick: (tech: Technology) => void
  onTechHover: (techName: string | null) => void
}

export interface CTASectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface ParticleCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
}

export interface BackgroundEffectsProps {
  particleCanvasRef: React.RefObject<HTMLCanvasElement>
}

export interface CustomStylesProps {}

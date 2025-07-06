import type React from "react"
import type { StaticImageData } from "next/image"

export interface TechItem {
  name: string
  icon: string
  description: string
}

export type TechStack = Record<string, TechItem[]>

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export interface ImageSectionFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface DetailService {
  category: string
  icon: React.ReactNode
  services: string[]
}

export interface DevelopmentProcessStep {
  step: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface ServicesPageTemplateProps {
  mainHeading: string
  subHeading: string
  subtitle: string
  servicesMainHeading: string
  servicesSubHeading: string
  services: Service[]
  techStack: TechStack
  techStackDescription: string
  techStackCategory: Record<string, string>
  finalCtaHeading: string
  finalCtaDescription: string
  features: string[]
  illustrationHeading: string
  illustrationDescription: string
  developmentProcessMainHeading: string
  developmentProcessDescription: string
  imageSectionLeftSideHeading: string
  imageSectionLeftSideDescription: string
  imageSectionLeftSideFeatures: ImageSectionFeature[]
  imageSectionRightSideImage: string | StaticImageData
  detailServices: DetailService[]
  developmentProcess: DevelopmentProcessStep[]
  comprehensiveSolutionsDescription: string
  whyChooseUsDescription: string
}

export type BackgroundEffectsProps = {}

export interface HeroSectionProps {
  isLoaded: boolean
  mainHeading: string
  subHeading: string
  subtitle: string
}

export interface ServicesSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  servicesMainHeading: string
  servicesSubHeading: string
  services: Service[]
}

export interface TechStackSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  techStack: TechStack
  techStackDescription: string
  techStackCategory: Record<string, string>
}

export interface WhyChooseUsSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  whyChooseUsDescription: string
  features: string[]
  illustrationHeading: string
  illustrationDescription: string
}

export interface DevelopmentProcessSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  developmentProcessMainHeading: string
  developmentProcessDescription: string
  developmentProcess: DevelopmentProcessStep[]
}

export interface DetailedServicesSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  comprehensiveSolutionsDescription: string
  detailServices: DetailService[]
}

export interface ImageSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  imageSectionLeftSideHeading: string
  imageSectionLeftSideDescription: string
  imageSectionLeftSideFeatures: ImageSectionFeature[]
  imageSectionRightSideImage: string | StaticImageData
}

export interface FinalCTASectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
  finalCtaHeading: string
  finalCtaDescription: string
}

export type CustomStylesProps = {}

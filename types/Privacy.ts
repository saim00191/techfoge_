import type React from "react"
import type { LucideIcon } from "lucide-react"

export interface PrivacySection {
  id: string
  icon: LucideIcon
  title: string
  content: PrivacyContent[]
}

export interface PrivacyContent {
  subtitle: string
  text: string
}

export interface ContactInfo {
  icon: LucideIcon
  title: string
  details: string[]
  color: string
}

export interface PrivacyBadgeProps {}

export interface HeroSectionProps {
  isLoaded: boolean
}

export interface IntroductionSectionProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface PrivacySectionsProps {
  privacySections: PrivacySection[]
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface FooterCTAProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface BackgroundEffectsProps {}

export interface CustomStylesProps {}

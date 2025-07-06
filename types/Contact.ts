import type React from "react"
import type { LucideIcon } from "lucide-react"

export interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactInfo {
  icon: LucideIcon
  title: string
  details: string[]
  color: string
}

export interface ContactHeroProps {
  isLoaded: boolean
}

export interface ContactFormProps {
  visibleSections: Set<string>
  formData: FormData
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  isSubmitting: boolean
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface ContactInfoProps {
  visibleSections: Set<string>
  contactInfo: ContactInfo[]
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface FooterCTAProps {
  visibleSections: Set<string>
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>
}

export interface SuccessModalProps {
  showSuccess: boolean
  setShowSuccess: (show: boolean) => void
}

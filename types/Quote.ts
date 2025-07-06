import type React from "react"
import type { LucideIcon } from "lucide-react"

export interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  message: string
}

export interface SelectOption {
  value: string
  label: string
}

export interface QuoteRequest {
  _type: string
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  message: string
  submittedAt: string
}

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface ButtonProps extends React.PropsWithChildren {
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  disabled?: boolean
  [key: string]: unknown
}

export interface InputProps {
  label?: string
  type?: string
  className?: string
  error?: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  [key: string]: unknown
}

export interface SelectProps {
  label?: string
  options?: SelectOption[]
  className?: string
  error?: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
  [key: string]: unknown
}

export interface TextareaProps {
  label?: string
  className?: string
  error?: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  [key: string]: unknown
}

export interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export interface SupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export interface QuoteFormProps {
  formData: FormData
  errors: Record<string, string>
  isSubmitting: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  projectTypes: SelectOption[]
  budgetRanges: SelectOption[]
}

export interface HeroSectionProps {
  formData: FormData
  errors: Record<string, string>
  isSubmitting: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  projectTypes: SelectOption[]
  budgetRanges: SelectOption[]
}

export interface WhyChooseUsSectionProps {
  features: Feature[]
}

export interface FloatingSupportButtonProps {
  onClick: () => void
}

import type React from "react"
import type { LucideIcon } from "lucide-react"

export interface JobPost {
  _id: string
  _type: "jobPost"
  title: string
  department: string
  location: string
  type: string
  salary?: string
  description: string
  requirements: string[]
  status: "active" | "paused" | "closed"
  postedDate: string
  applications?: Application[]
}

export interface Application {
  _key?: string
  applicantName: string
  email: string
  phone?: string
  experience?: string
  currentRole?: string
  status: "pending" | "reviewed" | "interviewed" | "hired" | "rejected"
  appliedDate: string
  portfolio?: string
  cv?: {
    _type: "file"
    asset: {
      _ref: string
      _type: "reference"
      url?: string
      originalFilename?: string
      size?: number
      mimeType?: string
    }
  }
  coverLetter?: string
}

export interface ApplicationFormData {
  applicantName: string
  email: string
  phone: string
  experience: string
  currentRole: string
  portfolio: string
  coverLetter: string
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
  color: string
  bgColor: string
}

export interface CareersHeroProps {
  isLoaded: boolean
}

export interface JobCardProps {
  job: JobPost
  index: number
  showApplicationForm: string | null
  setShowApplicationForm: (jobId: string | null) => void
  applicationForms: { [key: string]: ApplicationFormData }
  handleApplicationFormChange: (jobId: string, field: string, value: string) => void
  cvFiles: { [key: string]: File | null }
  handleFileChange: (jobId: string, file: File | null) => void
  handleApplicationSubmit: (e: React.FormEvent, jobId: string) => Promise<void>
  submittingApplication: string | null
  emailErrors: { [key: string]: string }
  initializeApplicationForm: (jobId: string) => void
  formatFileSize: (bytes: number) => string
}

export interface ApplicationFormProps {
  job: JobPost
  showApplicationForm: string | null
  setShowApplicationForm: (jobId: string | null) => void
  applicationForms: { [key: string]: ApplicationFormData }
  handleApplicationFormChange: (jobId: string, field: string, value: string) => void
  cvFiles: { [key: string]: File | null }
  handleFileChange: (jobId: string, file: File | null) => void
  handleApplicationSubmit: (e: React.FormEvent, jobId: string) => Promise<void>
  submittingApplication: string | null
  emailErrors: { [key: string]: string }
  formatFileSize: (bytes: number) => string
}

export interface SocialLinksProps {
  isLoaded: boolean
  socialLinks: SocialLink[]
}

export interface SuccessModalProps {
  showSuccessModal: boolean
  showCheckmark: boolean
}

export interface LoadingStateProps {
  isLoaded: boolean
}

export interface NoJobsStateProps {
  isLoaded: boolean
}

export interface JobsListProps {
  isLoaded: boolean
  activeJobs: JobPost[]
  showApplicationForm: string | null
  setShowApplicationForm: (jobId: string | null) => void
  applicationForms: { [key: string]: ApplicationFormData }
  handleApplicationFormChange: (jobId: string, field: string, value: string) => void
  cvFiles: { [key: string]: File | null }
  handleFileChange: (jobId: string, file: File | null) => void
  handleApplicationSubmit: (e: React.FormEvent, jobId: string) => Promise<void>
  submittingApplication: string | null
  emailErrors: { [key: string]: string }
  initializeApplicationForm: (jobId: string) => void
  formatFileSize: (bytes: number) => string
}

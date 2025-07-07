"use client"
import type React from "react"
import { Poppins } from "next/font/google"
import { useState, useEffect } from "react"
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaTiktok, FaFacebookF } from "react-icons/fa"
import { SiThreads } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import { client } from "@/sanity/lib/client"
import { addApplicationToJob } from "@/app/admin/jobs/sanity-operation"
import type { JobPost, ApplicationFormData, SocialLink } from "@/types/Career"
import { BackgroundEffects } from "@/components/Career/BackgroundEffects"
import { CareersHero } from "@/components/Career/CareersHero"
import { LoadingState } from "@/components/Career/Loading"
import { JobsList } from "@/components/Career/JobList"
import { NoJobsState } from "@/components/Career/NoJobsState"
import { SocialLinks } from "@/components/Career/SocialLinks"
import { SuccessModal } from "@/components/Career/SuccessModal"
import { CustomStyles } from "@/components/Career/CustomStyle"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function Careers() {
  const [isLoaded, setIsLoaded] = useState(false)
const [, setJobs] = useState<JobPost[]>([])
  const [activeJobs, setActiveJobs] = useState<JobPost[]>([])
  const [loadingJobs, setLoadingJobs] = useState(true)
  const [showApplicationForm, setShowApplicationForm] = useState<string | null>(null)
  const [applicationForms, setApplicationForms] = useState<{
    [key: string]: ApplicationFormData
  }>({})
  const [cvFiles, setCvFiles] = useState<{ [key: string]: File | null }>({})
  const [submittingApplication, setSubmittingApplication] = useState<string | null>(null)
  const [emailErrors, setEmailErrors] = useState<{ [key: string]: string }>({})
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showCheckmark, setShowCheckmark] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])
 
  // Fetch jobs from Sanity with GROQ query
  useEffect(() => {
    const fetchJobsFromSanity = async () => {
      try {
        setLoadingJobs(true)
        // GROQ query to fetch active jobs ordered by postedDate descending
        const query = `
          *[_type == "jobPost" && status == "active"] | order(postedDate desc) {
            _id,
            _type,
            title,
            department,
            location,
            type,
            salary,
            description,
            requirements,
            status,
            postedDate,
            applications[] {
              _key,
              applicantName,
              email,
              phone,
              experience,
              currentRole,
              status,
              appliedDate,
              portfolio,
              cv {
                _type,
                asset-> {
                  _id,
                  url,
                  originalFilename,
                  size,
                  mimeType
                }
              },
              coverLetter
            }
          }
        `
        const fetchedJobs = await client.fetch(query)
        setJobs(fetchedJobs)
        setActiveJobs(fetchedJobs)
      } catch (error) {
        console.error("Error fetching jobs from Sanity:", error)
        setJobs([])
        setActiveJobs([])
      } finally {
        setLoadingJobs(false)
      }
    }

    fetchJobsFromSanity()
  }, [])

  const handleApplicationFormChange = (jobId: string, field: string, value: string) => {
    setApplicationForms((prev) => ({
      ...prev,
      [jobId]: {
        ...prev[jobId],
        [field]: value,
      },
    }))

    // Clear email error when user starts typing
    if (field === "email" && emailErrors[jobId]) {
      setEmailErrors((prev) => ({
        ...prev,
        [jobId]: "",
      }))
    }
  }

  const handleFileChange = (jobId: string, file: File | null) => {
    setCvFiles((prev) => ({
      ...prev,
      [jobId]: file,
    }))
  }

  // Check if email already exists in applications for this job
  const checkEmailExists = (jobId: string, email: string): boolean => {
    const job = activeJobs.find((j) => j._id === jobId)
    if (!job || !job.applications) return false
    return job.applications.some((app) => app.email.toLowerCase() === email.toLowerCase())
  }

  const handleApplicationSubmit = async (e: React.FormEvent, jobId: string) => {
    e.preventDefault()
    setSubmittingApplication(jobId)

    const formData = applicationForms[jobId]
    if (!formData || !formData.applicantName || !formData.email) {
      alert("Please fill in required fields (Name and Email)")
      setSubmittingApplication(null)
      return
    }

    // Check if email already exists
    if (checkEmailExists(jobId, formData.email)) {
      setEmailErrors((prev) => ({
        ...prev,
        [jobId]: "This email has already been used to apply for this position.",
      }))
      setSubmittingApplication(null)
      return
    }

    try {
      const applicationData = {
        applicantName: formData.applicantName,
        email: formData.email,
        phone: formData.phone || "",
        experience: formData.experience || "",
        currentRole: formData.currentRole || "",
        portfolio: formData.portfolio || "",
        coverLetter: formData.coverLetter || "",
        status: "pending" as const,
        appliedDate: new Date().toISOString(),
      }

      const cvFile = cvFiles[jobId]
      const success = await addApplicationToJob(jobId, applicationData, cvFile || undefined)

      if (success) {
        // Show success modal instead of alert
        setShowSuccessModal(true)
        setShowCheckmark(true)

        // Hide checkmark after 3 seconds
        setTimeout(() => {
          setShowCheckmark(false)
        }, 3000)

        // Close modal after 6 seconds
        setTimeout(() => {
          setShowSuccessModal(false)
        }, 6000)

        // Reset form
        setApplicationForms((prev) => ({
          ...prev,
          [jobId]: {
            applicantName: "",
            email: "",
            phone: "",
            experience: "",
            currentRole: "",
            portfolio: "",
            coverLetter: "",
          },
        }))
        setCvFiles((prev) => ({
          ...prev,
          [jobId]: null,
        }))
        setShowApplicationForm(null)

        // Refresh jobs to show new application
        const query = `
          *[_type == "jobPost" && status == "active"] | order(postedDate desc) {
            _id,
            _type,
            title,
            department,
            location,
            type,
            salary,
            description,
            requirements,
            status,
            postedDate,
            applications[] {
              _key,
              applicantName,
              email,
              phone,
              experience,
              currentRole,
              status,
              appliedDate,
              portfolio,
              cv {
                _type,
                asset-> {
                  _id,
                  url,
                  originalFilename,
                  size,
                  mimeType
                }
              },
              coverLetter
            }
          }
        `
        const refreshedJobs = await client.fetch(query)
        setJobs(refreshedJobs)
        setActiveJobs(refreshedJobs)
      } else {
        alert("Failed to submit application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("Failed to submit application. Please try again.")
    } finally {
      setSubmittingApplication(null)
    }
  }

  const initializeApplicationForm = (jobId: string) => {
    if (!applicationForms[jobId]) {
      setApplicationForms((prev) => ({
        ...prev,
        [jobId]: {
          applicantName: "",
          email: "",
          phone: "",
          experience: "",
          currentRole: "",
          portfolio: "",
          coverLetter: "",
        },
      }))
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const socialLinks: SocialLink[] = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/tech-foge",
    label: "LinkedIn",
    color: "hover:text-[#0077B5]",
    bgColor: "hover:bg-[#0077B5]/20",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/Tech_Foge",
    label: "Twitter/X",
    color: "hover:text-[#1DA1F2]",
    bgColor: "hover:bg-[#1DA1F2]/20",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com/TechFoge",
    label: "Facebook",
    color: "hover:text-[#1877F2]",
    bgColor: "hover:bg-[#1877F2]/20",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/tech_foge",
    label: "Instagram",
    color: "hover:text-[#E4405F]",
    bgColor: "hover:bg-[#E4405F]/20",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@TechFoge",
    label: "YouTube",
    color: "hover:text-[#FF0000]",
    bgColor: "hover:bg-[#FF0000]/20",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@tech_foge",
    label: "TikTok",
    color: "hover:text-[#010101]",
    bgColor: "hover:bg-[#010101]/10",
  },
  {
    icon: SiThreads,
    href: "https://www.threads.net/@tech_foge",
    label: "Threads",
    color: "hover:text-[#000000]",
    bgColor: "hover:bg-[#000000]/10",
  },
  {
    icon: MdEmail,
    href: "mailto:techfoge1@gmail.com",
    label: "Email",
    color: "hover:text-[#D44638]",
    bgColor: "hover:bg-[#D44638]/20",
  },
]


  return (
    <div className={`bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      <BackgroundEffects />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
        <CareersHero isLoaded={isLoaded} />

        {/* Main Content Section */}
        {loadingJobs ? (
          <LoadingState isLoaded={isLoaded} />
        ) : activeJobs.length >= 1 ? (
          <JobsList
            isLoaded={isLoaded}
            activeJobs={activeJobs}
            showApplicationForm={showApplicationForm}
            setShowApplicationForm={setShowApplicationForm}
            applicationForms={applicationForms}
            handleApplicationFormChange={handleApplicationFormChange}
            cvFiles={cvFiles}
            handleFileChange={handleFileChange}
            handleApplicationSubmit={handleApplicationSubmit}
            submittingApplication={submittingApplication}
            emailErrors={emailErrors}
            initializeApplicationForm={initializeApplicationForm}
            formatFileSize={formatFileSize}
          />
        ) : (
          <NoJobsState isLoaded={isLoaded} />
        )}

        {/* Follow Us Section */}
        <SocialLinks isLoaded={isLoaded} socialLinks={socialLinks} />
      </div>

      {/* Success Modal */}
      <SuccessModal showSuccessModal={showSuccessModal} showCheckmark={showCheckmark} />

      {/* Custom CSS Animations */}
      <CustomStyles />
    </div>
  )
}

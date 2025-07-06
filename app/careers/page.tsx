


import Careers from '@/components/Career/CareersMainPage'
import React from 'react'

// app/careers/metadata.ts
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers at TechFoge",
  description:
    "Join the future of tech at TechFoge. We're hiring developers, designers, and innovators. Discover open roles and grow your career.",
  openGraph: {
    title: "Careers at TechFoge",
    description:
      "Explore open positions at TechFoge, where innovation meets opportunity. Build your future with AI, design, and engineering teams.",
    url: "https://techfoge.com/careers",
    siteName: "TechFoge",
    images: [
      {
        url: "https://techfoge.com/og-careers.jpg", // Update this
        width: 1200,
        height: 630,
        alt: "Careers at TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at TechFoge",
    description: "Be part of TechFoge’s journey. Apply now to open tech roles.",
    images: ["https://techfoge.com/twitter-careers.jpg"], // Update this
  },
  alternates: {
    canonical: "https://techfoge.com/careers",
  },
}


const Home = () => {
  return (
    <div>
      <Careers/>
    </div>
  )
}

export default Home





// "use client"

// import type React from "react"

// import { Poppins } from "next/font/google"
// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//   Linkedin,
//   Twitter,
//   Github,
//   Instagram,
//   Youtube,
//   Mail,
//   Briefcase,
//   MapPin,
//   DollarSign,
//   Calendar,
//   Send,
//   X,
//   Phone,
//   User,
//   FileText,
//   Globe,
//   Upload,
//   type File,
// } from "lucide-react"
// import { client } from "@/sanity/lib/client"
// import { addApplicationToJob } from "@/app/admin/jobs/sanity-operation"

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// })

// interface JobPost {
//   _id: string
//   _type: "jobPost"
//   title: string
//   department: string
//   location: string
//   type: string
//   salary?: string
//   description: string
//   requirements: string[]
//   status: "active" | "paused" | "closed"
//   postedDate: string
//   applications?: Application[]
// }

// interface Application {
//   _key?: string
//   applicantName: string
//   email: string
//   phone?: string
//   experience?: string
//   currentRole?: string
//   status: "pending" | "reviewed" | "interviewed" | "hired" | "rejected"
//   appliedDate: string
//   portfolio?: string
//   cv?: {
//     _type: "file"
//     asset: {
//       _ref: string
//       _type: "reference"
//       url?: string
//       originalFilename?: string
//       size?: number
//       mimeType?: string
//     }
//   }
//   coverLetter?: string
// }

// export default function Careers() {
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [jobs, setJobs] = useState<JobPost[]>([])
//   const [activeJobs, setActiveJobs] = useState<JobPost[]>([])
//   const [loadingJobs, setLoadingJobs] = useState(true)
//   const [showApplicationForm, setShowApplicationForm] = useState<string | null>(null)
//   const [applicationForms, setApplicationForms] = useState<{
//     [key: string]: {
//       applicantName: string
//       email: string
//       phone: string
//       experience: string
//       currentRole: string
//       portfolio: string
//       coverLetter: string
//     }
//   }>({})
//   const [cvFiles, setCvFiles] = useState<{ [key: string]: File | null }>({})
//   const [submittingApplication, setSubmittingApplication] = useState<string | null>(null)
//   const [emailErrors, setEmailErrors] = useState<{ [key: string]: string }>({})
//   const particleCanvasRef = useRef<HTMLCanvasElement>(null)
//   const [showSuccessModal, setShowSuccessModal] = useState(false)
//   const [showCheckmark, setShowCheckmark] = useState(false)

//   // Particle animation system
//   useEffect(() => {
//     const canvas = particleCanvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     resizeCanvas()

//     const particles: Array<{
//       x: number
//       y: number
//       vx: number
//       vy: number
//       size: number
//       opacity: number
//       color: string
//     }> = []

//     // Create particles
//     for (let i = 0; i < 30; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         size: Math.random() * 3 + 1,
//         opacity: Math.random() * 0.4 + 0.1,
//         color: Math.random() > 0.5 ? "#00D1FF" : "#66E5FF",
//       })
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       particles.forEach((particle) => {
//         // Update position
//         particle.x += particle.vx
//         particle.y += particle.vy

//         // Bounce off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

//         // Draw particle
//         ctx.beginPath()
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
//         ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
//           .toString(16)
//           .padStart(2, "0")}`
//         ctx.fill()
//       })

//       requestAnimationFrame(animate)
//     }

//     animate()

//     window.addEventListener("resize", resizeCanvas)
//     return () => window.removeEventListener("resize", resizeCanvas)
//   }, [])

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoaded(true), 100)
//     return () => clearTimeout(timer)
//   }, [])

//   // Fetch jobs from Sanity with GROQ query
//   useEffect(() => {
//     const fetchJobsFromSanity = async () => {
//       try {
//         setLoadingJobs(true)

//         // GROQ query to fetch active jobs ordered by postedDate descending
//         const query = `
//           *[_type == "jobPost" && status == "active"] | order(postedDate desc) {
//             _id,
//             _type,
//             title,
//             department,
//             location,
//             type,
//             salary,
//             description,
//             requirements,
//             status,
//             postedDate,
//             applications[] {
//               _key,
//               applicantName,
//               email,
//               phone,
//               experience,
//               currentRole,
//               status,
//               appliedDate,
//               portfolio,
//               cv {
//                 _type,
//                 asset-> {
//                   _id,
//                   url,
//                   originalFilename,
//                   size,
//                   mimeType
//                 }
//               },
//               coverLetter
//             }
//           }
//         `

//         const fetchedJobs = await client.fetch(query)
//         setJobs(fetchedJobs)
//         setActiveJobs(fetchedJobs)
//       } catch (error) {
//         console.error("Error fetching jobs from Sanity:", error)
//         setJobs([])
//         setActiveJobs([])
//       } finally {
//         setLoadingJobs(false)
//       }
//     }

//     fetchJobsFromSanity()
//   }, [])

//   const handleApplicationFormChange = (jobId: string, field: string, value: string) => {
//     setApplicationForms((prev) => ({
//       ...prev,
//       [jobId]: {
//         ...prev[jobId],
//         [field]: value,
//       },
//     }))

//     // Clear email error when user starts typing
//     if (field === "email" && emailErrors[jobId]) {
//       setEmailErrors((prev) => ({
//         ...prev,
//         [jobId]: "",
//       }))
//     }
//   }

//   const handleFileChange = (jobId: string, file: File | null) => {
//     setCvFiles((prev) => ({
//       ...prev,
//       [jobId]: file,
//     }))
//   }

//   // Check if email already exists in applications for this job
//   const checkEmailExists = (jobId: string, email: string): boolean => {
//     const job = activeJobs.find((j) => j._id === jobId)
//     if (!job || !job.applications) return false

//     return job.applications.some((app) => app.email.toLowerCase() === email.toLowerCase())
//   }

//   const handleApplicationSubmit = async (e: React.FormEvent, jobId: string) => {
//     e.preventDefault()
//     setSubmittingApplication(jobId)

//     const formData = applicationForms[jobId]
//     if (!formData || !formData.applicantName || !formData.email) {
//       alert("Please fill in required fields (Name and Email)")
//       setSubmittingApplication(null)
//       return
//     }

//     // Check if email already exists
//     if (checkEmailExists(jobId, formData.email)) {
//       setEmailErrors((prev) => ({
//         ...prev,
//         [jobId]: "This email has already been used to apply for this position.",
//       }))
//       setSubmittingApplication(null)
//       return
//     }

//     try {
//       const applicationData = {
//         applicantName: formData.applicantName,
//         email: formData.email,
//         phone: formData.phone || "",
//         experience: formData.experience || "",
//         currentRole: formData.currentRole || "",
//         portfolio: formData.portfolio || "",
//         coverLetter: formData.coverLetter || "",
//         status: "pending" as const,
//         appliedDate: new Date().toISOString(),
//       }

//       const cvFile = cvFiles[jobId]
//       const success = await addApplicationToJob(jobId, applicationData, cvFile || undefined)

//       if (success) {
//         // Show success modal instead of alert
//         setShowSuccessModal(true)
//         setShowCheckmark(true)

//         // Hide checkmark after 3 seconds
//         setTimeout(() => {
//           setShowCheckmark(false)
//         }, 3000)

//         // Close modal after 6 seconds
//         setTimeout(() => {
//           setShowSuccessModal(false)
//         }, 6000)

//         // Reset form
//         setApplicationForms((prev) => ({
//           ...prev,
//           [jobId]: {
//             applicantName: "",
//             email: "",
//             phone: "",
//             experience: "",
//             currentRole: "",
//             portfolio: "",
//             coverLetter: "",
//           },
//         }))
//         setCvFiles((prev) => ({
//           ...prev,
//           [jobId]: null,
//         }))
//         setShowApplicationForm(null)

//         // Refresh jobs to show new application
//         const query = `
//           *[_type == "jobPost" && status == "active"] | order(postedDate desc) {
//             _id,
//             _type,
//             title,
//             department,
//             location,
//             type,
//             salary,
//             description,
//             requirements,
//             status,
//             postedDate,
//             applications[] {
//               _key,
//               applicantName,
//               email,
//               phone,
//               experience,
//               currentRole,
//               status,
//               appliedDate,
//               portfolio,
//               cv {
//                 _type,
//                 asset-> {
//                   _id,
//                   url,
//                   originalFilename,
//                   size,
//                   mimeType
//                 }
//               },
//               coverLetter
//             }
//           }
//         `
//         const refreshedJobs = await client.fetch(query)
//         setJobs(refreshedJobs)
//         setActiveJobs(refreshedJobs)
//       } else {
//         alert("Failed to submit application. Please try again.")
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error)
//       alert("Failed to submit application. Please try again.")
//     } finally {
//       setSubmittingApplication(null)
//     }
//   }

//   const initializeApplicationForm = (jobId: string) => {
//     if (!applicationForms[jobId]) {
//       setApplicationForms((prev) => ({
//         ...prev,
//         [jobId]: {
//           applicantName: "",
//           email: "",
//           phone: "",
//           experience: "",
//           currentRole: "",
//           portfolio: "",
//           coverLetter: "",
//         },
//       }))
//     }
//   }

//   const formatFileSize = (bytes: number): string => {
//     if (bytes === 0) return "0 Bytes"
//     const k = 1024
//     const sizes = ["Bytes", "KB", "MB", "GB"]
//     const i = Math.floor(Math.log(bytes) / Math.log(k))
//     return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
//   }

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       href: "#",
//       label: "LinkedIn",
//       color: "hover:text-[#0077B5]",
//       bgColor: "hover:bg-[#0077B5]/20",
//     },
//     {
//       icon: Twitter,
//       href: "#",
//       label: "Twitter/X",
//       color: "hover:text-[#1DA1F2]",
//       bgColor: "hover:bg-[#1DA1F2]/20",
//     },
//     {
//       icon: Github,
//       href: "#",
//       label: "GitHub",
//       color: "hover:text-[#333]",
//       bgColor: "hover:bg-white/20",
//     },
//     {
//       icon: Instagram,
//       href: "#",
//       label: "Instagram",
//       color: "hover:text-[#E4405F]",
//       bgColor: "hover:bg-[#E4405F]/20",
//     },
//     {
//       icon: Youtube,
//       href: "#",
//       label: "YouTube",
//       color: "hover:text-[#FF0000]",
//       bgColor: "hover:bg-[#FF0000]/20",
//     },
//     {
//       icon: Mail,
//       href: "#",
//       label: "Email",
//       color: "hover:text-[#00D1FF]",
//       bgColor: "hover:bg-[#00D1FF]/20",
//     },
//   ]

//   return (
//     <div className={`bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
//       {/* Background Circuit Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <svg className="w-full h-full" viewBox="0 0 1200 800">
//           <defs>
//             <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
//               <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
//               <circle cx="20" cy="20" r="2" fill="#00D1FF" />
//               <circle cx="100" cy="20" r="2" fill="#00D1FF" />
//               <circle cx="20" cy="100" r="2" fill="#00D1FF" />
//               <circle cx="100" cy="100" r="2" fill="#00D1FF" />
//               <path d="M20 60h80M60 20v80" stroke="#00D1FF" strokeWidth="0.3" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#circuit)" />
//         </svg>
//       </div>

//       {/* Floating Particles */}
//       <canvas ref={particleCanvasRef} className="absolute inset-0 pointer-events-none" />

//       {/* Floating Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
//             style={{
//               width: `${Math.random() * 8 + 4}px`,
//               height: `${Math.random() * 8 + 4}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Glowing Orbs */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
//       <div className="absolute top-40 right-20 w-24 h-24 bg-[#00D1FF]/15 rounded-full blur-2xl animate-pulse-glow-delayed" />
//       <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#00D1FF]/8 rounded-full blur-3xl animate-pulse-glow-slow" />

//       {/* Careers Badge */}
//       <div className="fixed top-8 right-8 z-50">
//         <div className="relative">
//           <div className="bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-full font-bold text-sm animate-pulse-badge">
//             <span className="flex items-center gap-2">
//               <Briefcase size={16} />
//               Careers
//             </span>
//           </div>
//           <div className="absolute inset-0 bg-[#00D1FF]/30 rounded-full blur-lg animate-pulse" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center py-12 px-4">
//         {/* Hero Section - Contact Page Style */}
//         <section className="relative z-10 pt-20 pb-16 px-4 w-full">
//           <div className="max-w-7xl mx-auto text-center">
//             {/* Main Heading - CAREERS */}
//             <div
//               className={`mb-6 transition-all duration-1000 ease-out ${
//                 isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//             >
//               <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white relative">
//                 Careers
//                 {/* Neon Glow Effects */}
//                 <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
//                 <div className="absolute inset-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
//               </h1>
//             </div>

//             {/* Subtitle */}
//             <div
//               className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
//                 isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//             >
//               <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
//                 Join our innovative team — opportunities are coming soon.
//               </p>
//             </div>

//             {/* Decorative Elements */}
//             <div
//               className={`flex justify-center items-center gap-4 mb-12 transition-all duration-1000 ease-out delay-500 ${
//                 isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//             >
//               <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
//               <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
//               <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
//             </div>
//           </div>
//         </section>

//         {/* Main Content Section */}
//         {loadingJobs ? (
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ease-out delay-700 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="space-y-6">
//               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker">
//                 LOADING...
//                 <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
//                   LOADING...
//                 </div>
//               </h2>
//             </div>
//           </div>
//         ) : activeJobs.length >= 1 ? (
//           <div
//             className={`w-full max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 ease-out delay-700 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="text-center mb-12">
//               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker mb-6">
//                 OPEN POSITIONS
//                 <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
//                   OPEN POSITIONS
//                 </div>
//                 <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-glow-pulse-slow">
//                   OPEN POSITIONS
//                 </div>
//               </h2>
//               <p className="text-xl md:text-2xl text-[#D1D5DB] animate-coming-soon-glow">Join our innovative team</p>
//             </div>

//             {/* Jobs List */}
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, staggerChildren: 0.1 }}
//             >
//               {activeJobs.map((job, index) => (
//                 <motion.div
//                   key={job._id}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="bg-white/5 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/60 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] transition-all duration-300 animate-float"
//                   style={{
//                     animationDelay: `${index * 0.2}s`,
//                     animationDuration: `${4 + index * 0.5}s`,
//                   }}
//                 >
//                   {/* Job Header */}
//                   <div className="mb-6">
//                     <div className="flex flex-wrap items-center gap-3 mb-4">
//                       <span className="px-4 py-2 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full text-sm font-semibold">
//                         {job.type}
//                       </span>
//                       <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
//                         {job.status}
//                       </span>
//                     </div>
//                     <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 animate-text-flicker">{job.title}</h3>
//                     <div className="flex flex-wrap gap-6 text-[#D1D5DB] mb-4">
//                       <div className="flex items-center gap-2">
//                         <Briefcase size={16} className="text-[#00D1FF]" />
//                         {job.department}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MapPin size={16} className="text-[#00D1FF]" />
//                         {job.location}
//                       </div>
//                       {job.salary && (
//                         <div className="flex items-center gap-2">
//                           <DollarSign size={16} className="text-[#00D1FF]" />
//                           {job.salary}
//                         </div>
//                       )}
//                       <div className="flex items-center gap-2">
//                         <Calendar size={16} className="text-[#00D1FF]" />
//                         Posted {new Date(job.postedDate).toLocaleDateString()}
//                       </div>
//                     </div>
//                     <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4">{job.description}</p>
//                     {job.requirements.length > 0 && (
//                       <div className="mb-6">
//                         <h4 className="text-white font-semibold mb-3 text-xl">Requirements:</h4>
//                         <ul className="list-disc list-inside text-[#D1D5DB] space-y-2">
//                           {job.requirements.map((req, idx) => (
//                             <li key={idx} className="leading-relaxed">
//                               {req}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>

//                   {/* Apply Button */}
//                   <div className="text-center mb-6">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => {
//                         initializeApplicationForm(job._id)
//                         setShowApplicationForm(showApplicationForm === job._id ? null : job._id)
//                       }}
//                       className="bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300 animate-pulse-badge"
//                     >
//                       {showApplicationForm === job._id ? "Hide Application Form" : "Apply Now"}
//                     </motion.button>
//                   </div>

//                   {/* Application Form */}
//                   <AnimatePresence>
//                     {showApplicationForm === job._id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, y: -20 }}
//                         animate={{ opacity: 1, height: "auto", y: 0 }}
//                         exit={{ opacity: 0, height: 0, y: -20 }}
//                         transition={{ duration: 0.4, ease: "easeInOut" }}
//                         className="mt-8 p-6 bg-[#020A15]/60 backdrop-blur-md border border-[#00D1FF]/30 rounded-xl overflow-hidden"
//                       >
//                         <motion.div
//                           initial={{ opacity: 0, y: 20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.2, duration: 0.3 }}
//                         >
//                           <div className="flex items-center justify-between mb-6">
//                             <h4 className="text-2xl font-bold text-white">Apply for {job.title}</h4>
//                             <motion.button
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               onClick={() => setShowApplicationForm(null)}
//                               className="text-[#D1D5DB] hover:text-[#00D1FF] transition-colors duration-200"
//                             >
//                               <X size={24} />
//                             </motion.button>
//                           </div>

//                           <form onSubmit={(e) => handleApplicationSubmit(e, job._id)} className="space-y-6">
//                             {/* Name and Email Row */}
//                             <motion.div
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: 0.3, duration: 0.3 }}
//                               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                             >
//                               <div>
//                                 <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                   <User size={16} className="text-[#00D1FF]" />
//                                   Full Name *
//                                 </label>
//                                 <input
//                                   type="text"
//                                   required
//                                   value={applicationForms[job._id]?.applicantName || ""}
//                                   onChange={(e) =>
//                                     handleApplicationFormChange(job._id, "applicantName", e.target.value)
//                                   }
//                                   className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
//                                   placeholder="Enter your full name"
//                                 />
//                               </div>
//                               <div>
//                                 <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                   <Mail size={16} className="text-[#00D1FF]" />
//                                   Email Address *
//                                 </label>
//                                 <input
//                                   type="email"
//                                   required
//                                   value={applicationForms[job._id]?.email || ""}
//                                   onChange={(e) => handleApplicationFormChange(job._id, "email", e.target.value)}
//                                   className={`w-full px-4 py-3 bg-[#020A15]/60 border rounded-xl text-white placeholder-[#D1D5DB]/50 focus:outline-none transition-all duration-300 ${
//                                     emailErrors[job._id]
//                                       ? "border-red-500 focus:border-red-500"
//                                       : "border-[#00D1FF]/30 focus:border-[#00D1FF]"
//                                   }`}
//                                   placeholder="Enter your email"
//                                 />
//                                 {emailErrors[job._id] && (
//                                   <p className="text-red-400 text-sm mt-2">{emailErrors[job._id]}</p>
//                                 )}
//                               </div>
//                             </motion.div>

//                             {/* Phone and Experience Row */}
//                             <motion.div
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: 0.4, duration: 0.3 }}
//                               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                             >
//                               <div>
//                                 <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                   <Phone size={16} className="text-[#00D1FF]" />
//                                   Phone Number
//                                 </label>
//                                 <input
//                                   type="tel"
//                                   value={applicationForms[job._id]?.phone || ""}
//                                   onChange={(e) => handleApplicationFormChange(job._id, "phone", e.target.value)}
//                                   className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
//                                   placeholder="Enter your phone number"
//                                 />
//                               </div>
//                               <div>
//                                 <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                   <Calendar size={16} className="text-[#00D1FF]" />
//                                   Years of Experience
//                                 </label>
//                                 <input
//                                   type="text"
//                                   value={applicationForms[job._id]?.experience || ""}
//                                   onChange={(e) => handleApplicationFormChange(job._id, "experience", e.target.value)}
//                                   className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
//                                   placeholder="e.g., 3 years"
//                                 />
//                               </div>
//                             </motion.div>

//                             {/* Current Role */}
//                             <motion.div
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: 0.5, duration: 0.3 }}
//                             >
//                               <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                 <Briefcase size={16} className="text-[#00D1FF]" />
//                                 Current Role
//                               </label>
//                               <input
//                                 type="text"
//                                 value={applicationForms[job._id]?.currentRole || ""}
//                                 onChange={(e) => handleApplicationFormChange(job._id, "currentRole", e.target.value)}
//                                 className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
//                                 placeholder="e.g., Senior Developer at TechCorp"
//                               />
//                             </motion.div>

//                             {/* Portfolio and CV Row */}
//                             <motion.div
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: 0.6, duration: 0.3 }}
//                               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                             >
//                               <div>
//                                 <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                   <Globe size={16} className="text-[#00D1FF]" />
//                                   Portfolio URL
//                                 </label>
//                                 <input
//                                   type="url"
//                                   value={applicationForms[job._id]?.portfolio || ""}
//                                   onChange={(e) => handleApplicationFormChange(job._id, "portfolio", e.target.value)}
//                                   className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
//                                   placeholder="https://your-portfolio.com"
//                                 />
//                               </div>
//                               <div>
//                                 <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                   <FileText size={16} className="text-[#00D1FF]" />
//                                   CV/Resume Upload
//                                 </label>
//                                 <div className="relative">
//                                   <input
//                                     type="file"
//                                     accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//                                     onChange={(e) => handleFileChange(job._id, e.target.files?.[0] || null)}
//                                     className="hidden"
//                                     id={`cv-upload-${job._id}`}
//                                   />
//                                   <label
//                                     htmlFor={`cv-upload-${job._id}`}
//                                     className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white cursor-pointer hover:border-[#00D1FF] transition-all duration-300 flex items-center gap-2"
//                                   >
//                                     <Upload size={16} className="text-[#00D1FF]" />
//                                     {cvFiles[job._id] ? (
//                                       <span className="text-sm">
//                                         {cvFiles[job._id]!.name} ({formatFileSize(cvFiles[job._id]!.size)})
//                                       </span>
//                                     ) : (
//                                       <span className="text-[#D1D5DB]/50">Choose file (PDF, DOC, JPG, PNG)</span>
//                                     )}
//                                   </label>
//                                 </div>
//                               </div>
//                             </motion.div>

//                             {/* Cover Letter */}
//                             <motion.div
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: 0.7, duration: 0.3 }}
//                             >
//                               <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
//                                 <FileText size={16} className="text-[#00D1FF]" />
//                                 Cover Letter
//                               </label>
//                               <textarea
//                                 rows={4}
//                                 value={applicationForms[job._id]?.coverLetter || ""}
//                                 onChange={(e) => handleApplicationFormChange(job._id, "coverLetter", e.target.value)}
//                                 className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300 resize-none"
//                                 placeholder="Tell us why you're interested in this position..."
//                               />
//                             </motion.div>

//                             <motion.div
//                               initial={{ opacity: 0, y: 20 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ delay: 0.8, duration: 0.3 }}
//                               className="flex gap-4 justify-center"
//                             >
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 type="button"
//                                 onClick={() => setShowApplicationForm(null)}
//                                 className="px-6 py-3 border border-[#00D1FF]/30 text-[#D1D5DB] rounded-xl hover:bg-[#00D1FF]/10 transition-all duration-300"
//                               >
//                                 Cancel
//                               </motion.button>
//                               <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 type="submit"
//                                 disabled={submittingApplication === job._id}
//                                 className="bg-[#00D1FF] text-[#020A15] px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                               >
//                                 {submittingApplication === job._id ? (
//                                   <>
//                                     <motion.div
//                                       animate={{ rotate: 360 }}
//                                       transition={{
//                                         duration: 1,
//                                         repeat: Number.POSITIVE_INFINITY,
//                                         ease: "linear",
//                                       }}
//                                       className="w-4 h-4 border-2 border-[#020A15] border-t-transparent rounded-full"
//                                     />
//                                     Submitting...
//                                   </>
//                                 ) : (
//                                   <>
//                                     <Send size={16} />
//                                     Submit Application
//                                   </>
//                                 )}
//                               </motion.button>
//                             </motion.div>
//                           </form>
//                         </motion.div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         ) : (
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ease-out delay-700 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="space-y-6">
//               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker">
//                 JOBS/INTERNSHIPS
//                 <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
//                   JOBS/INTERNSHIPS
//                 </div>
//                 <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-glow-pulse-slow">
//                   JOBS/INTERNSHIPS
//                 </div>
//               </h2>
//               <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00D1FF] animate-coming-soon-glow">
//                 Coming Soon
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Follow Us Section */}
//         <div
//           className={`transition-all duration-1000 ease-out delay-900 ${
//             isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <div className="text-center">
//             <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 animate-fade-in">Follow us on</h3>

//             {/* Social Icons Grid */}
//             <div className="flex flex-wrap justify-center gap-6 md:gap-8">
//               {socialLinks.map((social, index) => {
//                 const IconComponent = social.icon
//                 return (
//                   <motion.a
//                     key={social.label}
//                     href={social.href}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#00D1FF]/20 flex items-center justify-center transition-all duration-300 hover:border-[#00D1FF]/60 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] ${social.bgColor} animate-float`}
//                     style={{
//                       animationDelay: `${index * 0.2}s`,
//                       animationDuration: `${3 + index * 0.5}s`,
//                     }}
//                     aria-label={social.label}
//                   >
//                     {/* Icon */}
//                     <IconComponent
//                       size={24}
//                       className={`text-[#00D1FF] transition-all duration-300 group-hover:scale-110 ${social.color}`}
//                     />

//                     {/* Glowing background effect */}
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-[#00D1FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                     {/* Animated border glow */}
//                     <div className="absolute inset-0 rounded-2xl border border-[#00D1FF]/0 group-hover:border-[#00D1FF]/40 transition-all duration-300 animate-border-glow" />

//                     {/* Floating particles on hover */}
//                     <div className="absolute inset-0 pointer-events-none">
//                       <div className="absolute top-1 left-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
//                       <div className="absolute top-1 right-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200" />
//                       <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-400" />
//                       <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#00D1FF] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-600" />
//                     </div>
//                   </motion.a>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//           <div
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             style={{
//               animation: "fadeIn 0.3s ease-out",
//             }}
//           />
//           <div
//             className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-8 max-w-md w-full text-center"
//             style={{
//               animation: "modalSlideIn 0.4s ease-out",
//             }}
//           >
//             {/* Checkmark Animation */}
//             <div className="mb-6 flex justify-center">
//               <div
//                 className={`w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center transition-all duration-500 ${
//                   showCheckmark ? "scale-100 opacity-100" : "scale-0 opacity-0"
//                 }`}
//                 style={{
//                   background: "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
//                 }}
//               >
//                 <svg
//                   className={`w-10 h-10 text-green-400 transition-all duration-700 ${
//                     showCheckmark ? "scale-100 opacity-100" : "scale-0 opacity-0"
//                   }`}
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   style={{
//                     strokeDasharray: showCheckmark ? "0" : "50",
//                     strokeDashoffset: showCheckmark ? "0" : "50",
//                     transition:
//                       "stroke-dasharray 0.6s ease-in-out 0.2s, stroke-dashoffset 0.6s ease-in-out 0.2s, transform 0.3s ease-out 0.1s, opacity 0.3s ease-out 0.1s",
//                   }}
//                 >
//                   <polyline points="9,12 12,15 22,5"></polyline>
//                 </svg>
//               </div>
//             </div>

//             {/* Success Message */}
//             <h3
//               className="text-2xl font-bold text-white mb-4"
//               style={{
//                 animation: "fadeInUp 0.5s ease-out 0.2s both",
//               }}
//             >
//               Application Submitted!
//             </h3>
//             <p
//               className="text-[#D1D5DB] text-lg leading-relaxed"
//               style={{
//                 animation: "fadeInUp 0.5s ease-out 0.3s both",
//               }}
//             >
//               Your application has been submitted successfully! We'll review your application and get back to you soon.
//             </p>

//             {/* Animated border glow */}
//             <div
//               className="absolute inset-0 rounded-2xl border-2 border-green-400/0 pointer-events-none"
//               style={{
//                 animation: showCheckmark ? "borderGlow 0.8s ease-out 0.4s" : "none",
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes neon-pulse {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes neon-pulse-slow {
//           0%, 100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }

//         @keyframes text-flicker {
//           0%, 100% {
//             opacity: 1;
//             text-shadow: 0 0 10px #00d1ff, 0 0 20px #00d1ff, 0 0 30px #00d1ff;
//           }
//           2% {
//             opacity: 0.8;
//           }
//           4% {
//             opacity: 1;
//           }
//           8% {
//             opacity: 0.9;
//           }
//           10% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 1;
//             text-shadow: 0 0 15px #00d1ff, 0 0 25px #00d1ff, 0 0 35px #00d1ff;
//           }
//           52% {
//             opacity: 0.85;
//           }
//           54% {
//             opacity: 1;
//           }
//         }

//         @keyframes coming-soon-glow {
//           0%, 100% {
//             text-shadow: 0 0 15px #00d1ff, 0 0 25px #00d1ff, 0 0 35px #00d1ff;
//             opacity: 0.9;
//           }
//           50% {
//             text-shadow: 0 0 20px #00d1ff, 0 0 35px #00d1ff, 0 0 50px #00d1ff;
//             opacity: 1;
//           }
//         }

//         @keyframes glow-pulse {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }

//         @keyframes glow-pulse-slow {
//           0%, 100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.4;
//           }
//         }

//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.1);
//           }
//         }

//         @keyframes pulse-glow-delayed {
//           0%, 100% {
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.8;
//             transform: scale(1.15);
//           }
//         }

//         @keyframes pulse-glow-slow {
//           0%, 100% {
//             opacity: 0.2;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(1.05);
//           }
//         }

//         @keyframes pulse-badge {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         @keyframes fade-in {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         @keyframes border-glow {
//           0%, 100% {
//             box-shadow: 0 0 5px rgba(0, 209, 255, 0.2);
//           }
//           50% {
//             box-shadow: 0 0 20px rgba(0, 209, 255, 0.4);
//           }
//         }

//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }

//         @keyframes modalSlideIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-20px) scale(0.95);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes borderGlow {
//           0% {
//             border-color: rgba(34, 197, 94, 0);
//             box-shadow: 0 0 0 rgba(34, 197, 94, 0);
//           }
//           50% {
//             border-color: rgba(34, 197, 94, 0.6);
//             box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
//           }
//           100% {
//             border-color: rgba(34, 197, 94, 0);
//             box-shadow: 0 0 0 rgba(34, 197, 94, 0);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-neon-pulse {
//           animation: neon-pulse 3s ease-in-out infinite;
//         }

//         .animate-neon-pulse-slow {
//           animation: neon-pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-text-flicker {
//           animation: text-flicker 4s ease-in-out infinite;
//         }

//         .animate-coming-soon-glow {
//           animation: coming-soon-glow 2.5s ease-in-out infinite;
//         }

//         .animate-glow-pulse {
//           animation: glow-pulse 3s ease-in-out infinite;
//         }

//         .animate-glow-pulse-slow {
//           animation: glow-pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 4s ease-in-out infinite;
//         }

//         .animate-pulse-glow-delayed {
//           animation: pulse-glow-delayed 5s ease-in-out infinite 1s;
//         }

//         .animate-pulse-glow-slow {
//           animation: pulse-glow-slow 6s ease-in-out infinite;
//         }

//         .animate-pulse-badge {
//           animation: pulse-badge 2s ease-in-out infinite;
//         }

//         .animate-fade-in {
//           animation: fade-in 2s ease-out;
//         }

//         .animate-border-glow {
//           animation: border-glow 2s ease-in-out infinite;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//         }

//         .animation-delay-400 {
//           animation-delay: 0.4s;
//         }

//         .animation-delay-600 {
//           animation-delay: 0.6s;
//         }
//       `}</style>
//     </div>
//   )
// }

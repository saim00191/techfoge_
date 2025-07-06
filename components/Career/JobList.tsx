"use client"
import { motion } from "framer-motion"
import type { JobsListProps } from "@/types/Career"
import { JobCard } from "./JobCard"

export const JobsList = ({
  isLoaded,
  activeJobs,
  showApplicationForm,
  setShowApplicationForm,
  applicationForms,
  handleApplicationFormChange,
  cvFiles,
  handleFileChange,
  handleApplicationSubmit,
  submittingApplication,
  emailErrors,
  initializeApplicationForm,
  formatFileSize,
}: JobsListProps) => {
  return (
    <div
      className={`w-full max-w-6xl mx-auto px-4 mb-16 transition-all duration-1000 ease-out delay-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative animate-text-flicker mb-6">
          OPEN POSITIONS
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-glow-pulse">
            OPEN POSITIONS
          </div>
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-glow-pulse-slow">
            OPEN POSITIONS
          </div>
        </h2>
        <p className="text-xl md:text-2xl text-[#D1D5DB] animate-coming-soon-glow">Join our innovative team</p>
      </div>

      {/* Jobs List */}
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {activeJobs.map((job, index) => (
          <JobCard
            key={job._id}
            job={job}
            index={index}
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
        ))}
      </motion.div>
    </div>
  )
}

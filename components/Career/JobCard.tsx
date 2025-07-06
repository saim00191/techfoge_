"use client"
import { motion } from "framer-motion"
import { Briefcase, MapPin, DollarSign, Calendar } from 'lucide-react'
import type { JobCardProps } from "@/types/Career"
import { ApplicationForm } from "./ApplicationForm"

export const JobCard = ({
  job,
  index,
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
}: JobCardProps) => {
  return (
    <motion.div
      key={job._id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 hover:border-[#00D1FF]/60 hover:shadow-[0_0_30px_rgba(0,209,255,0.3)] transition-all duration-300 animate-float"
      style={{
        animationDelay: `${index * 0.2}s`,
        animationDuration: `${4 + index * 0.5}s`,
      }}
    >
      {/* Job Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-4 py-2 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full text-sm font-semibold">
            {job.type}
          </span>
          <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
            {job.status}
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 animate-text-flicker">{job.title}</h3>
        <div className="flex flex-wrap gap-6 text-[#D1D5DB] mb-4">
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-[#00D1FF]" />
            {job.department}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#00D1FF]" />
            {job.location}
          </div>
          {job.salary && (
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-[#00D1FF]" />
              {job.salary}
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-[#00D1FF]" />
            Posted {new Date(job.postedDate).toLocaleDateString()}
          </div>
        </div>
        <p className="text-[#D1D5DB] text-lg leading-relaxed mb-4">{job.description}</p>
        {job.requirements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 text-xl">Requirements:</h4>
            <ul className="list-disc list-inside text-[#D1D5DB] space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="leading-relaxed">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Apply Button */}
      <div className="text-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            initializeApplicationForm(job._id)
            setShowApplicationForm(showApplicationForm === job._id ? null : job._id)
          }}
          className="bg-[#00D1FF] text-[#020A15] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all duration-300 animate-pulse-badge"
        >
          {showApplicationForm === job._id ? "Hide Application Form" : "Apply Now"}
        </motion.button>
      </div>

      {/* Application Form */}
      <ApplicationForm
        job={job}
        showApplicationForm={showApplicationForm}
        setShowApplicationForm={setShowApplicationForm}
        applicationForms={applicationForms}
        handleApplicationFormChange={handleApplicationFormChange}
        cvFiles={cvFiles}
        handleFileChange={handleFileChange}
        handleApplicationSubmit={handleApplicationSubmit}
        submittingApplication={submittingApplication}
        emailErrors={emailErrors}
        formatFileSize={formatFileSize}
      />
    </motion.div>
  )
}

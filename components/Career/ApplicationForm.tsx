"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, Calendar, Briefcase, Globe, FileText, Upload, Send } from 'lucide-react'
import type { ApplicationFormProps } from "@/types/Career"

export const ApplicationForm = ({
  job,
  showApplicationForm,
  setShowApplicationForm,
  applicationForms,
  handleApplicationFormChange,
  cvFiles,
  handleFileChange,
  handleApplicationSubmit,
  submittingApplication,
  emailErrors,
  formatFileSize,
}: ApplicationFormProps) => {
  return (
    <AnimatePresence>
      {showApplicationForm === job._id && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="mt-8 py-6 px-3 bg-[#020A15]/60 backdrop-blur-md border border-[#00D1FF]/30 rounded-xl overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-bold text-white">Apply for {job.title}</h4>
           
            </div>

            <form onSubmit={(e) => handleApplicationSubmit(e, job._id)} className="space-y-6">
              {/* Name and Email Row */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <User size={16} className="text-[#00D1FF]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationForms[job._id]?.applicantName || ""}
                    onChange={(e) => handleApplicationFormChange(job._id, "applicantName", e.target.value)}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <Mail size={16} className="text-[#00D1FF]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationForms[job._id]?.email || ""}
                    onChange={(e) => handleApplicationFormChange(job._id, "email", e.target.value)}
                    className={`w-full px-4 py-3 bg-[#020A15]/60 border rounded-xl text-white placeholder-[#D1D5DB]/50 focus:outline-none transition-all duration-300 ${
                      emailErrors[job._id]
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#00D1FF]/30 focus:border-[#00D1FF]"
                    }`}
                    placeholder="Enter your email"
                  />
                  {emailErrors[job._id] && <p className="text-red-400 text-sm mt-2">{emailErrors[job._id]}</p>}
                </div>
              </motion.div>

              {/* Phone and Experience Row */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <Phone size={16} className="text-[#00D1FF]" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={applicationForms[job._id]?.phone || ""}
                    onChange={(e) => handleApplicationFormChange(job._id, "phone", e.target.value)}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <Calendar size={16} className="text-[#00D1FF]" />
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    value={applicationForms[job._id]?.experience || ""}
                    onChange={(e) => handleApplicationFormChange(job._id, "experience", e.target.value)}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="e.g., 3 years"
                  />
                </div>
              </motion.div>

              {/* Current Role */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                  <Briefcase size={16} className="text-[#00D1FF]" />
                  Current Role
                </label>
                <input
                  type="text"
                  value={applicationForms[job._id]?.currentRole || ""}
                  onChange={(e) => handleApplicationFormChange(job._id, "currentRole", e.target.value)}
                  className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                  placeholder="e.g., Senior Developer at TechCorp"
                />
              </motion.div>

              {/* Portfolio and CV Row */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <Globe size={16} className="text-[#00D1FF]" />
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={applicationForms[job._id]?.portfolio || ""}
                    onChange={(e) => handleApplicationFormChange(job._id, "portfolio", e.target.value)}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="https://your-portfolio.com"
                  />
                </div>
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <FileText size={16} className="text-[#00D1FF]" />
                    CV/Resume Upload
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(job._id, e.target.files?.[0] || null)}
                      className="hidden"
                      id={`cv-upload-${job._id}`}
                    />
                    <label
                      htmlFor={`cv-upload-${job._id}`}
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white cursor-pointer hover:border-[#00D1FF] transition-all duration-300 flex items-center gap-2"
                    >
                      <Upload size={16} className="text-[#00D1FF]" />
                      {cvFiles[job._id] ? (
                        <span className="text-sm">
                          {cvFiles[job._id]!.name} ({formatFileSize(cvFiles[job._id]!.size)})
                        </span>
                      ) : (
                        <span className="text-[#D1D5DB]/50">Choose file (PDF, DOC, JPG, PNG)</span>
                      )}
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Cover Letter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              >
                <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                  <FileText size={16} className="text-[#00D1FF]" />
                  Cover Letter
                </label>
                <textarea
                  rows={4}
                  value={applicationForms[job._id]?.coverLetter || ""}
                  onChange={(e) => handleApplicationFormChange(job._id, "coverLetter", e.target.value)}
                  className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us why you're interested in this position..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="flex flex-col xms:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setShowApplicationForm(null)}
                  className="px-6 py-3 border border-[#00D1FF]/30 text-[#D1D5DB] rounded-xl hover:bg-[#00D1FF]/10 transition-all duration-300"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={submittingApplication === job._id}
                  className="bg-[#00D1FF] text-[#020A15] px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submittingApplication === job._id ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-[#020A15] border-t-transparent rounded-full"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Application
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

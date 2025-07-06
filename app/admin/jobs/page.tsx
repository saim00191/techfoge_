"use client"

import type React from "react"

import { useState, useEffect } from "react"

import PageHeader from "./PageHeader"

import Card from "./Card"

import {
  Briefcase,
  Plus,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Edit,
  Trash2,
  Eye,
  Download,
  Search,
  X,
  Save,
  File,
} from "lucide-react"

import {
  fetchJobs,
  createJob,
  updateJob,
  deleteJob,
  updateApplicationStatus,
  downloadFile,
  type JobPost,
  type Application,
} from "./sanity-operation"

export default function JobsPage() {
  const [jobs, setJobs] = useState<JobPost[]>([])

  const [loading, setLoading] = useState(true)

  const [showJobForm, setShowJobForm] = useState(false)

  const [editingJob, setEditingJob] = useState<JobPost | null>(null)

  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const [searchTerm, setSearchTerm] = useState("")

  const [filterStatus, setFilterStatus] = useState("all")

  const [submitting, setSubmitting] = useState(false)

  const [jobFormData, setJobFormData] = useState<{
    title: string
    department: string
    location: string
    type: string
    salary: string
    description: string
    requirements: string
    status: string
    cv: File | null
  }>({
    title: "",

    department: "",

    location: "",

    type: "Full-time",

    salary: "",

    description: "",

    requirements: "",

    status: "active",

    cv: null,
  })

  // Load jobs on component mount

  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = async () => {
    setLoading(true)

    try {
      const fetchedJobs = await fetchJobs()

      setJobs(fetchedJobs)
    } catch (error) {
      console.error("Error loading jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "all" || job.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getJobApplications = (job: JobPost): Application[] => {
    return job.applications || []
  }

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSubmitting(true)

    try {
      const jobData = {
        title: jobFormData.title,

        department: jobFormData.department,

        location: jobFormData.location,

        type: jobFormData.type,

        salary: jobFormData.salary,

        description: jobFormData.description,

        requirements: jobFormData.requirements.split("\n").filter((r) => r.trim()),

        status: jobFormData.status as "active" | "paused" | "closed",

        postedDate: new Date().toISOString(),

        cv: jobFormData.cv,
      }

      if (editingJob) {
        const updatedJob = await updateJob(editingJob._id, jobData)

        if (updatedJob) {
          setJobs((prev) => prev.map((job) => (job._id === editingJob._id ? updatedJob : job)))

          alert("Job updated successfully!")
        } else {
          alert("Failed to update job. Please try again.")
        }
      } else {
        const newJob = await createJob(jobData)

        if (newJob) {
          setJobs((prev) => [newJob, ...prev])

          alert("Job posted successfully!")
        } else {
          alert("Failed to create job. Please try again.")
        }
      }

      setShowJobForm(false)

      setEditingJob(null)

      setJobFormData({
        title: "",

        department: "",

        location: "",

        type: "Full-time",

        salary: "",

        description: "",

        requirements: "",

        status: "active",

        cv: null,
      })
    } catch (error) {
      console.error("Error submitting job:", error)

      alert("An error occurred. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleEditJob = (job: JobPost) => {
    setEditingJob(job)

    setJobFormData({
      title: job.title,

      department: job.department,

      location: job.location,

      type: job.type,

      salary: job.salary || "",

      description: job.description,

      requirements: job.requirements.join("\n"),

      status: job.status,

      cv: null,
    })

    setShowJobForm(true)
  }

  const handleDeleteJob = async (jobId: string) => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      const success = await deleteJob(jobId)

      if (success) {
        setJobs((prev) => prev.filter((job) => job._id !== jobId))

        alert("Job deleted successfully!")
      } else {
        alert("Failed to delete job. Please try again.")
      }
    }
  }

  const handleApplicationStatusChange = async (job: JobPost, applicationKey: string, newStatus: string) => {
    const success = await updateApplicationStatus(job._id, applicationKey, newStatus)

    if (success) {
      // Update local state

      setJobs((prev) =>
        prev.map((j) => {
          if (j._id === job._id) {
            return {
              ...j,

              applications: j.applications?.map((app) =>
                app._key === applicationKey ? { ...app, status: newStatus as Application["status"] } : app,
              ),
            }
          }

          return j
        }),
      )
    } else {
      alert("Failed to update application status. Please try again.")
    }
  }

  const handleDownloadCV = async (application: Application) => {
    if (application.cv?.asset?.url) {
      const filename = application.cv.asset.originalFilename || `${application.applicantName}_CV.pdf`

      await downloadFile(application.cv.asset.url, filename)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400"

      case "paused":
        return "bg-yellow-500/20 text-yellow-400"

      case "closed":
        return "bg-red-500/20 text-red-400"

      case "hired":
        return "bg-blue-500/20 text-blue-400"

      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getApplicationStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500/20 text-yellow-400"

      case "reviewed":
        return "bg-blue-500/20 text-blue-400"

      case "interviewed":
        return "bg-purple-500/20 text-purple-400"

      case "hired":
        return "bg-green-500/20 text-green-400"

      case "rejected":
        return "bg-red-500/20 text-red-400"

      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"

    const k = 1024

    const sizes = ["Bytes", "KB", "MB", "GB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  // Calculate stats

  const totalApplications = jobs.reduce((total, job) => total + (job.applications?.length || 0), 0)

  const pendingApplications = jobs.reduce(
    (total, job) => total + (job.applications?.filter((app) => app.status === "pending").length || 0),

    0,
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020A15] flex items-center justify-center">
        <div className="text-white text-xl">Loading jobs...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020A15] relative overflow-hidden">
      {/* Background Effects */}

      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />

              <circle cx="20" cy="20" r="2" fill="#00D1FF" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 p-6">
        <PageHeader title="Jobs Management" description="Post job openings and manage applications.">
          <button
            onClick={() => {
              setEditingJob(null)

              setJobFormData({
                title: "",

                department: "",

                location: "",

                type: "Full-time",

                salary: "",

                description: "",

                requirements: "",

                status: "active",

                cv: null,
              })

              setShowJobForm(true)
            }}
            className="bg-[#00D1FF] text-[#020A15] px-6 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <Plus size={20} />
            Post New Job
          </button>
        </PageHeader>

        {/* Job Form Modal */}

        {showJobForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowJobForm(false)} />

            <div className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{editingJob ? "Edit Job" : "Post New Job"}</h2>

                <button
                  onClick={() => setShowJobForm(false)}
                  className="text-[#D1D5DB] hover:text-[#00D1FF] transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleJobSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Job Title</label>

                    <input
                      type="text"
                      required
                      value={jobFormData.title}
                      onChange={(e) => setJobFormData((prev) => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                      placeholder="e.g. Senior Developer"
                    />
                  </div>

                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Department</label>

                    <input
                      type="text"
                      required
                      value={jobFormData.department}
                      onChange={(e) => setJobFormData((prev) => ({ ...prev, department: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                      placeholder="e.g. Engineering"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Location</label>

                    <input
                      type="text"
                      required
                      value={jobFormData.location}
                      onChange={(e) => setJobFormData((prev) => ({ ...prev, location: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                      placeholder="e.g. Remote, New York"
                    />
                  </div>

                  <div>
                    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Job Type</label>

                    <select
                      value={jobFormData.type}
                      onChange={(e) => setJobFormData((prev) => ({ ...prev, type: e.target.value }))}
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    >
                      <option value="Full-time">Full-time</option>

                      <option value="Part-time">Part-time</option>

                      <option value="Contract">Contract</option>

                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Salary Range</label>

                  <input
                    type="text"
                    value={jobFormData.salary}
                    onChange={(e) => setJobFormData((prev) => ({ ...prev, salary: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="e.g. $80,000 - $120,000"
                  />
                </div>

                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Job Description</label>

                  <textarea
                    rows={4}
                    required
                    value={jobFormData.description}
                    onChange={(e) => setJobFormData((prev) => ({ ...prev, description: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe the role and responsibilities..."
                  />
                </div>

                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Requirements (one per line)</label>

                  <textarea
                    rows={4}
                    value={jobFormData.requirements}
                    onChange={(e) => setJobFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300 resize-none"
                    placeholder="5+ years experience\nReact/Node.js\nDatabase design"
                  />
                </div>

                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Status</label>

                  <select
                    value={jobFormData.status}
                    onChange={(e) => setJobFormData((prev) => ({ ...prev, status: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                  >
                    <option value="active">Active</option>

                    <option value="paused">Paused</option>

                    <option value="closed">Closed</option>
                  </select>
                </div>

       

                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowJobForm(false)}
                    className="px-6 py-3 border border-[#00D1FF]/30 text-[#D1D5DB] rounded-xl hover:bg-[#00D1FF]/10 transition-all duration-300"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#00D1FF] text-[#020A15] px-6 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Save size={20} />

                    {submitting ? "Saving..." : editingJob ? "Update Job" : "Post Job"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Total Jobs</p>

                <p className="text-2xl font-bold text-white mt-1">{jobs.length}</p>
              </div>

              <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                <Briefcase size={24} className="text-[#00D1FF]" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Active Jobs</p>

                <p className="text-2xl font-bold text-white mt-1">{jobs.filter((j) => j.status === "active").length}</p>
              </div>

              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Clock size={24} className="text-green-500" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Applications</p>

                <p className="text-2xl font-bold text-white mt-1">{totalApplications}</p>
              </div>

              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <User size={24} className="text-purple-500" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Pending Review</p>

                <p className="text-2xl font-bold text-white mt-1">{pendingApplications}</p>
              </div>

              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Eye size={24} className="text-yellow-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Filters */}

        <Card className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D1D5DB]" />

                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
              >
                <option value="all">All Status</option>

                <option value="active">Active</option>

                <option value="paused">Paused</option>

                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Jobs List */}

        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <Card key={job._id} className="animate-slide-in-up">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                          {job.status}
                        </span>

                        <span className="px-3 py-1 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-white font-bold text-xl mb-2">{job.title}</h3>

                      <div className="flex flex-wrap gap-4 text-sm text-[#D1D5DB] mb-4">
                        <div className="flex items-center gap-1">
                          <Briefcase size={14} />

                          {job.department}
                        </div>

                        <div className="flex items-center gap-1">
                          <MapPin size={14} />

                          {job.location}
                        </div>

                        {job.salary && (
                          <div className="flex items-center gap-1">
                            <DollarSign size={14} />

                            {job.salary}
                          </div>
                        )}

                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                      </div>

                      <p className="text-[#D1D5DB] mb-4">{job.description}</p>

                      {job.requirements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2">Requirements:</h4>

                          <ul className="list-disc list-inside text-[#D1D5DB] space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-[#D1D5DB]">
                      <span className="font-semibold text-[#00D1FF]">{getJobApplications(job).length}</span>{" "}
                      applications
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedJob(selectedJob === job._id ? null : job._id)}
                        className="px-4 py-2 bg-[#00D1FF]/20 text-[#00D1FF] rounded-lg hover:bg-[#00D1FF]/30 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Eye size={16} />
                        View Applications
                      </button>

                      <button
                        onClick={() => handleEditJob(job)}
                        className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Edit size={16} />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteJob(job._id)}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Applications for this job */}

                  {selectedJob === job._id && (
                    <div className="mt-6 pt-6 border-t border-[#00D1FF]/20">
                      <h4 className="text-white font-semibold mb-4">Applications ({getJobApplications(job).length})</h4>

                      <div className="space-y-4">
                        {getJobApplications(job).map((application) => (
                          <div
                            key={application._key}
                            className="bg-[#020A15]/40 rounded-xl p-4 border border-[#00D1FF]/10"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                                  <User size={16} className="text-[#00D1FF]" />
                                </div>

                                <div>
                                  <h5 className="text-white font-semibold">{application.applicantName}</h5>

                                  {application.currentRole && (
                                    <p className="text-[#D1D5DB] text-sm">{application.currentRole}</p>
                                  )}
                                </div>
                              </div>

                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getApplicationStatusColor(application.status)}`}
                              >
                                {application.status}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3 text-sm text-[#D1D5DB]">
                              <div className="flex items-center gap-1">
                                <Mail size={14} />

                                {application.email}
                              </div>

                              {application.phone && (
                                <div className="flex items-center gap-1">
                                  <Phone size={14} />

                                  {application.phone}
                                </div>
                              )}

                              {application.experience && (
                                <div className="flex items-center gap-1">
                                  <Clock size={14} />
                                  {application.experience} experience
                                </div>
                              )}

                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                Applied {new Date(application.appliedDate).toLocaleDateString()}
                              </div>
                            </div>

                            {application.coverLetter && (
                              <p className="text-[#D1D5DB] text-sm mb-4">{application.coverLetter}</p>
                            )}

                            <div className="flex flex-wrap gap-2">
                              {application.cv?.asset?.url && (
                                <button
                                  onClick={() => handleDownloadCV(application)}
                                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-300 flex items-center gap-1 text-sm"
                                >
                                  <Download size={14} />
                                  Download CV
                                  {application.cv.asset.size && (
                                    <span className="text-xs opacity-75">
                                      ({formatFileSize(application.cv.asset.size)})
                                    </span>
                                  )}
                                </button>
                              )}

                              {application.portfolio && (
                                <a
                                  href={application.portfolio}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors duration-300 flex items-center gap-1 text-sm"
                                >
                                  <File size={14} />
                                  Portfolio
                                </a>
                              )}

                              {application.status === "pending" && (
                                <>
                                  <button
                                    onClick={() => handleApplicationStatusChange(job, application._key!, "reviewed")}
                                    className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors duration-300 text-sm"
                                  >
                                    Mark Reviewed
                                  </button>

                                  <button
                                    onClick={() => handleApplicationStatusChange(job, application._key!, "interviewed")}
                                    className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors duration-300 text-sm"
                                  >
                                    Schedule Interview
                                  </button>
                                </>
                              )}

                              {application.status === "interviewed" && (
                                <>
                                  <button
                                    onClick={() => handleApplicationStatusChange(job, application._key!, "hired")}
                                    className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors duration-300 text-sm"
                                  >
                                    Hire
                                  </button>

                                  <button
                                    onClick={() => handleApplicationStatusChange(job, application._key!, "rejected")}
                                    className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300 text-sm"
                                  >
                                    Reject
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        ))}

                        {getJobApplications(job).length === 0 && (
                          <p className="text-[#D1D5DB] text-center py-4">No applications yet.</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card className="text-center py-12">
            <Briefcase size={48} className="text-[#D1D5DB] mx-auto mb-4" />

            <h3 className="text-white text-xl font-semibold mb-2">No Jobs Found</h3>

            <p className="text-[#D1D5DB]">Try adjusting your search or filter criteria.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

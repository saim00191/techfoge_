import { client } from "@/sanity/lib/client"

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

export interface SanityFileAsset {
  _id: string
  url: string
  originalFilename?: string
  size?: number
  mimeType?: string
}

// Fetch all jobs
export async function fetchJobs(): Promise<JobPost[]> {
  try {
    const jobs = await client.fetch(`
      *[_type == "jobPost"] | order(postedDate desc) {
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
    `)
    return jobs
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return []
  }
}

// Create a new job
export async function createJob(jobData: Omit<JobPost, "_id" | "_type" | "applications">): Promise<JobPost | null> {
  try {
    const doc = {
      _type: "jobPost",
      ...jobData,
      postedDate: new Date().toISOString(),
      applications: [],
    }

    const result = await client.create(doc)
    return result as JobPost
  } catch (error) {
    console.error("Error creating job:", error)
    return null
  }
}

// Update a job
export async function updateJob(jobId: string, jobData: Partial<JobPost>): Promise<JobPost | null> {
  try {
    const result = await client.patch(jobId).set(jobData).commit()
    return result as unknown as JobPost
  } catch (error) {
    console.error("Error updating job:", error)
    return null
  }
}

// Delete a job
export async function deleteJob(jobId: string): Promise<boolean> {
  try {
    await client.delete(jobId)
    return true
  } catch (error) {
    console.error("Error deleting job:", error)
    return false
  }
}

// Upload file to Sanity
export async function uploadFile(file: File): Promise<SanityFileAsset | null> {
  try {
    const asset = await client.assets.upload("file", file, {
      filename: file.name,
    })
    return asset
  } catch (error) {
    console.error("Error uploading file:", error)
    return null
  }
}

// Add application to job with file upload
export async function addApplicationToJob(
  jobId: string,
  application: Omit<Application, "_key">,
  cvFile?: File,
): Promise<boolean> {
  try {
    let cvAsset = null
    if (cvFile) {
      cvAsset = await uploadFile(cvFile)
    }

    const applicationWithKey = {
      ...application,
      _key: `app-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      appliedDate: new Date().toISOString(),
      cv: cvAsset
        ? {
            _type: "file",
            asset: {
              _type: "reference",
              _ref: cvAsset._id,
            },
          }
        : undefined,
    }

    await client.patch(jobId).setIfMissing({ applications: [] }).append("applications", [applicationWithKey]).commit()

    return true
  } catch (error) {
    console.error("Error adding application:", error)
    return false
  }
}

// Update application status
export async function updateApplicationStatus(
  jobId: string,
  applicationKey: string,
  newStatus: string,
): Promise<boolean> {
  try {
    await client
      .patch(jobId)
      .set({
        [`applications[_key=="${applicationKey}"].status`]: newStatus,
      })
      .commit()

    return true
  } catch (error) {
    console.error("Error updating application status:", error)
    return false
  }
}

// Download file from Sanity
export async function downloadFile(fileUrl: string, filename: string): Promise<void> {
  try {
    const response = await fetch(fileUrl)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error("Error downloading file:", error)
  }
}

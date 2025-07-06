import { client } from "@/sanity/lib/client"

// Fetch functions for each schema
export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      publishedAt
    }
  `)
}

export async function getContacts() {
  return client.fetch(`
    *[_type == "contact"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      email,
      subject,
      message
    }
  `)
}

export async function getJobPosts() {
  return client.fetch(`
    *[_type == "jobPost"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      company,
      location,
      type
    }
  `)
}

export async function getQuoteRequests() {
  return client.fetch(`
    *[_type == "quoteRequest"] | order(_createdAt desc) {
      _id,
      _createdAt,
      clientName,
      projectType,
      budget,
      status
    }
  `)
}

export async function getReviews() {
  return client.fetch(`
    *[_type == "review"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      rating,
      comment,
      approved
    }
  `)
}

// Get counts for stats
export async function getStats() {
  const [posts, contacts, jobPosts, quoteRequests, reviews] = await Promise.all([
    client.fetch(`count(*[_type == "post"])`),
    client.fetch(`count(*[_type == "contact"])`),
    client.fetch(`count(*[_type == "jobPost"])`),
    client.fetch(`count(*[_type == "quoteRequest"])`),
    client.fetch(`count(*[_type == "review"])`),
  ])

  return {
    posts,
    contacts,
    jobPosts,
    quoteRequests,
    reviews,
  }
}

// Get recent activity from all schemas
export async function getRecentActivity() {
  const recentPosts = await client.fetch(`
    *[_type == "post"] | order(_createdAt desc)[0...3] {
      _id,
      _createdAt,
      title,
      "type": "post"
    }
  `)

  const recentContacts = await client.fetch(`
    *[_type == "contact"] | order(_createdAt desc)[0...3] {
      _id,
      _createdAt,
      name,
      subject,
      "type": "contact"
    }
  `)

  const recentJobs = await client.fetch(`
    *[_type == "jobPost"] | order(_createdAt desc)[0...3] {
      _id,
      _createdAt,
      title,
      company,
      "type": "jobPost"
    }
  `)

  const recentQuotes = await client.fetch(`
    *[_type == "quoteRequest"] | order(_createdAt desc)[0...3] {
      _id,
      _createdAt,
      clientName,
      projectType,
      "type": "quoteRequest"
    }
  `)

  const recentReviews = await client.fetch(`
    *[_type == "review"] | order(_createdAt desc)[0...3] {
      _id,
      _createdAt,
      name,
      rating,
      "type": "review"
    }
  `)

  // Combine all activities and sort by creation date
  const allActivities = [...recentPosts, ...recentContacts, ...recentJobs, ...recentQuotes, ...recentReviews].sort(
    (a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
  )

  return allActivities.slice(0, 5) // Return top 5 most recent
}

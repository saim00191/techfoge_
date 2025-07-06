import { client } from "@/sanity/lib/client"
import { PortableTextBlock } from "@/types/Blog"

export interface BlogPost {
  _id: string
  _type: "post"
  title: string
  slug?: {
    _type: "slug"
    current: string
  }
  description: string
  mainImageTop?: {
    _type: "image"
    asset: {
      _ref: string
      _type: "reference"
      url?: string
    }
  }
  mainImageBottom?: {
    _type: "image"
    asset: {
      _ref: string
      _type: "reference"
      url?: string
    }
  }
  publishedAt: string
  content: PortableTextBlock[]
  status: "draft" | "published"
}

// Fetch all blog posts
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        _type,
        title,
        description,
        mainImageTop {
          _type,
          asset-> {
            _id,
            url
          }
        },
        mainImageBottom {
          _type,
          asset-> {
            _id,
            url
          }
        },
        publishedAt,
        content,
        slug,
        status
      }
    `)
    return posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

// Create a new blog post
export async function createBlogPost(postData: Omit<BlogPost, "_id" | "_type">): Promise<BlogPost | null> {
  try {
    const doc = {
      _type: "post",
      ...postData,
    }

    const result = await client.create(doc)
    alert("Blog Created successfully")
    return result as BlogPost
  } catch (error) {
    console.error("Error creating blog post:", error)
    return null
  }
}

// Update a blog post
export async function updateBlogPost(postId: string, postData: Partial<BlogPost>): Promise<BlogPost | null> {
  try {
    const result = await client.patch(postId).set(postData).commit()
    alert("Blog Updated successfully")
    return result as unknown as BlogPost
    
  } catch (error) {
    console.error("Error updating blog post:", error)
    return null
  }
}

// Delete a blog post
export async function deleteBlogPost(postId: string): Promise<boolean> {
  try {
    await client.delete(postId)
    alert("Blog Deleted successfully")
    return true
   
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return false
  }
}

// Upload image to Sanity
export async function uploadImageToSanity(file: File): Promise<any> {
  try {
    const asset = await client.assets.upload("image", file, {
      filename: file.name,
    })
    return asset

  } catch (error) {
    console.error("Error uploading image:", error)
    return null
  }
}

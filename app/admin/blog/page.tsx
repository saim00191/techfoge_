"use client"

import type React from "react"
import { useState, useEffect } from "react"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"
import { FileText, Plus, Edit, Trash2, Eye, Calendar, Search, Save, X, Upload, ImageIcon } from "lucide-react"
import {
  fetchBlogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  uploadImageToSanity,
  type BlogPost,
} from "./sanity-operation"
import TiptapEditor from "../components/RichTextEditor"
import { PortableTextBlock } from "@/types/Blog"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug:"",
    description: "",
    publishedAt: "",
    content: "",
    status: "draft",
  })
  const [imageFiles, setImageFiles] = useState<{
    mainImageTop: File | null
    mainImageBottom: File | null
  }>({
    mainImageTop: null,
    mainImageBottom: null,
  })

  // Load posts on component mount
  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const fetchedPosts = await fetchBlogPosts()
      setPosts(fetchedPosts)
    } catch (error) {
      console.error("Error loading posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || post.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => {
      const updated = { ...prev, [name]: value }
      if (name === "title") {
        updated.slug = value
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .slice(0, 96)
      }
      return updated
    })
  }

  const handleImageChange = (field: "mainImageTop" | "mainImageBottom", file: File | null) => {
    setImageFiles((prev) => ({
      ...prev,
      [field]: file,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Upload images if provided
      let mainImageTopAsset = null
      let mainImageBottomAsset = null

      if (imageFiles.mainImageTop) {
        mainImageTopAsset = await uploadImageToSanity(imageFiles.mainImageTop)
      }

      if (imageFiles.mainImageBottom) {
        mainImageBottomAsset = await uploadImageToSanity(imageFiles.mainImageBottom)
      }

      // Convert HTML content to block content array
      const convertHtmlToBlocks = (html: string) => {
        if (!html) return []

        // Simple HTML to Sanity blocks conversion
        const tempDiv = document.createElement("div")
        tempDiv.innerHTML = html

        const blocks: PortableTextBlock[] = []
        let blockKey = 0

        Array.from(tempDiv.children).forEach((element) => {
          const tagName = element.tagName.toLowerCase()
          const text = element.textContent || ""

          if (text.trim()) {
            let style = "normal"
            if (tagName === "h1") style = "h1"
            else if (tagName === "h2") style = "h2"
            else if (tagName === "h3") style = "h3"
            else if (tagName === "blockquote") style = "blockquote"

            blocks.push({
              _type: "block",
              _key: `block-${blockKey++}`,
              style,
              children: [
                {
                  _type: "span",
                  _key: `span-${blockKey}`,
                  text,
                  marks: [],
                },
              ],
              markDefs: [],
            })
          }
        })

        return blocks.length > 0
          ? blocks
          : [
              {
                _type: "block",
                _key: "default-block",
                style: "normal",
                children: [
                  {
                    _type: "span",
                    _key: "default-span",
                    text: html.replace(/<[^>]*>/g, ""), // Strip HTML tags as fallback
                    marks: [],
                  },
                ],
                markDefs: [],
              },
            ]
      }

      const contentBlocks = convertHtmlToBlocks(formData.content)

      const postData = {
        title: formData.title,
        slug: {
          _type: "slug",
          current: formData.slug,
        },
        description: formData.description,
        publishedAt: formData.publishedAt || new Date().toISOString(),
        content: contentBlocks,
        status: formData.status as "draft" | "published",
        ...(mainImageTopAsset && {
          mainImageTop: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: mainImageTopAsset._id,
            },
          },
        }),
        ...(mainImageBottomAsset && {
          mainImageBottom: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: mainImageBottomAsset._id,
            },
          },
        }),
      }

      if (editingPost) {
        const updatedPost = await updateBlogPost(editingPost._id, postData)
        if (updatedPost) {
          setPosts((prev) => prev.map((post) => (post._id === editingPost._id ? updatedPost : post)))
          alert("Post updated successfully!")
        } else {
          alert("Failed to update post. Please try again.")
        }
      } else {
        const newPost = await createBlogPost(postData)
        if (newPost) {
          setPosts((prev) => [newPost, ...prev])
          alert("Post created successfully!")
        } else {
          alert("Failed to create post. Please try again.")
        }
      }

      // Reset form
      setFormData({
        title: "",
        slug: "",
        description: "",
        publishedAt: "",
        content: "",
        status: "draft",
      })
      setImageFiles({
        mainImageTop: null,
        mainImageBottom: null,
      })
      setShowEditor(false)
      setEditingPost(null)
    } catch (error) {
      console.error("Error submitting post:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)

    // Convert Sanity block content to HTML for the rich text editor
    const htmlContent = post.content
      .map((block) => {
        if (block._type === "block") {
          const text = block.children?.map((child: { text: string }) => child.text).join("") || ""
          switch (block.style) {
            case "h1":
              return `<h1>${text}</h1>`
            case "h2":
              return `<h2>${text}</h2>`
            case "h3":
              return `<h3>${text}</h3>`
            case "blockquote":
              return `<blockquote>${text}</blockquote>`
            default:
              return `<p>${text}</p>`
          }
        }
        return ""
      })
      .join("")

    setFormData({
      title: post.title,
      slug: post.slug?.current ?? "",
      description: post.description,
      publishedAt: post.publishedAt.split("T")[0],
      content: htmlContent,
      status: post.status,
    })
    setImageFiles({
      mainImageTop: null,
      mainImageBottom: null,
    })
    setShowEditor(true)
  }

  const handleDelete = async (post: BlogPost) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const success = await deleteBlogPost(post._id)
      if (success) {
        setPosts((prev) => prev.filter((p) => p._id !== post._id))
        alert("Post deleted successfully!")
      } else {
        alert("Failed to delete post. Please try again.")
      }
    }
  }

  const handleNewPost = () => {
    setEditingPost(null)
    setFormData({
      title: "",
      slug: "",
      description: "",
      publishedAt: "",
      content: "",
      status: "draft",
    })
    setImageFiles({
      mainImageTop: null,
      mainImageBottom: null,
    })
    setShowEditor(true)
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020A15] flex items-center justify-center">
        <div className="text-white text-xl">Loading posts...</div>
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
        <PageHeader title="Blog Management" description="Create, edit, and manage your blog posts and content.">
          <button
            onClick={handleNewPost}
            className="bg-[#00D1FF] text-[#020A15] px-6 py-3 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            <Plus size={20} />
            New Post
          </button>
        </PageHeader>

        {/* Blog Editor Modal */}
        {showEditor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowEditor(false)
                }
              }}
            />
            <div className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{editingPost ? "Edit Post" : "Create New Post"}</h2>
                <button
                  onClick={() => setShowEditor(false)}
                  className="text-[#D1D5DB] hover:text-[#00D1FF] transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Title</label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="Enter post title"
                  />
                </div>

                  <div>
    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Slug</label>
   <input
      type="text"
      name="slug"
      value={formData.slug}
      readOnly
      className="w-full px-4 py-3 bg-[#020A15]/40 border border-[#00D1FF]/30 rounded-xl text-[#9CA3AF] cursor-not-allowed"
      placeholder="Auto-generated slug"
    />
  </div>

                {/* Description */}
                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Description</label>
                  <input
                    type="text"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                    placeholder="Brief description of the post"
                  />
                </div>

                {/* Main Image Top */}
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <ImageIcon size={16} className="text-[#00D1FF]" />
                    Main Image (Top)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange("mainImageTop", e.target.files?.[0] || null)}
                      className="hidden"
                      id="mainImageTop"
                    />
                    <label
                      htmlFor="mainImageTop"
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white cursor-pointer hover:border-[#00D1FF] transition-all duration-300 flex items-center gap-2"
                    >
                      <Upload size={16} className="text-[#00D1FF]" />
                      {imageFiles.mainImageTop ? (
                        <span className="text-sm">
                          {imageFiles.mainImageTop.name} ({formatFileSize(imageFiles.mainImageTop.size)})
                        </span>
                      ) : (
                        <span className="text-[#D1D5DB]/50">Choose image for top of post</span>
                      )}
                    </label>
                  </div>
                </div>

                {/* Published At */}
                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Published Date</label>
                  <input
                    type="date"
                    name="publishedAt"
                    required
                    value={formData.publishedAt}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Content - Using Tiptap Editor */}
                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Content</label>
                  <TiptapEditor
                    value={formData.content}
                    onChange={(content) => setFormData((prev) => ({ ...prev, content }))}
                    placeholder="Write your blog post content here..."
                    className="min-h-[400px]"
                  />
                </div>

                {/* Main Image Bottom */}
                <div>
                  <label className=" text-[#D1D5DB] text-sm font-semibold mb-3 flex items-center gap-2">
                    <ImageIcon size={16} className="text-[#00D1FF]" />
                    Main Image (Bottom)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange("mainImageBottom", e.target.files?.[0] || null)}
                      className="hidden"
                      id="mainImageBottom"
                    />
                    <label
                      htmlFor="mainImageBottom"
                      className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white cursor-pointer hover:border-[#00D1FF] transition-all duration-300 flex items-center gap-2"
                    >
                      <Upload size={16} className="text-[#00D1FF]" />
                      {imageFiles.mainImageBottom ? (
                        <span className="text-sm">
                          {imageFiles.mainImageBottom.name} ({formatFileSize(imageFiles.mainImageBottom.size)})
                        </span>
                      ) : (
                        <span className="text-[#D1D5DB]/50">Choose image for bottom of post</span>
                      )}
                    </label>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowEditor(false)}
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
                    {submitting ? "Saving..." : editingPost ? "Update Post" : "Create Post"}
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
                <p className="text-[#D1D5DB] text-sm font-medium">Total Posts</p>
                <p className="text-2xl font-bold text-white mt-1">{posts.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                <FileText size={24} className="text-[#00D1FF]" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Published</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {posts.filter((p) => p.status === "published").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Eye size={24} className="text-green-500" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Drafts</p>
                <p className="text-2xl font-bold text-white mt-1">{posts.filter((p) => p.status === "draft").length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Edit size={24} className="text-yellow-500" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">This Month</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {
                    posts.filter((p) => {
                      const postDate = new Date(p.publishedAt)
                      const now = new Date()
                      return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear()
                    }).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Calendar size={24} className="text-purple-500" />
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
                  placeholder="Search posts..."
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
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Posts List */}
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <Card key={post._id} className="animate-slide-in-up">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === "published"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {post.status}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{post.title}</h3>
                      <p className="text-[#D1D5DB] mb-4">{post.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-[#D1D5DB]">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-4 py-2 bg-[#00D1FF]/20 text-[#00D1FF] rounded-lg hover:bg-[#00D1FF]/30 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Edit size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post)}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300 flex items-center gap-2"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <Card className="text-center py-12">
            <FileText size={48} className="text-[#D1D5DB] mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">No Posts Found</h3>
            <p className="text-[#D1D5DB]">Try adjusting your search or filter criteria.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

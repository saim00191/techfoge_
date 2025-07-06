"use client"

import type React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import Blockquote from "@tiptap/extension-blockquote"
import CodeBlock from "@tiptap/extension-code-block"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"
import ListItem from "@tiptap/extension-list-item"
import { useState, useCallback, useRef } from "react"
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  LinkIcon,
  ImageIcon,
  Undo,
  Redo,
  Palette,
  X,
  Check,
  Upload,
} from "lucide-react"

interface TiptapEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

interface LinkModalProps {
  isOpen: boolean
  onClose: () => void
  onInsert: (url: string, text?: string) => void
  initialText?: string
}

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  onInsert: (src: string, alt: string) => void
}

const LinkModal: React.FC<LinkModalProps> = ({ isOpen, onClose, onInsert, initialText = "" }) => {
  const [url, setUrl] = useState("")
  const [text, setText] = useState(initialText)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url) {
      onInsert(url, text || undefined)
      onClose()
      setUrl("")
      setText("")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Insert Link</h3>
          <button onClick={onClose} className="text-[#D1D5DB] hover:text-[#00D1FF] transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#D1D5DB] text-sm font-medium mb-2">URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
              placeholder="https://example.com"
              required
              autoFocus
            />
          </div>
          {!initialText && (
            <div>
              <label className="block text-[#D1D5DB] text-sm font-medium mb-2">Link Text (optional)</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-3 py-2 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                placeholder="Enter link text"
              />
            </div>
          )}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#00D1FF]/30 text-[#D1D5DB] rounded-lg hover:bg-[#00D1FF]/10 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#00D1FF] text-[#020A15] rounded-lg font-medium hover:bg-[#00D1FF]/80 transition-all duration-300 flex items-center gap-2"
            >
              <Check size={16} />
              Insert
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, onInsert }) => {
  const [file, setFile] = useState<File | null>(null)
  const [alt, setAlt] = useState("")
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (preview && alt) {
      onInsert(preview, alt)
      onClose()
      setFile(null)
      setAlt("")
      setPreview(null)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#020A15]/95 backdrop-blur-md border-2 border-[#00D1FF]/30 rounded-xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Insert Image</h3>
          <button onClick={onClose} className="text-[#D1D5DB] hover:text-[#00D1FF] transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#D1D5DB] text-sm font-medium mb-2">Select Image</label>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-lg text-white cursor-pointer hover:border-[#00D1FF] transition-all duration-300 flex items-center gap-2"
            >
              <Upload size={16} className="text-[#00D1FF]" />
              {file ? file.name : "Choose image file"}
            </button>
          </div>
          {preview && (
            <div className="border border-[#00D1FF]/30 rounded-lg p-2">
              <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-32 object-cover rounded" />
            </div>
          )}
          <div>
            <label className="block text-[#D1D5DB] text-sm font-medium mb-2">Alt Text</label>
            <input
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              className="w-full px-3 py-2 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-lg text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
              placeholder="Describe the image"
              required
            />
          </div>
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#00D1FF]/30 text-[#D1D5DB] rounded-lg hover:bg-[#00D1FF]/10 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!preview || !alt}
              className="px-4 py-2 bg-[#00D1FF] text-[#020A15] rounded-lg font-medium hover:bg-[#00D1FF]/80 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check size={16} />
              Insert
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ value, onChange, placeholder, className = "" }) => {
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        blockquote: false,
        codeBlock: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      TextStyle,
      Color,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#00D1FF] hover:text-[#66E5FF] underline transition-colors duration-300",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg border border-[#00D1FF]/30 my-2",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "border-l-4 border-[#00D1FF] pl-4 my-4 italic bg-[#00D1FF]/10 p-4 rounded-r-lg text-[#D1D5DB]",
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class:
            "bg-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto text-[#D1D5DB]",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc list-outside my-2 text-[#D1D5DB] pl-6",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal list-outside my-2 text-[#D1D5DB] pl-6",
        },
      }),
      ListItem.configure({
        HTMLAttributes: {
          class: "my-1 text-[#D1D5DB] pl-2",
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "min-h-[300px] p-4 text-white focus:outline-none prose prose-invert max-w-none",
      },
    },
  })

  const insertLink = useCallback(
    (url: string, text?: string) => {
      if (!editor) return

      if (text) {
        // Insert new link with text
        editor.chain().focus().insertContent(`<a href="${url}">${text}</a>`).run()
      } else {
        // Set link on selected text
        editor.chain().focus().setLink({ href: url }).run()
      }
    },
    [editor],
  )

  const insertImage = useCallback(
    (src: string, alt: string) => {
      if (!editor) return
      editor.chain().focus().setImage({ src, alt }).run()
    },
    [editor],
  )

  const colors = [
    "#FFFFFF",
    "#D1D5DB",
    "#9CA3AF",
    "#6B7280",
    "#374151",
    "#1F2937",
    "#00D1FF",
    "#66E5FF",
    "#0099CC",
    "#0077AA",
    "#005588",
    "#003366",
    "#EF4444",
    "#F59E0B",
    "#10B981",
    "#8B5CF6",
    "#EC4899",
    "#F97316",
  ]

  if (!editor) {
    return <div>Loading editor...</div>
  }

  return (
    <div className={`border border-[#00D1FF]/30 rounded-xl overflow-hidden bg-[#020A15]/60 ${className}`}>
      {/* Toolbar */}
      <div className="border-b border-[#00D1FF]/20 p-3 bg-[#020A15]/80">
        <div className="flex flex-wrap gap-2">
          {/* Text Formatting */}
          <div className="flex gap-1 border-r border-[#00D1FF]/20 pr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("bold")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Bold (Ctrl+B)"
            >
              <Bold size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("italic")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Italic (Ctrl+I)"
            >
              <Italic size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("strike")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Strikethrough"
            >
              <Strikethrough size={16} />
            </button>
          </div>

          {/* Headings */}
          <div className="flex gap-1 border-r border-[#00D1FF]/20 pr-2">
            <select
              onChange={(e) => {
                const level = e.target.value
                if (level === "p") {
                  editor.chain().focus().setParagraph().run()
                } else if (level) {
                  editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: Number.parseInt(level) as 1 | 2 | 3 })
                    .run()
                }
                e.target.value = ""
              }}
              className="px-2 py-1 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded text-white text-sm focus:outline-none focus:border-[#00D1FF]"
              defaultValue=""
            >
              <option value="">Format</option>
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="p">Paragraph</option>
            </select>
          </div>

          {/* Lists */}
          <div className="flex gap-1 border-r border-[#00D1FF]/20 pr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("bulletList")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Bullet List"
            >
              <List size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("orderedList")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Numbered List"
            >
              <ListOrdered size={16} />
            </button>
          </div>

          {/* Quote & Code */}
          <div className="flex gap-1 border-r border-[#00D1FF]/20 pr-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("blockquote")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Quote"
            >
              <Quote size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 rounded transition-colors ${
                editor.isActive("codeBlock")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Code Block"
            >
              <Code size={16} />
            </button>
          </div>

          {/* Text Color */}
          <div className="flex gap-1 border-r border-[#00D1FF]/20 pr-2">
            <div className="relative group">
              <button
                type="button"
                className="p-2 rounded hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors"
                title="Text Color"
              >
                <Palette size={16} />
              </button>
              <div className="absolute top-full left-0 mt-1 p-2 bg-[#020A15]/95 border border-[#00D1FF]/30 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="grid grid-cols-6 gap-1">
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => editor.chain().focus().setColor(color).run()}
                      className="w-6 h-6 rounded border border-gray-600 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Link & Image */}
          <div className="flex gap-1 border-r border-[#00D1FF]/20 pr-2">
            <button
              type="button"
              onClick={() => setShowLinkModal(true)}
              className={`p-2 rounded transition-colors ${
                editor.isActive("link")
                  ? "bg-[#00D1FF]/30 text-[#00D1FF]"
                  : "hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF]"
              }`}
              title="Insert Link"
            >
              <LinkIcon size={16} />
            </button>
            <button
              type="button"
              onClick={() => setShowImageModal(true)}
              className="p-2 rounded hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors"
              title="Insert Image"
            >
              <ImageIcon size={16} />
            </button>
          </div>

          {/* Undo/Redo */}
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
              className="p-2 rounded hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Undo"
            >
              <Undo size={16} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
              className="p-2 rounded hover:bg-[#00D1FF]/20 text-[#D1D5DB] hover:text-[#00D1FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Redo"
            >
              <Redo size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

      {/* Modals */}
      <LinkModal
        isOpen={showLinkModal}
        onClose={() => setShowLinkModal(false)}
        onInsert={insertLink}
        initialText={
          editor.state.selection.empty
            ? ""
            : editor.state.doc.textBetween(editor.state.selection.from, editor.state.selection.to)
        }
      />
      <ImageModal isOpen={showImageModal} onClose={() => setShowImageModal(false)} onInsert={insertImage} />

      <style jsx global>{`
        .ProseMirror {
          outline: none;
        }
        
        .ProseMirror h1 {
          font-size: 2.5rem !important;
          font-weight: bold !important;
          margin: 1.5rem 0 !important;
          color: #00D1FF !important;
          line-height: 1.2 !important;
        }
        
        .ProseMirror h2 {
          font-size: 2rem !important;
          font-weight: bold !important;
          margin: 1.25rem 0 !important;
          color: #00D1FF !important;
          line-height: 1.3 !important;
        }
        
        .ProseMirror h3 {
          font-size: 1.5rem !important;
          font-weight: bold !important;
          margin: 1rem 0 !important;
          color: #00D1FF !important;
          line-height: 1.4 !important;
        }
        
        .ProseMirror p {
          margin: 0.75rem 0 !important;
          line-height: 1.6 !important;
          color: #D1D5DB !important;
        }
        
        .ProseMirror strong {
          font-weight: bold !important;
          color: #FFFFFF !important;
        }
        
        .ProseMirror em {
          font-style: italic !important;
        }
        
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: rgba(209, 213, 219, 0.5);
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  )
}

export default TiptapEditor

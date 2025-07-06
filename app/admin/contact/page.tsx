"use client"

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"
import {
  MessageSquare,
  User,
  Mail,
  Phone,
  Calendar,
  Search,
  Trash2,
} from "lucide-react"

interface ContactMessage {
  id: string
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
  date: string
}

interface SanityContact {
  _id: string
  name: string
  email: string
  phoneNumber: string
  subject: string
  message: string
  date: string
}

export default function ContactsPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await client.fetch(`*[_type == "contact"] | order(date desc){
        _id,
        name,
        email,
        phoneNumber,
        subject,
        message,
        date
      }`)

      const mapped = data.map((item: SanityContact) => ({
        id: item._id,
        fullName: item.name,
        email: item.email,
        phone: item.phoneNumber,
        subject: item.subject,
        message: item.message,
        date: item.date,
      }))

      setMessages(mapped)
    }

    fetchMessages()
  }, [])

  const filteredMessages = messages.filter((message) =>
    [message.fullName, message.email, message.subject, message.message]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      setMessages((prev) => prev.filter((msg) => msg.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-[#020A15] relative overflow-hidden">
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
        <PageHeader title="Contact Messages" description="Manage and respond to customer inquiries and messages." />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Total Messages</p>
                <p className="text-2xl font-bold text-white mt-1">{messages.length}</p>
              </div>
              <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                <MessageSquare size={24} className="text-[#00D1FF]" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D1D5DB]" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
            />
          </div>
        </Card>

        <div className="space-y-6">
          {filteredMessages.map((message) => (
            <Card key={message.id} className="animate-slide-in-up">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                        <User size={20} className="text-[#00D1FF]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{message.fullName}</h3>
                        <p className="text-[#D1D5DB] text-sm">{message.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-lg mb-2">{message.subject}</h4>
                    <p className="text-[#D1D5DB] leading-relaxed mb-4">{message.message}</p>

                    <div className="flex items-center gap-4 text-sm text-[#D1D5DB]">
                      <div className="flex items-center gap-1">
                        <Phone size={14} />
                        {message.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(message.date).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-300 flex items-center gap-2"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredMessages.length === 0 && (
          <Card className="text-center py-12">
            <MessageSquare size={48} className="text-[#D1D5DB] mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">No Messages Found</h3>
            <p className="text-[#D1D5DB]">Try adjusting your search term.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

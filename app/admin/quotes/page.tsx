"use client"

import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import PageHeader from "../components/PageHeader"
import Card from "../components/Card"
import {
  Quote,
  User,
  Mail,
  Phone,
  Building,
  DollarSign,
  Calendar,
  Search,
  Trash2,
} from "lucide-react"

interface Quote {
  id: number
  fullName: string
  email: string
  phone: string
  company: string
  servicesNeeded: string[]
  budget: string
  message: string
  date: string
}

interface SanityQuote {
  _id: string
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  message: string
  submittedAt: string
}


export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchQuotes = async () => {
      const data : SanityQuote[] = await client.fetch(`*[_type == "quoteRequest"] | order(submittedAt desc){
        _id,
        name,
        email,
        phone,
        company,
        projectType,
        budget,
        message,
        submittedAt
      }`)

      const formatted : Quote[] = data.map((q, index) => ({
        id: index + 1,
        fullName: q.name,
        email: q.email,
        phone: q.phone,
        company: q.company,
        servicesNeeded: [q.projectType],
        budget: q.budget,
        message: q.message,
        date: q.submittedAt,
      }))

      setQuotes(formatted)
    }

    fetchQuotes()
  }, [])

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.message.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this quote request?")) {
      setQuotes((prev) => prev.filter((quote) => quote.id !== id))
    }
  }

  const stats = {
    total: quotes.length,
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
        <PageHeader title="Quote Requests" description="Manage project quotes and client proposals." />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#D1D5DB] text-sm font-medium">Total Requests</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                <Quote size={24} className="text-[#00D1FF]" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D1D5DB]" />
                <input
                  type="text"
                  placeholder="Search quote requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#020A15]/60 border border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {filteredQuotes.map((quote, index) => (
            <Card key={quote.id} className="animate-slide-in-up">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#00D1FF]/20 rounded-full flex items-center justify-center">
                        <User size={20} className="text-[#00D1FF]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{quote.fullName}</h3>
                        <p className="text-[#D1D5DB] text-sm flex items-center gap-1">
                          <Building size={14} />
                          {quote.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                        <Mail size={14} />
                        {quote.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                        <Phone size={14} />
                        {quote.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                        <DollarSign size={14} />
                        {quote.budget}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                        <Calendar size={14} />
                        {new Date(quote.date).toLocaleString()}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Services Needed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {quote.servicesNeeded.map((service: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#00D1FF]/20 text-[#00D1FF] rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Message:</h4>
                      <p className="text-[#D1D5DB] leading-relaxed">{quote.message}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleDelete(quote.id)}
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

        {filteredQuotes.length === 0 && (
          <Card className="text-center py-12">
            <Quote size={48} className="text-[#D1D5DB] mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">No Quote Requests Found</h3>
            <p className="text-[#D1D5DB]">Try adjusting your search or filter criteria.</p>
          </Card>
        )}
      </div>
    </div>
  )
}
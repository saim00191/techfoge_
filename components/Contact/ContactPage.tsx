"use client"
import { Poppins } from "next/font/google"
import type React from "react"
import { client } from "@/sanity/lib/client"
import { useState, useEffect, useRef } from "react"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import type { FormData, ContactInfo } from "@/types/Contact"
import { BackgroundEffects } from "@/components/Contact/BackgroundEffects"
import { ContactHero } from "@/components/Contact/ContactHero"
import { ContactForm } from "@/components/Contact/ContactForm"
import { ContactInfo as ContactInfoComponent } from "@/components/Contact/ContactInfo"
import { FooterCTA } from "@/components/Contact/CTA"
import { SuccessModal } from "@/components/Contact/SuccessModal"
import { CustomStyles } from "@/components/Contact/CustomStyle"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    // Trigger initial load animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setVisibleSections((prev) => new Set([...Array.from(prev), sectionId]))
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await client.create({
        _type: "contact",
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toISOString(),
      })

      setShowSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (error) {
      console.error("Submission error:", error)
      alert("Something went wrong while submitting the form.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setShowSuccess(false), 6000)
    }
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Tech Street", "Silicon Valley, CA 94000"],
      color: "#00D1FF",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["hello@techfoge.com", "support@techfoge.com"],
      color: "#00D1FF",
    },
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM PST"],
      color: "#00D1FF",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM PST"],
      color: "#00D1FF",
    },
  ]

  return (
    <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
      {/* Success Modal */}
      <SuccessModal showSuccess={showSuccess} setShowSuccess={setShowSuccess} />

      {/* Background Effects */}
      <BackgroundEffects />


      {/* Hero Section */}
      <ContactHero isLoaded={isLoaded} />

      {/* Contact Form Section */}
      <ContactForm
        visibleSections={visibleSections}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        sectionRefs={sectionRefs}
      />

      {/* Contact Info Section */}
      <ContactInfoComponent visibleSections={visibleSections} contactInfo={contactInfo} sectionRefs={sectionRefs} />

      {/* Footer CTA */}
      <FooterCTA visibleSections={visibleSections} sectionRefs={sectionRefs} />

      {/* Custom CSS Animations */}
      <CustomStyles />
    </div>
  )
}

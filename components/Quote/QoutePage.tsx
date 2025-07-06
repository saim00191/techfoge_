"use client"
import type React from "react"
import { useState } from "react"
import { Rocket, Lightbulb, Shield, Users } from "lucide-react"
import { client } from "@/sanity/lib/client"
import type { FormData, QuoteRequest, SelectOption, Feature } from "@/types/Quote"
import { BackgroundEffects } from "@/components/Quote/BackgroundEffects"
import { HeroSection } from "@/components/Quote/HeroSection"
import { WhyChooseUsSection } from "@/components/Quote/WhyChooseUs"
import { FloatingSupportButton } from "@/components/Quote/FloatingSupportButton"
import { SuccessModal } from "@/components/Quote/SuccessModal"
import { SupportModal } from "@/components/Quote/Support"
import { CustomStyles } from "@/components/Quote/CustomStyle"

export default function GetQuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showSupport, setShowSupport] = useState(false)

  const projectTypes: SelectOption[] = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "consulting", label: "Tech Consulting" },
    { value: "other", label: "Other" },
  ]

  const budgetRanges: SelectOption[] = [
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k+", label: "$50,000+" },
  ]

  const features: Feature[] = [
    {
      icon: Rocket,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge technology and creative approaches",
    },
    {
      icon: Shield,
      title: "Secure Systems",
      description: "Enterprise-grade security and data protection",
    },
    {
      icon: Users,
      title: "Human-Centric Design",
      description: "User experience at the heart of everything we build",
    },
  ]

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: Record<string, string>) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.projectType) newErrors.projectType = "Project type is required"
    if (!formData.budget) newErrors.budget = "Budget range is required"
    if (!formData.message.trim()) newErrors.message = "Project details are required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      // Submit to Sanity
      const quoteRequest: QuoteRequest = {
        _type: "quoteRequest",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      }

      await client.create(quoteRequest)
      setShowSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className=" bg-[#020A15] text-white relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      <div className="relative z-10">
        {/* Hero Banner */}
        <HeroSection
          formData={formData}
          errors={errors}
          isSubmitting={isSubmitting}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          projectTypes={projectTypes}
          budgetRanges={budgetRanges}
        />

        {/* Why Work With Us Section */}
        <WhyChooseUsSection features={features} />
      </div>

      {/* Floating Support Button */}
      <FloatingSupportButton onClick={() => setShowSupport(true)} />

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

      {/* Support Modal */}
      <SupportModal isOpen={showSupport} onClose={() => setShowSupport(false)} />

      {/* Custom Styles */}
      <CustomStyles />
    </div>
  )
}

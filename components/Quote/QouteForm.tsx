"use client"
import { Send } from "lucide-react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Select } from "./ui/Select"
import { Textarea } from "./ui/TextArea"
import type { QuoteFormProps } from "@/types/Quote"

export const QuoteForm = ({
  formData,
  errors,
  isSubmitting,
  handleInputChange,
  handleSubmit,
  projectTypes,
  budgetRanges,
}: QuoteFormProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-[#00D1FF]/20 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,209,255,0.1)]">
      <h2 className="text-2xl font-bold mb-6 text-center">Start Your Project</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />

          <Input
            label="Company (Optional)"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            error={errors.company}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Select
          
            label="Project Type"
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            options={projectTypes}
            error={errors.projectType}
            required
          />

          <Select
            label="Budget Range"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            options={budgetRanges}
            error={errors.budget}
            required
          />
        </div>

        <Textarea
          label="Project Details & Requirements"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          error={errors.message}
          required
        />

        <Button type="submit" disabled={isSubmitting} className="w-full text-lg py-4">
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending Request...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Get My Quote
            </>
          )}
        </Button>
      </form>
    </div>
  )
}

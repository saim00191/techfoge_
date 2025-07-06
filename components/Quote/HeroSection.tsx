
import { CheckCircle } from "lucide-react"
import { QuoteForm } from "./QouteForm"
import type { HeroSectionProps } from "@/types/Quote"

export const HeroSection = ({
  formData,
  errors,
  isSubmitting,
  handleInputChange,
  handleSubmit,
  projectTypes,
  budgetRanges,
}: HeroSectionProps) => {
  return (
    <section className=" flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Hero Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-white via-[#00D1FF] to-white bg-clip-text text-transparent animate-neonGlow">
              Get a Quote
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Tell us about your project — we'll get back with a custom plan tailored to your vision and goals.
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center space-x-2 text-[#00D1FF]">
              <CheckCircle className="w-5 h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-[#00D1FF]">
              <CheckCircle className="w-5 h-5" />
              <span>24h Response</span>
            </div>
            <div className="flex items-center space-x-2 text-[#00D1FF]">
              <CheckCircle className="w-5 h-5" />
              <span>Custom Solutions</span>
            </div>
          </div>
        </div>

        {/* Right Side - Quote Form */}
        <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
          <QuoteForm
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            projectTypes={projectTypes}
            budgetRanges={budgetRanges}
          />
        </div>
      </div>
    </section>
  )
}

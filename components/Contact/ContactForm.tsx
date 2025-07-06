"use client"

import { Send } from "lucide-react"
import type { ContactFormProps } from "@/types/Contact"

export const ContactForm = ({
  visibleSections,
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  sectionRefs,
}: ContactFormProps) => {
  return (
    <section className="relative z-10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          ref={(el) => {
            sectionRefs.current.form = el
          }}
          data-section="form"
          className={`transition-all duration-1000 ease-out ${
            visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Form Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Send us a Message</h2>
            <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
              Ready to start your next project? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Form Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl blur-xl" />
            <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("form") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">👤 Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div
                    className={`transition-all duration-700 ease-out ${
                      visibleSections.has("form") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">📧 Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">📞 Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject Field */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">📋 Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div
                  className={`transition-all duration-700 ease-out ${
                    visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <label className="block text-[#D1D5DB] text-sm font-semibold mb-3">💬 Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-[#020A15]/60 border-2 border-[#00D1FF]/30 rounded-xl text-white placeholder-[#D1D5DB]/50 focus:border-[#00D1FF] focus:outline-none focus:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div
                  className={`text-center transition-all duration-700 ease-out ${
                    visibleSections.has("form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative bg-[#00D1FF] text-[#020A15] px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#020A15]/30 border-t-[#020A15] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="group-hover:animate-pulse" />
                          Send Message
                        </>
                      )}
                    </span>
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-[#00D1FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

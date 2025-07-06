




import GetQuotePage from '@/components/Quote/QoutePage'
import React from 'react'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Looking for a custom project estimate? Fill out our quote request form for personalized pricing and timelines from TechFoge.",
  openGraph: {
    title: "Request a Quote",
    description:
      "Get a tailored project quote for your web, mobile, or AI solution. Share your needs and let TechFoge create your roadmap.",
    url: "https://techfoge.com/quote",
    siteName: "TechFoge",
    images: [
      {
        url: "https://techfoge.com/og-quote.jpg",
        width: 1200,
        height: 630,
        alt: "Request a Quote from TechFoge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote",
    description: "Start your custom project journey with TechFoge.",
    images: ["https://techfoge.com/twitter-quote.jpg"], // Update this
  },
  alternates: {
    canonical: "https://techfoge.com/quote",
  },
}


const Home = () => {
  return (
    <div>
      <GetQuotePage/>
    </div>
  )
}

export default Home




// 'use client'

// import React, { useState, useEffect, useRef } from 'react'
// import { Send, CheckCircle, MessageCircle, Rocket, Lightbulb, Shield, Users, X } from 'lucide-react'
// import {client} from '@/sanity/lib/client'
// // Custom Button Component
// type ButtonProps = React.PropsWithChildren<{
//   variant?: 'default' | 'ghost' | 'outline'
//   size?: 'default' | 'sm' | 'lg'
//   className?: string
//   disabled?: boolean
//   [key: string]: any
// }>

// const Button = ({ 
//   children, 
//   variant = 'default', 
//   size = 'default', 
//   className = '', 
//   disabled = false,
//   ...props 
// }: ButtonProps) => {
//   const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50'
  
//   const variants = {
//     default: 'bg-gradient-to-r from-[#00D1FF] to-[#0099CC] text-white hover:shadow-[0_0_20px_rgba(0,209,255,0.5)] hover:scale-105',
//     ghost: 'text-[#00D1FF] hover:bg-[#00D1FF]/10 border border-[#00D1FF]/30 hover:border-[#00D1FF]',
//     outline: 'border border-[#00D1FF] text-[#00D1FF] hover:bg-[#00D1FF] hover:text-white'
//   }
  
//   const sizes = {
//     default: 'px-6 py-3 text-base',
//     sm: 'px-4 py-2 text-sm',
//     lg: 'px-8 py-4 text-lg'
//   }
  
//   const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
//   return (
//     <button 
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
//       disabled={disabled}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// // Custom Input Component
// type InputProps = {
//   label?: string
//   type?: string
//   className?: string
//   error?: string
//   value?: string
//   name?: string
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
//   required?: boolean
//   [key: string]: any
// }

// const Input = ({ 
//   label, 
//   type = 'text', 
//   className = '', 
//   error = '',
//   ...props 
// }: InputProps) => {
//   const [focused, setFocused] = useState(false)
  
//   return (
//     <div className="relative">
//       <input
//         type={type}
//         className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-300 focus:outline-none ${
//           focused || props.value 
//             ? 'border-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.3)]' 
//             : 'border-slate-600 hover:border-slate-500'
//         } ${error ? 'border-red-500' : ''} ${className}`}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         {...props}
//       />
//       {label && (
//         <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//           focused || props.value
//             ? '-top-2 text-xs text-[#00D1FF] bg-[#020A15] px-2'
//             : 'top-3 text-slate-400'
//         }`}>
//           {label}
//         </label>
//       )}
//       {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
//     </div>
//   )
// }

// // Custom Select Component
// type SelectOption = { value: string; label: string }
// type SelectProps = {
//   label?: string
//   options?: SelectOption[]
//   className?: string
//   error?: string
//   value?: string
//   name?: string
//   onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
//   required?: boolean
//   [key: string]: any
// }

// const Select = ({ 
//   label, 
//   options = [], 
//   className = '', 
//   error = '',
//   ...props 
// }: SelectProps) => {
//   const [focused, setFocused] = useState(false)
  
//   return (
//     <div className="relative">
//       <select
//         className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white transition-all duration-300 focus:outline-none appearance-none ${
//           focused || props.value 
//             ? 'border-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.3)]' 
//             : 'border-slate-600 hover:border-slate-500'
//         } ${error ? 'border-red-500' : ''} ${className}`}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         {...props}
//       >
//         <option value="" className="bg-slate-800">Select {label}</option>
//         {options.map((option, index) => (
//           <option key={index} value={option.value} className="bg-slate-800">
//             {option.label}
//           </option>
//         ))}
//       </select>
//       {label && (
//         <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//           focused || props.value
//             ? '-top-2 text-xs text-[#00D1FF] bg-[#020A15] px-2'
//             : 'top-3 text-slate-400'
//         }`}>
//           {label}
//         </label>
//       )}
//       <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
//         <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
//       {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
//     </div>
//   )
// }

// // Custom Textarea Component
// type TextareaProps = {
//   label?: string
//   className?: string
//   error?: string
//   value?: string
//   name?: string
//   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
//   required?: boolean
//   [key: string]: any
// }

// const Textarea = ({ 
//   label, 
//   className = '', 
//   error = '',
//   ...props 
// }: TextareaProps) => {
//   const [focused, setFocused] = useState(false)
  
//   return (
//     <div className="relative">
//       <textarea
//         className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-slate-400 transition-all duration-300 focus:outline-none resize-none ${
//           focused || props.value 
//             ? 'border-[#00D1FF] shadow-[0_0_10px_rgba(0,209,255,0.3)]' 
//             : 'border-slate-600 hover:border-slate-500'
//         } ${error ? 'border-red-500' : ''} ${className}`}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         rows={4}
//         {...props}
//       />
//       {label && (
//         <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
//           focused || props.value
//             ? '-top-2 text-xs text-[#00D1FF] bg-[#020A15] px-2'
//             : 'top-3 text-slate-400'
//         }`}>
//           {label}
//         </label>
//       )}
//       {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
//     </div>
//   )
// }

// // Particle System Component
// const ParticleSystem = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)
  
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
    
//     const ctx = canvas.getContext('2d')
//     interface Particle {
//       x: number
//       y: number
//       vx: number
//       vy: number
//       size: number
//       opacity: number
//     }
//     const particles: Particle[] = []
//     const particleCount = 50
    
//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }
    
//     resizeCanvas()
//     window.addEventListener('resize', resizeCanvas)
    
//     // Create particles
//     for (let i = 0; i < particleCount; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         size: Math.random() * 2 + 1,
//         opacity: Math.random() * 0.5 + 0.2
//       })
//     }
    
//     // Animation loop
//     const animate = () => {
//       if (!ctx) return;

//       ctx.clearRect(0, 0, canvas.width, canvas.height)
      
//       // Update and draw particles
//       particles.forEach((particle, i) => {
//         particle.x += particle.vx
//         particle.y += particle.vy
        
//         // Wrap around edges
//         if (particle.x < 0) particle.x = canvas.width
//         if (particle.x > canvas.width) particle.x = 0
//         if (particle.y < 0) particle.y = canvas.height
//         if (particle.y > canvas.height) particle.y = 0
        
//         // Draw particle
//         ctx.beginPath()
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(0, 209, 255, ${particle.opacity})`
//         ctx.fill()
        
//         // Draw connections
//         particles.slice(i + 1).forEach(otherParticle => {
//           const dx = particle.x - otherParticle.x
//           const dy = particle.y - otherParticle.y
//           const distance = Math.sqrt(dx * dx + dy * dy)
          
//           if (distance < 100) {
//             ctx.beginPath()
//             ctx.moveTo(particle.x, particle.y)
//             ctx.lineTo(otherParticle.x, otherParticle.y)
//             ctx.strokeStyle = `rgba(0, 209, 255, ${0.1 * (1 - distance / 100)})`
//             ctx.lineWidth = 0.5
//             ctx.stroke()
//           }
//         })
//       })
      
//       requestAnimationFrame(animate)
//     }
    
//     animate()
    
//     return () => {
//       window.removeEventListener('resize', resizeCanvas)
//     }
//   }, [])
  
//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 pointer-events-none"
//       style={{ zIndex: 1 }}
//     />
//   )
// }

// // Success Modal Component
// const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
//   if (!isOpen) return null
  
//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-[#020A15] border border-[#00D1FF]/30 rounded-2xl p-8 max-w-md w-full text-center relative overflow-hidden">
//         {/* Animated background glow */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/10 to-transparent animate-pulse"></div>
        
//         <div className="relative z-10">
//           <div className="mb-6">
//             <CheckCircle className="w-16 h-16 text-[#00D1FF] mx-auto animate-bounce" />
//           </div>
          
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Quote Request Sent!
//           </h3>
          
//           <p className="text-slate-300 mb-6">
//             Your request has been received. We'll be in touch within 24 hours with a custom plan tailored to your needs.
//           </p>
          
//           <Button onClick={onClose} className="w-full">
//             Continue
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Support Modal Component
// const SupportModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
//   if (!isOpen) return null
  
//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//       <div className="bg-[#020A15] border border-[#00D1FF]/30 rounded-2xl p-6 max-w-md w-full relative">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold text-white">Need Help?</h3>
//           <button 
//             onClick={onClose}
//             className="text-slate-400 hover:text-white transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>
        
//         <div className="space-y-4">
//           <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
//             <MessageCircle className="w-5 h-5 text-[#00D1FF]" />
//             <div>
//               <p className="text-white font-medium">Live Chat</p>
//               <p className="text-slate-400 text-sm">Get instant help</p>
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
//             <Send className="w-5 h-5 text-[#00D1FF]" />
//             <div>
//               <p className="text-white font-medium">Email Support</p>
//               <p className="text-slate-400 text-sm">support@techfoge.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function GetQuotePage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     projectType: '',
//     budget: '',
//     message: ''
//   })
  
//   const [errors, setErrors] = useState<Record<string, string>>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [showSupport, setShowSupport] = useState(false)
  
//   const projectTypes = [
//     { value: 'web-development', label: 'Web Development' },
//     { value: 'mobile-app', label: 'Mobile App' },
//     { value: 'ui-ux-design', label: 'UI/UX Design' },
//     { value: 'consulting', label: 'Tech Consulting' },
//     { value: 'other', label: 'Other' }
//   ]
  
//   const budgetRanges = [
//     { value: '5k-10k', label: '$5,000 - $10,000' },
//     { value: '10k-25k', label: '$10,000 - $25,000' },
//     { value: '25k-50k', label: '$25,000 - $50,000' },
//     { value: '50k+', label: '$50,000+' }
//   ]
  
//   interface FormData {
//     name: string
//     email: string
//     phone: string
//     company: string
//     projectType: string
//     budget: string
//     message: string
//   }

//   interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

//   const handleInputChange = (e: InputChangeEvent) => {
//     const { name, value } = e.target
//     setFormData((prev: FormData) => ({ ...prev, [name]: value }))
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev: Record<string, string>) => ({ ...prev, [name]: '' }))
//     }
//   }
  
//   const validateForm = () => {
//     const newErrors: Record<string, string> = {}
    
//     if (!formData.name.trim()) newErrors.name = 'Name is required'
//     if (!formData.email.trim()) newErrors.email = 'Email is required'
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
//     if (!formData.projectType) newErrors.projectType = 'Project type is required'
//     if (!formData.budget) newErrors.budget = 'Budget range is required'
//     if (!formData.message.trim()) newErrors.message = 'Project details are required'
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }
  
// interface QuoteRequest {
//   _type: string
//   name: string
//   email: string
//   phone: string
//   company: string
//   projectType: string
//   budget: string
//   message: string
//   submittedAt: string
// }

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
//   e.preventDefault()

//   if (!validateForm()) return

//   setIsSubmitting(true)

//   try {
//     // Submit to Sanity
//     const quoteRequest: QuoteRequest = {
//       _type: 'quoteRequest',
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       company: formData.company,
//       projectType: formData.projectType,
//       budget: formData.budget,
//       message: formData.message,
//       submittedAt: new Date().toISOString()
//     }

//     await client.create(quoteRequest)

//     setShowSuccess(true)
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       company: '',
//       projectType: '',
//       budget: '',
//       message: ''
//     })
//   } catch (error) {
//     console.error('Error submitting form:', error)
//     alert('There was an error submitting your request. Please try again.')
//   } finally {
//     setIsSubmitting(false)
//   }
// }
//   return (
//     <div className=" bg-[#020A15] text-white relative overflow-hidden">
//       {/* Particle System */}
//       <ParticleSystem />
      
//       {/* Circuit Pattern Overlay */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//           <defs>
//             <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
//               <path d="M0 10h20M10 0v20M5 5h10v10H5z" stroke="#00D1FF" strokeWidth="0.5" fill="none"/>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#circuit)"/>
//         </svg>
//       </div>
      
//       {/* Corner Glows */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl"></div>
      
//       <div className="relative z-10">
//         {/* Hero Banner */}
//         <section className=" flex items-center justify-center px-4 py-20">
//           <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side - Hero Content */}
//             <div className="text-center lg:text-left">
//               <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
//                 <span className="bg-gradient-to-r from-white via-[#00D1FF] to-white bg-clip-text text-transparent animate-neonGlow">
//                   Get a Quote
//                 </span>
//               </h1>
              
//               <p className="text-xl text-slate-300 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//                 Tell us about your project — we'll get back with a custom plan tailored to your vision and goals.
//               </p>
              
//               <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//                 <div className="flex items-center space-x-2 text-[#00D1FF]">
//                   <CheckCircle className="w-5 h-5" />
//                   <span>Free Consultation</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-[#00D1FF]">
//                   <CheckCircle className="w-5 h-5" />
//                   <span>24h Response</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-[#00D1FF]">
//                   <CheckCircle className="w-5 h-5" />
//                   <span>Custom Solutions</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Side - Quote Form */}
//             <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
//               <div className="bg-white/5 backdrop-blur-md border border-[#00D1FF]/20 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,209,255,0.1)]">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Start Your Project</h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <Input
//                       label="Full Name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       error={errors.name}
//                       required
//                     />
                    
//                     <Input
//                       label="Email Address"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       error={errors.email}
//                       required
//                     />
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <Input
//                       label="Phone Number"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       error={errors.phone}
//                       required
//                     />
                    
//                     <Input
//                       label="Company (Optional)"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       error={errors.company}
//                     />
//                   </div>
                 
                  
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <Select
//                       label="Project Type"
//                       name="projectType"
//                       value={formData.projectType}
//                       onChange={handleInputChange}
//                       options={projectTypes}
//                       error={errors.projectType}
//                       required
//                     />
                    
//                     <Select
//                       label="Budget Range"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleInputChange}
//                       options={budgetRanges}
//                       error={errors.budget}
//                       required
//                     />
//                   </div>
                  
//                   <Textarea
//                     label="Project Details & Requirements"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     error={errors.message}
                    
//                     required
//                   />
                  
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full text-lg py-4"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                         Sending Request...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5 mr-2" />
//                         Get My Quote
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Why Work With Us Section */}
//         <section className="py-20 px-4">
//           <div className="max-w-6xl mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-16">
//               <span className="bg-gradient-to-r from-white to-[#00D1FF] bg-clip-text text-transparent">
//                 Why Choose Tech Foge?
//               </span>
//             </h2>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   icon: Rocket,
//                   title: 'Fast Turnaround',
//                   description: 'Quick delivery without compromising quality'
//                 },
//                 {
//                   icon: Lightbulb,
//                   title: 'Innovative Solutions',
//                   description: 'Cutting-edge technology and creative approaches'
//                 },
//                 {
//                   icon: Shield,
//                   title: 'Secure Systems',
//                   description: 'Enterprise-grade security and data protection'
//                 },
//                 {
//                   icon: Users,
//                   title: 'Human-Centric Design',
//                   description: 'User experience at the heart of everything we build'
//                 }
//               ].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/5 backdrop-blur-md border border-[#00D1FF]/20 rounded-xl p-6 text-center hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500 hover:scale-105 animate-float"
//                   style={{ animationDelay: `${index * 0.2}s` }}
//                 >
//                   <div className="mb-4">
//                     <feature.icon className="w-12 h-12 text-[#00D1FF] mx-auto" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                   <p className="text-slate-300">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
      
//       {/* Floating Support Button */}
//       <button
//         onClick={() => setShowSupport(true)}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-[#00D1FF] to-[#0099CC] p-4 rounded-full shadow-[0_0_20px_rgba(0,209,255,0.5)] hover:scale-110 transition-all duration-300 z-40 animate-float"
//       >
//         <MessageCircle className="w-6 h-6 text-white" />
//       </button>
      
//       {/* Success Modal */}
//       <SuccessModal 
//         isOpen={showSuccess} 
//         onClose={() => setShowSuccess(false)} 
//       />
      
//       {/* Support Modal */}
//       <SupportModal 
//         isOpen={showSupport} 
//         onClose={() => setShowSupport(false)} 
//       />
//     </div>
//   )
// }

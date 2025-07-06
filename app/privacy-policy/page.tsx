


import PrivacyPolicyPage from '@/components/PrivacyPolicy/MainPage'
import React from 'react'

const Home = () => {
  return (
    <div>
      <PrivacyPolicyPage/>
    </div>
  )
}

export default Home



// "use client"

// import { Poppins } from "next/font/google"
// import { useState, useEffect, useRef } from "react"
// import {
//   Shield,
//   Eye,
//   Lock,
//   Users,
//   Database,
//   Cookie,
//   Mail,
//   FileText,
//   Globe,
//   Zap,
//   MessageCircle,
//   CheckCircle,
//   AlertTriangle,
//   Settings,
// } from "lucide-react"

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// })

// export default function PrivacyPolicyPage() {
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
//   const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

//   useEffect(() => {
//     // Trigger initial load animations
//     const timer = setTimeout(() => {
//       setIsLoaded(true)
//     }, 100)

//     // Set up intersection observer for scroll animations
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const sectionId = entry.target.getAttribute("data-section")
//             if (sectionId) {
//               setVisibleSections((prev) => new Set([...Array.from(prev), sectionId]))
//             }
//           }
//         })
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "0px 0px -50px 0px",
//       },
//     )

//     // Observe all sections
//     Object.values(sectionRefs.current).forEach((ref) => {
//       if (ref) observer.observe(ref)
//     })

//     return () => {
//       clearTimeout(timer)
//       observer.disconnect()
//     }
//   }, [])

//   const privacySections = [
//     {
//       id: "information-collection",
//       icon: Database,
//       title: "Information We Collect",
//       content: [
//         {
//           subtitle: "Personal Information",
//           text: "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, phone number, and company information.",
//         },
//         {
//           subtitle: "Usage Information",
//           text: "We automatically collect certain information about your device and how you interact with our services, including IP address, browser type, operating system, and usage patterns.",
//         },
//         {
//           subtitle: "Cookies and Tracking",
//           text: "We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.",
//         },
//       ],
//     },
//     {
//       id: "information-usage",
//       icon: Eye,
//       title: "How We Use Your Information",
//       content: [
//         {
//           subtitle: "Service Provision",
//           text: "We use your information to provide, maintain, and improve our services, process transactions, and communicate with you about your account or our services.",
//         },
//         {
//           subtitle: "Communication",
//           text: "We may use your contact information to send you technical notices, updates, security alerts, and administrative messages.",
//         },
//         {
//           subtitle: "Analytics and Improvement",
//           text: "We analyze usage patterns to understand how our services are used and to improve functionality and user experience.",
//         },
//       ],
//     },
//     {
//       id: "information-sharing",
//       icon: Users,
//       title: "Information Sharing and Disclosure",
//       content: [
//         {
//           subtitle: "Service Providers",
//           text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support.",
//         },
//         {
//           subtitle: "Legal Requirements",
//           text: "We may disclose your information if required by law, regulation, or legal process, or to protect the rights, property, or safety of Tech Foge or others.",
//         },
//         {
//           subtitle: "Business Transfers",
//           text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
//         },
//       ],
//     },
//     {
//       id: "data-security",
//       icon: Lock,
//       title: "Data Security",
//       content: [
//         {
//           subtitle: "Security Measures",
//           text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
//         },
//         {
//           subtitle: "Encryption",
//           text: "We use industry-standard encryption to protect sensitive data during transmission and storage.",
//         },
//         {
//           subtitle: "Access Controls",
//           text: "Access to personal information is restricted to authorized personnel who need it to perform their job functions.",
//         },
//       ],
//     },
//     {
//       id: "user-rights",
//       icon: Settings,
//       title: "Your Rights and Choices",
//       content: [
//         {
//           subtitle: "Access and Correction",
//           text: "You have the right to access, update, or correct your personal information. You can do this through your account settings or by contacting us.",
//         },
//         {
//           subtitle: "Data Portability",
//           text: "You have the right to request a copy of your personal information in a structured, machine-readable format.",
//         },
//         {
//           subtitle: "Deletion",
//           text: "You may request deletion of your personal information, subject to certain legal and contractual restrictions.",
//         },
//       ],
//     },
//     {
//       id: "cookies-policy",
//       icon: Cookie,
//       title: "Cookies and Tracking Technologies",
//       content: [
//         {
//           subtitle: "Types of Cookies",
//           text: "We use essential cookies for site functionality, analytics cookies to understand usage, and preference cookies to remember your settings.",
//         },
//         {
//           subtitle: "Cookie Management",
//           text: "You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our services.",
//         },
//         {
//           subtitle: "Third-Party Cookies",
//           text: "We may allow third-party services to place cookies on your device for analytics and advertising purposes.",
//         },
//       ],
//     },
//   ]

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Privacy Officer",
//       details: ["privacy@techfoge.com", "Data Protection Inquiries"],
//       color: "#00D1FF",
//     },
//     {
//       icon: FileText,
//       title: "Legal Department",
//       details: ["legal@techfoge.com", "Policy Questions"],
//       color: "#00D1FF",
//     },
//     {
//       icon: Shield,
//       title: "Security Team",
//       details: ["security@techfoge.com", "Security Concerns"],
//       color: "#00D1FF",
//     },
//     {
//       icon: Globe,
//       title: "General Contact",
//       details: ["hello@techfoge.com", "General Inquiries"],
//       color: "#00D1FF",
//     },
//   ]

//   return (
//     <div className={`min-h-screen bg-[#020A15] relative overflow-hidden ${poppins.className}`}>
//       {/* Background Circuit Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <svg className="w-full h-full" viewBox="0 0 1200 800">
//           <defs>
//             <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
//               <path d="M20 20h80v80h-80z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
//               <circle cx="20" cy="20" r="2" fill="#00D1FF" />
//               <circle cx="100" cy="20" r="2" fill="#00D1FF" />
//               <circle cx="20" cy="100" r="2" fill="#00D1FF" />
//               <circle cx="100" cy="100" r="2" fill="#00D1FF" />
//               <path d="M20 60h80M60 20v80" stroke="#00D1FF" strokeWidth="0.3" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#circuit)" />
//         </svg>
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-[#00D1FF] opacity-20 animate-float"
//             style={{
//               width: `${Math.random() * 8 + 4}px`,
//               height: `${Math.random() * 8 + 4}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 4}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Glowing Orbs */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-glow" />
//       <div className="absolute top-40 right-20 w-24 h-24 bg-[#00D1FF]/15 rounded-full blur-2xl animate-pulse-glow-delayed" />
//       <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#00D1FF]/8 rounded-full blur-3xl animate-pulse-glow-slow" />

//       {/* Privacy Badge */}
//       <div className="fixed top-8 right-8 z-50">
//         <div className="relative">
//           <div className="bg-[#00D1FF] text-[#020A15] px-4 py-2 rounded-full font-bold text-sm animate-pulse-badge">
//             <span className="flex items-center gap-2">
//               <Shield size={16} />
//               Privacy Policy
//             </span>
//           </div>
//           <div className="absolute inset-0 bg-[#00D1FF]/30 rounded-full blur-lg animate-pulse" />
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative z-10 pt-20 pb-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           {/* Main Heading */}
//           <div
//             className={`mb-6 transition-all duration-1000 ease-out ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white relative">
//               Privacy Policy
//               {/* Neon Glow Effects */}
//               <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-sm opacity-30 animate-neon-pulse" />
//               <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#00D1FF] blur-lg opacity-20 animate-neon-pulse-slow" />
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <div
//             className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <p className="text-xl md:text-2xl lg:text-3xl text-[#D1D5DB] leading-relaxed max-w-4xl mx-auto">
//               Your privacy matters to us. Learn how we protect and handle your data.
//             </p>
//           </div>

//           {/* Last Updated */}
//           <div
//             className={`mb-8 transition-all duration-1000 ease-out delay-500 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="inline-flex items-center gap-2 bg-[#00D1FF]/10 border border-[#00D1FF]/20 rounded-full px-6 py-3">
//               <CheckCircle size={18} className="text-[#00D1FF]" />
//               <span className="text-[#D1D5DB] text-sm">Last updated: January 2024</span>
//             </div>
//           </div>

//           {/* Decorative Elements */}
//           <div
//             className={`flex justify-center items-center gap-4 transition-all duration-1000 ease-out delay-700 ${
//               isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
//             <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
//             <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#00D1FF]/40 to-transparent" />
//           </div>
//         </div>
//       </section>

//       {/* Introduction Section */}
//       <section className="relative z-10 py-16 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div
//             ref={(el) => {
//               sectionRefs.current.intro = el
//             }}
//             data-section="intro"
//             className={`transition-all duration-1000 ease-out ${
//               visibleSections.has("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="relative">
//               {/* Background Glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl blur-xl" />

//               <div className="relative bg-[#020A15]/80 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-8 md:p-12">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="w-12 h-12 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
//                     <AlertTriangle size={24} className="text-[#00D1FF]" />
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-white">Important Notice</h2>
//                 </div>

//                 <div className="space-y-4 text-[#D1D5DB] leading-relaxed">
//                   <p>
//                     At Tech Foge, we are committed to protecting your privacy and ensuring the security of your personal
//                     information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
//                     information when you visit our website or use our services.
//                   </p>
//                   <p>
//                     By using our services, you agree to the collection and use of information in accordance with this
//                     policy. We will not use or share your information with anyone except as described in this Privacy
//                     Policy.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Privacy Sections */}
//       {privacySections.map((section, sectionIndex) => (
//         <section key={section.id} className="relative z-10 py-12 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div
//               ref={(el) => {
//                 sectionRefs.current[section.id] = el
//               }}
//               data-section={section.id}
//               className={`transition-all duration-1000 ease-out ${
//                 visibleSections.has(section.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//             >
//               {/* Section Header */}
//               <div className="text-center mb-12">
//                 <div className="flex items-center justify-center gap-4 mb-4">
//                   <div className="w-16 h-16 bg-[#00D1FF]/10 rounded-full flex items-center justify-center">
//                     <section.icon size={32} className="text-[#00D1FF]" />
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-white">{section.title}</h2>
//                 </div>
//               </div>

//               {/* Content Cards */}
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {section.content.map((item, itemIndex) => (
//                   <div
//                     key={itemIndex}
//                     className={`transition-all duration-700 ease-out ${
//                       visibleSections.has(section.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//                     }`}
//                     style={{ transitionDelay: `${itemIndex * 200}ms` }}
//                   >
//                     <div className="group relative bg-[#020A15]/60 backdrop-blur-sm border border-[#00D1FF]/20 rounded-2xl p-6 h-full hover:border-[#00D1FF]/50 hover:shadow-[0_0_30px_rgba(0,209,255,0.2)] transition-all duration-500">
//                       {/* Card Glow Effect */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/5 via-transparent to-[#00D1FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                       <div className="relative">
//                         <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00D1FF] transition-colors duration-300">
//                           {item.subtitle}
//                         </h3>
//                         <p className="text-[#D1D5DB] leading-relaxed text-sm">{item.text}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}


//       {/* Footer CTA */}
//       <section className="relative z-10 py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <div
//             ref={(el) => {
//               sectionRefs.current.cta = el
//             }}
//             data-section="cta"
//             className={`transition-all duration-1000 ease-out ${
//               visibleSections.has("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <div className="relative bg-gradient-to-br from-[#00D1FF]/10 via-[#020A15]/80 to-[#00D1FF]/10 rounded-2xl p-12 border border-[#00D1FF]/20">
//               <div className="flex items-center justify-center gap-3 mb-6">
//                 <Zap size={24} className="text-[#00D1FF]" />
//                 <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Work Together?</h3>
//                 <Zap size={24} className="text-[#00D1FF]" />
//               </div>

//               <p className="text-lg text-[#D1D5DB] mb-8 max-w-2xl mx-auto">
//                 Now that you understand how we protect your privacy, let's discuss your next project.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="bg-[#00D1FF] text-[#020A15] px-8 py-3 rounded-lg font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all duration-300">
//                   <span className="flex items-center gap-2">
//                     <Globe size={18} />
//                     View Our Work
//                   </span>
//                 </button>
//                 <button className="border-2 border-[#00D1FF] text-[#00D1FF] px-8 py-3 rounded-lg font-bold hover:bg-[#00D1FF]/10 hover:scale-105 transition-all duration-300">
//                   <span className="flex items-center gap-2">
//                     <MessageCircle size={18} />
//                     Contact Us
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Custom CSS Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-15px);
//           }
//         }

//         @keyframes neon-pulse {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes neon-pulse-slow {
//           0%, 100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.6;
//           }
//         }

//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.1);
//           }
//         }

//         @keyframes pulse-glow-delayed {
//           0%, 100% {
//             opacity: 0.4;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.8;
//             transform: scale(1.15);
//           }
//         }

//         @keyframes pulse-glow-slow {
//           0%, 100% {
//             opacity: 0.2;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.5;
//             transform: scale(1.05);
//           }
//         }

//         @keyframes pulse-badge {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.05);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-neon-pulse {
//           animation: neon-pulse 3s ease-in-out infinite;
//         }

//         .animate-neon-pulse-slow {
//           animation: neon-pulse-slow 4s ease-in-out infinite;
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 4s ease-in-out infinite;
//         }

//         .animate-pulse-glow-delayed {
//           animation: pulse-glow-delayed 5s ease-in-out infinite 1s;
//         }

//         .animate-pulse-glow-slow {
//           animation: pulse-glow-slow 6s ease-in-out infinite;
//         }

//         .animate-pulse-badge {
//           animation: pulse-badge 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   )
// }

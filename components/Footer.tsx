"use client"

import { useEffect, useRef, useState } from "react"
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from '@/images/tech-foge.png'
import Link from "next/link"
export default function FuturisticFooter() {


  const pathname = usePathname() 
  const isAdminRoute = pathname.startsWith("/admin") 




  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])


    if (isAdminRoute) return null 

  const companyInfo = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ]

  const quickLinks = [
    { name: "Get a Quote", href: "/quote" },
    { name: "Technologies", href: "/technologies" },
    { name: "Blog", href: "/blogs" },
    { name: "FAQs", href: "/faqs" },
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com", color: "#0077B5" },
    { name: "X (Twitter)", icon: FaTwitter, href: "https://x.com", color: "#000000" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com", color: "#E4405F" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com", color: "#333333" },
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com", color: "#1877F2" },
  ]

  return (
    <div className="relative">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px #00d1ff40;
          }
          50% {
            box-shadow: 0 0 40px #00d1ff80, 0 0 60px #00d1ff40;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes borderGlow {
          0%,
          100% {
            border-color: #00d1ff40;
          }
          50% {
            border-color: #00d1ff80;
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, #00d1ff40, transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }

        .hover-glow:hover {
          box-shadow: 0 0 25px #00d1ff60;
          transform: scale(1.05);
        }

        .hover-scale:hover {
          transform: scale(1.1);
        }

        .hover-slide:hover {
          transform: translateX(8px);
        }

        .social-icon:hover {
          transform: scale(1.2) rotate(5deg);
        }

        .link-underline {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .link-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00D1FF, transparent);
          transition: left 0.4s ease-in-out;
        }

        .link-underline:hover::after {
          left: 0;
        }

        .link-underline-glow {
          position: relative;
          display: inline-block;
          padding-bottom: 4px;
        }

        .link-underline-glow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00D1FF;
          border-radius: 1px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 6px #00D1FF80;
        }

        .link-underline-glow:hover::after {
          opacity: 1;
          transform: scaleX(1);
        }

        /* Glowing divider */
        .glowing-divider {
          position: relative;
          overflow: hidden;
        }

        .glowing-divider::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00D1FF, transparent);
          animation: shimmer 2s infinite;
        }

        /* Responsive font sizes */
        @media (max-width: 768px) {
          .text-responsive-xl {
            font-size: 1.5rem;
          }
          .text-responsive-lg {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 769px) {
          .text-responsive-xl {
            font-size: 2rem;
          }
          .text-responsive-lg {
            font-size: 1.25rem;
          }
        }

        .social-icon-animated:hover .absolute {
          transform: translateY(0);
        }
      `}</style>

      {/* Animated Glowing Divider */}
      <div className="glowing-divider w-full h-0.5 bg-gradient-to-r from-transparent via-[#00D1FF]/50 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent animate-pulse-custom" />
      </div>

      <footer ref={footerRef} className="relative py-16 px-4 overflow-hidden" style={{ backgroundColor: "#020A15" }}>
        {/* Animated Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00D1FF]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-3xl animate-pulse-custom" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00D1FF]/5 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00D1FF]/5 rounded-full blur-xl animate-pulse-custom" />

        <div className="relative max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 smx:grid-cols-2 lg:grid-cols-5 lgll:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Logo & Tagline - Takes 2 columns on large screens */}
            <div
              className={`smx:col-span-2 sm:col-span-1 lg:col-span-2 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="mb-8">
                {/* Logo with Robot Icon */}
                <div className="flex items-center mb-4 animate-float">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D1FF] to-[#00D1FF]/70 rounded-xl flex items-center justify-center mr-4 animate-glow">
                    <Image src={Logo} alt="TechFoge Logo" className="rounded-xl"/>
                  </div>
                  <h2 className="text-responsive-xl font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
                  TECH FOGE
                  </h2>
                </div>

                {/* Tagline */}
                <p
                  className="text-[#D1D5DB] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  At Tech Foge, we blend intelligence and innovation to accelerate digital transformation and craft solutions that redefine what&apos;s possible.
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-animated relative w-12 h-12 bg-gradient-to-br from-[#00D1FF]/20 to-[#00D1FF]/10 border border-[#00D1FF]/30 rounded-full flex items-center justify-center text-[#D1D5DB] hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_#00D1FF60] animate-border-glow overflow-hidden will-change-transform"
                        aria-label={social.name}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {/* Animated fill background */}
                        <div className="absolute inset-0 bg-[#00D1FF] opacity-20 rounded-full transform translate-y-full transition-transform duration-500 ease-in-out will-change-transform group-hover:translate-y-0" />

                        {/* Icon on top */}
                        <IconComponent className="relative z-10 text-xl transition-colors duration-300" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3
                className="text-responsive-lg font-bold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Company
              </h3>
              <ul className="space-y-4">
                {companyInfo.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="link-underline-glow text-[#D1D5DB] hover:text-[#00D1FF] transition-all duration-300 text-sm hover-slide"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3
                className="text-responsive-lg font-bold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="link-underline-glow text-[#D1D5DB] hover:text-[#00D1FF] transition-all duration-300 text-sm hover-slide"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Address */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3
                className="text-responsive-lg font-bold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Contact Info
              </h3>

              <div className="space-y-4">
                {/* Office Location */}
                <div className="flex items-start space-x-3 animate-float">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#00D1FF] mt-0.5 flex-shrink-0" />
                  <p className="text-[#D1D5DB] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                    HYDERABAD SINDH
                   PAKISTAN <br />
                 
                  </p>
                </div>

                {/* Support Email */}
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-5 h-5 text-[#00D1FF] flex-shrink-0" />
                  <a
                    href="mailto:techfoge1@gmail.com"
                    className="text-[#D1D5DB] hover:text-[#00D1FF] transform group-hover:translate-x-1 transition-all duration-300 text-sm hover-slide"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    techfoge1@gmail.com
                  </a>
                </div>

                {/* Phone Number */}
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-5 h-5 text-[#00D1FF] flex-shrink-0" />
                  <a
                    href="tel:+923253848828"
                    className="text-[#D1D5DB] hover:text-[#00D1FF] transform group-hover:translate-x-1 transition-all duration-300 text-sm hover-slide"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    +92 325 3848828
                  </a>
                </div>
              </div>
            </div>

            {/* How to Start CTA */}
            <div
              className={`transition-all duration-1000 ease-out w-full ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3
                className="text-responsive-lg font-bold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Get Started
              </h3>

              <div className="bg-gradient-to-br from-[#00D1FF]/15 to-[#00D1FF]/5 border border-[#00D1FF]/30 rounded-2xl p-4 backdrop-blur-sm animate-border-glow">
                <p
                  className="text-white text-[12px] mb-6 font-medium leading-relaxed"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Ready to revolutionize your business with AI-powered solutions?
                </p>

<Link href="/contact" >
                <button
                  className="hover-glow w-full p-2 bg-gradient-to-r from-[#00D1FF] to-[#00D1FF]/80 text-[#020A15] font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00D1FF] focus:ring-offset-2 focus:ring-offset-[#020A15] animate-glow hover-scale"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => {
  
                    if ("vibrate" in navigator) {
                      navigator.vibrate(100)
                    }
                  }}
                >
                  Get Started Today
                </button>
</Link>

                <p
                  className="text-[#D1D5DB] text-xs mt-3 text-center animate-pulse-custom"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Free consultation • No commitment
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className={`mt-16 pt-8 border-t border-[#00D1FF]/20 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex  justify-center items-center ">
              {/* Copyright */}
              <div className="flex items-center space-x-4">
                <p className="text-[#D1D5DB] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  © {new Date().getFullYear()} <b>TECHFOGE</b>. All rights reserved.
                </p>
                <div className="w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse-custom" />
              </div>

          
            </div>

           
          </div>
        </div>
      </footer>
    </div>
  )
}

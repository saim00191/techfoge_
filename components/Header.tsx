"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"
import Logo from "../images/logomain.png"
import Image from "next/image"
import Link from "next/link"
import { Poppins } from "next/font/google"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaThreads } from "react-icons/fa6"
import {
  FaCode,
  FaGlobe,
  FaMobile,
  FaWordpress,
  FaShoppingCart,
  FaSearch,
  FaPalette,
  FaVideo,
  FaBrain,
  FaHeadset,
  FaChevronDown,
} from "react-icons/fa"
import { usePathname } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Header() {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith("/admin")
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (isAdminRoute) return null

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Blogs", href: "/blogs" },
    { name: "Technologies", href: "/technologies" },
    { name: "Careers", href: "/careers" },
  ]

  const services = [
    {
      name: "Custom Software Development",
      href: "/services/custom-software",
      icon: FaCode,
      description: "Tailored solutions for your business needs",
    },
    {
      name: "Web Development",
      href: "/services/web-development",
      icon: FaGlobe,
      description: "Modern, responsive websites and web apps",
    },
    {
      name: "Mobile App Development",
      href: "/services/mobile-development",
      icon: FaMobile,
      description: "iOS and Android applications",
    },
    {
      name: "WordPress Development",
      href: "/services/wordpress",
      icon: FaWordpress,
      description: "Custom WordPress themes and plugins",
    },
    {
      name: "E-Commerce Solutions",
      href: "/services/ecommerce",
      icon: FaShoppingCart,
      description: "Online stores and payment integration",
    },
    {
      name: "SEO Optimization",
      href: "/services/seo",
      icon: FaSearch,
      description: "Improve your search engine rankings",
    },
    {
      name: "Graphic Designing",
      href: "/services/graphic-design",
      icon: FaPalette,
      description: "Visual identity and brand design",
    },
    {
      name: "Video Editing",
      href: "/services/video-editing",
      icon: FaVideo,
      description: "Professional video production services",
    },
    {
      name: "AI & Machine Learning",
      href: "/services/ai-ml",
      icon: FaBrain,
      description: "Intelligent automation solutions",
    },
    {
      name: "Technical Support",
      href: "/services/support",
      icon: FaHeadset,
      description: "24/7 maintenance and support",
    },
  ]

  const handleServicesHover = () => {
    setIsServicesOpen(true)
  }

  const handleServicesLeave = () => {
    setIsServicesOpen(false)
  }

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsServicesOpen(!isServicesOpen)
  }

  const handleMobileServicesToggle = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className={`bg-[#020A15] ${poppins.className}`}>
        <div className="text-white container flex items-center justify-between py-2 px-4 relative z-50">
          {/* Logo */}
          <Image src={Logo || "/placeholder.svg"} alt="Logo" className="h-24 w-[140px]" />

          {/* Desktop Nav */}
          <ul className="hidden mdl:flex items-center mdl:gap-4 mdll:gap-6 text-[16px] font-medium">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="relative group"
                ref={item.hasDropdown ? servicesRef : null}
                onMouseEnter={item.hasDropdown ? handleServicesHover : undefined}
                onMouseLeave={item.hasDropdown ? handleServicesLeave : undefined}
              >
                {item.hasDropdown ? (
                  <button
                    onClick={handleServicesClick}
                    className="flex items-center gap-1 hover:text-[#00D1FF] transition-colors duration-300 focus:outline-none focus:text-[#00D1FF]"
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00D1FF] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </button>
                ) : (
                  <Link href={item.href} className="hover:text-[#00D1FF] transition-colors duration-300">
                    {item.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#00D1FF] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                )}

                {/* Desktop Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    ref={dropdownRef}
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-[#020A15]/95 backdrop-blur-md border border-[#00D1FF]/20 rounded-xl shadow-2xl shadow-[#00D1FF]/10 transition-all duration-300 ease-in-out ${
                      isServicesOpen
                        ? "opacity-100 visible translate-y-0 scale-100"
                        : "opacity-0 invisible -translate-y-4 scale-95"
                    }`}
                    style={{ zIndex: 1000 }}
                  >
                    {/* Dropdown Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#020A15]/95 border-l border-t border-[#00D1FF]/20 rotate-45"></div>

                    {/* Dropdown Content */}
                    <div className="p-4 max-h-96 overflow-y-auto custom-scrollbar">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service, index) => {
                          const IconComponent = service.icon
                          return (
                            <Link
                              key={service.name}
                              href={service.href}
                              className={`group/item flex items-start gap-3 p-3 rounded-lg hover:bg-[#00D1FF]/10 hover:border-[#00D1FF]/30 border border-transparent transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#00D1FF]/5 ${
                                isServicesOpen ? "animate-fade-in-up" : ""
                              }`}
                              style={{
                                animationDelay: `${index * 50}ms`,
                              }}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-[#00D1FF]/20 rounded-lg flex items-center justify-center group-hover/item:bg-[#00D1FF]/30 group-hover/item:scale-110 transition-all duration-300">
                                <IconComponent className="text-[#00D1FF] text-sm group-hover/item:animate-pulse" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-white font-semibold text-sm group-hover/item:text-[#00D1FF] transition-colors duration-300 leading-tight">
                                  {service.name}
                                </h3>
                                <p className="text-gray-400 text-xs mt-1 group-hover/item:text-gray-300 transition-colors duration-300 leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>

                      {/* Call to Action */}
                      <div className="mt-4 pt-4 border-t border-[#00D1FF]/20">
                        <Link
                          href="/services"
                          className="block w-full text-center py-2 px-4 bg-gradient-to-r from-[#00D1FF]/20 to-[#005377]/20 hover:from-[#00D1FF]/30 hover:to-[#005377]/30 text-[#00D1FF] font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D1FF]/20"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <Link href="/quote">
            <button className="hidden xsm:inline-flex relative px-6 py-2 overflow-hidden font-semibold text-white border border-[#00D1FF] rounded-full shadow-md group hover:scale-105 hover:shadow-lg transition duration-300 ease-out">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00D1FF] via-[#005377] to-[#00D1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="relative z-10">Get a Quote</span>
            </button>
          </Link>

          {/* Hamburger Icon */}
          <div
            className="mdl:hidden z-50 cursor-pointer flex flex-col justify-between w-6 h-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-[2px] w-full bg-[#00D1FF] transform transition-all duration-500 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-[#00D1FF] transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`h-[2px] w-full bg-[#00D1FF] transform transition-all duration-500 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>
        </div>

        {/* Mobile Menu (Fullscreen, Animated) */}
        <div
          className={`mdl:hidden fixed top-0 left-0 w-full h-screen bg-[#020A15]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-40 transform transition-all duration-700 ease-out ${
            isOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"
          }`}
        >
          {/* Animated Background Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#00D1FF]/10 via-transparent to-[#005377]/10 transition-all duration-1000 ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          />

          {/* Navigation Links with Staggered Animation - FIXED */}
          <ul className="flex flex-col items-center justify-center gap-6 text-white text-lg font-medium relative z-10 max-h-[60vh] overflow-y-scroll w-full px-4">
            {navLinks.map((item, index) => (
              <li
                key={item.name}
                className={`w-full transform transition-all duration-700 ease-out ${
                  isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100 + 200}ms` : `${(navLinks.length - index) * 50}ms`,
                }}
              >
                {item.hasDropdown ? (
                  <div className="w-full">
                    <button
                      onClick={handleMobileServicesToggle}
                      className="w-full flex items-center justify-center gap-2 hover:text-[#00D1FF] transition-all duration-300 hover:scale-110 hover:tracking-wider relative group text-center py-3"
                    >
                      {item.name}
                      <FaChevronDown
                        className={`text-xs transition-transform duration-300 ${
                          isMobileServicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                      <span className="absolute left-1/2  -translate-x-1/2 -bottom-1 h-[2px] w-24 bg-[#00D1FF] transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                    </button>

                    {/* Mobile Services Submenu */}
                    <div
                      className={`mt-4 space-y-3 overflow-y-scroll transition-all duration-500 ease-in-out px-4 ${
                        isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {services.map((service, serviceIndex) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.name}
                            href={service.href}
                            className={`flex items-center gap-3 p-3 bg-[#00D1FF]/5 rounded-lg hover:bg-[#00D1FF]/15 transition-all duration-300 hover:scale-105 transform w-full ${
                              isMobileServicesOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: isMobileServicesOpen ? `${serviceIndex * 50}ms` : "0ms",
                            }}
                            onClick={() => {
                              setIsOpen(false)
                              setIsMobileServicesOpen(false)
                            }}
                          >
                            <div className="w-8 h-8 bg-[#00D1FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="text-[#00D1FF] text-sm" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="text-white font-medium text-sm">{service.name}</div>
                              <div className="text-gray-400 text-xs">{service.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="w-full block text-center py-2 hover:text-[#00D1FF] transition-all duration-300 hover:scale-110 hover:tracking-wider relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-[2px] w-24 bg-[#00D1FF]  scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                )}
              </li>
            ))}

            <li
              className={`w-full transform transition-all duration-700 ease-out ${
                isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isOpen ? `${navLinks.length * 100 + 200}ms` : "0ms",
              }}
            >
              <Link href="/quote" onClick={() => setIsOpen(false)} className="w-full block px-4">
                <button className="mt-4 xsm:hidden px-6 py-3 rounded-full border w-full border-[#00D1FF] text-white font-semibold hover:bg-[#00D1FF33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D1FF]/20 relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00D1FF]/20 via-transparent to-[#00D1FF]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  <span className="relative z-10">Get a Quote</span>
                </button>
              </Link>
            </li>
          </ul>

          {/* Social Icons with Enhanced Animation */}
          <div
            className={`absolute bottom-6 flex items-center gap-5 xs:gap-8 text-[#00D1FF] text-xl transform transition-all duration-800 ease-out ${
              isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
            }`}
            style={{
              transitionDelay: isOpen ? "800ms" : "0ms",
            }}
          >
            {[
              { icon: FaFacebookF, href: "https://facebook.com" },
              { icon: FaInstagram, href: "https://instagram.com" },
              { icon: FaLinkedinIn, href: "https://linkedin.com" },
              { icon: FaTwitter, href: "https://twitter.com" },
              { icon: FaThreads, href: "https://www.threads.net" },
            ].map(({ icon: Icon, href }, index) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                className={`transform transition-all duration-500 ease-out hover:scale-125 hover:rotate-12 hover:text-white hover:drop-shadow-lg ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${900 + index * 100}ms` : `${index * 50}ms`,
                }}
              >
                <Icon className="hover:animate-pulse" />
              </Link>
            ))}
          </div>

          {/* Decorative Elements */}
          <div
            className={`absolute top-20 left-10 w-2 h-2 bg-[#00D1FF] rounded-full transition-all duration-1000 ${
              isOpen ? "opacity-60 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}
          />
          <div
            className={`absolute top-32 right-16 w-1 h-1 bg-[#00D1FF] rounded-full transition-all duration-1000 ${
              isOpen ? "opacity-40 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: isOpen ? "800ms" : "0ms" }}
          />
          <div
            className={`absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#00D1FF] rounded-full transition-all duration-1000 ${
              isOpen ? "opacity-50 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: isOpen ? "1000ms" : "0ms" }}
          />
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 209, 255, 0.1);
            border-radius: 2px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(0, 209, 255, 0.5);
            border-radius: 2px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 209, 255, 0.7);
          }
        `}</style>
      </div>
    </header>
  )
}

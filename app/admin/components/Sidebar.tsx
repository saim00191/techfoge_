"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Home,
  Star,
  FileText,
  MessageSquare,
  Quote,
  Briefcase,
  Menu,
  X,
  BarChart3,
  LogOut,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Reviews", href: "/admin/reviews", icon: Star },
  { name: "Blog Management", href: "/admin/blog", icon: FileText },
  { name: "Contact Messages", href: "/admin/contact", icon: MessageSquare },
  { name: "Quote Requests", href: "/admin/quotes", icon: Quote },
  { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
 const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/admin-signin");
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#00D1FF] text-[#020A15] p-2 rounded-lg hover:scale-105 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-[#020A15]/95 backdrop-blur-md border-r border-[#00D1FF]/20 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 800">
            <defs>
              <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M10 10h40v40h-40z" fill="none" stroke="#00D1FF" strokeWidth="0.5" />
                <circle cx="10" cy="10" r="1" fill="#00D1FF" />
                <circle cx="50" cy="10" r="1" fill="#00D1FF" />
                <circle cx="10" cy="50" r="1" fill="#00D1FF" />
                <circle cx="50" cy="50" r="1" fill="#00D1FF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#00D1FF]/10 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-32 right-10 w-20 h-20 bg-[#00D1FF]/8 rounded-full blur-3xl animate-pulse-glow" />

        <div className="relative h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-[#00D1FF]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00D1FF] rounded-lg flex items-center justify-center">
                <BarChart3 size={24} className="text-[#020A15]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                <p className="text-xs text-[#D1D5DB]">Dashboard v2.0</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 animate-slide-in-left ${
                    isActive
                      ? "bg-[#00D1FF]/20 text-[#00D1FF] shadow-[0_0_20px_rgba(0,209,255,0.3)]"
                      : "text-[#D1D5DB] hover:bg-[#00D1FF]/10 hover:text-[#00D1FF]"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon
                    size={20}
                    className={`transition-all duration-300 ${isActive ? "animate-pulse" : "group-hover:scale-110"}`}
                  />
                  <span className="font-medium">{item.name}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#00D1FF]/20">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-[#D1D5DB] hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-300 group">
              <LogOut size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

import type React from "react"
import { Poppins } from "next/font/google"
import Sidebar from "../admin/components/Sidebar"
import AuthWrapper from "@/app/admin-signin/AuthWrapper"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Admin Dashboard",
  description: "Modern admin dashboard with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#020A15] text-white`}>
        <AuthWrapper>
          {/* Inside AuthWrapper: apply layout for authenticated users only */}
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </AuthWrapper>
      </body>
    </html>
  )
}

"use client"
import { useState } from "react"
import { Poppins } from "next/font/google"

import FAQHeader from "./FAQ-Header"
import FAQList from "./FAQ-List"
import FAQCTA from "./FAQ-CTA"
import FAQBackground from "./FAQ-Background"
import FAQDecorative from "./FAQ-Decorative"
import FAQStyles from "./FAQ-Styles"
import { faqs } from "./FAQS-Data"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={`min-h-screen bg-[#020A15] ${poppins.className}`}>

      <FAQBackground />

      <main className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FAQHeader />
          <FAQList faqs={faqs} openItems={openItems} onToggleItem={toggleItem} />
          <FAQCTA />
          <FAQDecorative />
        </div>
      </main>

      <FAQStyles />
    </div>
  )
}

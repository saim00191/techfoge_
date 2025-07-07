"use client"

import FAQItem from "./FAQ-Items"
import type { FAQ } from "./FAQS-Data"

interface FAQListProps {
  faqs: FAQ[]
  openItems: Set<number>
  onToggleItem: (id: number) => void
}

export default function FAQList({ faqs, openItems, onToggleItem }: FAQListProps) {
  return (
    <div className="space-y-0">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} isOpen={openItems.has(faq.id)} onToggle={onToggleItem} />
      ))}
    </div>
  )
}

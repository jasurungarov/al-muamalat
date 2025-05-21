"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { faqs } from '@/constants'

function Frequently() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
        Frequently Asked Questions
      </h1>
      <p className="mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground mt-4">
        If you have any further questions, please contact us.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg border transition-all duration-300 ${
              openIndex === index ? "border-amber-300" : "border-green-600"
            }`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h2 className="font-semibold">{faq.question}</h2>
              {openIndex === index ? (
                <X className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </div>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Frequently

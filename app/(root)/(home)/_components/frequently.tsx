"use client"

import { Plus, X } from "lucide-react"

function Frequently() {
  return (
<div className='container mx-auto max-w-6xl py-24'>
  <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>
  Frequently asked questions
  </h1>
  <p className='mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground mt-4'>
  If you have any further questions, please contact us.</p>
<div className="mt-15 gap-15 justify-center w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
  <div className="w-130">
    <div className="flex justify-between h-15 border-2 border-green-600 rounded-lg p-4 mb-4">
      <h1 className="font-bold">Will I receive lifetime access to the courses?</h1>
      <Plus className="w-6 h-6 " />
    </div>
    <div className="flex flex-col h-34 border-2 border-amber-300 rounded-lg p-4 mb-4">
      <h1 className="flex justify-between font-bold">Will I receive lifetime access to the courses? <X className="w-6 h-6" /> </h1>
      <p className="mt-5">Our platform includes downloadable resources such as PDFs and worksheets to help you study and teach effectively.</p>
    </div>
  </div>
  <div className="w-130">
  <div className="flex justify-between h-15 border-2 border-green-600 rounded-lg p-4 mb-4">
      <h1 className="font-bold">Can I use the materials for community teaching?</h1>
      <Plus className="w-6 h-6" />
    </div>
    <div className="flex justify-between h-15 border-2 border-green-600 rounded-lg p-4 mb-4">
      <h1 className="font-bold">Is there a free trial for the courses?</h1>
      <Plus className="w-6 h-6 " />
    </div>
    <div className="flex justify-between h-15 border-2 border-green-600 rounded-lg p-4 mb-4">
      <h1 className="font-bold">Who can benefit from these courses?</h1>
      <Plus className="w-6 h-6 " />
    </div>
  </div>
</div>
</div>
  )
}

export default Frequently

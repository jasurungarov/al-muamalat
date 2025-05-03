"use client"

import { frame } from "@/constants"
import Image from "next/image"

function Students() {
  return (
<div className='container mx-auto max-w-6xl py-24'>
  <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>
  What students say
  </h1>
  <p className='mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground mt-4'>
  Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.</p>

<div className="mt-15 gap-15 justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
  {frame.map(item => 
    <div
      key={item.description}
      className="w-80 sm:w-96 bg-white text-black shadow-md rounded-lg p-4 mb-4 mx-auto">
      {item.description}
      <div className="flex flex-row shadow-md w-full rounded-lg mt-2">
        <Image
          src={item.image}
          alt=" "
          width={50}
          height={50}
          className="mt-5 ml-4 mb-5 rounded-lg"
        />
        <div className="ml-5 mt-5">
          <h1 className="text-xl font-bold">{item.name}</h1>
          <p>{item.title}</p>
        </div>
      </div>
    </div>
  )}
</div>

</div>
  )
}

export default Students

"use client"

import { Button } from "@/components/ui/button"
import { service } from "@/constants"
import Image from "next/image"

function OurService() {
  return (
	<div className='container mx-auto max-w-6xl py-24'>
	<h1 className='text-center text-5xl font-bold'>
		Our Service
	</h1>
	<p className='mx-auto w-120 text-center text-sm text-muted-foreground'>
	Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
	</p>
<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {service.map(item => (
    <div
      key={item.title}
      className="flex flex-col items-center justify-center rounded-md bg-primary p-6 text-center"
    >
      {/* Rasm va startTitle yonma-yon */}
      <div className="flex flex-col items-center justify-center">
  <Image
    src={item.image}
    alt=" "
    width={70}
    height={70}
    priority={true}
    className="object-contain"
  />
  <h2 className="lg:text-2xl font-bold text-secondary mt-2">
    {item.title}
  </h2>
</div>

      {/* startDescription pastida */}
      <p className="mt-4 justify-items-start text-secondary">
        {item.excerpt}
      </p>

      {/* Button */}
      <Button className="mt-4 flex flex-col items-center justify-center rounded-md w-full bg-[#152032] px-4 py-2 text-white hover:bg-black transition">
        Learn More
      </Button>
    </div>
  ))}
</div>

</div>
  )
}

export default OurService

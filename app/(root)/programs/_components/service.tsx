'use client'

import { Button } from "@/components/ui/button"
import { service2 } from "@/constants"
import Image from "next/image"

function Service() {
  return (
  <div className='container mx-auto max-w-6xl py-24'>
  <h1 className='text-center text-5xl font-bold'>
    Our Service
  </h1>
  <p className='mx-auto w-120 text-center text-sm text-muted-foreground'>
  Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
  </p>
  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {service2.map(item => (
      <div
        key={item.title}
        className="flex flex-col items-center justify-center rounded-md bg-sky-100 p-6 text-center"
      >
        {/* Rasm va startTitle yonma-yon */}
        <div className="flex flex-col items-center justify-center">
          <Image
            src={item.image}
            alt=" "
            width={450}
            height={450}
            priority={true}
            className="object-contain"
          />
          <div className="bg-[rgba(210,230,228,1)] w-45 h-10 rounded-2xl -mt-5">
          <Image
          src={item.image1}
          alt=" "
          width={150}
          height={20}
          className="flex justify-center mt-1 ml-3 font-bold"
          />
          </div>
          <p className=" text-muted-foreground">{item.title}</p>
          <h2 className="lg:text-2xl font-bold text-primary mt-2 mr-2">
            {item.name}
          </h2>
        </div>

        {/* startDescription pastida */}
        <p className="mt-4 justify-items-start text-start text-black">
          {item.excerpt}
        </p>

        {/* Button */}

        <div className="grid grid-cols-3">
          <h1 className="text-amber-600 font-bold text-3xl mt-4">$ 250</h1>
          <p className="text-gray-500 text-2xl line-through -ml-10 mt-5">$ 300</p>
        <Button className="mt-4 flex flex-col items-center justify-center rounded-md w-full bg-primary px-4 py-2 text-white hover:bg-green-950 transition">
          Enroll Now
        </Button>
        </div>
      </div>
    ))}
  </div>
  </div>
  )
}

export default Service

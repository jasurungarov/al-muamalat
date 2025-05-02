'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { companies } from '@/constants'

const textColors = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
];



function OurPartners() {
  return (
  <div className='container mx-auto max-w-6xl py-24'>
  <h1 className='text-center text-5xl font-bold'>
  Our Partners and Clients
  </h1>
  <div className='w-full mt-5'>
<Carousel
  opts={{ align: "start", loop: true }}
  className="container mx-auto w-full max-w-6xl py-10"
  plugins={[Autoplay({ delay: 2000 })]}
>
  <CarouselContent className="-ml-4 flex gap-6">
    {companies.map((title, idx) => (
      <CarouselItem
        key={idx}
        className="basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4"
      >
        <div className="rounded-xl bg-gray-50 flex items-center justify-center h-24 p-4 shadow-sm text-4xl font-bold">
          <span className={textColors[idx % textColors.length]}>
            {title.title}
          </span>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

{/* Ikkinchi carousel */}
<Carousel
  opts={{ align: "end", loop: true }}
  className="container mx-auto w-full max-w-6xl -mt-16 py-10"
  plugins={[
    Autoplay({ delay: 2000 }), // orqaroqda sekinroq
  ]}
>
  <CarouselContent className="-ml-4 flex gap-6 animate-reverse">
    {companies.map((title, idx) => (
      <CarouselItem
        key={idx}
        className="basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4"
      >
        <div className="rounded-xl bg-gray-50 flex items-center justify-center h-24 p-4 shadow-sm text-4xl font-bold">
          <span className={textColors[idx % textColors.length]}>
            {title.title}
          </span>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

			</div>
</div>
  )
}

export default OurPartners

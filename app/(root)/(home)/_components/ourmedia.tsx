"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { media } from "@/constants"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"
import Image from "next/image"

function OurMedia() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth // ekran bo‘yicha suriladi

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className='container mx-auto max-w-6xl py-24'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>
        Our Media
      </h1>
      <p className='mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground mt-4'>
        Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
      </p>

      {/* Arrow & Title */}
      <div className="mt-10 flex items-center justify-between px-2">
        <h2 className="text-4xl font-bold">Our media showcase</h2>
        <div className="flex gap-2">
          <Button size="icon" variant="outline" onClick={() => scroll("left")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" onClick={() => scroll("right")}>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Media Cards */}
      <div
        ref={scrollRef}
        className="mt-6 flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
      >
        {media.map((item) => (
          <div
            key={item.image}
            className="min-w-[300px] max-w-[350px] flex-shrink-0"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={350}
              height={550}
              className="rounded-md"
            />
            <div className="flex justify-between ml-4 mr-4 mb-4 -mt-20 bg-black/50">
              <h1 className="text-1xl font-bold text-white">{item.title}</h1>
              <Button
                variant="default"
                size="icon"
                className="size-12 rounded-full text-white shadow-lg"
              >
                <Play className="size-6" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurMedia

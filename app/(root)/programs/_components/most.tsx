'use client'

import { FiArrowUpRight } from "react-icons/fi";
import { useRef } from "react"
import { course } from "@/constants"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"


function Most() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className='container mx-auto max-w-6xl py-24'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>
        Most Popular Course
      </h1>
      <p className='mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground mt-4'>
        Expert guidance for managing funds in alignment with Islamic principles, helping you make informed, halal investment decisions.
      </p>

      {/* Wrapper with arrows */}
      <div className="relative mt-12">
        {/* Left Arrow */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-[-55px] top-1/2 -translate-y-1/2 z-10 shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {/* Right Arrow */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-[-55px] top-1/2 -translate-y-1/2 z-10 shadow-lg"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>

        {/* Course Cards Scrollable Row */}
        <div
        ref={scrollRef}
        className="mt-6 flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide "
      >
        {course.map((item) => (
          <div
            key={item.name}
            className="relative min-w-[300px] max-w-[350px] p-4 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
          >
            {/* Kurs rasmi */}
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                width={320}
                height={200}
                className="rounded-md w-full object-cover"
              />
          
              {/* Kurs nomi badge — rasm ustida, chapda */}
              <p className="absolute top-3 left-3 bg-white font-bold text-black text-sm rounded-md px-3 py-1 shadow-md">
                {item.name}
              </p>
            </div>
          
            {/* Kurs sarlavhasi */}
            <p className="text-2xl font-semibold mt-4 text-black">{item.title}</p>
          
            {/* Ikkinchi rasm */}
            <Image
              src={item.image1}
              alt="Logo"
              width={100}
              height={50}
              className="py-2"
            />
          
            {/* Narx va tugma */}
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-black">${item.narx}</h1>
              <Button
                variant="default"
                size="icon"
                className="size-10 rounded-full text-white shadow-lg"
              >
                <FiArrowUpRight className="size-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Most

'use client'

import { Button } from "@/components/ui/button";
import { FaCircle } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";


function Payment() {
  return (
  <div className='container mx-auto max-w-6xl py-24'>
<div className="mt-15 gap-15 justify-center w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 text-black">
 
 <div className="w-full bg-primary text-white rounded-md py-4 h-full shadow">
    <h1 className="ml-15 mt-15 flex text-4xl py-4 font-bold ">Our services </h1>
    <h1 className="flex ml-10 mt-10 items-center gap-2 px-4 py-2 text-2xl">
    <IoCheckmarkOutline className="size-10 font-bold"/>
    Space for creative ideas
    </h1>
    <p className="ml-26 mr-15">
    Cyber Square nourishes young aspiring minds 
to get a clear vision of their ideas. We guide 
them in analyzing and building their vision 
and ideas into reality.
    </p>
    <h1 className="flex ml-10 mt-10 items-center gap-2 px-4 py-2 text-2xl">
    <IoCheckmarkOutline className="size-10 font-bold"/>
    Engaging and fun curriculum
    </h1>
    <p className="ml-26 mr-15">
    Our goal is to create an engaging system that 
provides exciting activities so children can 
understand the programming concepts 
thoroughly so that they can perform them on
 their own. With Cyber Square kids have fun 
while they learn without frustrations.
    </p>
    <h1 className="flex ml-10 mt-10 items-center gap-2 px-4 py-2 text-2xl">
    <IoCheckmarkOutline className="size-10 font-bold"/>
    Professional teaching methods
    </h1>
    <p className="ml-26 mr-15 mb-20">
    We professionals at Cyber Square, have 
developed an in-depth understanding in how 
to teach kids and how to code. Moreover, we 
believe in exposing kids to real programming 
languages and professional tools.
    </p>
 </div>

 <div className="w-full bg-sky-50 rounded-md shadow py-4">
 <h1 className="ml-15 mt-15 flex text-4xl py-4 font-bold ">Payment </h1>
 <h1 className="flex ml-11 mt-10 items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    Space for creative ideas
    </h1>
    <h1 className="flex ml-11  items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    Engaging and fun curriculum
    </h1>
    <h1 className="flex ml-11 items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    Professional teaching methods
    </h1>
    <h1 className="flex ml-11 items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    Learn from AI & Data Science experts
    </h1>
    <h1 className="flex ml-11 items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    Courses by IIT, NIT, and IIM alumni
    </h1>
    <h1 className="flex ml-11 items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    UK certification upon completion
    </h1>
    <h1 className="flex ml-11 items-center gap-2 px-4 py-2 text-xl">
    <FaCircle className="size-3 font-bold text-primary"/>
    Personalized one-to-one training
    </h1>

    <Button className="ml-15 mt-15 w-45 h-15 text-1xl font-bold">
      Purchase Now
    </Button>

 </div>
</div>
</div>
  )
}

export default Payment

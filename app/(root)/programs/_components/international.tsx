/* eslint-disable react/no-unescaped-entities */
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

function International() {
  return (
  <div className='container mx-auto max-w-6xl py-24'>
  <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>
  International educational programs
  </h1>
  <p className='mx-auto max-w-xl text-center text-sm sm:text-base text-muted-foreground mt-4'>Al Muamalat Education`s international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.</p>
<div className="mt-15 gap-15 justify-center w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 text-black">
 
 <div className="w-full bg-sky-50 rounded-2xl py-4">
    <h1 className="flex justify-center text-2xl py-4 font-bold">What you’ll learn </h1>
    <p className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <IoCheckmarkDoneSharp className="size-10 font-bold"/>
    Gain a comprehensive understanding of Islamic finance principles and ethics.
    </p>
    <p className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <IoCheckmarkDoneSharp className="size-10 font-bold"/>
    Build a portfolio with 10+ real-world projects in Islamic financial services.
    </p>
    <p className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <IoCheckmarkDoneSharp className="size-10 font-bold"/>
    Learn to develop and manage Sharia-compliant financial products.
    </p>
    <p className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <IoCheckmarkDoneSharp className="size-10 font-bold"/>
    Master key concepts in Islamic banking, investment, and wealth management.
    </p>
    <p className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <IoCheckmarkDoneSharp className="size-10 font-bold"/>
    Understand the fundamentals of risk management in Islamic finance.
    </p>
    <p className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <IoCheckmarkDoneSharp className="size-10 font-bold"/>
    Develop skills to work as an Islamic finance consultant.
    </p>
 </div>

 <div className="w-full bg-sky-50 rounded-2xl py-4">
    <h1 className="flex justify-center text-2xl text-center py-4 font-bold">Why should you study at <br /> "AL-MUAMALAT"?</h1>
    <p className="ml-3 flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <FaCircle className="size-3"/>
    Lifetime access
    </p>
    <p className="ml-3 flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <FaCircle className="size-3"/>
    Video lessons
    </p>
    <p className="ml-3 flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <FaCircle className="size-3"/>
    Tests
    </p>
    <p className="ml-3 flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <FaCircle className="size-3"/>
    Projects
    </p>
    <p className="ml-3 flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <FaCircle className="size-3"/>
    Downloadable resources
    </p>
    <p className="ml-3 flex items-center gap-2 px-4 py-2 text-sm sm:text-base">
    <FaCircle className="size-3"/>
    Access via mobile device
    </p>
 </div>
</div>
</div>
  )
}

export default International


import { IoCaretDownSharp } from "react-icons/io5";

function Brief() {
  return (
  <div className='container mx-auto max-w-6xl py-24'>
  <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold'>
  Brief information about the course
  </h1>
<div className="mt-15 gap-15 justify-center w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
 
<div className="w-full py-5">
<h1 className="text-5xl flex flex-wrap text-primary">Videodarslar <IoCaretDownSharp className="mt-2 ml-2"/></h1>
<p className="text-2xl">Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.</p>
</div>

<div className="w-full py-5">
<h1 className="text-5xl flex flex-wrap text-primary">Tasks <IoCaretDownSharp className="mt-2 ml-2"/></h1>
<p className="text-2xl">Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.</p>
</div>

</div>
</div>
  )
}

export default Brief;

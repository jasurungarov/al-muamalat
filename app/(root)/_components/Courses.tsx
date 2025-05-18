import { Button } from '@/components/ui/button'
import { course } from '@/constants'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'


// components/Courses.tsx
export default function Courses() {
  return (
    <div className="max-w-6xl mx-auto mt-5 rounded-md px-6 py-6">
     <div className="relative mt-12">
  {/* Course Cards Scrollable Row */}
  <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}

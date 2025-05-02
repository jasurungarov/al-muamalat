// 'use client'

// import { useEffect, useState } from 'react'
// import Image from 'next/image'
// import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
// import { PiTelegramLogo } from 'react-icons/pi'
// import { motion } from 'framer-motion'
// import clsx from 'clsx'

// const experts = [
//   {
//     name: 'Dr. Mezbah Uddin Ahmed',
//     description:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
//     image: '/service/italo.png',
//   },
//   {
//     name: 'Dr. Mezbah Uddin Ahmed',
//     description:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
//     image: '/service/italo.png',
//   },
//   {
//     name: 'Dr. Mezbah Uddin Ahmed',
//     description:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
//     image: '/service/italo.png',
//   },
// ]

// export default function OurExporte() {
//   const [current, setCurrent] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % experts.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="container mx-auto w-full py-24">
//       <h1 className="text-center text-5xl font-bold">Our Expert Team</h1>
//       <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground mt-4">
//       Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
//       </p>

//       <div className="relative flex items-center justify-center mt-10 h-[350px]">
//         {experts.map((item, index) => {
//           const position = (index - current + experts.length) % experts.length

//           const scale = position === 0 ? 1 : 0.8
//           const blur = position === 0 ? 'blur-0' : 'blur-sm'
//           const zIndex = position === 0 ? 50 : 10
//           const offsetX = position === 1 ? 250 : position === 2 ? -250 : 0

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{
//                 opacity: 1,
//                 scale: scale,
//                 x: offsetX,
//               }}
//               transition={{ duration: 0.5 }}
//               className={clsx(
//                 'absolute w-[700px] rounded-2xl bg-[#d6e6e4] p-6 grid grid-cols-1 md:grid-cols-2',
//                 blur
//               )}
//               style={{ zIndex }}
//             >
//               <div className="flex flex-col items-center justify-center">
//                 <Image
//                   src={item.image}
//                   alt=""
//                   width={220}
//                   height={120}
//                   priority
//                   className="object-contain"
//                 />
//               </div>
//               <div className="mr-6 mt-9 text-black">
//                 <h2 className="lg:text-2xl font-bold mt-2">{item.name}</h2>
//                 <p className="mt-4">{item.description}</p>
//                 <div className="flex items-start justify-start mt-4 space-x-2">
//                   <PiTelegramLogo size={20} />
//                   <FiTwitter size={20} />
//                   <FiFacebook size={20} />
//                   <FiInstagram size={20} />
//                 </div>
//               </div>
//             </motion.div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { PiTelegramLogo } from 'react-icons/pi'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const experts = [
  {
    name: 'Dr. Mezbah Uddin Ahmed',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: '/service/italo.png',
  },
  {
    name: 'Dr. Mezbah Uddin Ahmed',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: '/service/italo.png',
  },
  {
    name: 'Dr. Mezbah Uddin Ahmed',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    image: '/service/italo.png',
  },
]

export default function OurExporte() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative container mx-auto w-full py-24">
      {/* 'relative' container qo‘shildi */}
      <h1 className="text-center text-5xl font-bold">Our Expert Team</h1>
      <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground mt-4">
        Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
      </p>

      <div className="relative flex items-center justify-center mt-10 h-[350px]">
        {experts.map((item, index) => {
          const position = (index - current + experts.length) % experts.length

          const scale = position === 0 ? 1 : 0.8
          const blur = position === 0 ? 'blur-0' : 'blur-sm'
          const pIndex = position === 0 ? 50 : 10
          const offsetX = position === 1 ? 250 : position === 2 ? -250 : 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: scale,
                x: offsetX,
              }}
              transition={{ duration: 0.5 }}
              className={clsx(
                'absolute w-[700px] rounded-2xl bg-[#d6e6e4] p-6 grid grid-cols-1 md:grid-cols-2',
                blur
              )}
              style={{ zIndex: pIndex }}
            >
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={item.image}
                  alt="Expert image"
                  width={220}
                  height={120}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="mr-6 mt-9 text-black">
                <h2 className="lg:text-2xl font-bold mt-2">{item.name}</h2>
                <p className="mt-4">{item.description}</p>
                <div className="flex items-start justify-start mt-4 space-x-2">
                  <PiTelegramLogo size={20} />
                  <FiTwitter size={20} />
                  <FiFacebook size={20} />
                  <FiInstagram size={20} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}


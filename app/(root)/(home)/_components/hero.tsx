'use client'

import { Button } from '@/components/ui/button'
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// } from '@/components/ui/carousel'
// import { companies } from '@/constants'
// import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegCalendarDays } from "react-icons/fa6";
// import Autoplay from 'embla-carousel-autoplay'

function Hero() {
	// const t = useTranslate()

	return (
		<>
		<div className='bg-primary w-full'>
			<div className='container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-32'>
				<div className='flex flex-col space-y-4 self-center'>
					<h1 className='mb-10 bg-white text-black rounded-md w-90 flex justify-center h-7'>Seeking Knowledge is an Obligation in Islam</h1>
					<h1 className='font-space-grotesk text-6xl font-bold'>
					Enhance Your 
					Understanding of Islamic 
					Ethics with<br/> Al-Muamalat</h1>
					
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div>
						<Link href={'/programs'}>
							<Button
							size={'lg'} className='bg-[#d28527] hover:bg-black text-white'>
								<p className='ml-0'>STUDENTS` OPNION</p>
							</Button>
							</Link>
							</div>
							<div className='mt-0.5 -ml-30'>
							<Image
								src={'/reviews.png'}
								alt='hero'
								width={170}
								height={150}
								/>
							</div>
					</div>
				</div>
				<div>
				<div>
					<div className="flex w-55 items-center space-x-4 bg-white/80 p-3 rounded-3xl mt-25">
  <FaRegCalendarDays className='ml-2 w-8 h-8 text-blue-500' />
  <p className="text-gray-800 font-semibold">
    <p className='font-bold'>250k</p>
    Assisted Student
  </p>
</div>

				<Image
					src={'/odam.png'}
					alt='hero'
					width={520}
					height={520}
					className='mb-5 ml-20'
				/>
				</div>
				</div>
			</div>
			</div>
		</>
	)
}

export default Hero

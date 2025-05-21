import React from 'react'
import Hero from './_components/hero'
import OurService from './_components/ourservice'
import OurExporte from './_components/ourexport'
import OurMedia from './_components/ourmedia'
import OurPartners from './_components/ourpartners'
import Students from './_components/students'
import Frequently from './_components/frequently'

function Page() {
  return (
    <>
    <div className='w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      <Hero/>
      <OurService/>
      <OurExporte/>
      <OurPartners/>
      <OurMedia/>
      <Students/>
      <Frequently/>
    </div>
    </>
  )
}

export default Page

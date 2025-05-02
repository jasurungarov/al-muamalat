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
      <Hero/>
      <OurService/>
      <OurExporte/>
      <OurPartners/>
      <OurMedia/>
      <Students/>
      <Frequently/>
    </>
  )
}

export default Page

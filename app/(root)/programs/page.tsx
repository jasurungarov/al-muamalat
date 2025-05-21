import React from 'react'
import Brief from './_components/brief'
import International from './_components/international'
import Most from './_components/most'
import Payment from './_components/payment'
import Service from './_components/service'

function page() {
  return (
    <>
    <div className='w-full px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto'>
      <International/>
      <Brief/>
      <Most/>
      <Payment/>
      <Service/>
    </div>
    </>
  )
}

export default page

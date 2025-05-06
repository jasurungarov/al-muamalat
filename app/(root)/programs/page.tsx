import React from 'react'
import Brief from './_components/brief'
import International from './_components/international'
import Most from './_components/most'
import Payment from './_components/payment'
import Service from './_components/service'

function page() {
  return (
    <>
      <International/>
      <Brief/>
      <Most/>
      <Payment/>
      <Service/>
    </>
  )
}

export default page

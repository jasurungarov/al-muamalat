'use client'


import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/constants'
// import useTranslate from '@/hooks/use-translate'
import Image from 'next/image'
import Link from 'next/link'
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

function Footer() {
  const [active, setActive] = useState(false);
  const [agreed, setAgreed] = React.useState(false);
	// const t = useTranslate()

	return (
<>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center h-screen px-6 sm:px-4 md:ml-50">

  {/* Birinchi katta div */}
  <div className="text-[#d28527] w-full flex flex-col justify-center gap-6">
    <div className="bg-amber-100 h-[360px] p-6 rounded-lg shadow-md flex flex-col justify-center">
      <h1 className="text-3xl sm:text-2xl font-creteRound font-bold mb-4">
        Workshops and Spiritual Development
      </h1>
      <p className="leading-relaxed text-sm sm:text-base">
        Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life.
      </p>
    </div>
  </div>

  {/* Ikkinchi katta div */}
  <div className="grid sm:grid-cols-1 md:gap-4 w-full">
    <div className="w-full">
      <h1 className="text-4xl sm:text-3xl mt-2 font-creteRound font-bold md:text-5xl">Free consultation</h1>
      <p className="sm:text-sm text-base md:max-w-90">Leave your phone number, and we will reach out to provide you with complete information about our courses.</p>
    </div>

    <Input
      className="w-full sm:w-90 col-span-2 mt-4 sm:mt-2"
      placeholder="Name"
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />

    <Input
      className="w-full sm:w-90 col-span-2 mt-4 sm:mt-2"
      placeholder="Select your Country"
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />

    <div className="flex items-center gap-2 sm:mt-4 mt-2">
      <Checkbox
        id="terms"
        checked={agreed}
        onCheckedChange={(checked) => setAgreed(!!checked)}
      />
      <p className="text-sm text-muted-foreground sm:w-full md:max-w-90">
        I agree to the use of my personal information for consultation purposes.
      </p>
    </div>

    <Button
      size="lg"
      variant={active ? "default" : "outline"}
      className="w-full sm:w-90 col-span-2 mt-4 sm:mt-2"
    >
      Submit
    </Button>
  </div>
</div>

  {/* Footer */}
  <div className="mt-12 bg-primary pt-12 max-md:px-4">
    <div className="container mx-auto max-w-7xl pb-12">
      <div className="grid md:space-y-8">
        <div className="flex justify-center items-center space-x-2">
          <Image alt="logo" src="/Group 14.png" width={30} height={30} />
          <p className="font-bold text-white">Dior <br /> Design</p>
        </div>

        <div className="flex justify-center items-center space-x-4">
          {navLinks.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className="text-white transition-all hover:text-black hover:underline space-x-2"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="text-white flex justify-center items-center space-x-3">
          <FiYoutube size={20} />
          <FiTwitter size={20} />
          <FiFacebook size={20} />
          <FiInstagram size={20} />
          <div className="flex flex-col space-y-1">
            <Separator className="dark:bg-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        <Separator className="mb-3 bg-white" />
        <p className="text-center text-white">
          Copyright Ungarov Studio 2025. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</>

	)
}

export default Footer

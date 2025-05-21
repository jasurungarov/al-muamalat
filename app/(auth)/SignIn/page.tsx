"use client"

import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import React, { useState } from 'react'


function Auth() {
  const [active, setActive] = useState(false)
  const router = useRouter();

  return (
  <>
  <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-2 items-center h-screen max-md:px-4 max-md:py-8 md:ml-20">
   <div className="flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh] mb-0 ml-30 max-md:ml-0 max-md:items-center max-md:text-center">
  
  <div className='flex items-center gap-4 max-md:flex-col max-md:gap-2'>
    <Logo />
    <div className='flex items-center gap-2 ml-20 max-md:ml-0'>
      <div>
        <h1 className='font-space-grotesk text-lg max-md:text-base'>Questions?</h1>
        <h1 className='font-space-grotesk text-1xl font-bold text-primary max-md:text-lg'>Ask Diyor</h1>
      </div>
      <Image
        src={"/diyor.png"}
        alt="question"
        width={70}
        height={70}
      />
    </div>
  </div>
<form action=" ">
  <div className='grid max-md:grid-cols-1 grid-cols-2 md:gap-4 w-full max-md:w-full max-md:px-4'>
    <h1 className="text-5xl mt-2 max-md:text-3xl font-creteRound font-bold">Get Started</h1>

    <Input
      id="email"
      type="email"
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
      placeholder='Your Email Address'
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
    <Input
      id="name"
      type="text"
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
      placeholder='Password'
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
    <Button
      size={'lg'}
      variant={active ? 'default' : 'outline'}
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
    >
      <User2 className='w-4 h-4 me-2 flex-center'/>
      <span>Sign In</span>
    </Button>

    <h1 className='font-creteRound flex justify-center underline text-primary ml-18 max-md:ml-0 max-md:text-center'
       onClick={() => router.push('/Modals')} 
    >
      Create a new account!
    </h1>
  </div>
  </form>
</div>

<div className='flex-col space-y-2 items-center justify-center w-120 h-140 bg-primary mr-auto rounded-2xl hidden md:flex'>
  <Image
    src={"/sign.png"}
    alt='sign'
    width={250}
    height={450}
    className="justify-self-center"
  />
  <h1 className='font-creteRound text-2xl font-bold mt-10 text-center text-white'>
    Welcome to Al Muamalat – <br/> Empowering Your Journey in<br/> Islamic Finance
  </h1>
</div>
</div>

</>
  );
}

export default Auth
"use client"

import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import React, { useState } from 'react'

function RegisterModal() {
  const [active, setActive] = useState(false);
  const router = useRouter();

  return (
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

  <div className='grid max-md:grid-cols-1 md:gap-4 w-full max-md:w-full max-md:px-4'>
    <h1 className="text-5xl mt-2 font-creteRound font-bold max-md:text-3xl">Get Started</h1>

    <Input
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
      placeholder='Your Email address'
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
    <Input
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
      placeholder='Password'
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
    <Input
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
      placeholder='Select your Country'
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    />
    <Button
      size={'lg'}
      variant={active ? 'default' : 'outline'}
      className='w-90 col-span-2 max-md:w-full max-md:mt-2'
    >
      <User2 className='w-4 h-4 me-2 flex-center'/>
      <span>Log In</span>
    </Button>

    <h1 className='font-creteRound underline ml-15 max-md:ml-0 max-md:text-center'>
      Already have an account? <span className='text-primary underline font-bold cursor-pointer' onClick={() => router.push('/SignIn')}>Sign In</span>
    </h1>
  </div>
</div>

<div className='flex flex-col space-y-2 items-center justify-center w-120 h-140 bg-primary mr-auto rounded-2xl max-md:hidden'>
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


  );
}

export default RegisterModal;

"use client"

import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import React, { useState } from 'react'



function  RegisterModal() {
  const [active, setActive] = useState(false)
  const router = useRouter();

    // const registerModal = useRegisterModal();
    // const loginModal = useLoginModal();
  
    // const { data } = useSession();
    // console.log(data);
  
    // const onOpenRegisterModal = useCallback(() => {
    //   registerModal.onOpen();
    // }, [registerModal]);
  
    // const onOpenLoginModal = useCallback(() => {
    //   loginModal.onOpen();
    // }, [loginModal]);

  return (

  <>
  {/* <RegisterModal/> */}
  {/* <LoginModal /> */}

  <div className="grid grid-cols-1 ml-25 justify-center md:grid-cols-2 gap-2 items-center h-screen">

    <div className="flex flex-col justify-center ml-30 md:justify-between gap-6 h-full md:h-[70vh] mb-0">
      <div className='flex items-center gap-4'>
        <Logo/>
        <div className='flex items-center gap-2 ml-20'>
          <div>
         <h1 className='font-space-grotesk'>Questions?</h1>
        <h1 className='font-space-grotesk text-1xl font-bold text-primary'>Ask Diyor</h1>
          </div>
          <Image
          src={"/diyor.png"}
          alt="question"
          width={70}
          height={70}
          />
        </div>
      </div>
      <div className='grid max-md:grid-cols-1 md:gap-4 w-full'>
      <h1 className="text-5xl mt-2 max-md:text-3xl font-creteRound font-bold">Get Started 
      </h1>
      <Input
          className='w-90 col-span-2 max-md:mt-2'
          placeholder='Your Email address'
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <Input
          className='w-90 col-span-2 max-md:mt-2'
          placeholder='Password'
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <Input
          className='w-90 col-span-2 max-md:mt-2'
          placeholder='Select your Country'
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <Button
          size={'lg'}
          variant={active ? 'default' : 'outline'}
          className='w-90 col-span-2 max-md:mt-2'
        >
          <User2 className='w-4 h-4 me-2 flex-center'/>
          <span>Log In</span>
        </Button>
          <h1 className='font-creteRound underline ml-15'
        >Already have an account? <span className='text-primary underline text-bold' 
        onClick={() => router.push('/SignIn')} >Sign In</span></h1>
      </div>
      {/* <div className="w-full md:w-[60%]">
        <div className="flex flex-col space-y-2">
          <Button
            onClick={() => signIn("google")}
            label={
            <div className="flex gap-2 items-center justify-center">
                <FcGoogle />
                Sign up with Google
              </div>
            }
            fullWidth
          />
          <Button
            onClick={() => signIn("github")}
            label={
              <div className="flex gap-2 items-center justify-center">
                <AiFillGithub />
                Sign up with Github
              </div>
            }
            fullWidth
          />
          <div className="flex items-center justify-center">
            <div className="h-px bg-gray-700 w-1/2" />
            <p className="mx-4">or</p>
            <div className="h-px bg-gray-700 w-1/2" />
          </div>
          <Button
            label={"Create account"}
            fullWidth
            onClick={() => router.push('/Modals')} 
          />
          <div className="text-[10px] text-gray-400">
            By signing up, you agree to the{" "}
            <span className="text-sky-500">Terms of Service</span> and
            <span className="text-sky-500"> Privacy Policy</span>, including
            <span className="text-sky-500"> Cookie Use</span>.
          </div>
        </div>
      </div> */}
    </div>
    <div className='flex flex-col space-y-2 items-center justify-center w-120 h-140 bg-primary mr-auto rounded-2xl'>
    <Image
      src={"/sign.png"}
      alt='sign'
      width={250}
      height={450}
      className="justify-self-center hidden md:block"
    />
    <h1 className='font-creteRound justify-center text-2xl font-bold mt-10'>Welcome to Al Muamalat – <br/> Empowering Your Journey in<br/> Islamic Finance</h1>
    </div>
  </div>
</>
  );
}

export default RegisterModal
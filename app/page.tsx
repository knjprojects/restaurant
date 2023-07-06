'use client'
import './globals.css'
import React,{FormEvent,useEffect} from 'react'

import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import { getSession,useSession } from 'next-auth/react'
import { Session} from 'next-auth'

import { BsEmojiSmileUpsideDownFill,BsBodyText } from 'react-icons/bs'
//import Loading from '../components/loading';
import { useRouter } from 'next/navigation'

import {useAuthState,useCreateUserWithEmailAndPassword,useSignInWithEmailAndPassword,useSignOut } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { Carousel } from 'flowbite-react'

import { getDish, getDishes } from '../sanity/sanity_utils'

import famous from '../public/assets/img/famous.png'
import { Dish } from '../typings'
import Image from 'next/image'
import SanityCollection from '../components/SanityCollection'
import Intro from '../components/Intro'
import { Typewriter } from 'react-simple-typewriter'
import ReviewsComponent from '../components/maps/Reviews'
import Parallax from '../components/Parallax'
import Extras from '../components/Extras'
import { Fade ,Slide} from 'react-awesome-reveal'
import Welcome from '../components/Welcome'
import Sidebar from '../components/Sidebar'
import Upload from 'antd/es/upload/Upload'
import UploadImageToStorage from '../components/Upload'
import Widgets from '../components/Widgets'
export default function Home() {
  const words = ["Welcome", "to", "famous", "recipe"];
  
  return (
  <main className="min-h-screen min-w-screen sm:pt-4 pt-2 bg-yellow-300">
      <div className='relative top-0'>{ /**everything */}
        <Sidebar />
        <Welcome />
        <Widgets />
        <div className='sm:pl-24 pt-14 sm:pt-4 overflow-x-scroll'>
        <div className='flex flex-col'>
        <Intro />
        <div className='mt-16'>
         
          <section className='flex flex-col snap-center' id='section-1'>
           <Fade cascade>
              <Parallax />
            <ReviewsComponent />
            <UploadImageToStorage />
          </Fade>
          </section>
        </div>
        <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm flex flex-col p-24">
          <Extras/>
        </div>
        <div className='bg-famous z-10 flex flex-col lg:static lg:w-auto px-18 items-center justify-between'>
        </div>
      </div>
      <div className="px-20 bg-yellow-300 fixed bottom-0 left-0 right-0 py-2 z-10 w-200" id="logo">
      </div>
        </div>
      
    </div>
  </main>
  )
}



/**
 * <section className='flex flex-col snap-center' id='section-1'>
        <div className='sm:flex lg:grid-cols-2 justify-left content-end bg-yellow-300'>
          <p className='text-black'>Famous Recipe is a Canadian and Caribbean styled restaurant. Offering unique cuisines, customer service and just real good food. We are happy to announce that we are online and ready to take your orders!</p>
          <Image src={famous} alt='landingimage' className='lg:float-right p-3 sm:justify-left' width={100}  height={60}/>
          <div className='flex flex-2'>
            <ScrollLink href="#section-photo" className="text-black">
            <div className='flex flex-row space-x-2 m-3 bg-gray-100 rounded-md'>
              <ScrollLink className='text-center 'href='#section-photo' >More</ScrollLink>
              <ArrowDownCircleIcon color='#051C1AE6' />
            </div>
          </ScrollLink>
          </div>
        </div>
    
<div className='sm:flex sm:flex-col sm:space-y-2 lg:grid lg:space-x-4 text-center content-center place-content-center'>
          <p>We have a wide variety of cuisines doubles and pholourie to bbq, beef patties, bbq, fry rice, goat. </p>
          <Image src={famous} alt='landingimage' className='lg:float-right p-3 sm:justify-left' width={100}  height={60}/>
        </div>
      </section>
     
      <section id="gallery">

        
        <div className='flex'>
         
         
          
          <div>
            {dish ?
            <div>
              <p className='text-white bg-black'>{dish.cat }</p>
              <Image src={dish.image} alt='dish' width={100} height={ 100} />
          </div>
            : <></>}</div>
        
        </div>
        
        
      </section>
      <section id="contact">
      
        <div className='bg-yellow-300 mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          



            {dishes && data?.map((dish: Dish) => 
               (
                  <div className='bg-black text-center' key={dish.slug}>
                    <p className='text-white' >{
                  dish.slug}</p>
                 <Image src={dish.image} alt='dish' width={100} height={ 100} />
                  </div>
                )
                   
              ) 
              
                
                     }
          
        </div>
      </section>

        
       
     
     
         
        <p className='font-bold shadow-md shadow-red-300'>Contact details here</p>
        <div className='h-60 w-100 bg-green-400'>hey hey</div>
      <section className=''id='section-photo'>  <div className='h-60 w-full bg-red-300' id='section1'>ayo again</div>
        </section>

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        
      </div>
 */


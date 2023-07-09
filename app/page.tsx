'use client'
import './globals.css'
import React,{FormEvent} from 'react'

import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import { getSession,useSession } from 'next-auth/react'
import { Session} from 'next-auth'

import { BsEmojiSmileUpsideDownFill,BsBodyText } from 'react-icons/bs'
//import Loading from '../components/loading';
import { useRouter } from 'next/navigation'

import {useAuthState,useCreateUserWithEmailAndPassword,useSignInWithEmailAndPassword,useSignOut } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { getDish, getDishes } from '../sanity/sanity_utils'

import famous from '../public/assets/img/famous.png'
import { Dish } from '../typings'
import Image from 'next/image'
import SanityCollection from '../components/SanityCollection'
import Intro from '../components/Intro'
import { Typewriter } from 'react-simple-typewriter'
import ReviewsComponent from '../components/maps/Reviews'
import { Fade ,Slide} from 'react-awesome-reveal'
import Welcome from '../components/Welcome'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import NextJsCarousel from '../components/Carosel'
//

//import { Carousel } from '../components/Carousel'
export default function Home() {
  
  return (
  <main className="min-h-screen min-w-screen themed">
      <section className='relative top-0'>
       
        <Welcome />
        <div className='p-16 pt-14 md:pt-4 overflow-x-scroll '>
        <div className='flex flex-col'>
            <Intro />
            <div className = "min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-setup rounded-3xl" >
            <div className="flex h-40 w-full/2 bg-yellow-300 dark:bg-gray-600 rounded-md">
            </div>
      </div >
        <div className='mt-16'>
         
              <section className='flex flex-col snap-center' id='section-1'>
                
                <Fade cascade>
                  <ReviewsComponent />
                
                 
                </Fade>
                 <NextJsCarousel />
          </section>
        </div>
        </div>
        <div className="sm:px-20 themed fixed bottom-0 left-0 right-0 py-2 z-10 w-200" id="logo">
            
        </div>
      </div>
    </section>
   
  </main>
  )
}






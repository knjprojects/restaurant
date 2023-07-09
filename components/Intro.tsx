'use client'
import React from 'react'
import { Fade,Slide } from 'react-awesome-reveal'
type Props = {}
import Image from 'next/image'
import famous from "../public/assets/img/famous.png"
import SanityCollection from './SanityCollection'
const Intro = (props: Props) => {
  return (
    <div className='h-full flex flex-col sm:m-4 m-1 mt-12'>
        
        <div className='md:mt-26 mt-32 rounded-lg sm:flex lg:grid-cols-2 justify-left content-end themed space-x-2'>
               
               <Fade direction='up' triggerOnce>
        <h1 className='pb-12 rounded-2xl justify-center heading text-black dark:text-yellow-300 text-md sm:text-xl lg:text-2xl tracking-normal sm:tracking-wide font-light text'>Famous Recipe is a Canadian and Caribbean styled restaurant. Offering unique cuisines, customer service and just real good food. We are happy to announce that we are online and ready to take your orders!</h1>
          </Fade>
      </div>
    
    
      <Slide direction='up'>
        <h1 className='text-center heading text-red-500 py-10'>Daily Specials</h1>
        <SanityCollection/>
      </Slide>
    </div>
   
        
  )
}

export default Intro
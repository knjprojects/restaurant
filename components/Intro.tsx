'use client'
import React from 'react'
import { Fade,Slide } from 'react-awesome-reveal'
type Props = {}
import Image from 'next/image'
import famous from "../public/assets/img/famous.png"
import SanityCollection from './SanityCollection'
const Intro = (props: Props) => {
  return (
    <div className='h-full flex flex-col m-6'>
        
        <div className='md:pt-26 pt-32 rounded-lg sm:flex lg:grid-cols-2 justify-left content-end bg-yellow-300 space-x-2'>
               
               <Fade delay={1e3} damping={1e-1} triggerOnce>
        <h1 className=' text-black sm:text-xl text-md font-merienda font-semibold'>Famous Recipe is a Canadian and Caribbean styled restaurant. Offering unique cuisines, customer service and just real good food. We are happy to announce that we are online and ready to take your orders!</h1>
          </Fade>
      </div>
    
    
      <Slide>
        <SanityCollection/>
      </Slide>
    </div>
   
        
  )
}

export default Intro
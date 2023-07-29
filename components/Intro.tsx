'use client'
import React from 'react'
import { Fade,Slide } from 'react-awesome-reveal'
type Props = {}
import Image from 'next/image'
import famous from "../public/assets/img/famous.png"
import Opening from './Opening'
//import SanityCollection from './SanityCollection'

const Intro = (props: Props) => {
  return (
    <div className='h-full flex flex-col sm:m-4 m-1'>
        <section className='mt-32 sm:mt-36'>   <div className='rounded-lg sm:flex lg:grid-cols-2 justify-left content-end themed space-x-2'>
        <h1 className='p-6 lg:mx-14
         rounded-2xl justify-center text-black dark:text-yellow-300 text-md sm:text-xl lg:text-2xl tracking-normal sm:tracking-wide font-light text'>Famous Recipe is a Canadian and Caribbean styled restaurant. Offering unique cuisines, customer service and just real good food. We are happy to announce that we are online and ready to take your orders!</h1>
      </div>
      {/*<div className = "min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-venue rounded-3xl" >
              <div className="flex h-40 w-full/2 themed rounded-md">
              </div>
  </div >*/}
       <Opening /> 
    </section>
   
    
        
      
    </div>
   
        
  )
}

export default Intro
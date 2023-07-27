'use client'
import './globals.css'
import React,{FormEvent} from 'react'
import famous from '../public/assets/img/famous.png'
import logo from   '../public/assets/img/logo.png'
import Image from 'next/image'
import Intro from '../components/Intro'
import ReviewsComponent from '../components/maps/Reviews'
import Carosel from '../components/Carosel'
import AllDishes from '../components/AllDishes'
import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import HamburgerMenu from '../components/HamburgerMenu'
//import { Carousel } from '../components/Carousel'
export default function Home() {
  
  return (
  <main className="min-h-screen min-w-screen themed">
  
      
   
    <div className = "min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-landing rounded-3xl" >
              <div className="flex h-1 w-full themed rounded-md">
              <div className='my-60 flex relative h-full w-full justify-center items-center flex-col themed'>
                <Image width={300} height={300} src={famous} alt="Logo" className="w-auto rounded-xl h-20 sm:h-32 border-2 dark:border-gray-600 border-yellow-300" id='logo'/>
                <Image className='rounded-full overflow-hidden w-[24px] h-[24px]' src={logo} alt='logojhere' width={300} height={300} />
                <div className='themed mt-10 rounded-full justify-center'>
                <h1 className='welcome text-center m-6'>Welcome to Famous Recipe</h1>
                </div>
                
                 </div>
               
                
              </div>
            </div >
        <HamburgerMenu />
        <Welcome />
        
        
      <section className='w-full h-full'>
     
    

      
        <div className='pad pt-14 md:pt-4 overflow-x-scroll '>
          <div className='flex flex-col'>
            
            <Intro />
            
            <AllDishes />
            <div className = "min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-setup rounded-3xl" >
              <div className="flex h-40 w-full/2 themed rounded-md">
              </div>
            </div >
            <ReviewsComponent />
           
          </div>
        </div>
      </section>
      <section>
      <Carosel />
      </section>
      <section id='contact' className='pad'>
        {/*<Contact/>}*/}
      </section>
  </main>
  )
}






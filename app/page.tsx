'use client'
import './globals.css'
import React,{FormEvent} from 'react'
import famous from '../public/assets/img/famous.png'
import logo from   '../public/assets/img/logo.png'
import logodark from   '../public/assets/img/logodark.png'
import Image from 'next/image'
import Intro from '../components/Intro'
import ReviewsComponent from '../components/maps/Reviews'

import AllDishes from '../components/AllDishes'
import WelcomeBanner from '../components/WelcomeBanner'
import Contact from '../components/Contact'
import { useTheme } from 'next-themes'
import Gallery from '../components/Gallery'
import MenuDropDown from '../components/MenuDropDown'

//import { Carousel } from '../components/Carousel'
export default function Home() {
  const {theme,setTheme}=useTheme();
 

  
  return (//overflow-y-scroll scroll-smooth
  <main className="min-h-screen min-w-screen themed ">
   
  
      
    <section id='main' className='themed section'>
    <div className = "min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-landing rounded-3xl" >
              
              <div className='mt-16 md:mt-20 lg:mt-26 xl:mt-32 flex relative h-full w-full justify-center items-center flex-col overflow-hidden'>
              { theme == "dark"?
        <Image className='rounded-full light:hidden overflow-hidden mt-20 md:mt-30 lg:mt-40' src={logodark} alt='logohere' width={300} height={300} />: <Image className='dark:hidden rounded-full overflow-hidden mt-20 md:mt-30 lg:mt-40' src={logo} alt='logohere' width={300} height={300} />}
                
                <div className='flex-1 themed mt-10 rounded-full justify-center'>
                <h1 className='welcome m-4'>Welcome to Famous Recipe</h1>
                </div>
              </div>
            </div >
        <WelcomeBanner />
    </section>
    
        
      <section  id='intro' className='snap-proximity pad section min-h-screen min-w-screen'>
        <Intro />
      </section>
      <section className='snap-proximity pad'>
      <div className = "pt-24 min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-setup rounded-3xl" >
              <div className="flex w-full/2 rounded-md themed">
              </div>
            </div >
      </section>
      <section className='min-h-screen min-w-screen snap-proximity pad section'>
        <div className='md:pt-4'>
          <div className='flex flex-col'>
            
            {<AllDishes />}
          
          
          </div>
        </div>
      </section>
     
      <section id='reviews' className='snap-proximity pad'>
      {<ReviewsComponent />}
      </section>
      <section id='gallery' className='snap-proximity pad section'>
        {<Gallery />}
        {/** */} 
      </section>
      <section id='contact' className='section'>
        {/*contact not working properly, headlessui transition component givibng issues */}
        {/*<Contact/>*/}
      </section>
      <MenuDropDown/>
  </main>
  )
}






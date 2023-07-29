'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import famous from '../public/assets/img/famous.png'
type Props = {}
import HamburgerMenu from './HamburgerMenu'
import { Typewriter } from 'react-simple-typewriter'
const Welcome = (props: Props) => {
useEffect(() => {
    const handleScroll = () => {
      const logo = document.getElementById('logo');
      if (logo) {
        const scrollPosition = window.scrollY;
        logo.style.transform = `(translateX(12.5px), translateY(${scrollPosition * 0.5}px))`;
      }
    };
     window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
    let words = ['curry', 'stew', 'roti', 'choka','bbq','potato','bodi','alloopies','doubles']
    //other props-typeSpeed, deleteSpeed, delaySpeed, loop, cursor, cursorStyle, onLoppDone, onDelay, onDelete, cursorBlinking
  return (                  /**was sticky changed to fixed */
    <div className='justify-center fixed top-0 z-10 w-full'>
    
      <div className='space-x-2 flex flex-row justify-between themed w-full h-full items-center'>
        
        <div className='space-x-2 flex-1 flex flex-row sm:px-20 px-12'>
      
      <div className='flex flex-grow flex-1'>
      <p className='py-3 justify-left text-2xl sm:text-3xl font-rustic welcome m-2'>Famous Recipe
          </p>
          <p className='w-8'>
             <Typewriter words={words}   
                 loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
                  onLoopDone={() => { }}
                  onType={() => { }}
                
              
      />
          </p>
      </div>
     
     
    
          
          
         
       
        </div> 
      <div className='content-end'>  <HamburgerMenu /></div>
     
    
       
        {/*} <Image src={famous} alt="Logo" className="rounded-xl sm:mt-6 mt-4 h-16 sm:w-1/4 w-36  sm:float-right float-none justify-center border-2 dark:border-gray-600 border-yellow-300" id='logo'/>*/}
       
      </div>
    
      
    </div>
    
  )
}

export default Welcome
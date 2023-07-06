'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import famous from '../public/assets/img/famous.png'
type Props = {}
import {Typewriter} from 'react-simple-typewriter'
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
    let words = ['curry', 'stew', 'roti', 'choka']
    //other props-typeSpeed, deleteSpeed, delaySpeed, loop, cursor, cursorStyle, onLoppDone, onDelay, onDelete, cursorBlinking
  return (
    <div className='bg-yellow-300 min-w-screen justify-items-stretch pt-6 rounded-lg mb-4 fixed top-0 z-10 w-full'>
      <div className='flex sm:flex-row flex-col-reverse bg-yellow-300 h-full'>
        <div className='space-x-2 flex flex-col py-2 px-24'>
          <p className='text-black font-semibold justify-left font-merienda my-3'>Welcome to famous Recipe
          </p>
          <div className='flex flex-row left-0 justify-stretch space-x-3 sm:mt-2'>
            <p className=' font-semibold text-red-500'>We Serve:
            </p>
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
          </div>
          
        </div>
          
    
    
       
         <Image src={famous} alt="Logo" className="h-18 sm:w-1/4 md:h-20 mr-2 w-36  md:float-right lg:pb-52 justify-center sm:ml-28 ml-28" id='logo'/>
      
      </div>
      
    </div>
    
  )
}

export default Welcome
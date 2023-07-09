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
    let words = ['curry', 'stew', 'roti', 'choka','bbq','potato','bodi','alloopies','doubles']
    //other props-typeSpeed, deleteSpeed, delaySpeed, loop, cursor, cursorStyle, onLoppDone, onDelay, onDelete, cursorBlinking
  return (
    <div className='justify-items-stretch rounded-sm fixed z-20 w-full'>
      <div className='flex md:flex-row flex-col themed h-full items-center'>
                <Image src={famous} alt="Logo" className="m-3 rounded-xl w-auto h-20 sm:h-32  sm:float-right float-none justify-center border-2 dark:border-gray-600 border-yellow-300" id='logo'/>
        <div className='space-x-2 flex flex-row sm:px-20 px-12 pb-2'>
          <p className='py-3 justify-left dark:text-red-500 text-black text-2xl sm:text-3xl font-merienda'>Famous Recipe
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
          
          <div className='flex flex-row left-0 justify-between space-x-2 sm:mt-2 w-14'>
               
            {/*<h1 className='font-merienda heading text-red-500 h-20'>We Serve:
            </h1>

        
  */}
          </div>
          
        </div>
          
    
    
       
        {/*} <Image src={famous} alt="Logo" className="rounded-xl sm:mt-6 mt-4 h-16 sm:w-1/4 w-36  sm:float-right float-none justify-center border-2 dark:border-gray-600 border-yellow-300" id='logo'/>*/}

      </div>
      
    </div>
    
  )
}

export default Welcome
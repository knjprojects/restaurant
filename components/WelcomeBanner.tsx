'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import famous from '../public/assets/img/famous.png'
import logo from   '../public/assets/img/logo.png'
import logodark from   '../public/assets/img/logodark.png'
type Props = {}
import HamburgerMenu from './HamburgerMenu'
import { Typewriter } from 'react-simple-typewriter'


import { useTheme } from "next-themes";
import MenuDropDown from './MenuDropDown'
const WelcomeBanner = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;


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
        <div className='space-x-2 flex-1 flex flex-row justify-center'>
          <div className='flex flex-grow flex-1 pad h-14'>
            { theme == "dark"?
              <Image className='rounded-full light:hidden animate-spin' src={logodark} alt='logohere' width={60} height={50} />: <></>}
            <Image className='rounded-full dark:hidden animate-spin' src={logo} alt='logohere' width={60} height={50} />
            <p className='text-left justify-center text-2xl sm:text-3xl font-rustic welcome pt-3 '>Famous Recipe
            </p>
            <p className='w-8 text-white dark:text-red-600'>
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
      <div className='content-start padr flex flex-row'>  
      
      <HamburgerMenu /></div>
    </div>
  </div>
    
  )
}

export default WelcomeBanner
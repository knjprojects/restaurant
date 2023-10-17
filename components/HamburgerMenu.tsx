'use client'
import React,{ useState,useEffect } from 'react';
import ScrollLink from './mini/ScrollLink';

const Menus=()=>{
  const menus=[{
    text:"  Reviews", scroll:'#reviews'},
   { text:"Gallery", scroll:'#gallery'
  }]
  return(
    
  <>{
      menus.map((menu:any)=>{
        return(
        
            <ScrollLink className='bg-[#5f3f08f3] dark:bg-gray-800 rounded-3xl hover:animate-pulse flex justify-center w-full my-1 hover:scale-105'  key={menu} href={menu.scroll} onClick={()=>{}}>
              <p className='text-slate-50 dark:text-yellow-300 m-3 font-bariol text-right justify-center content-center responsive-small'>{menu.text}</p>
            </ScrollLink>
            
        
        );
      })
    }</>
  )
  ;
}
const HamburgerMenu = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-2 sticky z-20 justify-between w-full">
      {/* Hamburger menu for smaller screens */}
      <div className="flex lg:hidden right-4 text-center w-full">
        <button
          className="flex text"
          onClick={()=>{toggleMenu()}}
        >
          <svg
            className="h-6 w-6 text-white dark:text-yellow-300 justify-right font-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {isOpen? (
          <div className="absolute top-12 right-0 themed rounded-2xl shadow-lg py-2 px-4">
            {/*<a href="#" className="link">Home</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Services</a>
        <a href="#" className="link">Contact</a>*/}
        <Menus />
          </div>
        ): <></>}
      </div>
      {/* Horizontal Tabs Layout for larger screens */}
      <div className="hidden lg:flex-row lg:flex space-x-4 justify-self-auto rounded-3xl">
        <Menus />
      </div>
    </div>
  );
};
export default HamburgerMenu;
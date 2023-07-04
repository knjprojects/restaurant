'use client';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { FlagIcon,UserCircleIcon,PlayIcon,HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import AnimatedDropdown from "../../components/Dropdown";
import React,{useEffect, useState} from 'react'
import { imgClient } from '../../sanity/sanity_utils';

import { Disclosure } from '@headlessui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '../../utils/firebase';
import { useRouter } from 'next/navigation';
import { getDishes } from '../../sanity/sanity_utils';
import { Carousel } from 'flowbite-react'

//import ParallaxScroll from './WritingParallax'
import { useTheme } from "next-themes";


import ScrollLink from '../../components/ScrollLink';
import { Dish } from '../../typings';




 const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      // first prevent the default behavior
      e.preventDefault();
      // get the href and remove everything before the hash (#)
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      // get the element by id and use scrollIntoView
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    };

const Products = async () => {
 const [data, setData]: any = useState([]);
  useEffect(() => { 
    getDishes().then((data: Dish[]) => { 
    console.log(data)
    setData((data))
    return data;
    
  });
  },[])


  
  //const imageProps = useNextSanityImage(imgClient, mySanityData.image);
 // const [user,loading,error]=useAuthState(auth);
  //const [user,setUser]:any=useState();  
  //const [sanityData,setSanity]:any=useState([]);
  //const [category,setCat]=useState('all');
  //&& slug.current == $id][0]//first example with the id
  

  const productIcons:any = [
    { keyword: 'Home', page: '/' ,icon:HomeIcon},
    { keyword: 'Flag', page: '/profile', icon:FlagIcon},
    { keyword: 'Play', page: '/settings',icon:PlayIcon },
    { keyword: 'rating',componentType: 'slider', icon:UserCircleIcon}
    // Add more header icons as needed
  ];
    


  
    




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing
          <code className="font-mono font-bold">app/page.tsx</code>
        </p></div>
     
      <div className='bg-gradient-to-br from-yellow-300 to-black flex'>
        <p className='text-white'>yoo</p>
      </div>
 </main>
  )
}
  

export default Products
  
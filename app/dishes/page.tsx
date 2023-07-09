'use client';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { FlagIcon,UserCircleIcon,PlayIcon,HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import AnimatedDropdown from "../../components/Dropdown";
import React,{useEffect, useState} from 'react'


import { Disclosure } from '@headlessui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '../../utils/firebase';
import { useRouter } from 'next/navigation';


//import ParallaxScroll from './WritingParallax'
import { useTheme } from "next-themes";


import ScrollLink from '../../components/ScrollLink';
import { Dish } from '../../typings';
import { Slide } from 'react-awesome-reveal';
import ItemCard from '../../components/Item';
import { getDishes,getDishesbyCategory } from '../../sanity/sanity_utils';
import { useCartStore } from '../../zustand/cart.store';
import AllDishes from '../../components/AllDishes';
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

const Dishes = async () => {
  let zus= useCartStore()
 


  
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
    <main className="full items-center justify-between p-24">
      <h1 className='heading'>Browse our menu</h1>
      <AllDishes />
       <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
       
       </div>
      
 </main>
  )
}
  

export default Dishes
  
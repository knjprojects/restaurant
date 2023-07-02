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

import { Suspense } from 'react'

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

const Products = async ({ mySanityData }: any) => {
  const [dishes, setDishes]:any = useState([]);
  await getDishes().then((data) => { setDishes(data)});
  


  
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
    <div className='bg-white h-screen top-0 sticky'>
      {
        dishes && <p>we have dishes data</p>
      }
        <p> We are testing todos(drag and drop) right now</p>
       <p>or maybe testing upstash n zustand state management but first lets test our sanity database n then test some react gui components
       </p>
       <Link href={`/products/product?name=potato`}> 
    <button>Potato</button>
      </Link>
      <section>
      
      </section>
        <div className='sm:w-32 bg-red-300 h-20 m-3 rounded-md hover:scale-110 hover:w-52 animate-pulse hover:h-96 flex-col'>
            <ScrollLink href='#section-2'>Lik</ScrollLink>
        </div>
     
   
    </div>
  )
}
  

export default Products
  
'use client'
import React,{FormEvent} from 'react'
import './globals.css'

import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import { getSession,useSession } from 'next-auth/react'
import { Session} from 'next-auth'

import { BsEmojiSmileUpsideDownFill,BsBodyText } from 'react-icons/bs'
//import Loading from '../components/loading';
import { useRouter } from 'next/navigation'
type Props = {
  session:Session
}



import {useAuthState,useCreateUserWithEmailAndPassword,useSignInWithEmailAndPassword,useSignOut } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { Carousel } from 'flowbite-react'
import ScrollLink from '../components/ScrollLink'

import Navbar from "../components/Navbar"
import famous from '../public/assets/img/famous.jpeg'
import data from "../utils/lib/data/data.json"
import { useAuthStore } from '../zustand/auth.store'
import { useCartStore } from '../zustand/cart.store'
import TextHover from '../components/TextHover'
import Image from 'next/image'
import Parallax from '../components/Parallax'
const Home= ({params}:{params:{session:Session}}) => {//our page / tsx file conflicts with 
  //const {signUp,signOut,loadingOut,user,userSign,loadingSign,errorSign,signInWithEmailAndPassword}=myAuth();
  //let cart=useCartStore()
  //let auth=useAuthStore();

  /*if(userSign!==null){
    const route=useRouter();
    route.push('/home')
    return <Loading />
  }*/
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
  window.scrollTo({
    top:elem?.getBoundingClientRect().top,
    behavior:'smooth'
  })
  
};
  return (
    <div className="sticky bg-[url('/assets/img/bg.png')] snap-y snap-mandatory h-screen w-screen overflow-scroll scroll-m-1 scroll-p-1">
      
      <div className='surround mt-40'>
        <p className='text-black font-bold font-merienda'>
          Welcome to Famous Recipe
        </p>
        <section id='section-0' className='h-48 text-center'>
          <Parallax />
          <div className='overflow-hidden'>

          </div>
         
          <img src='/assets/img/featured3.png' alt='homeimage' width={150} height={100} className='lg:float-right sm:grid shadow-md shadow-amber-300 pl-2' />
           <p className='text-black bg-gray-50 lg:text-center sm:text-left lg: w-1/2 sm:w-full'>
            {`tjdchhhhhhhhhhhhhhhhhgfffffffffffffffffffft`}
            </p>
        </section>
      </div>
      <section className='flex flex-col snap-center' id='section-1'>
        <div className='sm:flex lg:grid lg:grid-cols-3 justify-right content-end bg-yellow-300'>
          <p className='text-black'>Famous Recipe is a Canadian and Caribbean styled restaurant. Offering unique cuisines, customer service and just real good food. We are happy to announce that we are online and ready to take your orders!</p>
          <Image src={famous} alt='landingimage' className='lg:float-right p-3 sm:justify-left' width={100}  height={40}/>
          <div className='flex flex-2'> <ScrollLink href="#section-photo" className="text-black">
            <div className='flex flex-row space-x-2 m-3 bg-gray-100 rounded-md'>
              <ScrollLink className='text-center 'href='#section-photo' >More</ScrollLink>
              <ArrowDownCircleIcon color='#051C1AE6' />
          </div>
          </ScrollLink>
          </div>
        </div>
        {/*<TextHover image='' text='this is a texthover'/>*/}
        
        <Link href='/products?search=currychicken'> Lets view he first dish on sanity</Link>
         <div className='flex flex-grow'>
         <ScrollLink className="text-purple-300 font-bold" href="#section-1">
            More
        </ScrollLink>
          <BsBodyText color='#49D5D5' />
          </div>

      </section>
     
      <section id="gallery">
         <section id="contact">
        <div className='surround'>
          <p className='font-bold shadow-md shadow-red-300'>Contact details here</p>
        </div>
      </section>
        
   </section>
         

        
       
      {/* add href with hash to an elementId */}
     
         
        
        <div className='h-60 w-100 bg-green-400'>hey hey</div>
      <section className=''id='section-photo'>  <div className='h-60 w-full bg-red-300' id='section1'>ayo again</div>
        </section>
      
        
        <div
        className="grid place-content-center min-h-screen bg-gray-100"
        id="section-1"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Section 1</h2>

          <h2>CartList</h2>
         
        </div>
      </div>
    </div>
   
   
  
  )}
  

export default Home





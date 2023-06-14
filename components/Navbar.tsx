"use client";
import {Candal} from "next/font/google"
import styles from "../styles/Navbar.module.css";
//import telephone from "../public/img/telephone.png"
import React, { useState,useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//import { SpringContext } from 'react-spring';
import { AppDispatch, AppState } from '../store/redux/store'
import { useSelector, useDispatch } from 'react-redux'
import AnimatedDropdown from "./Dropdown";
import {
    BellIcon,
    ChevronDownIcon,
    HomeIcon,
    ChatBubbleBottomCenterIcon,
    ViewColumnsIcon,
    FlagIcon,
    PlayCircleIcon,
    ShoppingCartIcon,
    UserGroupIcon,
//notice the 24!!!!!!
} from '@heroicons/react/24/solid';

import {
    PlayIcon,
    MagnifyingGlassIcon,
    //ShoppingCartIcon
} from "@heroicons/react/24/outline"
import HeaderIcon from '../components/HeaderIcon'
import {signIn} from 'next-auth/react'
//import Login from './Login'
//import { Loader } from '../Index';
import { signOut, useSession } from 'next-auth/react';

import { SessionProvider } from 'next-auth/react'
type Props = {}


const candal=Candal({
  weight: '400',  
  style: ['normal'],
subsets: ['latin'],  
display: 'swap',})
const Navbar = () => {
  const ref=useRef();
  const handleRefClick=()=>{
    //ref?.current.scrollIntoView
  }
    const session=useSession();
   // if(!session return <login>)
    const User=session.data?.user;//this is the session data
   // const isAuthenticated=session.status;//are we even authenticated tho?
   //const dispatch=useDispatch<AppDispatch>();
 const activeTab=useState(0);
   const generateHeaders=async()=>{
    
   }
   /*function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }(*/
   let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

   //const headerIcons=generateHeaders
   const headerIcons:any = [
    { keyword: 'Home', page: '/' ,icon:HomeIcon},
    { keyword: 'About', page: '/profile', icon:FlagIcon},
    { keyword: 'Play', page: '/settings',icon:PlayIcon },
    { keyword: 'Group',page: '/groups', icon:UserGroupIcon}
    // Add more header icons as needed
  ];
 
 
  const loggeduser=useSelector((state:AppState)=>state.auth.auth.authUser)
  const active=useState(loggeduser)
  return (
    <div className="sticky top-0 z-50 ">
      
   
  

      <div className='sticky top-0 z-50 bg-orange-200 flex items-center p-2 lg:px-5 shadow-2-xl rounded-full'>
    {/* left*/} 
            <div className='headerleft'>
            <Image src="/../public/img/logo.png" alt="logo here" width={300} height={100}
        className='w-36 md:w-56 pb-10 md:pb-0 object-contain' />
        <p className={candal.className}>Famous</p>
               {/*} <Image src="https://firebasestorage.googleapis.com/v0/b/facebook-983c4.appspot.com/o/brain.jpeg?alt=media&token=117b1744-92ba-4ef5-90ea-f4937ede5f79" alt='image'
    
                height={40}  width={40} className='rounded-full shadow-xl shadow-yellow-200'/>  */}
                <div className='flex flex-3 items-center rounded-full bg-gray-200 p-2'>
                  <form className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-md md:flex-initial"> <MagnifyingGlassIcon className='h-6 text-gray-600' />
                    <input  className='text-black hidden sm:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink sm:w-18 md:w-20'
                    type="text" placeholder='Search Facebook'/>
                    <button>Search</button>
                    </form>
                   
                </div>
            </div>
            {/* center*/} 
            <div className='flex justify-center items-start flex-grow'>
            
    
                    <div className='headerMiddleTab'>
                
                   {/*
                    <HeaderIcon active Icon={HomeIcon} className='headericon' />
                    <HeaderIcon Icon={FlagIcon} className='headericon'/>
                    <HeaderIcon Icon={PlayIcon} className='headericon'/>
                    <HeaderIcon Icon={ShoppingCartIcon} className='headericon'/>
                    <HeaderIcon Icon={UserGroupIcon}className='headericon' />*/
                    } 
                   {/** */
                    headerIcons?.map(({keyword,page, icon}:any)=>{
                        return ( <Link key={keyword} href={{pathname:page,query:keyword}} className='bg-gray-300 text-black text-center'>{page}
                             {
                             <HeaderIcon key={keyword} Icon={icon} className="headericon" /> }
                        </Link>);
                    })
                   }
                </div>
              {/**   </SpringContext>*/}
            </div>
            {/* right*/} 
            <div className='flex sm:space-x-1 justify-end items-center flex-shrink'>
               
                <div className='flex bg-gray-200 rounded-full cursor-pointer highlight md:h-7'>
                     {/*image and name button */}
                {/*profile pic here */}
                { User?.image && <Image className='rounded-full shadow-2xl shadow-black' onClick={()=>signOut()} src={User.image} alt='signOut'  width={35} height={28}/>}
                {
                    !User && <Image className='shadow-white animate-spin' onClick={()=>signIn()} src={'https://cdn-icons-png.flaticon.com/512/5087/5087579.png'}  alt='signIn'
                    width={40} height={30}/>
                }
                {/* */}
                <p className='my-auto items-center font-bold cursor-pointer text-center text-sm flex-shrink hidden lg:inline-flex md:h-2 xl:h-4 h-2'>
                    {User? User.name:'Guest'}
                </p>
    
                </div>
                
                <ChatBubbleBottomCenterIcon className='icon'/>
                <ViewColumnsIcon className='icon'/>
                <BellIcon className='icon'/>
                <ChevronDownIcon className='icon' onClick={()=>{}}/>
                <AnimatedDropdown />
            </div>
            <div className={styles.callButton}>
          <Image src="/../public/img/telephone.png" alt="" width="32" height="32" />
        </div>
      </div>
    </div>
       
    
  );
};

export default Navbar;
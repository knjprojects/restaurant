"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//import { SpringContext } from 'react-spring';
import { AppDispatch, AppState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
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

type Props = {}

const MyHeader = (props: Props) => {
    const session=useSession();
   // if(!session return <login>)
    const User=session.data?.user;//this is the session data
   // const isAuthenticated=session.status;//are we even authenticated tho?
   const dispatch=useDispatch<AppDispatch>();
 const activeTab=useState(0);
   const generateHeaders=async()=>{
    
   }
   //const headerIcons=generateHeaders
   const headerIcons:any = [
    { keyword: 'Home', page: '/' ,icon:HomeIcon},
    { keyword: 'Flag', page: '/profile', icon:FlagIcon},
    { keyword: 'Play', page: '/settings',icon:PlayIcon },
    { keyword: 'Group',page: '/groups', icon:UserGroupIcon}
    // Add more header icons as needed
  ];
  const loggeduser=useSelector((state:AppState)=>state.auth.auth.authUser)
  const active=useState(loggeduser)
return (
    <div className='sticky top-0 z-50 bg-orange-200 flex items-center p-2 lg:px-5 shadow-2-xl rounded-full'>
{/* left*/} 
        <div className='headerleft'>

            <Image src="https://firebasestorage.googleapis.com/v0/b/facebook-983c4.appspot.com/o/brain.jpeg?alt=media&token=117b1744-92ba-4ef5-90ea-f4937ede5f79" alt='image'

            height={40}  width={40} className='rounded-full shadow-xl shadow-yellow-200'/>
            <div className='flex ml-2 items-center rounded-full bg-gray-200 p-2'>
                <MagnifyingGlassIcon className='h-6 text-gray-600' />
                <input  className='hidden sm:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink sm:w-25'
                type="text" placeholder='Search Facebook'/>
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
                    return ( <Link key={keyword} href={page} className='text-black' onClick={()=>{}}>bro
                         {
                         <HeaderIcon key={keyword} Icon={icon} className="headericon" /> }
                    </Link>);
                   
                   
                })
               }
            </div>
          {/**   </SpringContext>*/}
        </div>
        {/* right*/} 
        <div className='flex sm:space-x-2 justify-end items-center flex-shrink'>
           
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
            <ChevronDownIcon className='icon'/>
        </div>
        
        </div>
);
        }
//remove squre otline - outline-none
//transparent background - bg-transparent
//change text color of input - placeholder-gray-500
//as much space as possible - flex-grow
//no wrapping  whitespace-nowrap
//hide a div as we hrink the screen - hidden md:inline-flex
//instead of creating an entire component for our styled icons, lets create our own tailwindcss  called ICON!
export default MyHeader;

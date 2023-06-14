"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
//import { SpringContext } from 'react-spring';
import { AppDispatch, AppState } from '../store/redux/store'
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
    ComputerDesktopIcon
    //ShoppingCartIcon
} from "@heroicons/react/24/outline"
import HeaderIcon from './HeaderIcon'
import {signIn} from 'next-auth/react'
//import Login from './Login'
//import { Loader } from '../Index';
import { signOut, useSession } from 'next-auth/react';
import { Dvr } from '@mui/icons-material';
import TextHover from './TextHover';
type Props = {}

const TopBG = (props: Props) => {
    const {data,status}=useSession();
   
   
    const User=data?.user!;
    //this is the session data
   // const isAuthenticated=session.status;//are we even authenticated tho?
  const loggeduser=useSelector((state:AppState)=>state.auth.auth.authUser)
  const active=useState(loggeduser)
  if (User?.email) {
    return (
      <>
      <div className='flex flex-col text-black '>  Signed in as {User?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
       
        </div>
        <TextHover image='https://i.pinimg.com/564x/38/c8/6e/38c86eb987d1ab5cbb969507eb4c6589.jpg' text='Bullllarrrman' />
      
      </>
    )
  }
return (
    <div className='bg-orange-200 flex items-center p-2 lg:px-5 shadow-2-xl rounded-full'>
        { }
        <div className='flex flex-row'>
          <p className='text-black'>Not signed in, try again</p>
          
          <form> 
          <ComputerDesktopIcon />
          <button onClick={()=>{signIn()}}></button>
         
          </form>
         
        </div>
        </div>
    
);}
//remove squre otline - outline-none
//transparent background - bg-transparent
//change text color of input - placeholder-gray-500
//as much space as possible - flex-grow
//no wrapping  whitespace-nowrap
//hide a div as we hrink the screen - hidden md:inline-flex
//instead of creating an entire component for our styled icons, lets create our own tailwindcss  called ICON!
export default TopBG;

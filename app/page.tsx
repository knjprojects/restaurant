'use client'
import React,{useEffect,useRef, useState,FormEvent} from 'react'
import './globals.css'
import Header from './Header'

//import { SessionProvider } from "next-auth/react"

import { getSession,useSession } from 'next-auth/react'
import { Session} from 'next-auth'
/*import type { AppProps } from 'next/app'

*/
import { BsEmojiSmileUpsideDownFill } from 'react-icons/bs'
//adding firebase auth
import Login from '../components/Login';

import {auth,db} from '../utils/firebase'

import Home  from '../app/home/page'
import Loading from '../components/loading';
import { useRouter } from 'next/navigation'
type Props = {
  session:Session
}


import { useAuthStore } from '../store/zustand/auth.store'
import Discloshas from '../components/Disclosures'

//import useAuth from './auth/useAuth'
//import { Auth, getAuth, User } from 'firebase/auth'
import {useAuthState,useCreateUserWithEmailAndPassword,useSignInWithEmailAndPassword,useSignOut } from 'react-firebase-hooks/auth'
import myAuth from './auth/myAuth'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { Carousel } from 'flowbite-react'
const Main= ({params}:{params:{session:Session}}) => {//our page / tsx file conflicts with 




  const {signUp,signOut,loadingOut,user,userSign,loadingSign,errorSign,signInWithEmailAndPassword}=myAuth();

   let auth=useAuthStore();
   //const [user,load,err]=useAuthState(auth)

 /*const [
  createUserWithEmailAndPassword,//a function i call to initiate registration, just good copding practise i guess, i return all 4 values
  userDetails,
  loading,
  error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [
    signInWithEmailAndPassword,
    userSign,
    loadingSign,
    errorSign,
    ] = useSignInWithEmailAndPassword(auth);
   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
   */
  const [arr,SetArr]=useState([]);
    useEffect(()=>{
       // dispatch(fetchAsyncData())
    // useAuth();

    },[])
/*if(loading) return <Loading />
if(!user)return <Login />
else */
const getMapData=async({param}:any)=>{
  let data=[];
  try {
    await fetch(`${param}`).then((res)=>{
      return res.json();
    })
  } catch (error) {
    
  }
}
type DiscMap={
  buttonData:string;
  panelData:string;
}
type PropData=
  
{
    map:DiscMap[],
    type:string,
    theme:string
  }
const[propData,setPropData]:any =useState({map:[],type:'grid',theme:'rest'})
const route=useRouter();
//route.push('/home')
if(userSign!==null){

  //return <Loading />
}
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
  return (
    <div className='sticky bg-[#fff444] text-black'>
     <Link onClick={handleScroll} href="#section-1">Dropdown link to section</Link>
      
       <p>
        {auth.user.displayName}
        
        yes it works lol, migrate all my redux code to zustand
       </p>
       <button className='text-white' onClick={()=>signInWithEmailAndPassword('iluvwendy99@gmail.com','123456')} >Press me to sign in</button>
       <Discloshas  {...propData} />
       {

       }
       {user?<p>user found, auth initiated</p>:<>No user found before logging in?</>}
       {loadingSign? <p>Loading user auth...</p> :<BsEmojiSmileUpsideDownFill />
       }
        
          <div className='flex flex-row columns-2 sm:space-x-2 lg:space-x-4'> {user || userSign? 
          <p className='text-white'>
          {user?.email}
          </p>:
          <p>user loggedout</p>
        
          
}{
  userSign?<div className='waiting'>
    <p>Congrats youre being logged in rn, taking too long?</p>
  </div>:<></>
}
</div>
         
<button onClick={()=>signOut()} >Click me to logout</button>
        
        <div className='flex flex-row h-20'>

          <img src="/img/online/live.png" alt="nani?" className='float-right' width={200} height={120} />
          <p className=''>bro?</p>
          {loadingOut? <p className='text-black'>Signing you out</p>:<></>
          }
        </div>
       
          {/* add href with hash to an elementId */}
          <Link className="btn" href="#section-1">
            Scroll to Section 1
          </Link>
        
        <div className='h-60 w-100 bg-green-400'>hey hey</div>
        <div className='h-60 w-full bg-red-300' id='section1'>ayo again</div>
        <div
        className="grid place-content-center min-h-screen bg-gray-100"
        id="section-1"
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl my-2">Section 1</h2>
          <Link className="btn" href="home/#section-1">
            Back to hdropdown
          </Link>
        </div>
      </div>
    </div>
  
  )}
  

export default Main





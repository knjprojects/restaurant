'use client'
import React,{useEffect,useRef, useState} from 'react'
import './globals.css'
import Header from './Header'

//import { SessionProvider } from "next-auth/react"

import { getSession } from 'next-auth/react'
import { Session } from 'next-auth'
/*import type { AppProps } from 'next/app'

*/
import { BsEmojiSmileUpsideDownFill } from 'react-icons/bs'
//adding firebase auth
import Login from '../components/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth,db} from '../utils/firebase'
import Home  from './home/page'
import Loading from '../components/loading';

type Props = {
  session:Session
}

import { setCat } from '../redux/features/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncData } from '../redux/features/cartSlice'
import { AppDispatch, AppState } from '../redux/store'
const Main= ({params}:{params:{session:Session}}) => {//our page / tsx file conflicts with 
   
 //const {user,loading} = useAuthState()//is thre a auser?
 
 const [loading,setLoading]=useState(false)
 const userRef = useRef(false);
const getUser=async()=>{
    
  }
 const { auth } = useSelector(
  (state: AppState) => state.auth
);
  const getdinosaurs=async()=>{
    const dinosaurs:any=fetch('dinosaursurl')
    return dinosaurs.data;
  }


  const dispatch=useDispatch<AppDispatch>()//type we exported from the store
  
  const loggeduser=useSelector((state:AppState)=>state.auth.auth.authUser)
  const isCat =useSelector((state:AppState)=>state.auth.auth.cat)

  const members=useSelector((state:AppState)=>state.auth.members)
    console.log(members);
    /*useEffect(()=>{
        dispatch(fetchAsyncData())
    },[])*/
if(loading) return <Loading />
if(!loggeduser)return <Login />
else 
  return (
    <div className='sticky bg-[#fff444]'>
      <p>{loggeduser} PRESS HERE TO EDIT REDUX VALUES OF DOG AND CAT</p>
       <BsEmojiSmileUpsideDownFill onClick={()=>dispatch(setCat(!isCat))}>Click here</BsEmojiSmileUpsideDownFill>
       {isCat? <p>Redux works as cat is true</p>:<p>Does it work?</p>}
       <Home />
    </div>
  
  )}
  

export default Main





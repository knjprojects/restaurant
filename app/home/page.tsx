'use client'
import React,{useEffect,useRef, useState} from 'react'
import '../globals.css'
//import Header from './Header'
import Head from 'next/head'
//import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import About from '../../components/About'

import Link from 'next/link'//adding firebase auth
import Login from '../../components/Login.TilWinDStyledComponentstsx';
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth,db} from '../../utils/firebase'

import Loading from '../../components/loading';
//cimport { cleanRow } from '../../components/styledComponents';

import Featured from '../../components/Featured'
import PizzaList from '../../components/PizzaList'
import styles from '../../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncData } from '../../../backups/redux/features/cartSlice'
//import { AppDispatch, AppState } from '../../store/redux/store'
import Reviews from '../../components/maps/Reviews'
import Footer from '../../components/FooterTimer'

import { Carousel } from 'flowbite-react'
import { useRouter } from 'next/navigation'
//import ParallaxScroll from './WritingParallax'
import myAuth from '../auth/myAuth'
import { useTheme } from "next-themes";
import Products from '../products/page'
const Home= (/*{params}:{params:{session:Session}}*/) => {//our page / tsx file conflicts with 
  //const { theme, setTheme } = useTheme();
 /* const {signUp,signOut,loadingOut,user,userSign,loadingSign,errorSign,signInWithEmailAndPassword}=myAuth();
  if(!user){
    const route=useRouter();
    route.push("/")
  }*/
 /*const { auth } = useSelector(
  (state: AppState) => state.auth
);
  

*/
const [cat,setCat]:any=useState();
 //setCat(useSelector((state:AppState)=>state.auth.auth.cat))
  //const loggeduser=useSelector((state:AppState)=>state.auth.auth.authUser)
  //const dispatch=useDispatch<AppDispatch>()//type we exported from the store
 //if(loading) return <Loading />
 //if(!loggeduser)return <Login />
  
const handleChange=(value:string)=>{
  /*if(value==="sanity"){
    setTheme("dark");
    
  }
  else{
    setTheme("light");
    
  }*/
}
   // const members=useSelector((state:AppState)=>state.auth.members)
    //console.log(members);
    useEffect(()=>{
      //  dispatch(fetchAsyncData())
    },[])
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
  return (<>
  <div className='sticky flex flex-row'>
    
        <Head>
          <title>Restaurant In new York</title>  
          <meta name='desc' content='best pizza'/>
          <link rel='icon' href="/favicon.ico"/>
        </Head>
        <div className='sm:w-32 bg-red-300 h-20 m-3 rounded-md hover:scale-110 hover:w-52 animate-pulse hover:h-96 flex-col'>
            <Link onClick={handleScroll} href="#section-1">Dropdown link to section</Link>
        </div>
        <div id={""}>
        
      
        
        {/*add parallax scroll */}
       <div className={styles.container}>
       <Reviews/>

        
        <Featured/>
        <About />
        {/*<PizzaList />*/}
        <div id='section-1'>
        <Footer />
        </div>
       
        </div>
    </div>
    
    </div>
    
  </>
  )}
  

export default Home





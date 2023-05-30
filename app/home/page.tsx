'use client'
import React,{useEffect,useRef, useState} from 'react'
import '../globals.css'
//import Header from './Header'
import Head from 'next/head'
//import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"
import About from '../../components/About'

//adding firebase auth
import Login from '../../components/Login';
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth,db} from '../../utils/firebase'

import Loading from '../../components/loading';
import { cleanRow } from '../../components/styledComponents';

import Featured from '../../components/Featured'
import PizzaList from '../../components/PizzaList'
import styles from '../../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncData } from '../../redux/features/cartSlice'
import { AppDispatch, AppState } from '../../redux/store'
import Reviews from '../../components/maps/Reviews'
import Footer from '../../components/Footer'
const Home= (/*{params}:{params:{session:Session}}*/) => {//our page / tsx file conflicts with 
   
 //const {user,loading} = useAuthState()//is thre a auser?
 
 /*const [loading,setLoading]=useState(false)
 const userRef = useRef(false);
const getUser=async()=>{
    
  }
 const { auth } = useSelector(
  (state: AppState) => state.auth
);
  


*/

 const cat=useSelector((state:AppState)=>state.auth.auth.cat)
  const loggeduser=useSelector((state:AppState)=>state.auth.auth.authUser)
  const dispatch=useDispatch<AppDispatch>()//type we exported from the store
 //if(loading) return <Loading />
 //if(!loggeduser)return <Login />
 
    const members=useSelector((state:AppState)=>state.auth.members)
    console.log(members);
    //useEffect(()=>{
      //  dispatch(fetchAsyncData())
   // },[])
  return (<>
  <div className='flex flex-row'>
    <div className='sm:w-32 bg-red-300 h-20 m-3 rounded-md hover:scale-110 hover:w-52 animate-pulse hover:h-96'>Dropdown</div>
    <div id={""}>
        {cat? <p>Restaurant Site</p>
        : <p>Redux does not seem t be working</p>
        }
        <Reviews/>
       <div className={styles.container}>
      

        
        <Head>
          <title>Restaurant In new York</title>  
          <meta name='desc' content='best pizza'/>
          <link rel='icon' href="/favicon.ico"/>
        </Head>
        
        <Featured/>
        <About />
        {/*<PizzaList />*/}
        <Footer />
        </div>
    </div></div>
    
  </>
  )}
  

export default Home





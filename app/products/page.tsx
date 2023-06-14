"use client"
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { GetServerSideProps } from 'next';
import { FlagIcon,UserCircleIcon,PlayIcon,HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import AnimatedDropdown from "../../components/Dropdown";
import { Candal } from 'next/font/google';
import React,{useEffect, useState} from 'react'
import { client,imgClient } from '../../utils/sanity';


import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
type menuItem={
    id:string,
    title:string,
    description:string,
    price:number,
    imageUrl:string
}
type Props = {}
const candal=Candal({
    weight: '400',  
    style: ['normal'],
  subsets: ['latin'],  
  display: 'swap',})
const Products = ({mySanityData}:any) => {
  
  const imageProps = useNextSanityImage(imgClient, mySanityData.image);
 // const [user,loading,error]=useAuthState(auth);
  const [user,setUser]:any=useState();  
  const [sanityData,setSanity]:any=useState([]);
  const [category,setCat]=useState('all');
  //&& slug.current == $id][0]//first example with the id
  const sampleQuery=`*[_type == "menu" {
  title,address,description,slug{current},mainImage,
creator->{name}
}`
  const [query, setQuery]:any=useState(sampleQuery)
  const productIcons:any = [
    { keyword: 'Home', page: '/' ,icon:HomeIcon},
    { keyword: 'Flag', page: '/profile', icon:FlagIcon},
    { keyword: 'Play', page: '/settings',icon:PlayIcon },
    { keyword: 'rating',componentType: 'slider', icon:UserCircleIcon}
    // Add more header icons as needed
  ];
  const getSanityData=async(query:string)=>{
    const fetchConfig= {
      cache: 'force-cache',
      next: { revalidate: 60 }
    }
   //const collection=await 
   imgClient.fetch(query,fetchConfig).then((res:any)=>{
    setSanity(res);
   });
       //id:params?.id
     // });
     //above code utilizes id parameter to find only the array item with that id
    // return collection;
}
  //const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);

  

useEffect(()=>{
  getSanityData(sampleQuery);
  
  
},[
 query
])
  
    




  return (
    <div className={candal.className}>
      <Link href={""}></Link>
        <p> We are testing todos(drag and drop) right now</p>
       <p>or maybe testing upstash n zustand state management but first lets test our sanity database n then test some react gui components
       </p>
    
     <p>Accordian should be below</p>
      <p onClick={()=>{} } >Sign in with facebook</p>
      {user? <>
      <p className="Signed in yo"></p>
      </>:<></>}
       <div className='grid grid-cols-4'></div>
       <div>   {/*sanityData && sanityData.map((item:menuItem)=>{
        return(
            <div className='m-2 space-y-1 space-x-1 px-1 py-1' key={item?.id}>
                <p className='text-black font-bold'>{item.title}</p>
            </div>
        );
    })*/}</div>
 
    </div>
  )
}


export default Products
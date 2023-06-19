"use client"
import React, { useEffect, useState } from 'react'
import {client, urlFor} from "../../sanity/sanity"
type Props = {}
import { NFTCollection } from '../../typings'
const NFTCollections = (props: Props) => {
  /*const query=`*[_type == "collection" && slug.current == $id][0]{
    title,address,description,slug{current},mainImage,
  creator->{name}
  }`*/
  const query=`*[_type == "nft" {
    title,address,description,slug{current},mainImage,
  creator->{name}
  }`
  const [NFT,setNFT]=useState([]);
  

  const getData=async()=>{
    /*const collection=await client.fetch(query,{
      //id:params?.id
    });*/
    const collection=await client.fetch(query).then((data)=>{
      return data;
    })
   
    
  }
  useEffect(()=>{
    const data:any=getData
    setNFT(data)
    
  },[])
  return (
    <div className='flex flex-col'>
     <div className='flex flex-row space-x-2'>
      
     </div>
    </div>
  )
}

export default NFTCollections
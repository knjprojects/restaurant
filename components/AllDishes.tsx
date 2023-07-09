'use client';
import React,{useEffect,useState} from 'react'
import { getDishes,getDishesbyCategory } from '../sanity/sanity_utils';
import { Dish } from '../typings';
import Image from 'next/image';
import ItemCard from './Item';
import { useCartStore } from '../zustand/cart.store';
import famous from "../public/assets/img/famous.png"
import {Fade,Slide} from 'react-awesome-reveal'
import ReactPlaceholder from 'react-placeholder';
import ProductShimmer from './ProductShimmer';
const AllDishes = () => {

  let zus= useCartStore()
    const [data, setData]: any = useState([]);
    const [specialsData, setSpecials]: any = useState([]);
    const [appData, setApp]: any = useState([]);
    
  const GetZustand =  () => {
    return zus.tempOrder
  }
  
  useEffect(() => {
    GetZustand();
    
    getDishesbyCategory('specials').then((data: Dish[]) => { 
      console.log(data)
      //setZustand(data)
    setData((data))
    return data;
    });
    
  })

  
    
  return (
   
        
         
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        <Slide cascade direction='up'>
           {data ? data?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus)
                  
              );
          }
          )
              
              :  <ReactPlaceholder ready={data?false:true} customPlaceholder={ProductShimmer()}>
  <ProductShimmer />
</ReactPlaceholder>
        }
</Slide>
       </div>
      
    
  )
}

export default AllDishes
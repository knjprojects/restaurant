'use client';
import React,{useEffect,useState} from 'react'
import { getDishes } from '../sanity/sanity_utils';
import { Dish } from '../typings';
import Image from 'next/image';
import ItemCard from './Item';
import { useCartStore } from '../zustand/cart.store';
import famous from "../public/assets/img/famous.png"
import {Fade,Slide} from 'react-awesome-reveal'

const SanityCollection = () => {
  //const [data, setData]: any = useState([]);
  let zus= useCartStore()
  //const [zustand, setZustand]: any = useState([])
  const [data, setData]:any = useState([]);
  const GetZustand =  () => {
    
    return zus.tempOrder
   // return 
      //const zustan: any = zus.tempOrder;
  }
  
  useEffect(() => {
   GetZustand();
    getDishes().then((data: Dish[]) => { 
      console.log(data)
      //setZustand(data)
    setData((data))
    return data;
    });
    
  })

  
    
  return (
    <div>
        <div className='sm:flex sm:flex-col sm:space-y-2 lg:grid lg:space-x-4 text-center content-center place-content-center'>
            <p className='font-semibold text-black'>We have a wide variety of cuisines doubles and pholourie to bbq, beef patties, bbq, fry rice, goat. </p>

          </div>
         
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        <Slide cascade>
           {data ? data?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus)
                  
              );
          }
          )
              
              :  <p>add shimmer here</p>
        }
</Slide>
       </div>
      
    </div>
  )
}

export default SanityCollection
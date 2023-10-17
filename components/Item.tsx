'use client'
import React, { useEffect, useState } from 'react'
import { Dish } from '../typings'
import Image from 'next/image'
import { ChevronUpIcon} from '@heroicons/react/24/solid'
import { Disclosure ,Popover,Transition } from '@headlessui/react'
import { TempOrderState, useCartStore } from '../src/zustand/cart.store'

import Head from 'next/head'
const ItemCard = (dish: Dish,cart:TempOrderState,isCarosel:boolean) => {
    
   
    //const [zustandCart, setCart] = useState(useCartStore().tempOrder)
    const addToCart = async (dish:Dish) => { 
        //setCart([...zustandCart, dish])
        cart.addToTempOrder(dish)
        
    }
  
  //if(limit=='all')
  return ( //${isCarosel?'h-80':'h-64'}
        //overflow-hidden 
       <main className='h-full w-88 xl:w-96 justify-end'>  <div className='extras themed surround w-auto space-y-3 items-center flex flex-col justify-items-stretch' key={dish!.slug}>
      <Image
          src={dish?.image}
          alt="Dish"
          className={`object-center justify-center`}
          width={200 }
          height={ 200}
      />
        <div className="py-12 p-3 xl:p-6 w-full">
          <div className='flex flex-row'>
            <div className=''>
            <h3 className={`title font-rustic mt-2`}>{dish?.name}</h3>
            {dish.slug==='roti'?
            <p className='title font-rustic mt-2'>Meat Options: Goat, Chicken, Duck</p>
          : <></>
            }
            </div>
          
            {dish?.slug === 'frychicken' ?
              <p className='text mt-2'>{`(Friday)`}</p>
              :
              <></>
            }
            {dish?.slug === 'bbqchicken' ?
              <p className='text mt-2'>{`(Wednesday)`}</p>
              :
              <></>
            }
            
          </div>
         
        <p className="description font-bariol">
            { dish?.description}
        </p>
       
            <span className="pt-4 h-14 flex flex-row">
            
               <p className='text font-bariol price flex-1'>  {dish?.price/1.0}</p>
        
        
             </span>
             
           
        
      </div>
    </div></main>
    
   
                   
          
                
  )
}

export default ItemCard

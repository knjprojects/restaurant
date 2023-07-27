'use client'
import React, { useEffect, useState } from 'react'
import { Dish } from '../typings'
import Image from 'next/image'
import { ChevronUpIcon} from '@heroicons/react/24/solid'
import { Disclosure ,Popover,Transition } from '@headlessui/react'
import { TempOrderState, useCartStore } from '../zustand/cart.store'

const ItemCard = (dish: Dish,cart:TempOrderState,isCarosel:boolean) => {
    let caht = cart.tempOrder;
   
    //const [zustandCart, setCart] = useState(useCartStore().tempOrder)
    const addToCart = async (dish:Dish) => { 
        //setCart([...zustandCart, dish])
        cart.addToTempOrder(dish)
        
    }
  
  //if(limit=='all')
  return (
    
    <div className='p-3 extras themed surround overflow-hidden' key={dish!.slug}>
     
    
      <Image
          src={dish?.image}
          alt="Dish"
          className={`w-full ${isCarosel?'h-80':'h-40 sm:h-48'} object-cover object-center`}
          width={200 }
          height={ 200}
      />
        <div className="p-4 card">
          <div className='flex flex-row'>
          <h3 className={`text mb-2 ${isCarosel?'justify-center':'justify-left'}`}>{dish?.name}</h3>
            {dish?.slug === 'frychicken' ?
              <p className='text'>{`(Friday)`}</p>
              :
              <></>
            }
            {dish?.slug === 'bbqchicken' ?
              <p className='text'>{`(Wednesday)`}</p>
              :
              <></>
            }
            
          </div>
         
        <p className="cardtext h-full">
            { dish?.description}
        </p>
        {dish.slug==='roti'?
            <p className='text'>Meat Options: Goat, Chicken, Duck</p>
          : <></>
            }
            <span className="pt-4 h-14 flex flex-row">
            
               <p className='text flex-1'>  {dish?.price/1.0}</p>
        
        
             </span>
             
           
        
      </div>
    </div>
                   
          
                
  )
}

export default ItemCard
/** <button onClick={() => {
              addToCart(dish)
              
           }}  className="justify-right text-right flex-2 dark:hover:bg-yellow-600 bg-black dark:bg-yellow-500 hover:bg-yellow-400 dark:text-black text-yellow-300 rounded-md hover:text-red-500" >
            Add to Cart
            </button> */
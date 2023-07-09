'use client'
import React, { useEffect, useState } from 'react'
import { Dish } from '../typings'
import Image from 'next/image'
import { ChevronUpIcon} from '@heroicons/react/24/solid'
import { Disclosure ,Popover,Transition } from '@headlessui/react'
import { TempOrderState, useCartStore } from '../zustand/cart.store'

const ItemCard = (dish: Dish,cart:TempOrderState) => {
    let caht = cart.tempOrder;
   
    //const [zustandCart, setCart] = useState(useCartStore().tempOrder)
    const addToCart = async (dish:Dish) => { 
        //setCart([...zustandCart, dish])
        cart.addToTempOrder(dish)
        
    }
  
    
  return (
    
    <div className='overflow-hidden justify-center px-2' key={dish!.slug}>
       <div className="rounded-lg shadow-lg overflow-hidden themed">
      <img
        src={dish?.image}
        alt="Dish"
        className="w-full h-40 sm:h-48 object-cover object-center"
      />
        <div className="p-4 card">
          <div className='flex flex-row'>
            <h3 className="text mb-2">{dish?.name}</h3>
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
         
        <p className="cardtext h-32 sm:h-42">
            { dish?.description}
        </p>
     
            <span className="pt-4 h-14 flex flex-row">
            
               <p className='text flex-1'>  {dish?.price}</p>
        
        
              <button onClick={() => {
              addToCart(dish)
              
           }}  className="justify-right text-right flex-2 dark:hover:bg-yellow-600 bg-black dark:bg-yellow-500 hover:bg-yellow-400 dark:text-black text-yellow-300 rounded-md hover:text-red-500" >
            Add to Cart
            </button></span>
             
           
        
      </div>
    </div>
                   
          
                  </div>
  )
}

export default ItemCard
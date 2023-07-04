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
    
    <div className='overflow-hidden border-spacing-2 border-black justify-center px-2' key={dish!.slug}>
       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={dish?.image}
        alt="Dish"
        className="w-full h-40 object-cover object-center"
      />
      <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{ dish?.name}</h3>
        <p className="text-gray-700 mb-4">
            { dish?.description}
        </p>
        <div className="flex items-center justify-between">
            <span className="text-gray-900 font-bold">{dish?.price}</span>
          <button onClick={() => {
              addToCart(dish)
              
           }}  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
            Add to Cart
            </button>
             <Disclosure key={dish.slug}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className='text-black'>yo</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <Disclosure as="div" className={''}>
                  
                </Disclosure>
              { dish.description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        </div>
      </div>
    </div>
                   
          
                  </div>
  )
}

export default ItemCard
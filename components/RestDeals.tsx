import React from 'react'
import { Dish } from '../typings'
type Props = {
  //dishes:Dish[]
}
import { Disclosure } from '@headlessui/react'
import { getDishes } from '../sanity/sanity_utils'
const RestDeals = async(props: Props) => {
  const dishes=await getDishes()
  return (
    <div>
       {
        dishes?.map((dish:Dish) => { 
          return (
            <Disclosure key={dish.slug}>
      <Disclosure.Button className="py-2">
        {dish.name}
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
                {dish.description}
      
      </Disclosure.Panel>
    </Disclosure>
          );
   
        })}
    </div>
  )
}

export default RestDeals
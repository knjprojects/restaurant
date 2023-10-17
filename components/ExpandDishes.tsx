import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useMenuStore } from '../src/zustand/menu.store'
const ExpandDishes=({children}:any) =>{
  let store=useMenuStore();
  return (
    <div className="h-full w-full pt-16 flex justify-items-stretch">
      <div className="w-full rounded-3xl p-2">
        <Disclosure>
      
          {({ open }) => {
          //dont add code here
            return(

            <>
              <Disclosure.Button className="sticky top-0 z-10 extras flex w-full justify-center rounded-xl py-2 text-center text-sm 
              font-medium focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-75 dark:focus-visible:ring-yellow-300 ">
         
                <span className='hover:animate-pulse note font-rustic text-white dark:text-black w-full'>Browse our menu</span>
                {/*<ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />*/}
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 w-full">
               {children}
              </Disclosure.Panel>
            </>
          )}}
        </Disclosure>
       
      </div>
    </div>
  )
}
export default ExpandDishes
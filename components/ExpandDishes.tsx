import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const ExpandDishes=({children}:any) =>{
  return (
    <div className="w-full px-4 pt-16 flex h-full">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-center rounded-xl  px-4 py-2 text-center text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
         
                <span className='note'>Browse our menu</span>
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
          )}
        </Disclosure>
       
      </div>
    </div>
  )
}
export default ExpandDishes
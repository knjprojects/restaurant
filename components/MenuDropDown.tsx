import React,{Fragment,useState,useEffect} from 'react'

type Props = {}
import { Menu } from '@headlessui/react'
import { useMenuStore } from '../src/zustand/menu.store'
import { MdAssignmentReturn } from 'react-icons/md'



const MenuDropDown = (props: Props)  => {
    let store= useMenuStore();
    

    useEffect(()=>{
    
    })
return(
    <div> 
    <div className=' text-center flex justify-center flex-col fixed top-2 right-16 md:right-24 lg:right-1/4 z-20 items-center pr-1'>
        
             <Menu>
            <Menu.Button className="hover:scale-105 hover:animate-pulse ease-in-out rounded-xl themed w-32 opacity-75 h-12 text-black dark:text-yellow-300  border-[#422006] dark:border-red-600 border-4">{store.label}</Menu.Button>
            <Menu.Items className={`themed btntext rounded-3xl m-2`}>
              <Menu.Item >
                {({ active }) => (
                  <div className='m-1 hover:scale-105'>
                  <p onClick={()=>{
                  store.setMenu('specials')
                  store.setLabel('Specials')
                  }}
                  className={` ${active && 'themed-no-gr rounded-3xl dark:text-yellow-400'}`}
                  >
                  Specials
                  </p>
                  </div>
              )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                   <div className='m-1 hover:scale-105 '>
                  <p onClick={()=>{
                  store.setMenu('appetizers')
                  store.setLabel('Appetizers')
                  }}
                  className={`${active && 'themed-no-gr rounded-3xl dark:text-yellow-400'}`}
                  >
                  Appetizers
                  </p>
                  </div>
              )}
              </Menu.Item> 
              <Menu.Item>
                {({ active }) => (
                   <div className='m-1 hover:scale-105 '>
                  <p onClick={()=>{
                  store.setMenu('sides')
                  store.setLabel('Sides')
                  }}
                  className={`${active && 'themed-no-gr rounded-3xl dark:text-yellow-400'}`}
                  >
                Side Orders
                  </p></div>
              )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                   <div className='m-1 hover:scale-105 '>
                  <p onClick={()=>{
                  store.setMenu('curry')
                  store.setLabel('Curry')
                  }}
                  className={`${active && 'themed-no-gr rounded-3xl dark:text-yellow-400'}`}
                  >
                  Curry Dishes
                  </p></div>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                  <p onClick={()=>{
                      store.setMenu('westindian')
                      store.setLabel('West Indian')
                      }}
                  className={`${active && 'themed-no-gr rounded-3xl dark:text-yellow-400'}`}
                  >
                  West Indian
                  </p>
              )}
              </Menu.Item>
              
             
              <Menu.Item>
                {({ active }) => (
                   <div className='m-1 hover:scale-105'>
                  <p onClick={()=>{
                  store.setMenu('alloccassions')
                  store.setLabel('All Occassions')
                  }}
                  className={`${active && 'themed-no-gr rounded-3xl dark:text-yellow-400'}`}
                  >
                      For All Occassions
                  </p></div>
              )}
              </Menu.Item>
              
          </Menu.Items>
          </Menu>
          
        </div>
      </div>
   

    
    

    
)
}

export default MenuDropDown
//removed as={Fragment}
import React from 'react'
import Image from 'next/image'
import famous from '../public/assets/img/famous.png'
type Props = {}
import {Typewriter} from 'react-simple-typewriter'
const Welcome = (props: Props) => {

    let words = ['curry', 'stew', 'roti', 'choka']
    //other props-typeSpeed, deleteSpeed, delaySpeed, loop, cursor, cursorStyle, onLoppDone, onDelay, onDelete, cursorBlinking
  return (
    <div className='bg-yellow-300 min-w-screen justify-items-stretch pt-6 rounded-lg mb-4'>
      <div className='flex sm:flex-row flex-col-reverse bg-yellow-300 h-full'>
        <div className='sticky top-10 space-x-2 flex flex-col py-2 ml-28'>
          <p className='text-black font-semibold justify-left font-merienda my-3 z-20'>Welcome to famous Recipe
          </p>
          <div className='flex flex-row left-0 justify-stretch space-x-3 sm:mt-2'>
            <p className=' font-semibold text-red-500'>We Serve:
            </p>
            <Typewriter words={words}  
                 loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
                  onLoopDone={() => { }}
                  onType={() => { }}
      />
          </div>
          
        </div>
          
    
    
        <Image src={famous} alt="Logo" className="h-18 sm:w-1/3 md:h-20 mr-2 w-36  md:float-right lg:pb-52 justify-center sm:ml-28 ml-28" />
        <p className='rounded-xl fixed top-0 right-0 bg-yellow-300 border-red-500 border-2'>

        </p>
    </div>
      
    </div>
    
  )
}

export default Welcome
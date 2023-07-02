import React from 'react'

type Props = {}
import {Typewriter} from 'react-simple-typewriter'
const Welcome = (props: Props) => {

    let words = ['curry', 'stew', 'roti', 'choka']
    //other props-typeSpeed, deleteSpeed, delaySpeed, loop, cursor, cursorStyle, onLoppDone, onDelay, onDelete, cursorBlinking
  return (
      <div className='bg-yellow-200 text-center sm:w-20 md:w-28 lg:w-36 flex-row'>
          <p className='text-black font-semibold justify-center mx-2 m-3 font-merienda'>Welcome to famous Recipe</p>
              <Typewriter words={words} 
                 loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
                  onLoopDone={() => { }}
                  onType={() => { }}
              />
          
       
    </div>
  )
}

export default Welcome
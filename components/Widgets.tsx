import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

type Props = {}

const Widgets = (props: Props) => {
  return (
       <div className='top-1/2 sm:flex-row flex-col fixed sm:top-0 sm:right-0  bg-yellow-300 z-20 sm:w-26 rounded-xl'>
          <div className=" delay-[300ms] duration-[600ms] taos:[transform:translate3d(200px,0,0)_scale(1.2)] taos:opacity-0" data-taos-offset="400">
         
              <ThemeSwitcher />
          </div>
      </div>
  )
}

export default Widgets
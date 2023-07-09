import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { SocialIcon } from 'react-social-icons'
type Props = {}

const Widgets = (props: Props) => {
  return (
       <div className='hidden sm:inline sm:flex-row flex-col fixed sm:top-0 sm:right-0  themed z-20 sm:w-26 rounded-xl'>
          <div className=" delay-[300ms] duration-[600ms] taos:[transform:translate3d(200px,0,0)_scale(1.2)] taos:opacity-0" data-taos-offset="400">
        {/*<SocialIcon url="www.facebook.com/" color='#5160FF' aria-setsize={12} />*/}
              <ThemeSwitcher />
          </div>
      </div>
  )
}

export default Widgets
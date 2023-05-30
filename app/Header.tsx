import React from 'react'
import Link from 'next/link'
import MyHeader from './MyHeader'
import { SessionProvider } from 'next-auth/react'
type Props = {}
//import SideNavbar from '../components/Sidebar'
//i can put this header injside my layout.tsx instead of index
import styles from "../styles/Navbar.module.css"
const Header = (active: any) => {
  return (
      <header className='flex flex-col navHeaderRest'>
       {/* <div className='flex-row text-white space-x-11'>
          <div className='flex flex-row space-x-10 bg-blue-500 h-9'>
            <div className='flex flex-row space-x-5  text-white'>
              <Link href='/home' className=' text-white'>Restaurant</Link>
              <Link href='/spotify'  className=''>Spotify</Link>
              <Link href='/store' className=''>Store</Link>
            </div>
          <div className='text-white flex flex-1 text-right'>  <Link href='/port' className='text-right pl-11'>Joshua Bridgemohan?</Link></div>
          <div> 
          </div>
        </div>
      </div> */
      }
     <SessionProvider>  <MyHeader /></SessionProvider>
    
     
    </header>
  )
}

export default Header
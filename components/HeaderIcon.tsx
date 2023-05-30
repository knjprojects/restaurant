import React from 'react'
import Link from 'next/link';
import { FlagIcon,HomeIcon } from '@heroicons/react/24/solid';
type Props = {}

const HeaderIcon = ({Icon,active,key}:any) => {
    //adding the cursor to the div and not icon because we want a little background with our icon as well when we hover
    //add click effect active:
    //we group our headericons with similar hover code
    //by using group on the outer div and using the styling inside the component with group hover
    //change the icon color the same way we change text color
    //we chnage the css based on if its active from our prop, we set this initially from header
        return (

            <div className='flex items-center cursor-pointer md:hover:bg-gray-100 md:px-10 rounded-xl
            active:border-b-1 active:border-blue-400 group lg:flex-row'>
                {/*string interpolation to change css based on active prop */}
               <Icon className={`headericon
                ${active && "text-black"}
                `} />
               <h1 className='flex-1 text-black font-bold'>{key}</h1>
            </div>
          
        );
    
}

export default HeaderIcon
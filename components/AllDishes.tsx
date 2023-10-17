//'use client'
import React from "react"
import ExpandDishes from "./ExpandDishes"
import Menu from "./Menu"
const AllDishes = () => {
  return (
   
        
    <div className='mb-24 w-full h-full'>
        {<ExpandDishes>
          <Menu/>
  </ExpandDishes>}

     </div>
      
      
    
  )
}

export default AllDishes
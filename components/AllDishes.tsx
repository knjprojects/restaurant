'use client';
import React,{useEffect,useState} from 'react'
import { getDishes,getDishesbyCategory } from '../src/sanity/sanity_utils';
import { Dish } from '../typings';
import Image from 'next/image';
import ItemCard from './Item';
import { useCartStore } from '../src/zustand/cart.store';
import famous from "../public/assets/img/famous.png"
import {Fade,Slide} from 'react-awesome-reveal'
import ReactPlaceholder from 'react-placeholder';
import ProductShimmer from './special/ProductShimmer';
import ExpandDishes from './ExpandDishes';
const AllDishes = () => {
  let zus= useCartStore()
    //const [data, setData]: any = useState([]);
  const [specialsData, setSpecials]: any = useState([]);
  const [curryMeat,setCurryMeat]:any=useState([])
  const [curryVeggie,setCurryVeggie]:any=useState([])
  const [appetizers,setAppetizers]:any =useState([])
  const [westIndian,setWestIndian]:any=useState([])
  
    
  const GetZustand =  () => {
    return zus.tempOrder
  }
  
  /*const getAllDishes = async () => { 
    getDishes().then((data) => { 
      console.log(data)
      setData(data);
    })
  }*/
  const getSpecials = async () => { 
    //specials,appetizers,
    getDishesbyCategory('specials').then((data: Dish[]) => { 

      console.log(data)
    setSpecials((data))
  })}
  function separateArraysByCategory(initialArray:any) {
  return initialArray.reduce((result:any, currentValue:any) => {
    if (currentValue.type === "meat") {
      result[0].push(currentValue);
    } else result[1].push(currentValue); /*if (currentValue.category === "veggie") {
      
    }*/
    return result;
  }, [[], []]); // Initialize the result as an array with two empty arrays
}

  const getMeatandVeggieCurryDishes =()=>{
    getDishesbyCategory('curry').then((data:Dish[])=>{
      const [value1Array,value2Array] = separateArraysByCategory(data);
      setCurryMeat(value1Array);
      setCurryVeggie(value2Array);
    })
  }
  const getAppetizers=()=>{
    getDishesbyCategory('appetizer').then((data:Dish[])=>{
      setAppetizers(data)
    })
  }
  const getWestIndianDishes=()=>{
    getDishesbyCategory('westindian').then((data:Dish[])=>{
      setWestIndian(data)
    })
  }

  
    
  useEffect(() => {
    //GetZustand();
    getSpecials();
    getMeatandVeggieCurryDishes();
    getAppetizers();
    getWestIndianDishes();
  },[])

  
  const Menu=()=>{
    return (
      <div>
        <section className=' mt-24snap-x snap-center'>
       
        <h1 className='justify-center heading'>Specials (Bone-In)</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        
          {specialsData ? specialsData?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus,false)
              );
          }
          )
              
              :  <ReactPlaceholder ready={specialsData?false:true} customPlaceholder={ProductShimmer()}>
  <ProductShimmer />
</ReactPlaceholder>
        }

        </div>

        </section>
        <section className='snap-y mt-14'>
        <h1 className='justify-center heading'>Appetizers</h1>

      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        
          {appetizers ? appetizers?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus,false)
              );
          }
          )
              
              :  <ReactPlaceholder ready={appetizers?false:true} customPlaceholder={ProductShimmer()}>
    <ProductShimmer />
    </ReactPlaceholder>
        }
       
    </div>
    </section>
        <section className='snap-y snap-center mt-14'>
        <h1 className='heading'>Curry Dishes</h1>

        <h1 className='subheading'>Meat</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        
          {curryMeat ? curryMeat?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus,false)
              );
          }
          )
              
              :  <ReactPlaceholder ready={curryMeat?false:true} customPlaceholder={ProductShimmer()}>
    <ProductShimmer />
    </ReactPlaceholder>
        }
       
    </div>
    <h1 className='subheading'>Veggie</h1>
    <h1 className='note'>Any two mix of vegetarian dishes costs 10.50!</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        
          {curryVeggie ? curryVeggie?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus,false)
              );
          }
          )
              
              :  <ReactPlaceholder ready={curryVeggie?false:true} customPlaceholder={ProductShimmer()}>
    <ProductShimmer />
    </ReactPlaceholder>
        }
       
          
          
      
        </div>
        
    </section>
    
   
    <section>
        <h1 className='mt-14 justify-center heading'>West Indian</h1>

      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 justify-center'>
        
        
          {westIndian ? westIndian?.map((dish: Dish) => {
              return (
                  ItemCard(dish,zus,false)
              );
          }
          )
              
              :  <ReactPlaceholder ready={westIndian?false:true} customPlaceholder={ProductShimmer()}>
    <ProductShimmer />
    </ReactPlaceholder>
        }
       
    </div>
    </section>
      </div>
    )
    ;
  }




  return (
   
        
    <div className='mb-14 snap snap-mandatory w-full'>
        <ExpandDishes>
          <Menu/>
        </ExpandDishes>

     </div>
      
      
    
  )
}

export default AllDishes
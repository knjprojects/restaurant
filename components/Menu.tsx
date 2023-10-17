'use client';
  import React,{useEffect,useState} from 'react'
  import { getDishes,getDishesbyCategory } from '../src/sanity/sanity_utils';
  import { Dish } from '../typings';
  import Image from 'next/image';
  import ItemCard from './Item';
  import { useCartStore } from '../src/zustand/cart.store';
import { useMenuStore } from '../src/zustand/menu.store';
  import {Fade,Slide} from 'react-awesome-reveal'
  import ReactPlaceholder from 'react-placeholder';
  import ProductShimmer from './special/ProductShimmer';
  import ExpandDishes from './ExpandDishes';
  import { ChevronUpIcon} from '@heroicons/react/24/solid'
  //iconsand images

  import meat from '../public/assets/svg/Meat.png'
  import veggie from '../public/assets/svg/veggie.png'
import MenuDropDown from './MenuDropDown';
  const Menu=()=>{
    
    let zus= useCartStore()
    let store=useMenuStore();
    //const [data, setData]: any = useState([]);
  const [specialsData, setSpecials]: any = useState([]);
  const [curryMeat,setCurryMeat]:any=useState([])
  const [curryVeggie,setCurryVeggie]:any=useState([])
  const [appetizers,setAppetizers]:any =useState([])
  const [westIndian,setWestIndian]:any=useState([])
  const [sides,setSides]:any=useState([])
  const [allOccassions,setAllOccassions]:any=useState([])
  
    
  const GetZustand =  () => {
    return zus.tempOrder
  }
  
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
    getDishesbyCategory('appetizers').then((data:Dish[])=>{
      setAppetizers(data)
    })
  }
  const getSideOrders=()=>{
    getDishesbyCategory('sides').then((data:Dish[])=>{
      setSides(data)
    })
  }
  const getWestIndianDishes=()=>{
    getDishesbyCategory('westindian').then((data:Dish[])=>{
      setWestIndian(data)
    })
  }
  const getAllOccassions=()=>{
    getDishesbyCategory('alloccassions').then((data:Dish[])=>{
      setAllOccassions(data)
    })
  }

  
    
  useEffect(() => {
    //GetZustand();
    getSpecials();
    getSideOrders();
    getMeatandVeggieCurryDishes();
    getAppetizers();
    getWestIndianDishes();
    getAllOccassions();
  },[])

    return (
      <main className='snap snap-mandatory snap-center space-y-10'>
        <section className=' mt-24 snap-x snap-center'>
        
        
        <div className={`${store.menu=="specials" || store.menu=="all"?'flex flex-col':'hidden'}`}>
        <h1 className='heading'>Specials / Everyday</h1>
        <div className='gridify'>
        
        
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
        </div>
      

        </section>
        
        <section className='snap-y mt-14' id='appetizers'>
        <div className={`${store.menu=="appetizers" || store.menu=="all"?'flex flex-col':'hidden'}`}>
        <h1 className='heading'>Appetizers</h1>

      
<div className='gridify'>


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
        </div>
       
    </section>
    <section id='sideorders' className='mt-14 snap-y'>
    <div className={`${store.menu=="sides" || store.menu=="all"?'flex flex-col':'hidden'}`}>
    <h1 className='heading'>Side Orders</h1>
    
  

      
      <div className='gridify'>
        {sides ? sides?.map((dish: Dish) => {
            return (
                ItemCard(dish,zus,false)
            );
        }
        )
        :  <ReactPlaceholder ready={sides?false:true} customPlaceholder={ProductShimmer()}>
  <ProductShimmer />
</ReactPlaceholder>
}
      
</div>

      

    </div>
     
    </section>
        <section className='mt-14 snap-y' id='curry'>
        <div className={`${store.menu=="curry" || store.menu=="all"?'flex flex-col':'hidden'}`}>
        <h1 className='heading'>Curry Dishes</h1>


<div className='flex flex-col items-center'> 
<Image src={meat} alt='mesatimage' width={50} height={50} className='pb-3 justify-center w-32' />
<h1 className='subheading text-red-700'>Meat</h1>

</div>

<div className='gridify'>


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
<div className='flex flex-col items-center'>
<Image src={veggie} alt='eggplant image' width={50} height={50} className='pb-3 justify-center w-32' />
<h1 className='subheading text-green-400'>Veggie</h1>
</div>

<h1 className='note'>Any two mix of vegetarian dishes costs 12.50! and All meals Served with Potatoes</h1>
<div className='gridify'>


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
        </div>
       
        
    </section>
    
   
    <section id='westindian' className='mt-14 snap-y'>
    <div className={`${store.menu=="westindian" ||  store.menu=="all"?'flex flex-col':'hidden'}`}>
    <h1 className='heading'>West Indian</h1>
        <h1 className='note'>All meals served with rice potatoes and coleslaw</h1>

      
        <div className='gridify'>
        
        
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
    </div>
    </section>
    <section id='alloccassions' className='mt-14 snap-y'>
    <div className={`${store.menu=="alloccassions" || store.menu=="all"?'flex flex-col':'hidden'}`}>
    <h1 className='heading'>Meals For All Occassions</h1>
       

      
       <div className='gridify'>
       
       
         {allOccassions ? allOccassions?.map((dish: Dish) => {
             return (
                 ItemCard(dish,zus,false)
             );
         }
         )
             
             :  <ReactPlaceholder ready={allOccassions?false:true} customPlaceholder={ProductShimmer()}>
   <ProductShimmer />
   </ReactPlaceholder>
       }
       
   
  
   </div>
   <h1 className='note'>Call us for more catering needs!</h1>
    </div>
        
    </section>
      </main>
    )
    ;
  }
  export default Menu
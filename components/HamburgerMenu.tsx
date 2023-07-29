import { useState } from 'react';
import ScrollLink from './ScrollLink';


const Menus=()=>{
  const menus=[{
    text:"Gallery", scroll:'#carosel'},
   { text:"Contact", scroll:'#contact'
  }]
  return(
    <div className='lg:flex-row flex-col'>  {
      menus.map((menu:any)=>{
        return(
        
            <ScrollLink className='' key={menu} href={menu.scroll} onClick={()=>{}}>
              <p className='text'>{menu.text}</p>
            </ScrollLink>
            
        
        );
      })
    }</div>
  
  )
  ;
}
const HamburgerMenu = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-2 sticky z-20 justify-right text-right">
      {/* Hamburger menu for smaller screens */}
      <div className="flex lg:hidden absolute right-10 justify-right">
        <button
          className="block text-center text"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-gray-800 justify-right"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white rounded shadow-lg py-2 px-4">
            {/*<a href="#" className="link">Home</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Services</a>
        <a href="#" className="link">Contact</a>*/}
        <Menus />
          </div>
        )}
      </div>

      {/* Horizontal Tabs Layout for larger screens */}
      <div className="hidden lg:inline-flex flex-row absolute top-0 right-0 space-x-4 justify-self-auto">
        <Menus />
      </div>
    </div>
  );
};

export default HamburgerMenu;
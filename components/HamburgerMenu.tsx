import { useState } from 'react';
import ScrollLink from './ScrollLink';
/*const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    /
    <div className="fixed top-10 right-12 z-20 ">
      <button
        className="lg:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 text-gray-800"
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
        <div className="lg:hidden absolute top-12 right-0 bg-white rounded shadow-lg py-2 px-4">
          <a href="#" className="block text-gray-800 mb-2">Home</a>
          <a href="#" className="block text-gray-800 mb-2">About</a>
          <a href="#" className="block text-gray-800 mb-2">Services</a>
          <a href="#" className="block text-gray-800 mb-2">Contact add scroll links here</a>
        
    
        </div>
      )}
    </div>
    
  );
};

export default HamburgerMenu;*/

const Menus=()=>{
  const menus=[{
    text:"Home", scroll:'#contact'
  }]
  return(
    <div>  {
      menus.map((menu:any)=>{
        return(
        
            <ScrollLink className='sticky top-0 z-20' key={menu} href={menu.scroll} onClick={()=>{}}>
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
    <div className="flex-2 sticky top-0 right-10 z-20">
      {/* Hamburger menu for smaller screens */}
      <div className="lg:hidden absolute right-0 justify-center">
        <button
          className="block"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-gray-800"
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
      <div className="hidden lg:block absolute top-0 right-0 mt-4 mr-4 space-x-4">
        <Menus />
      </div>
    </div>
  );
};

export default HamburgerMenu;
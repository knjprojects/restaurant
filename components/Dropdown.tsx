import { useState } from 'react';
import { useRouter } from 'next/navigation';
const AnimatedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    'Settings',
    'Profile',
    'Cart',
    'Notifications',
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const animateItem = (item:any) => {
    // Add your desired animation logic for each menu item
    console.log(`Animating ${item}`);
  };
  const router=useRouter();
  return (
    <div className="relative">
      <div
        className={`w-10 h-10 rounded-full bg-orange-500 animate-bounce ${
          isOpen ? 'hidden' : ''
        }`}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="fixed top-12 right-0 w-40 p-2 bg-white rounded shadow">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                animateItem(item);
                  if(index==0){
                    router.push('/settings')
                  }
                }
              }
            >
              <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
              <span className='text-black font-bold' >{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedDropdown;

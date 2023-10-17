'use client'
import Image from "next/image";
import { AiOutlineHome,AiFillShopping } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight,MdShoppingBasket,MdDashboard } from "react-icons/md";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { useContext, useState } from "react";
import logo from '../public/assets/img/famous.png'
import { useRouter, useSearchParams,usePathname } from "next/navigation";
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
   
const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  }
];
import { useTabStore } from "../src/zustand/sidebar.store";
import ThemeSwitcher from "./ThemeSwitcher";
const Sidebar = () => {
  
  const router = useRouter();
  //router.push('/dashboard')
  

  //'/dashboard?foo=bar' ? 
  //searchParams.get('foo') = 'bar'
  const params = useSearchParams();
  
  
  //'/dashboard?foo=bar' ? 
  //search.get('/dashboard?foo=bar')
  //=would return "/dashboard"
  const search = usePathname();
  
  const tab = useTabStore();
  const[isCollapsed,setCollapse]=useState(tab.isCollapsed)
 
  
  return (
    <div className="fixed flex left-0 bottom-0 rounded-sm themed z-20 w-full h-10 md:h-12 lg:h-14">
     
      
        <ul className="rounded-3xl flex flex-row flex-grow justify-evenly themed">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
    
                <Link key={name}
                  className={`text-center justify-center sm:text-center items-center flex sm:flex-col  hover:dark:bg-gray-700  hover:bg-yellow-400 active:bg-red-400 font-bold rounded-lg w-12 sm:w-24 ${
                    search === href ? "duration-300 animate-pulse ease-in-out" : ""
                  }`}
                  href={href}
              > 
                <Icon size={24} className="text hover:animate-spin" />
             
                </Link>
              
            );
          }
            
        )}
        <span className="flex flex-row items-center text">
            <ThemeSwitcher />
        </span>
        </ul>
   
    { /*</aside>*/}
    </div>
  );
};

export default Sidebar;


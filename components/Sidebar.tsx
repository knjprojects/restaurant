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
import { useTabStore } from "../zustand/sidebar.store";
import ThemeSwitcher from "./ThemeSwitcher";
const Sidebar = () => {
  
  const router = useRouter();
  //const params = useSearchParams();
  const search = usePathname();// params.get('page')

  const tab = useTabStore();
  const[isCollapsed,setCollapse]=useState(tab.isCollapsed)
 
  
  return (
    <div className="fixed flex left-0 bottom-0 rounded-sm themed z-20 w-full h-14">
     
      
        <ul className="rounded-3xl flex flex-row flex-grow justify-evenly themed">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
    
                <Link key={name}
                  className={`text-center justify-center sm:text-center items-center flex sm:flex-col bg-yellow-300 hover:dark:bg-gray-700 dark:bg-gray-600 hover:bg-yellow-400 active:bg-red-400 font-bold rounded-lg w-12 sm:w-24 ${
                    search === href ? "duration-300 animate-pulse ease-in-out" : ""
                  }`}
                  href={href}
              > 
                <Icon size={24} className="text hover:animate-spin" />
             
                </Link>
              
            );
          }
            
        )}
        <span className="flex flex-row items-center themed text">
            <ThemeSwitcher />
        </span>
        </ul>
   
    { /*</aside>*/}
    </div>
  );
};

export default Sidebar;

/*
   {/* 
                 }
                  <span className="flex flex-grow items-center">  <Icon size={24} className="text" />
                    <p className="text text-center hidden">{name}</p>{/*removed sm-inline 
                 </span>
                  
*/
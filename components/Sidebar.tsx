import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight,MdShoppingBasket } from "react-icons/md";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { useContext, useState } from "react";
import logo from '../public/assets/img/famous.jpeg'
import { useRouter, useSearchParams,usePathname } from "next/navigation";
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
   
const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: BsPeople,
  },

  {
    name: "Cart",
    href: "/cart",
    icon: MdShoppingBasket,
  },
  {
    name: "Dishes",
    href: '/products',
    icon:Dish
  }

];
import { useTabStore } from "../zustand/sidebar.store";
import Dish from "./Dish";
const Sidebar = () => {
  const [categories,setCategories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })
  const router = useRouter();
  const params = useSearchParams();
  const search = usePathname();// params.get('page')

  const tab = useTabStore();
  const[isCollapsed,setCollapse]=useState(tab.isCollapsed)
 
  
  return (
    <div className="relative">
      <button className="btn" onClick={()=>{setCollapse(!isCollapsed)}}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src={logo}
            alt="logo"
          />
          <p className="sidebar__logo-name">The Brave Coders</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    search === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
   
      </aside>
    </div>
  );
};

export default Sidebar;
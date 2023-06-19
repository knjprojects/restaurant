import { createContext, useEffect, useState } from "react";


type SidebarProp=()=>{
isCollapsed:boolean
toggle:any

}
const initialValue= false ;
const SidebarContext = createContext({isCollapsed:initialValue,toggle:()=>{}});
const SidebarProvider = ({ children }:any) => {
   
  const [isCollapsed, setCollapse]:any = useState(initialValue);
  
  const toggleSidebarcollapse = () => {
    setCollapse(!isCollapsed);
   
  };
  //let initialValue = { isCollapsed: false,toggleSidebarcollapse };
  useEffect(()=>{
    
  },[])
  


  return (
    <SidebarContext.Provider value={{initialValue:initialValue,toggle:toggleSidebarcollapse}}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
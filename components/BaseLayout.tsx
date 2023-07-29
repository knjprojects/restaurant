import Footer from "./special/FooterTimer";

import Sidebar from "./Sidebar";
const BaseLayout = ({ children }:{ children: React.ReactNode}) => {
  return (
    
      <div className="w-full h-full themed relative">
      
               <Sidebar />
              {children}
          
    
        
        </div>
      
     
    
      
    
    
  );
};

export default BaseLayout;
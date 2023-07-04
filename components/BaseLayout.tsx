import Footer from "./FooterTimer";

import Sidebar from "./Sidebar";
const BaseLayout = ({ children }:{ children: React.ReactNode}) => {
  return (
    
      <div className="w-full h-full bg-yellow-300 relative">
      
        
              {children}
          
    
        
        </div>
      
     
    
      
    
    
  );
};

export default BaseLayout;
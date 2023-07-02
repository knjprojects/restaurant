import Footer from "./FooterTimer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const BaseLayout = ({ children }:{ children: React.ReactNode}) => {
  return (
    <>
      <div className="flex flex-row h-full w-full">
        
        <Sidebar />
      <main className="flex-grow">{children}</main>;
    </div>
      
    
    </>
  );
};

export default BaseLayout;
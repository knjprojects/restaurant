import Footer from "./FooterTimer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const BaseLayout = ({ children }:{ children: React.ReactNode}) => {
  return (
    <>
     <div className="layout">
      <Sidebar />
      <main className="layout__main-content">{children}</main>;
    </div>
    </>
  );
};

export default BaseLayout;
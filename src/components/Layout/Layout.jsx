import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-emerald-200">
        <Navbar />
        <div className="flex-1">
          {/* <div className="h-screen"></div> */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

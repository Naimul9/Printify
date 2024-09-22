import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import {Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>

            <Navbar/>
          <div>
          <Outlet/>
          </div>
            <Footer/>

        </div>
    );
};

export default MainLayout;
import React from "react";
import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Layout = () => {
    //outlet Display Child of Layout
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;
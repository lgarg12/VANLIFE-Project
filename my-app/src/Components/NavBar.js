import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div>
            <header className="flex justify-between p-8 bg-[#FFF7ED] items-center">
                <div className="text-4xl">
                    <Link to="/">#VANLIFE</Link>
                </div>
                <div className="flex gap-8 text-[#4D4D4D] text-2xl">
                    <Link to="/About">About</Link>
                    <Link to="/">Vans</Link>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default NavBar;
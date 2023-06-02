import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Vans from "../Pages/Vans";
import Sign from "../Pages/Sign";
import {MdOutlineAccountCircle} from "react-icons/md";
import Description from "../Pages/Description";

const NavBar = () => {
    return(
        <div>
            <header className="flex justify-between p-8 bg-[#FFF7ED] items-center">
                <div className="text-4xl">
                    <Link to="/">#VANLIFE</Link>
                </div>
                <div className="flex gap-8 text-[#4D4D4D] text-2xl items-center">
                    <Link to="/About">About</Link>
                    <Link to="/Vans">Vans</Link>
                    <Link to="/Sign"><MdOutlineAccountCircle/></Link>
                </div>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Vans" element={<Vans/>}/>
                <Route path="/Sign" element={<Sign/>}/>
                <Route path="/Description/:VanId" element={<Description/>}/>
            </Routes>
        </div>
    );
}

export default NavBar;
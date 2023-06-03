import React from "react";
import { Link } from "react-router-dom";
import {MdOutlineAccountCircle} from "react-icons/md";


const NavBar = () => {
    return(
        <div>
            <header className="flex justify-between p-8 bg-[#FFF7ED] items-center">
                <div className="text-4xl">
                    <Link to="/">#VANLIFE</Link>
                </div>
                <div className="flex gap-8 text-[#4D4D4D] text-2xl items-center">
                    <Link to="/Host">Host</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Vans">Vans</Link>
                    <Link to="/Sign"><MdOutlineAccountCircle/></Link>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
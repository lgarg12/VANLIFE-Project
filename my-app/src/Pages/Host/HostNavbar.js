import React from "react";
import { Link } from "react-router-dom";
const HostNavbar = () =>{
    return (
        <div className="bg-[#FFF7ED]">
            <div className=" flex gap-10 p-6 text-[#4D4D4D]">
                <Link className="hover:text-black hover:underline"  to="/Host/Dashboard">Dashboard</Link>
                <Link className="hover:text-black hover:underline" to="/Host/Income">Income</Link>
                <Link className="hover:text-black hover:underline" to="/Host/HostVans">Vans</Link>
                <Link className="hover:text-black hover:underline" to="/Host/Review">Review</Link>
            </div>
        </div>
    ); 
}

export default HostNavbar;
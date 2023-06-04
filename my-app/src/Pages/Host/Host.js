import React from "react";
import { Outlet, useLocation } from "react-router";
import HostNavbar from "./HostNavbar";
import { useNavigate } from "react-router";


const Host = () =>{
    
    return(
        <div>
            <HostNavbar/>
            <Outlet/>
        </div>
    );
}

export default Host
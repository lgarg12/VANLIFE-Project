import React from "react";
import { Outlet } from "react-router";
import HostNavbar from "./HostNavbar";
import { useNavigate } from "react-router";


const Host = () =>{
    const navigate = useNavigate();
  
    React.useEffect(() => {
        navigate("/Host/Dashboard"); // Redirect to /Host/Dashboard when /Host is accessed
    }, []);
    return(
        <div>
            <HostNavbar/>
            <Outlet/>
        </div>
    );
}

export default Host
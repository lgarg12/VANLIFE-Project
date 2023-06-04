import React from "react";
import { Link, useLocation ,useNavigate } from "react-router-dom";

const HostNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    React.useEffect(() => {
        if (location.pathname === "/Host") {
            navigate("/Host/Dashboard");
        } // Redirect to /Host/Dashboard when /Host is accessed
    }, [location.pathname]);

  return (
    <div className="bg-[#FFF7ED]">
      <div className="flex gap-10 p-6 text-[#4D4D4D]">
        <Link
          className={location.pathname === "/Host/Dashboard" ? "text-black underline" : "hover:text-black hover:underline"}
          to="/Host/Dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={location.pathname === "/Host/Income" ? "text-black underline" : "hover:text-black hover:underline"}
          to="/Host/Income"
        >
          Income
        </Link>
        <Link
          className={location.pathname === "/Host/HostVans" ? "text-black underline" : "hover:text-black hover:underline"}
          to="/Host/HostVans"
        >
          Vans
        </Link>
        <Link
          className={location.pathname === "/Host/Review" ? "text-black underline" : "hover:text-black hover:underline"}
          to="/Host/Review"
        >
          Review
        </Link>
      </div>
    </div>
  );
};

export default HostNavbar;

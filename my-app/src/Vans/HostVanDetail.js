import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import Data from "../Server/Data";
import { Link } from "react-router-dom";

const HostVanDetail = () => {
  const params = useParams();
  const { VanId } = params;
  const [res, setRes] = useState([]);

  useEffect(() => {
    setRes(Data.filter((data) => data.id === VanId));
  }, [VanId]);

  return (
    <div className="bg-[#FFF7ED] min-h-[550px]">
      <div className="bg-white w-9/12 mx-auto p-4 rounded-2xl flex flex-col gap-4">
        <div>
        {res.length > 0 ? (
            <div className="flex gap-4">
            <img src={res[0].imageUrl} alt="Car" width={300} className="rounded-2xl"/>
            <div className="flex flex-col pt-2 gap-4">
              <button className="bg-[#E17654] rounded-2xl p-3 text-white">{res[0].type}</button>
              <div className="font-bold text-2xl">{res[0].name}</div>
              <div className="flex items-center">
                <p className="font-medium text-2xl">${res[0].price}</p>
                <p>/day</p>
              </div>
            </div>
          </div>
        ) : (
            <div>No data found for VanId: {VanId}</div>
            )}
        </div>
        <div className="flex gap-4 text-[#4D4D4D]">
            <Link to={`/Host/HostVans/${VanId}/Details`}>Details</Link>
            <Link to={`/Host/HostVans/${VanId}/Pricing`}>Pricing</Link>
            <Link to={`/Host/HostVans/${VanId}/Photos`}>Photos</Link>
        </div>
      <Outlet/>
      </div>
    </div>
  );
};

export default HostVanDetail;
import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Data from "../Server/Data";

const HostVansPrice = () =>{
  const params = useParams();
  const { VanId } = params;
  const [res, setRes] = useState([]);

  useEffect(() => {
    setRes(Data.filter((data) => data.id === VanId));
  }, [VanId]);

  if (res.length === 0) {
    return <div>No data found for VanId: {VanId}</div>;
  }

  const { price } = res[0];
    return(
        <div className="flex items-center">
            <p className="font-bold text-2xl">${price}</p>
            <p>/day</p>
        </div>
    );
}

export default HostVansPrice;
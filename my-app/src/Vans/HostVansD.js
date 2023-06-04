import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Data from "../Server/Data";

const HostVansD = () => {
  const params = useParams();
  const { VanId } = params;
  const [res, setRes] = useState([]);

  useEffect(() => {
    setRes(Data.filter((data) => data.id === VanId));
  }, [VanId]);

  if (res.length === 0) {
    return <div>No data found for VanId: {VanId}</div>;
  }

  const { name, type, description } = res[0];

  return (
    <div>
      <div className="flex gap-1">
        <p className="font-bold">Name:</p>
        <p>{name}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-bold">Category:</p>
        <p>{type}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-bold">Description:</p>
        <p>{description}</p>
      </div>
      <div className="flex gap-1">
        <p className="font-bold">Visibility:</p>
        <p>Public</p>
      </div>
    </div>
  );
};

export default HostVansD;

import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import Data from "../Server/Data";

const HostVansPhoto = () =>{
    const params = useParams();
    const { VanId } = params;
    const [res, setRes] = useState([]);

    useEffect(() => {
        setRes(Data.filter((data) => data.id === VanId));
    }, [VanId]);

    if (res.length === 0) {
        return <div>No data found for VanId: {VanId}</div>;
    }
    
    const { imageUrl } = res[0];
    return(
        <div>
            <img src={`${imageUrl}`} alt="Car" width={100} className="rounded-2xl"/>
        </div>
    );
}

export default HostVansPhoto;
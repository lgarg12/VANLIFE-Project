import React from "react";
import { useParams } from "react-router";
import Data from "../Server/Data";
import {BsArrowLeft} from "react-icons/bs";
import { Link } from "react-router-dom";

const Description = (()=>{
    const params = useParams();
    const {VanId} = params;
    const res = Data.filter((data)=>{
        return data.id === VanId;
    });
    // console.log(res);
      
    
    return(
        <div className="bg-[#FFF7ED] py-5">
        <div className="w-1/3 mx-auto flex flex-col gap-2">
            <Link to="/Vans">
            <div className="flex items-center cursor-pointer"><BsArrowLeft/><span className="underline">Back to all Vans</span></div>
            </Link>
            <img src={`${res[0].imageUrl}`} className="w-1/2 h-70"/>
            <div className="p-4 bg-[#E17654] w-1/2 rounded-2xl text-center text-white text-1xl">{res[0].type}</div>
            <p className="font-semibold text-4xl">{res[0].name}</p>
            <p className="font-semibold text-2xl">${res[0].price}<span className="font-normal">/day</span></p>
            <div>
                {res[0].description}
            </div>
            <button className="bg-[#E17654] w-full p-3 rounded-2xl text-white text-xl"> Rent This Van </button>
        </div>
        </div>
    );
}) 

export default Description;
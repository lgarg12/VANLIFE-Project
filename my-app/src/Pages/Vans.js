import React, { useEffect, useState } from "react";
import Data from "../Server/Data";
import {Link} from "react-router-dom";


const Vans = () =>{
    // console.log(Data);
    const [Vans,setVans] = useState([]);
    useEffect(() =>{
        setVans(Data);
    },[]);


    return(
        <div>
            <div className="flex flex-wrap gap-8 p-4 justify-center items-center">
                {
                    Vans.map((Van)=>{
                        return(
                            <div>
                            <div key={Van.id}>
                                <Link to={`/Description/${Van.id}`}>
                                <img src={Van.imageUrl} alt="Car" width={400} className="rounded-2xl"/>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-2xl">{Van.name}</p>
                                    <p><span className="font-semibold text-2xl">${Van.price}</span><br/>/day</p>
                                </div>
                                <div className="bg-[#FFEAD0] inline py-2 px-8 rounded-2xl">
                                    {Van.type}
                                </div>
                                </Link>
                            </div>
                            </div>
                        );
                    })
                }            
            </div>
        </div>
    );
}

export default Vans;
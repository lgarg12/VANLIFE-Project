import React from "react";
import Data from "../../Server/Data";
 
const HostVans = () => {
    return(
        <div className="bg-[#FFF7ED]">
            <div className="w-9/12 mx-auto flex flex-col gap-3">
            <div className="font-semibold text-4xl">
                Your listed vans
            </div>
            <div className="flex flex-col gap-4 pb-4">
                    {
                        Data.map((Car)=>{
                            return(
                                <div className="w-full bg-white rounded-2xl flex items-center justify-between p-3" key={Car.id}>
                                    <div className="flex items-center gap-3">
                                        <img src={`${Car.imageUrl}`} alt="Cars" className=" rounded-2xl" width={100}/>
                                        <div>
                                            <div className="font-semibold text-2xl">{Car.name}</div>
                                            <div className="text-[#4D4D4D] text-xl">${Car.price}/day</div>
                                        </div>
                                    </div>
                                    <div className="text-[#4D4D4D] text-xl">Edit</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default HostVans;
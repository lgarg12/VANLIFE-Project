import React from "react";
import Data from "../../Server/Data"; 

const Dashboard = () => {
    return(
        <div>
            <div className="bg-[#FFEAD0]">
            <div className="w-9/12 mx-auto flex flex-col gap-6 p-4">
                <div className="font-bold text-3xl">
                    Welcome!
                </div>
                <div className=" flex gap-12 text-[#4D4D4D] justify-between">
                    <div>Income last <span className="underline">30 days</span></div>
                    <div>Details</div>
                </div>
                <div className="text-6xl font-bold">
                    $2,260
                </div>
            </div>
            </div>
            <div className="bg-[#FFDDB2]">
            <div className=" flex gap-12 w-9/12 mx-auto p-6 text-[#161616] items-center justify-between">
                <div className="text-4xl font-semibold">Review score</div>
                
                <div>Details</div>
            </div>
            </div>

            <div className="bg-[#FFF7ED]">
                <div className="w-9/12 mx-auto p-6">
                <div className="flex justify-between">
                    <div className="text-2xl font-semibold">Your listed vans</div>
                    <div className="underline text-[#4D4D4D]">View all</div>
                </div>
                <div className="flex flex-col gap-4">
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
        </div>
    );
}

export default Dashboard;
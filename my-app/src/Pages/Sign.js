import React from "react";

const Sign = (()=>{
    return(
        <div className="min-h-[75vh] bg-[#FFF7ED] flex flex-col justify-center items-center ">
            <div className="w-1/3 flex flex-col gap-6">
                <div className="font-bold text-4xl">Sign in to your account</div>
                <div className="flex flex-col gap-1">
                    <input type="email" className="border bg-blue-100 text-center py-4 rounded-2xl"/>
                    <input type="password" className="border bg-blue-100 text-center py-4 rounded-2xl"/>
                </div>
                <button className="bg-[#da7b37] py-4 rounded-2xl">
                    Sign in 
                </button>
            </div>
        </div>
    );
})

export default Sign;
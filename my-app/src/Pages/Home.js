import React from "react";

const Home = () =>{
    return(
        <div className="container  min-h-screen min-w-full">
            <div className="flex flex-col w-9/12 mx-auto gap-5 pt-52">
            <div className="text-white text-4xl font-bold">
            You got the travel plans, we got the travel vans.
            </div>
            <div className="text-white text-2xl">
            Add adventure to your life by joining the #vanlife movement. <br/>Rent the perfect van to make your perfect road trip.
            </div>
            <div className="bg-[#FF8C38] w-9/12 text-center p-5 rounded-lg">
                <button>Find your van </button>
            </div>
            </div>
        </div>
    );
}

export default Home;
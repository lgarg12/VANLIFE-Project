import React from "react";

const About = () =>{
    return(
        <div>
            <div className="bg-[#FFF7ED]">
                <img src="image 54.png" className="min-w-full"/>
                <div className="w-9/12 mx-auto py-4 flex flex-col gap-8">
                    <div className="text-[#161616] font-bold text-6xl">
                    Don’t squeeze in a sedan when you could relax in a van.
                    </div>

                    <div className="text-2xl flex flex-col gap-3">
                        <div>
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. 
                    (Hitch costs extra 😉)
                        </div>
                        <div>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                        </div>
                    </div>
                    <div className="h-[300px] bg-[#FFCC8D] rounded-lg flex flex-col justify-center  gap-4 p-10">
                        <div className="text-3xl font-bold">
                        Your destination is waiting.<br/>
                        Your van is ready.
                        </div>
                        <span className="w-1/4 bg-black text-white p-4 rounded-lg text-center font-semibold">
                            <button>
                                Explore our Vans
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
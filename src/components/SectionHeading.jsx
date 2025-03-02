import React from "react";


const SectionHeading = () => {
    return (
        <div className="flex justify-center items-baseline" style={{gap: "20px"}}>
        <div className="">
        <h3 className="text-3xl font-bold mt-4 text-nowrap text-gray-700">My Work</h3>
        </div>
        <div className="h-[.5px] w-full" style={{backgroundColor: "black"}}></div>
        </div>
    );
}

export default SectionHeading;
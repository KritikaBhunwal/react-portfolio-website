import React from 'react';

const SectionHeading = ({ title = 'Section Title' }) => {
  return (
    <div className="flex justify-center gap-[0px] items-baseline">
      <div>
        <h3 className="text-[#3d3d3d] text-[1.6rem] font-bold mt-[2rem] ml-[3rem] mr-[0rem] whitespace-nowrap">
          {title}
        </h3>
      </div>
      <div className="bg-[#3d3d3d5a] h-[0.5px] w-full mb-[1rem] mr-[4rem] mx-[2rem]"></div>
    </div>
  );
};

export default SectionHeading;

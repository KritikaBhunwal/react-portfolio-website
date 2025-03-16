import React from 'react';

const SectionHeading = ({ title = 'Section Title' }) => {
  return (
    <div className="flex justify-center items-baseline gap-[20px]">
      <div>
        <h3 className="text-3xl font-bold mt-4 whitespace-nowrap text-[#3d3d3d] mt-[2rem]">
          {title}
        </h3>
      </div>
      <div className="h-[0.5px] w-full bg-[#3d3d3d5a] mr-[2rem] mb-[1rem]"></div>
    </div>
  );
};

export default SectionHeading;

import React from 'react';

const SubSectionHeading = ({ title = 'Section Title' }) => {
  return (
    <div className="flex justify-center gap-[0px] items-baseline">
      <div>
        <h4 className="text-[#2d2d2d] text-[1.1rem] ml-[2rem] mt-[2rem] whitespace-nowrap font-medium">
          {title}
        </h4>
      </div>
      <div className="bg-[#2d2d2d5a] h-[0.5px] w-full mb-[1rem] mr-[2rem] mx-[2rem]"></div>
    </div>
  );
};

export default SubSectionHeading;

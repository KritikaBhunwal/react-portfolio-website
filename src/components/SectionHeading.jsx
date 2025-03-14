import React from "react";

const SectionHeading = ({ title = "Section Title" }) => {
  return (
    <div className="flex justify-center items-baseline" style={{ gap: "20px" }}>
      <div>
        <h3 className="text-3xl font-bold mt-4 text-nowrap text-#3d3d3d">
          {title}
        </h3>
      </div>
      <div
        className="h-[.5px] w-full"
        style={{ backgroundColor: "#3d3d3d5a", marginRight: "1.2rem" }}
      ></div>
    </div>
  );
};

export default SectionHeading;

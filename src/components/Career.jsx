import React from "react";
import Card from "./Card";
import collage1 from "/Collages-1.png";
import collage2 from "/Collages-2.png";
import collage3 from "/Collages-3.png";


const careerOptions = [
  {
    title: "UI/UX Design",
    description:
      "At present, I am pursuing formal education in Web Design and Development from BCIT, Vancouver CA.<br /><br /> I design user-centered, visually engaging digital experiences that smoothly blend creativity with functionality, focusing on problem solving and innovation.",
    image: collage3,
    link: "/UIUX",
    desktopReverse: false, // Image Left, Text Right
    tabletReverse: false, // Image Left, Text Right
  },
  {
    title: "Graphic Design",
    description:
      "I have been always drawn to visual designs that communicated ideas effectively.<br /><br /> So, I self-taught myself Graphic Design and did some cool branding, advertising, and digital media projects over the span of 7 years for different industries.",
    image: collage2,
    link: "/Graphics",
    desktopReverse: false, // Image Left, Text Right
    tabletReverse: true, // Image Right, Text Left
  },
  {
    title: "Fashion Design",
    description:
      "After graduating from NIFT, New Delhi IN in 2016, I began my career as a Fashion Designer.<br /><br /> My work involved trend research, styling, technical sketching and collaboration with designers, vendors and patternmakers to create market-ready Womenswear clothing.",
    image: collage1,
    link: "/Fashion",
    desktopReverse: false, // Image Left, Text Right
    tabletReverse: false, // Image Left, Text Right
  },
];

const Career = () => {
  return (
    <div className="card-container">
      {careerOptions.map((career, index) => (
        <Card
          key={index}
          title={career.title}
          description={career.description}
          image={career.image}
          link={career.link}
          desktopReverse={career.desktopReverse}
          tabletReverse={career.tabletReverse}
        />
      ))}
    </div>
  );
};

export default Career;

import React from "react";
import Card from "./Card";
import collage1 from "../assets/images/collages-1.png";
import collage2 from "../assets/images/collages-2.png";
import collage3 from "../assets/images/collages-3.png";

const careerOptions = [
  {
    title: "UI/UX Design",
    description:
      "I design user-centered, visually engaging digital experiences that seamlessly blend creativity with functionality, focusing on accessibility and usability.",
    image: collage3,
    link: "#",
    desktopReverse: false, // Image Left, Text Right
    tabletReverse: false, // Image Left, Text Right
  },
  {
    title: "Graphic Design",
    description:
      "I create visually compelling designs that communicate ideas effectively and leave a lasting impression for branding, advertising, and digital media.",
    image: collage2,
    link: "./graphics/graphics.html",
    desktopReverse: false, // Image Left, Text Right
    tabletReverse: true, // Image Right, Text Left
  },
  {
    title: "Fashion Design",
    description:
      "I specialize in transforming concepts into market-ready collections, from trend research to detailed sketches and collaborating with patternmakers.",
    image: collage1,
    link: "./fashion/fashion.html",
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

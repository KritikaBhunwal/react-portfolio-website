import React from "react";
import Button from "../components/Button";
import ThreeDBanner from "../components/ThreeDBanner";
import SkillsShowcase from "../components/SkillsShowcase";
import Card from "../components/Card";  
import SpecsSection from "../components/SpecsSection";
import WorkTogether from "../components/WorkTogether";
import "../styles/card.css";
import "../styles/home.css";
import collage1 from "../assets/images/collages-1.png";
import collage2 from "../assets/images/collages-2.png";
import collage3 from "../assets/images/collages-3.png";

const Home = () => {
  return (
    <div className="p-4">
      <ThreeDBanner />
      <div className="card-container">
      <Card
        title="UI/UX Design"
        description="I design user-centered, visually engaging digital experiences that seamlessly blend creativity with functionality, focusing on accessibility and usability."
        image={collage3}
        link="#"
      />
      <Card
        title="Graphic Design"
        description="I create visually compelling designs that communicate ideas effectively and leave a lasting impression for branding, advertising, and digital media."
        image={collage2}
        link="./graphics/graphics.html"
      />
      <Card
        title="Fashion Design"
        description="I specialize in transforming concepts into market-ready collections, from trend research to detailed sketches and collaborating with patternmakers."
        image={collage1}
        link="./fashion/fashion.html"
      />
      </div>
      <SkillsShowcase />
      <WorkTogether />
      {/* <SpecsSection /> */}
      <h1>Welcome to My Portfolio</h1>
      <div className="space-x-4 mt-4">
        <Button color="slate" onClick={() => alert("Slate Button clicked!")}>
          Slate Button
        </Button>
        <Button color="purple" onClick={() => alert("Purple Button clicked!")}>
          Purple Button
        </Button>
        <Button color="yellow" onClick={() => alert("Yellow Button clicked!")}>
          Yellow Button
        </Button>
      </div>
    </div>
  );
};

export default Home;

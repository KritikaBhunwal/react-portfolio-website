// import React from "react";
import Button from "../components/Button";
import Banner from "../components/Banner.jsx";
import SectionHeading from '../components/SectionHeading';
import ThreeDBanner from "../components/ThreeDBanner";
import Career from "../components/Career";
import WorkTogether from "../components/WorkTogether";


import "../styles/card.css";
import "../styles/home.css";
import FeaturedProjects from "../components/FeaturedProjects.jsx";

const Home = () => {
  return (
    <div className="p-4">
      <Banner />
      <SectionHeading title="My Work" />
      <ThreeDBanner />
      <Career />
      <SectionHeading title="Featured Projects" />
      <FeaturedProjects />
      <WorkTogether />
      
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

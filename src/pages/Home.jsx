import React from "react";
import Button from "../components/Button";
import Banner from "../components/Banner.jsx";
import ThreeDBanner from "../components/ThreeDBanner";
import Card from "../components/Card";  
import "../styles/card.css";
import "../styles/home.css";
import Career from "../components/Career";
import Skills from "../components/Skills.jsx";
import WorkTogether from "../components/WorkTogether";

const Home = () => {
  return (
    <div className="p-4">
      <Banner />
      <ThreeDBanner />
      <Career />
      {/* <Skills /> */}
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

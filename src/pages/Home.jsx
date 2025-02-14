import React from "react";
import Button from "../components/Button";
import Greeting from "../components/Greeting";
import ThreeDBanner from "../components/ThreeDBanner";
import Card from "../components/Card";  
import "../styles/card.css";
import "../styles/home.css";
import collage1 from "../assets/images/collages-1.png";
import collage2 from "../assets/images/collages-2.png";
import collage3 from "../assets/images/collages-3.png";
import Career from "../components/Career";
import Skills from "../components/Skills.jsx";
import WorkTogether from "../components/WorkTogether";

const Home = () => {
  return (
    <div className="p-4">
      <Greeting />
      <h1 className="text-4xl ml-2">I'm Kritika Bhunwal</h1>
      <p className="text-2xl">I love design, research and development</p><br></br>

      <div className="flex justify-center items-baseline" style={{gap: "20px"}}>
        <div className="">
          <h2 className="text-3xl font-bold mt-4 text-nowrap text-red-700">My Work</h2>
        </div>
        <div className="h-[.5px] w-full" style={{backgroundColor: "black"}}></div>
      </div>

      <ThreeDBanner />
      <Career />

      {/* <div className="flex justify-center items-baseline" style={{gap: "20px"}}>
        <div className="">
          <h2 className="text-3xl font-bold mt-4 text-nowrap text-red-700">My Skills</h2>
        </div>
        <div className="h-[.5px] w-full" style={{backgroundColor: "black"}}></div>
      </div> */}
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

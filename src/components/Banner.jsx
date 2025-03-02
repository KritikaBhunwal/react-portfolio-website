import React from "react";
import Greeting from "../components/Greeting";
import MoreInfo from "../components/MoreInfo";
import "../styles/Banner.css";


const Banner = () => {
    return (
      <div className="p-4">
        <Greeting />
        <h2>I'm Kritika Bhunwal</h2>
        <p>I'm passionate about design, research and development<br></br>
        ...And how these impact our daily lives!</p><br></br>

        <MoreInfo />
      </div>
      
    );
  };
  
  export default Banner;
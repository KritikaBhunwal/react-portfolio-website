import React from "react";
import { FaLinkedin, FaBehance } from "react-icons/fa";
import Greeting from "../components/Greeting";
import MoreInfo from "../components/MoreInfo";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="p-4">
      <Greeting />
      <h2>I'm Kritika Bhunwal</h2>
      <p>
        I'm passionate about design, research and development
        <br />
        ...and how these impact our daily lives!
      </p>
      {/* <br /> */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/kritikabhunwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://www.behance.net/kritikabhunwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance size={28} />
        </a>
      </div>
      <MoreInfo />
    </div>
  );
};

export default Banner;

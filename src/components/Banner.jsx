import { FaLinkedin, FaBehanceSquare, FaGithubSquare } from "react-icons/fa";
import Greeting from "../components/Greeting";
import MoreInfo from "../components/MoreInfo";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Greeting />
      <h2>I&apos;m Kritika Bhunwal</h2>
      <p>
        I&apos;m passionate about design, research and development,
        <br />
        ...and how these impact our daily lives!
      </p>
      <div className="banner-icons banner-social-icons">
        <a
          href="https://www.linkedin.com/in/kritikabhunwal/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/KritikaBhunwal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile"
        >
          <FaGithubSquare size={24} />
        </a>
        <a
          href="https://www.behance.net/kritikabhunwal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance Profile"
        >
          <FaBehanceSquare size={24} />
        </a>
      </div>
      <MoreInfo
        icon="/info-icon.svg"
        text="Click here to know more about me!"
        iconSize={50}
        textSize={31}
        gap={32}
        link="/About.jsx"
      />
    </div>
  );
};

export default Banner;

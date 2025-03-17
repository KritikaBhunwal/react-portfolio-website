import React from "react";
import { FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";
import "../styles/WorkTogether.css";

const WorkTogether = () => {
  return (
    <section className="work-together">
      {/* Left Section - Heading & Email Button */}
      <div className="work-together-content">
        <h2>Let's Make Things <br></br>Happen Together!</h2>

        <a
          href="mailto:kritikabhunwal@gmail.com?subject=Project Inquiry"
          className="email-button"
        >
          <FaEnvelope className="email-icon" size={18} />
          Drop me an email and let's get started!
        </a>
      </div>

      {/* Right Section - Description & Social Icons */}
      <div className="work-together-info">
        <p>
          <strong>Working Together</strong>
          <br />
          Have a project in mind or ideas to discuss?
          <br />
          Feel free to
          drop me a message, and I'll get back to you in 48 hours.
        </p>

        <div className="social-icons">
          <a
            href="mailto:kritikabhunwal@gmail.com?subject=Project Inquiry"
            aria-label="Send an Email"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kritikabhunwal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.behance.net/kritikabhunwal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance Profile"
          >
            <FaBehance size={34} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;

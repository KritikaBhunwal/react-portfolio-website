import React from "react";
import { FaLinkedin, FaBehanceSquare, FaEnvelope } from "react-icons/fa";
import "../styles/WorkTogether.css";

const socialLinks = [
  {
    icon: <FaEnvelope size={29} />,
    link: "mailto:kritikabhunwal@gmail.com?subject=Project Inquiry",
    label: "Send an Email",
    external: false,
  },
  {
    icon: <FaLinkedin size={28} />,
    link: "https://www.linkedin.com/in/kritikabhunwal/",
    label: "LinkedIn Profile",
    external: true,
  },
  {
    icon: <FaBehanceSquare size={28} />,
    link: "https://www.behance.net/kritikabhunwal",
    label: "Behance Profile",
    external: true,
  },
];

const WorkTogether = () => {
  return (
    <section className="work-together">
      <div className="work-together-content">
        <h2>
          Let's Make Things <br /> Happen Together!
        </h2>
        <a
          href="mailto:kritikabhunwal@gmail.com?subject=Project Inquiry"
          className="email-button"
        >
          <FaEnvelope className="email-icon" size={18} />
          Drop me an email and let's get started!
        </a>
      </div>

      <div className="work-together-info">
        <p>
          <strong>Working Together</strong>
          <br />
          Have a project in mind or ideas to discuss?
          <br />
          Feel free to drop me a message, and I'll get back to you in 48 hours.
        </p>

        <div className="social-icons">
          {socialLinks.map(({ icon, link, label, external }, index) => (
            <a
              key={index}
              href={link}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;

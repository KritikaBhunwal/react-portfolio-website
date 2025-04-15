import React from "react";
import "../styles/clientMarquee.css"; // adjust path if necessary

const ClientMarquee = () => {
  // Generate an array of logo file names for ClientLogo1.png to ClientLogo30.png
  const logos = Array.from({ length: 20 }, (_, i) => `ClientLogo${i + 1}.png`);

  return (
    <div className="client-marquee-container">
      <div className="client-marquee">
        {/* Duplicate logos for continuous scrolling */}
        {logos.concat(logos).map((logo, index) => (
          <a key={index} href="#" className="client-logo-link">
            <img
              src={logo}
              alt={`Client ${index % 20 + 1}`}
              className="client-logo"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;

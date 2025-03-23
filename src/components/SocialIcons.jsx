// SocialIcons.jsx
import React from "react";

function SocialIcons({ links, className }) {
  return (
    <div className={className}>
      {links.map(({ icon, link, label, external }, index) => (
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
  );
}

export default SocialIcons;

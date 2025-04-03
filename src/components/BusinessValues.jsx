import { useState, useRef } from "react";
import "../styles/businessValues.css";

const BusinessValues = () => {
  const items = [
    {
      id: "goal",
      title: "My Goal as a Designer 🎨",
      content: (
        <ul>
          <li>Design impactful visuals that spark creativity.</li>
          <li>Innovate beyond conventional boundaries.</li>
          <li>Create user-friendly designs with beautiful interfaces.</li>
        </ul>
      ),
    },
    {
      id: "mission",
      title: "My Mission as an Entrepreneur 🚀",
      content: (
        <ul>
          <li>Empower individuals with skills, knowledge and experience.</li>
          <li>Drive impact with entrepreneurial spirit.</li>
          <li>Foster collaborative growth for everyone in every venture.</li>
        </ul>
      ),
    },
    {
      id: "vision",
      title: "My Vision as an Expert 🤝",
      content: (
        <ul>
          <li>Shape future of innovation and collaboration.</li>
          <li>Deliver transformative digital experiences.</li>
          <li>Create smarter, faster and brighter solutions through expert insights.</li>
        </ul>
      ),
    },
  ];

  const [expandedItem, setExpandedItem] = useState(null);
  const contentRefs = useRef({});

  const toggleItem = (id, e) => {
    e.stopPropagation();
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="business-intro" style={{ margin: "1rem"}}>
      {items.map((item) => {
        const isExpanded = expandedItem === item.id;
        return (
          <div key={item.id} className={`accordion-item ${isExpanded ? "expanded" : ""}`}>
            <div className="accordion-header" onClick={(e) => toggleItem(item.id, e)} aria-expanded={isExpanded}>
              <h3>{item.title}</h3>
              <button className="toggle-button">
                {isExpanded ? "−" : "+"}
              </button>
            </div>
            <div
              className="accordion-content"
              ref={(el) => (contentRefs.current[item.id] = el)}
              style={{ maxHeight: isExpanded ? `${contentRefs.current[item.id]?.scrollHeight}px` : "0px" }}
            >
              <div className="accordion-content-wrapper">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusinessValues;

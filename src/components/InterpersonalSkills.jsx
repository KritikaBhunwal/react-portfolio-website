import React, { useState, useRef, useEffect } from "react";
import "../styles/interpersonalskills.css";

const interpersonalSkills = [
  { 
    skill: "Communication", 
    phrase: "💬 I think Communication solves half the problem." 
  },
  { 
    skill: "Research", 
    phrase: "🔍 I'm really good at finding things online and offline!" 
  },
  { 
    skill: "Presentation", 
    phrase: "📊 I break down ideas into digestible info." 
  },
  { 
    skill: "Leadership", 
    phrase: "👑 I lead by example and empower my team." 
  },
  { 
    skill: "Teamwork", 
    phrase: "🤝 Collaboration leads to successful experiences." 
  },
  { 
    skill: "Empathy", 
    phrase: "💖 I understand the importance of connecting deeply with others." 
  },
  { 
    skill: "Adaptability", 
    phrase: "🔄 I find it easy to adapt to new challenges and situations." 
  },
  { 
    skill: "Creative Thinking", 
    phrase: "💡 I think outside the box to innovate and create original content." 
  },
  { 
    skill: "Problem Solving", 
    phrase: "🛠 I find effective solutions by applying different perspectives to a situation." 
  },
  { 
    skill: "Growth Mindset", 
    phrase: "🌱 I believe in continuously learning and improving." 
  }
];

const InterpersonalSkillItem = ({ skill, phrase, isActive, onActivate }) => {
  const [displayedText, setDisplayedText] = useState(skill);
  const [containerWidth, setContainerWidth] = useState(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    // When a pill is activated, start a typewriter effect to reveal the phrase
    if (isActive) {
      setDisplayedText(""); // reset text
      let index = 0;
      const interval = setInterval(() => {
        index++;
        setDisplayedText(phrase.substring(0, index));
        if (index === phrase.length) clearInterval(interval);
      }, 30); // adjust typing speed (ms per letter)
      return () => clearInterval(interval);
    } else {
      // If not active, revert to skill text
      setDisplayedText(skill);
    }
  }, [isActive, phrase, skill]);

  // Measure the hidden text width whenever displayedText changes
  useEffect(() => {
    if (hiddenRef.current) {
      // Adding extra padding (e.g. 20px) for comfort
      setContainerWidth(hiddenRef.current.offsetWidth + 20);
    }
  }, [displayedText]);

  return (
    <>
      <div 
        className={`pill ${isActive ? "expanded" : ""}`}
        onClick={onActivate}
        style={{ width: containerWidth ? `${containerWidth}px` : "auto" }}
      >
        <span className="pill-text">{displayedText}</span>
      </div>
      {/* Hidden element to measure the width of the displayed text */}
      <span 
        className="hidden-measure" 
        ref={hiddenRef} 
        style={{ visibility: "hidden", whiteSpace: "nowrap", position: "absolute" }}
      >
        {displayedText}
      </span>
    </>
  );
};

const InterpersonalSkills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePill = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="skills-section interpersonal-skills-section">
      <div className="interpersonal-skills">
        {interpersonalSkills.map((item, index) => (
          <InterpersonalSkillItem
            key={index}
            skill={item.skill}
            phrase={item.phrase}
            isActive={activeIndex === index}
            onActivate={() => togglePill(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InterpersonalSkills;

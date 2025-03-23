import React, { useState, useRef, useEffect } from "react";
import "../styles/interpersonalskills.css";

const interpersonalSkills = [
  { skill: "Communication", phrase: "💬 I think Communication solves half the problem." },
  { skill: "Research", phrase: "🔍 I'm really good at finding things online and offline!" },
  { skill: "Presentation", phrase: "📊 I break down ideas into digestible info." },
  { skill: "Leadership", phrase: "👑 I lead by example and empower my team." },
  { skill: "Teamwork", phrase: "🤝 Collaboration leads to successful experiences." },
  { skill: "Empathy", phrase: "💖 I understand the importance of connecting deeply with others." },
  { skill: "Adaptability", phrase: "🔄 I find it easy to adapt to new challenges and situations." },
  { skill: "Creative Thinking", phrase: "💡 I think outside the box to innovate and create original content." },
  { skill: "Problem Solving", phrase: "🛠 I find effective solutions by applying different perspectives to a situation." },
  { skill: "Growth Mindset", phrase: "🌱 I believe in continuously learning and improving." }
];

const InterpersonalSkillItem = ({ skill, phrase, isActive, onActivate, startAnimation }) => {
  const [displayedText, setDisplayedText] = useState(skill);
  const [containerWidth, setContainerWidth] = useState(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    if (isActive && startAnimation) {
      let index = 0;
      setDisplayedText(""); // Start empty
      const interval = setInterval(() => {
        index++;
        setDisplayedText(phrase.substring(0, index));
        if (index === phrase.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    } else {
      setDisplayedText(skill); // Reset when closed
    }
  }, [isActive, phrase, startAnimation]);

  useEffect(() => {
    if (hiddenRef.current) {
      setContainerWidth(hiddenRef.current.offsetWidth + 20); // Add padding space
    }
  }, [displayedText]);

  return (
    <>
      <div 
        className={`pill ${isActive ? "expanded" : ""}`}
        onClick={onActivate}
        style={{ 
          width: containerWidth ? `${containerWidth}px` : "auto",
          margin: isActive ? "0 0.5rem" : "0"
        }}
      >
        <span className="pill-text">{isActive ? displayedText : skill}</span> {/* Hide closed pill text on expand */}
      </div>
      {/* Hidden text measurement */}
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
  const defaultOpenIndex = interpersonalSkills.findIndex(skill => skill.skill === "Creative Thinking");
  const [activeIndex, setActiveIndex] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setActiveIndex(defaultOpenIndex); // Expand Creative Thinking after 2s
            setStartAnimation(true);
          }, 2000);
        }
      }, 
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePill = (index) => {
    setActiveIndex(prev => (prev === index ? null : index)); // Only one pill open at a time
  };

  return (
    <div className="interpersonal-skills-section skills-section" ref={sectionRef}>
      <div className="interpersonal-skills">
        {interpersonalSkills.map((item, index) => (
          <InterpersonalSkillItem
            key={index}
            skill={item.skill}
            phrase={item.phrase}
            isActive={activeIndex === index}
            onActivate={() => togglePill(index)}
            startAnimation={activeIndex === index ? startAnimation : false}
          />
        ))}
      </div>
    </div>
  );
};

export default InterpersonalSkills;

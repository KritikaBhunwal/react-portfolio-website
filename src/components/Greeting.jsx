import { useEffect, useState } from "react";
import "../styles/greeting.css";
import PropTypes from "prop-types";

const languages = [
  "Hello!",
  "नमस्ते,",
  "Bonjour!",
  "こんにちは",
  "Olá",
  "Hello!",
  "नमस्ते,",
  "안녕하세요",
  "Ciao!",
  "Привет",
  "Hello!",
  "नमस्ते,",
  "Hola!",
  "你好",
  "Γειά σου",
  "Hello!",
  "नमस्ते,",
  "שלום",
  "مرحبا",
];

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, index));
      index++;
      if (index > text.length) {
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

const Greeting = () => {
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % languages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center mt-6 h-[6rem] text-left bg-gray-900 text-[#3D3D3D] px-4 ml-4">
      <h1 className="text-[2rem] font-quicksand">
        <TypewriterText text={languages[currentLangIndex]} />
      </h1>
    </div>
  );
};
TypewriterText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Greeting;

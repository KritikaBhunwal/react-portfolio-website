import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const languages = [
  "Hello", "Hallo", "Ciao", "Olá", "Привет", "안녕하세요", "नमस्ते", "Γειά σου", "שלום", "مرحبا", "வணக்கம்"
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
    <div className="flex flex-col items-start justify-center mt-2 h-[8rem] text-left bg-gray-900 text-white px-4">
      <h1 className="text-[6rem] font-quicksand">
        <TypewriterText text={languages[currentLangIndex]} />
      </h1>
    </div>
  );
};

export default Greeting;

import React, { useState, useEffect } from "react";
import AboutPhoto from "/AboutPhoto.png";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import "../styles/testimonial.css";

// For example purposes, Courtney has all three,
// Yudhishthir only has LinkedIn and Website,
// Gautam only has Instagram and Website.
const testimonials = [
  {
    message: "Insightful and Great with Design Feedback",
    quote:
      "Kritika was a pleasure to work with! She is always eager to help out and a great group member. She is insightful and gives good feedback especially with design. Her ongoing positive attitude helped me when I was feeling unmotivated which really emphasizes on her listening skills.",
    author: "Courtney Yan, A Versatile Content Writer",
    linkedin: "https://www.linkedin.com/in/courtneyyan-bcit-uiux-graphic-design/",
    website: "https://courtneyyan.ca",
  },
  {
    message: "Fun to Work With",
    quote:
      "Knowing Kritika has been fun. She is flexible and easy to work with. She is good at design work and has a good eye for detail. She is very organized and makes sure that everything is done well with optimum quality.",
    author: "Suin Kim, A Bright Web Designer",
    linkedin: "https://www.linkedin.com/in/suink/",
    website: "https://sulnklm.com",
  },
  {
    message: "Artistic and Creative",
    quote:
      "Kritika is a very artistic and creative person. She is very good at designing and has a good eye for detail. She is also very good at expressing herself and is very calm and composed in nature. She is also very good at working in a team and is very good at communicating with others.",
    author: "Gautam Das",
    // LinkedIn not provided for Gautam so that icon won't appear.
    instagram: "https://www.instagram.com/ga_ut_am/",
    // website: "#gautam_website",
  },
  {
    message: "Design and Coding Skills",
    quote:
      "Kritika has played a vital role in my career journey. As an elder sister she's always shown her empathetic side I have seen her evolve as a designer over the time period. She is very dedicated and really good at what she does. I have seen her grow as a designer and developer and I am sure she will go far in her career.",
    author: "Yudhishthir Bhunwal, A Budding Back-End Developer",
    linkedin: "https://www.linkedin.com/in/yudhishthirbhunwal/",
    instagram: "https://www.instagram.com/yudhishthirbhunwal/",
    // Instagram not provided for Yudhishthir so the icon won't appear.
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 7 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonials-wrapper" style={{ marginLeft: "4rem", marginRight: "4rem" }}>
      <div className="testimonial-image-container">
        <img src={AboutPhoto} alt="About" className="testimonial-image" />
      </div>
      <div className="testimonial-slider-container">
        <div key={currentIndex} className="testimonial-content">
          <h3 className="testimonial-message">{activeTestimonial.message}</h3>
          <p className="testimonial-quote">"{activeTestimonial.quote}"</p>
          <p className="testimonial-author">
            - {activeTestimonial.author}{" "}
            <span className="testimonial-socials">
              {activeTestimonial.linkedin && (
                <a
                  href={activeTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {activeTestimonial.instagram && (
                <a
                  href={activeTestimonial.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
              {activeTestimonial.website && (
                <a
                  href={activeTestimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <FaGlobe />
                </a>
              )}
            </span>
          </p>
        </div>
        <div className="testimonial-controls">
          <button onClick={goToPrev} aria-label="Previous Testimonial">
            Prev
          </button>
          <button onClick={goToNext} aria-label="Next Testimonial">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

import React, { useState, useEffect } from "react";
import AboutPhoto from "/AboutPhoto.png";
import "../styles/testimonial.css";

const testimonials = [
  {
    message: "Insightful and Great with Design Feedback",
    quote:
      "Kritika was a pleasure to work with! She is always eager to help out and a great group member. She is insightful and gives good feedback especially with design. Her ongoing positive attitude helped me when I was feeling unmotivated which really emphasizes on her listening skills.",
    author: "Courtney Yan",
  },
  {
    message: "Design and Coding Skills",
    quote:
      "Kritika is a very talented designer and coder. She is very good at designing and has a good eye for detail. She is also very good at coding and is very helpful when it comes to debugging. She is very good at working in a team and is very good at communicating with others.",
    author: "Yudhishthir Bhunwal",
  },
  {
    message: "Artistic and Creative",
    quote:
      "Kritika is a very artistic and creative person. She is very good at designing and has a good eye for detail. She is also very good at coding and is very helpful when it comes to debugging. She is very good at working in a team and is very good at communicating with others.",
    author: "Gautam Das",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 7 seconds
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
    <div className="testimonials-wrapper" style={{ marginLeft: "4rem", marginRight: "4rem"}}>
      <div className="testimonial-image-container">
        <img src={AboutPhoto} alt="About" className="testimonial-image" />
      </div>
      <div className="testimonial-slider-container">
        <div key={currentIndex} className="testimonial-content">
          <h3 className="testimonial-message">{activeTestimonial.message}</h3>
          <p className="testimonial-quote">"{activeTestimonial.quote}"</p>
          <p className="testimonial-author">- {activeTestimonial.author}</p>
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

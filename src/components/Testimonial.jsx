import React from "react";
import AboutPhoto from "../assets/images/AboutPhoto.png";
import "../styles/testimonial.css";

const testimonials = [
  {
    message: "A Great Group Member",
    quote:
      "It was a pleasure to work with Kritika! She is always eager to help out and a great group member. She is insightful and gives good feedback especially with design. Her ongoing positive attitude helped me when I was feeling unmotivated which really emphasizes on her listening skills.",
    author: "Courtney Yan"
  },
  {
    message: "Design and Coding Skills",
    quote:
      "Kritika is a very talented designer and coder. She is very good at designing and has a good eye for detail. She is also very good at coding and is very helpful when it comes to debugging. She is very good at working in a team and is very good at communicating with others.",
    author: "Yudhishthir Bhunwal"
  },
  {
    message: "Artistic and Creative",
    quote:
      "Kritika is a very artistic and creative person. She is very good at designing and has a good eye for detail. She is also very good at coding and is very helpful when it comes to debugging. She is very good at working in a team and is very good at communicating with others.",
    author: "Gautam Das"
  }
];

const Testimonial = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonial-image-container">
        <img src={AboutPhoto} alt="About" className="testimonial-image" />
      </div>
      <div className="testimonial-slider-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <h3 className="testimonial-message">{testimonial.message}</h3>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

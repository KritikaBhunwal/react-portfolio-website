import React from "react";
import "../styles/workTogether.css";

const WorkTogether = () => {
  return (
    <div className="work-together">
      <div className="overlay">
        <h2>Let's Work Together</h2>
        <p>Email me with your project requirement and I'll get back to you soon.</p>

        {/* Clicking on input opens email form */}
        <a href="mailto:kritikabhunwal@gmail.com?subject=Project Inquiry">
          <input type="text" placeholder="Leave a message..." className="message-input" />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;

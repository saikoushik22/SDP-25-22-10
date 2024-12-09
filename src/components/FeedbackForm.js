import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = () => {
    // Simulate feedback submission logic
    console.log("Feedback submitted: ", feedback);
    alert("Feedback submitted successfully!");
    setFeedback(""); // Clear the feedback input after submission
  };

  return (
    <div className="feedback-container">
      <h3>Feedback</h3>
      <textarea
        value={feedback}
        onChange={handleFeedbackChange}
        placeholder="Write your feedback here..."
        className="feedback-textarea"
      ></textarea>
      <button onClick={handleSubmitFeedback} className="submit-feedback-btn">
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainDashboard.css";
import backgroundVideo from "../assets/index-bg(1).mp4"; // Updated path for the new video

const MainDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="main-dashboard">
      {/* Video Background */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <h1 className="title">ONLINE ASSIGNMENT SUBMISSION AND GRADING SYSTEM</h1>

      {/* Buttons for navigation */}
      <div className="buttons">
        <button onClick={() => navigate("/student/signup")} className="button">
          Student Login
        </button>
        <button onClick={() => navigate("/faculty/signup")} className="button">
          Faculty Login
        </button>
      </div>
    </div>
  );
};

export default MainDashboard;

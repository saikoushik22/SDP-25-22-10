import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentNav() {
    const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      window.location.href = "/student/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/student/login";
  };

  const handleSubmitAssignment = () => {
    navigate("/student/submit-assignment");
  };

  const handleViewProfile = () => {
    navigate("/student/profile");
  };
  return (
    <header className="dashboard-header">
        <div className="header-left">
          <div className="sidebar-logo">
            ONLINE ASSIGNMENT SUBMISSION AND GRADING SYSTEM
          </div>
        </div>
        <div className="header-right">
          <ul className="top-nav">
            <li onClick={() => navigate("/student/dashboard")}>Dashboard</li>
            <li onClick={() => navigate("/student/submit-assignment")}>Assignments</li>
            <li onClick={() => navigate("/student/view-grade")}>Grades</li>
            <li onClick={() => navigate("/student/profile")}>Profile</li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </header>
  );
};

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Options = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user data (this could be from API or context)
    setUser({ email: 'student@example.com', user_type: 'student' }); // Example user for testing
  }, []);

  const handleSubmitAssignment = () => {
    navigate("/student/submit-assignment");
  };
    
  const handleViewProfile = () => {
    navigate("/student/profile");
  };

  return (
    <div className="dashboard-welcome">
      <h3>Student Dashboard</h3>
      <div className="user-info">
        <p>
          <strong>Email:</strong> {user ? user.email : "Loading..."}
        </p>
        <p>
          <strong>User Type:</strong> {user ? user.user_type : "Loading..."}
        </p>
      </div>

      <div className="dashboard-actions">
        {user && user.user_type === 'student' && (
          <button onClick={handleSubmitAssignment} className="action-btn">
            Submit Assignment
          </button>
        )}
        <button onClick={() => navigate("/student/view-grade")} className="action-btn">
          View Grades
        </button>
        <button onClick={handleViewProfile} className="action-btn">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Options;

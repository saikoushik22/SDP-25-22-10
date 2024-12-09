import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentDashboard.css";
import dashboardBackground from "../../assets/dashboard.jpg"; // Import the image
import Options from "./Options"; // Assuming Options already has buttons
import StudentNav from "./StudentNav"; // Keep the StudentNav component for navigation

const StudentDashboard = () => {
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
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${dashboardBackground})` }} // Set the background image inline
    >
      <StudentNav handleLogout={handleLogout} /> {/* Pass logout function to StudentNav */}

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h3>Welcome to the Student Dashboard</h3>
          <div className="user-info">
            
          </div>
        </div>

        {/* Only render Options component to show the buttons */}
        <Options /> 

        {/* Removed duplicate buttons from here */}
      </div>
    </div>
  );
};

export default StudentDashboard;

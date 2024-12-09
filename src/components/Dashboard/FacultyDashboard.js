import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FacultyDashboard.css";
import backgroundImage from "../../assets/dashboard.jpg"; // Import the image

const FacultyDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.user_type === "faculty") {
      setUser(storedUser);
    } else {
      navigate("/faculty/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/faculty/login");
  };

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image inline
    >
      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="header-left">
            <div className="sidebar-logo">
              ONLINE ASSIGNMENT SUBMISSION AND MANAGEMENT SYSTEM
            </div>
          </div>
          <div className="header-right">
            <ul className="top-nav">
              <li onClick={() => navigate("/faculty/dashboard")}>Dashboard</li>
              <li onClick={() => navigate("/faculty/create-assignment")}>
                Create Assignment
              </li>
              <li onClick={() => navigate("/faculty/grade-assignment")}>
                Grade Assignment
              </li>
              <li onClick={() => navigate("/faculty/profile")}>
                Faculty Profile
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </header>

        <div className="dashboard-welcome">
          <h3>Welcome to the Faculty Dashboard</h3>
          <div className="user-info">
            <p>
              <strong>Name:</strong> {user ? user.name : "Loading..."}
            </p>
            <p>
              <strong>Employee ID:</strong> {user ? user.employeeId : "Loading..."}
            </p>
            <p>
              <strong>User Type:</strong> {user ? user.user_type : "Loading..."}
            </p>
          </div>

          <div className="dashboard-actions">
            <button
              onClick={() => navigate("/faculty/create-assignment")}
              className="action-btn"
            >
              Create Assignment
            </button>
            <button
              onClick={() => navigate("/faculty/grade-assignment")}
              className="action-btn"
            >
              Grade Assignment
            </button>
            <button
              onClick={() => navigate("/faculty/profile")}
              className="action-btn"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css"; // CSS file for styling

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch student details from localStorage
    const storedStudent = JSON.parse(localStorage.getItem("student"));

    if (storedStudent && storedStudent.email === email && storedStudent.password === password) {
      alert("Login successful!");
      // Store user data in localStorage and redirect to dashboard
      localStorage.setItem("user", JSON.stringify(storedStudent)); // Store logged-in user data
      navigate("/student/dashboard"); // Redirect to student dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2>Student Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Login</button>
        </form>

        <div className="link">
          <p>
            Don't have an account?{" "}
            <a href="/student/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;

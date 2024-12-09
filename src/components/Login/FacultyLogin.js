import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const FacultyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve faculty details from localStorage
    const storedDetails = JSON.parse(localStorage.getItem("faculty"));

    if (storedDetails?.email === email && storedDetails?.password === password) {
      // Save user session in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({ email, user_type: "faculty" })
      );

      alert("Login successful! Redirecting to dashboard...");
      navigate("/faculty/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="faculty-login">
      <div className="login-form-container">
        <h2>Faculty Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="link">
          <p>
            Don't have an account? <a href="/faculty/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;

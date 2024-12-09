import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";

const FacultySignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
    password: "",
    phoneNumber: "",
    subject: "JFSD",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Save faculty details in localStorage
    localStorage.setItem("faculty", JSON.stringify(formData));

    alert("Signup successful! Redirecting to login...");
    navigate("/faculty/login");
  };

  return (
    <div className="faculty-signup">
      {/* Signup Box on the Left */}
      <div className="signup-form-container">
        <h2>Faculty Signup</h2>
        <form onSubmit={handleSignup}>
          {/* Input Fields */}
          {[
            { name: "name", type: "text", placeholder: "Name" },
            { name: "employeeId", type: "text", placeholder: "Employee ID" },
            { name: "email", type: "email", placeholder: "Email" },
            { name: "password", type: "password", placeholder: "Password" },
            { name: "phoneNumber", type: "tel", placeholder: "Phone Number" },
          ].map(({ name, type, placeholder }) => (
            <div className="input-container" key={name}>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          {/* Subject Dropdown */}
          <div className="input-container">
            <label htmlFor="subject" className="subject-label">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              {[
                "JFSD",
                "ATFL",
                "NIS",
                "AOOP",
                "CTOOD",
                "DWM",
                "DAV",
                "SVV",
                "CIS",
                "MERN",
              ].map((subject) => (
                <option value={subject} key={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit">Sign Up</button>
        </form>

        {/* Login Link */}
        <div className="footer">
          <p>
            Already have an account? <a href="/faculty/login">Login here</a>
          </p>
        </div>
      </div>

      {/* Right-side Text */}
      <div className="faculty-registration-text">
        <h1>Faculty Registration</h1>
        <p>Sign up to access your dashboard and manage your classes effortlessly.</p>
      </div>
    </div>
  );
};

export default FacultySignup;

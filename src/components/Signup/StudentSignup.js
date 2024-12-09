import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentSignup.css";

const StudentSignup = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !id || !email || !phoneNumber || !address || !branch || !year || !password) {
      setErrorMessage("Please fill in all the fields.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // Create student object
    const newStudent = {
      name,
      id,
      email,
      phoneNumber,
      address,
      branch,
      year,
      password,
    };

    // Save student data to localStorage (or a mock database)
    localStorage.setItem("student", JSON.stringify(newStudent));

    // Redirect to student dashboard after successful signup
    navigate("/student/dashboard");
  };

  const handleLoginRedirect = () => {
    navigate("/student/login");
  };

  return (
    <div className="signup-container">
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Form Group for Inputs */}
        {[
          { id: "name", label: "Name", value: name, setValue: setName, type: "text" },
          { id: "id", label: "ID", value: id, setValue: setId, type: "text" },
          { id: "email", label: "Email", value: email, setValue: setEmail, type: "email" },
          { id: "phoneNumber", label: "Phone Number", value: phoneNumber, setValue: setPhoneNumber, type: "tel" },
          { id: "address", label: "Address", value: address, setValue: setAddress, type: "text" },
          { id: "branch", label: "Branch", value: branch, setValue: setBranch, type: "text" },
          { id: "year", label: "Year", value: year, setValue: setYear, type: "number" },
          { id: "password", label: "Password", value: password, setValue: setPassword, type: "password" },
        ].map(({ id, label, value, setValue, type }) => (
          <div className="form-group" key={id}>
            <label htmlFor={id}>{label}:</label>
            <input
              id={id}
              type={type}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Enter your ${label.toLowerCase()}`}
              required
            />
          </div>
        ))}

        {/* Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-button">Sign Up</button>
      </form>

      {/* Login Option */}
      <div className="login-option">
        <p>
          Already have an account?{" "}
          <span onClick={handleLoginRedirect} className="login-link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default StudentSignup;

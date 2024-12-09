import React, { useState, useEffect } from "react";
import "./FacultyProfile.css";

const FacultyProfile = () => {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    // Retrieve the faculty details from localStorage
    const storedFaculty = JSON.parse(localStorage.getItem("faculty"));
    if (storedFaculty) {
      setFaculty(storedFaculty);
    } else {
      alert("No faculty data found");
    }
  }, []);

  if (!faculty) {
    return <div>Loading...</div>;
  }

  return (
    <div className="faculty-profile">
      <h2>Faculty Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {faculty.name}</p>
        <p><strong>Employee ID:</strong> {faculty.employeeId}</p>
        <p><strong>Email:</strong> {faculty.email}</p>
        <p><strong>Phone Number:</strong> {faculty.phoneNumber}</p>
        <p><strong>Subject:</strong> {faculty.subject}</p>
      </div>
    </div>
  );
};

export default FacultyProfile;

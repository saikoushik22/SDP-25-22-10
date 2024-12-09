import React, { useState, useEffect } from "react";
import "./ViewProfile.css"; // Optional CSS file for styling

const ViewProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Simulate fetching student data from local storage or a mock database
    const storedStudent = JSON.parse(localStorage.getItem("user"));
    if (storedStudent) {
      setStudent(storedStudent);
    } else {
      // If no student data is found, redirect to login page
      window.location.href = "/student/login";
    }
  }, []);

  return (
    <div className="profile-container">
      <h2>Student Profile</h2>
      {student ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Branch:</strong> {student.branch}</p>
          <p><strong>Year:</strong> {student.year}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
          <p><strong>Address:</strong> {student.address}</p>


        </div>
      ) : (
        <p>Loading student profile...</p>
      )}
    </div>
  );
};

export default ViewProfile;

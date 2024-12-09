import React from "react";
import './StudentProfile.css'; // Custom CSS for styling (optional)

const StudentProfile = () => {
  // Simulated student data (you can replace this with props or API data later)
  const studentDetails = {
    name: "Puru Sai Koushik",
    id: "CS2024",
    email: "koushik@example.com",
    phoneNumber: "9876543210",
    address: "123, Main Street, Hyderabad, India",
    branch: "Computer Science Engineering",
    year: "3rd Year",
    specialization: "Artificial Intelligence and Machine Learning",
  };

  return (
    <div className="student-profile-container">
      <h2>Student Profile</h2>
      <div className="profile-details">
        <p>
          <strong>Name:</strong> {studentDetails.name}
        </p>
        <p>
          <strong>ID:</strong> {studentDetails.id}
        </p>
        <p>
          <strong>Email:</strong> {studentDetails.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {studentDetails.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {studentDetails.address}
        </p>
        <p>
          <strong>Branch:</strong> {studentDetails.branch}
        </p>
        <p>
          <strong>Year:</strong> {studentDetails.year}
        </p>
        <p>
          <strong>Specialization:</strong> {studentDetails.specialization}
        </p>
      </div>
    </div>
  );
};

export default StudentProfile;

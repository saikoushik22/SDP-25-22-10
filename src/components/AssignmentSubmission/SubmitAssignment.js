// src/components/AssignmentSubmission/SubmitAssignment.js

import React, { useState } from 'react';
import './SubmitAssignment.css'; // Import CSS for styling (if needed)

const SubmitAssignment = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      // Simulate file upload or logic to handle file submission
      alert(`Assignment "${file.name}" uploaded successfully!`);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="submit-assignment-container">
      <h3>Submit Your Assignment</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit Assignment</button>
    </div>
  );
};

export default SubmitAssignment;

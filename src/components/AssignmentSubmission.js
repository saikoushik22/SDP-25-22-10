import React, { useState } from 'react';
import './AssignmentSubmission.css'; // Custom CSS for styling
import StudentNav from './Dashboard/StudentNav';

const AssignmentSubmission = () => {
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [assignmentName, setAssignmentName] = useState('');
  const [dragging, setDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = () => {
    setDragging(false);
  };

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setAssignmentFile(file);
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAssignmentFile(file);
  };

  // Handle assignment name change
  const handleAssignmentNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if assignment name and file are provided
    if (!assignmentFile || !assignmentName) {
      setErrorMessage('Please provide both assignment name and file.');
      return;
    }

    // Create a blob URL and download the file to the user's system
    const blob = new Blob([assignmentFile], { type: assignmentFile.type });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${assignmentName}_${assignmentFile.name}`;
    downloadLink.click();

    setUploadSuccess(true);
    setErrorMessage('');
    setAssignmentFile(null); // Clear the file input
    setAssignmentName(''); // Reset the assignment name
  };

  return (
    <div className="submit-assignment-container">
      <StudentNav />
      <h2>Submit Your Assignment</h2>
      <form onSubmit={handleSubmit}>
        {/* Assignment Name */}
        <div className="form-group">
          <label htmlFor="assignmentName">Assignment Name:</label>
          <input
            type="text"
            id="assignmentName"
            value={assignmentName}
            onChange={handleAssignmentNameChange}
            placeholder="Enter Assignment Name"
            required
          />
        </div>

        {/* Drag-and-Drop Upload Area */}
        <div
          className={`drag-drop-area ${dragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p>Drag & Drop your assignment file here, or click to browse</p>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            hidden
          />
        </div>

        {/* Display selected file name */}
        {assignmentFile && (
          <div className="file-info">
            <p><strong>Selected file:</strong> {assignmentFile.name}</p>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit Assignment</button>
      </form>

      {/* Error or Success Messages */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {uploadSuccess && <div className="success-message">Assignment saved locally successfully!</div>}
    </div>
  );
};

export default AssignmentSubmission;

import React, { useState, useEffect } from "react";
import "./ViewGrade.css"; // Import a custom CSS file for styling

const ViewGrade = () => {
  // Sample grades data (You can fetch this data from API or localStorage)
  const [grades, setGrades] = useState([
    { assignmentName: "Assignment 1", marks: 85, grade: "A" },
    { assignmentName: "Assignment 2", marks: 78, grade: "B+" },
    { assignmentName: "Assignment 3", marks: 92, grade: "A+" },
    { assignmentName: "Assignment 4", marks: 74, grade: "B" }
  ]);

  return (
    <div className="view-grades-container">
      <h2>View Your Grades</h2>
      
      {/* Grades Table */}
      <table className="grades-table">
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.assignmentName}</td>
              <td>{grade.marks}</td>
              <td>{grade.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewGrade;

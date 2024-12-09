import React, { useState } from 'react';
import './GradeAssignment.css'; // Importing the CSS file

const GradeAssignments = () => {
    const [assignments, setAssignments] = useState([
        { id: 1, name: 'John Doe', file: 'assignment1.pdf', marks: '' },
        { id: 2, name: 'Jane Smith', file: 'assignment2.pdf', marks: '' },
        { id: 3, name: 'Samuel Lee', file: 'assignment3.pdf', marks: '' },
        { id: 4, name: 'Olivia Brown', file: 'assignment4.pdf', marks: '' },
        { id: 5, name: 'Liam Johnson', file: 'assignment5.pdf', marks: '' },
    ]);

    const handleGrade = (id) => {
        alert(`Grading assignment for student with ID: ${id}`);
    };

    const handleMarksChange = (id, value) => {
        setAssignments(prevAssignments =>
            prevAssignments.map(assignment =>
                assignment.id === id ? { ...assignment, marks: value } : assignment
            )
        );
    };

    const handleSubmitMarks = (id) => {
        const marks = assignments.find(assignment => assignment.id === id).marks;
        if (marks < 0 || marks > 100) {
            alert('Please enter marks between 0 and 100');
        } else {
            alert(`Marks for student ID ${id}: ${marks}`);
        }
    };

    return (
        <div className="grade-assignments-container">
            <h2>Grade Assignments</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name of Student</th>
                            <th>File</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((assignment, index) => (
                            <tr key={assignment.id}>
                                <td>{index + 1}</td>
                                <td>{assignment.name}</td>
                                <td>
                                    <a 
                                        href={`./path/to/your/local/storage/${assignment.file}`} 
                                        download
                                    >
                                        {assignment.file}
                                    </a>
                                </td>
                                <td>
                                    <input 
                                        type="number" 
                                        value={assignment.marks} 
                                        onChange={(e) => handleMarksChange(assignment.id, e.target.value)} 
                                        placeholder="Marks" 
                                        max="100" 
                                        min="0" 
                                    />
                                    Out of 100
                                    <button onClick={() => handleSubmitMarks(assignment.id)}>Grade</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GradeAssignments;

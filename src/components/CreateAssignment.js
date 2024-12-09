import { useState } from "react";

const CreateAssignment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const assignmentData = {
      title,
      description,
    };

    // Simulate creating assignment (in a real app, send this data to the backend)
    console.log("New Assignment Created:", assignmentData);
    alert("Assignment Created Successfully!");
  };

  return (
    <div>
      <center>
      <h2>Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Assignment Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Create Assignment</button>
      </form>
      </center>
    </div>
  );
};

export default CreateAssignment;

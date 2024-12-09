import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dashboard Components
import MainDashboard from "./components/MainDashboard";
import FacultyDashboard from "./components/Dashboard/FacultyDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard";

// Signup Components
import StudentSignup from "./components/Signup/StudentSignup";
import FacultySignup from "./components/Signup/FacultySignup";

// Login Components
import StudentLogin from "./components/Login/StudentLogin";
import FacultyLogin from "./components/Login/FacultyLogin";

// Student Features
import AssignmentSubmission from "./components/AssignmentSubmission";
import ViewGrade from "./components/ViewGrade";
import ViewProfile from "./components/ViewProfile"; // Student Profile

// Faculty Features
import CreateAssignment from "./components/CreateAssignment";
import GradeAssignment from "./components/GradeAssignment";
import FacultyProfile from "./components/FacultyProfile"; // Faculty Profile

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Dashboard */}
        <Route path="/" element={<MainDashboard />} />

        {/* Signup Routes */}
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/faculty/signup" element={<FacultySignup />} />

        {/* Login Routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/faculty/login" element={<FacultyLogin />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/submit-assignment" element={<AssignmentSubmission />} />
        <Route path="/student/view-grade" element={<ViewGrade />} />
        <Route path="/student/profile" element={<ViewProfile />} /> {/* Student Profile */}

        {/* Faculty Routes */}
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/create-assignment" element={<CreateAssignment />} />
        <Route path="/faculty/grade-assignment" element={<GradeAssignment />} />
        <Route path="/faculty/profile" element={<FacultyProfile />} /> {/* Faculty Profile */}
      </Routes>
    </Router>
  );
}

export default App;

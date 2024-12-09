import { useState } from "react";
import axios from "../../config/api/axios";
import ErrorStrip from "../ErrorStrip";

const SignupForm = ({ userType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/auth/signup/${userType}`, { username, password });
      alert(`${userType} registration successful!`);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <form onSubmit={handleSignup} className="w-full">
      <input
        className="block w-full mb-4 p-2 rounded-md border dark:border-slate-200"
        placeholder={`${userType} username`}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="block w-full mb-4 p-2 rounded-md border dark:border-slate-200"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full p-2 bg-violet-600 text-white rounded-md"
      >
        Register
      </button>
      {error && <ErrorStrip error={error} />}
    </form>
  );
};

export default SignupForm;

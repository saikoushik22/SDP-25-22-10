import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api/axios";
import { PiSpinnerGapBold } from "react-icons/pi";
import ErrorStrip from "../ErrorStrip";

const LoginForm = ({ userType, onSuccess }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Login");

  const handleLogin = async (e) => {
    e.preventDefault();
    setButtonText("Loading...");
    try {
      const response = await axios.post(`/auth/login/${userType}`, {
        username,
        password,
      });
      onSuccess(response.data);
      localStorage.setItem(
        "userDetails",
        JSON.stringify({ ...response.data, userType })
      );
    } catch (err) {
      setError(err);
      setButtonText("Login");
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-full">
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
        disabled={buttonText !== "Login"}
        className="w-full p-2 bg-violet-600 text-white rounded-md flex justify-center items-center"
      >
        {buttonText !== "Login" && <PiSpinnerGapBold className="animate-spin mr-2" />}
        {buttonText}
      </button>
      {error && <ErrorStrip error={error} />}
    </form>
  );
};

export default LoginForm;

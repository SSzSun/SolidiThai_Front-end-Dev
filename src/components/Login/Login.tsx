import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { users } from "../../data/User";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");

      if (user.permission) {
        navigate("/dashboard");
      } else {
        setError("You do not have permission ");
      }
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <input
          type="text"
          placeholder="👤 Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="🔑 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

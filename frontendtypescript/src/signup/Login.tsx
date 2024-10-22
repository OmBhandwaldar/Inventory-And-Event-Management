import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState<string | null>(null); // Added error state
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error before new request

    try {
      // Simulate an API request for login
      const response = await fetch("http://localhost:3000/api/v1/user/signin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // Simulate successful login (e.g., navigate or set auth token)
        // console.log("Login successful");
        const data = await response.json();
        const token = data.token;
        const role = data.role || null;
        // console.log(data);
        if (!token) {
          throw new Error("Login Failed");
        }
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);
        const task = localStorage.getItem("role");
        console.log(task);
        if (task == "teacher") {
          navigate("/admin-view");
        } else if (task == "student") {
          navigate("/user-view");
        }
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      // Handle error
      if (err instanceof Error) {
        setError(err.message); // Display error message
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 text-red-500">
              <p>{error}</p> {/* Display error message */}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email/Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
            <a href="/signup" className="text-sm text-blue-500 hover:underline">
              Sign Up
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            disabled={loading} // Disable button during loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

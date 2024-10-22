import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Remove JWT token from localStorage
    localStorage.removeItem("role");
    navigate("/login"); // Redirect to login page
    console.log("logout successful");
  };

  return logout;
};

export default Logout;

import React from "react";
import useLogout from "@/logout/Logout"; // Ensure the path is correct
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import ProtectedRoute from "@/signup/ProtectedRoute";
import isAuthenticated from "@/signup/ProtectedRoute";

const NavbarItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}> = ({ icon, label, onClick }) => {
  return (
    <div
      className="flex text-xl flex-start items-center cursor-pointer text-white"
      onClick={onClick}
    >
      <div className="mr-1">{icon}</div>
      <div>{label}</div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const logout = useLogout(); // Call the useLogout hook

  return (
    <div>
      <div className="flex items-end justify-between bg-gray-900 p-4">
        <Link to="/">
          <div className="text-3xl font-extrabold text-white">PCCOE</div>
        </Link>
        {/* <ProtectedRoute> */}
        {isAuthenticated() ? (
          <NavbarItem
            icon={<FaSignOutAlt />}
            label="Logout"
            onClick={logout} // Call the logout function on click
          />
        ) : null}
        {/* </ProtectedRoute> */}
      </div>
    </div>
  );
};

export default Navbar;

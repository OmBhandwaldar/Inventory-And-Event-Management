import React from "react";
import {
  FaHome,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

interface NavbarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, label, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 p-2 text-lg text-white hover:bg-gray-800 rounded-md cursor-pointer duration-200"
    >
      <div>{icon}</div>
      <div>{label}</div>
    </a>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="flex items-end justify-between bg-gray-900 p-4">
      {/* Navbar Title */}
      <div className="text-xl font-bold">Shadcn</div>

      {/* Navbar Links */}
      <div className="flex space-x-4">
        <NavbarItem icon={<FaHome />} label="Home" href="/" />
        <NavbarItem icon={<FaUsers />} label="Users" href="/users" />
        <NavbarItem icon={<FaChartLine />} label="Reports" href="/reports" />
        <NavbarItem icon={<FaCog />} label="Settings" href="/settings" />
      </div>

      {/* Menu Toggle Button */}
      <button className="text-3xl text-white">
        <NavbarItem icon={<FaSignOutAlt />} label="Logout" href="/logout" />
      </button>
    </div>
  );
};

export default Navbar;

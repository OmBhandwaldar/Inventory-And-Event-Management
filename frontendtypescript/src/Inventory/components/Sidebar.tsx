import React from "react";
import {
  FaHome,
  FaUsers,
  FaChartLine,
  FaCog,
  // FaSignOutAlt,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  isOpen,
}) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-4 p-3 text-lg hover:bg-gray-800 rounded-md cursor-pointer duration-200 ${
        !isOpen && "justify-center"
      }`}
    >
      <div>{icon}</div>
      <div className={`${!isOpen && "hidden"}`}>{label}</div>
    </a>
  );
};

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white min-h-screen ${
          isOpen ? "w-64" : "w-20"
        } duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 bg-gray-800">
          <span className={`text-xl font-bold ml-6 ${!isOpen && "hidden"}`}>
<<<<<<< HEAD
            {isOpen && 'Menu'}
=======
            {isOpen && "Close"}
>>>>>>> c2354c31962a4dd981eeacdae94b7ad80e18f8ee
          </span>
          <button onClick={toggleSidebar}>
            <HiMenuAlt3 className="text-3xl" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4">
          <SidebarItem
            icon={<FaHome />}
            label="Home"
            href="/"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<FaUsers />}
            label="Users"
            href="/users"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<FaChartLine />}
            label="Reports"
            href="/reports"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<FaCog />}
            label="Settings"
            href="/settings"
            isOpen={isOpen}
          />
        </nav>

        {/* Logout */}
        {/* <div className="p-4">
          <SidebarItem
            icon={<FaSignOutAlt />}
            label="Logout"
            href="/logout"
            isOpen={isOpen}
          />
        </div> */}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 p-6">{children}</div>
    </div>
  );
};

export default Sidebar;

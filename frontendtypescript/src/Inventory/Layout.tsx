import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Assuming your Sidebar is in the same directory

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-gray-100 p-8">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4">This is where the main content goes...</p>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Header from "./Header";
import OverviewCards from "./OverviewCards";
import BarChartComponent from "./BarChartComponent";
import RecentSales from "./RecentSales";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <Header />

      {/* Overview Cards */}
      <OverviewCards />

      {/* Overview Chart and Recent Sales */}
      <div className="flex flex-wrap justify-between mt-8 gap-4">
        <BarChartComponent />
        <RecentSales />
      </div>
    </div>
  );
};

export default Dashboard;

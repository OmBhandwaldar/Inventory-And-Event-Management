const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Total Revenue */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-lg">Total Events</h2>
        <p className="text-3xl font-bold">11</p>
        <p className="text-green-500">+2.1% from last month</p>
      </div>

      {/* Subscriptions */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-lg">Total Products</h2>
        <p className="text-3xl font-bold">67</p>
        <p className="text-green-500">+18.1% from last month</p>
      </div>

      {/* Sales */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-lg">Sales</h2>
        <p className="text-3xl font-bold">+12,234</p>
        <p className="text-green-500">+19% from last month</p>
      </div>

      {/* Active Now */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-lg">Active Now</h2>
        <p className="text-3xl font-bold">+573</p>
        <p className="text-green-500">+20 since last hour</p>
      </div>
    </div>
  );
};

export default OverviewCards;

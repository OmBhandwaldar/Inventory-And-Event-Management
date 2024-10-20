const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Total Revenue */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-lg">Total Revenue</h2>
        <p className="text-3xl font-bold">$45,231.89</p>
        <p className="text-green-500">+20.1% from last month</p>
      </div>

      {/* Subscriptions */}
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h2 className="text-lg">Subscriptions</h2>
        <p className="text-3xl font-bold">+2,350</p>
        <p className="text-green-500">+180.1% from last month</p>
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
        <p className="text-green-500">+201 since last hour</p>
      </div>
    </div>
  );
};

export default OverviewCards;

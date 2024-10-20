const Header = () => {  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="flex space-x-4 items-center">
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          Jan 20, 2023 - Feb 09, 2023
        </div>
        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg">
          <a href="/inventoryreports">
            View Reports
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;

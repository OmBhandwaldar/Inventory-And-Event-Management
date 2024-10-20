const salesData = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "$1,999.00",
  },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "$39.00" },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "$299.00",
  },
  { name: "William Kim", email: "will@email.com", amount: "$99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "$39.00" },
];

const RecentSales = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full md:w-1/3">
      <h2 className="text-lg mb-4">Recent Events</h2>
      <p className="mb-4">You made 9 events this month.</p>
      <ul>
        {salesData.map((sale, index) => (
          <li key={index} className="flex justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full" />
              <div>
                <p className="font-semibold">{sale.name}</p>
                <p className="text-gray-400 text-sm">{sale.email}</p>
              </div>
            </div>
            <div className="text-green-500 font-bold">{sale.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSales;

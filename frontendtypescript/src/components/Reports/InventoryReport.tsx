import SearchBar from "@/utils/SearchBar";
import { useEffect, useState } from "react";

const InventoryReport = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      _id: "1",
      itemName: "Projector",
      quantity: 5,
      description: "High-resolution projectors for events and classrooms.",
    },
    {
      _id: "2",
      itemName: "Whiteboard Markers",
      quantity: 50,
      description: "Markers for use in classrooms and conferences.",
    },
    {
      _id: "3",
      itemName: "Microphone",
      quantity: 10,
      description: "Wireless microphones for conferences and guest lectures.",
    },
    {
      _id: "4",
      itemName: "Chairs",
      quantity: 200,
      description: "Plastic chairs for outdoor events.",
    },
    {
      _id: "5",
      itemName: "Laptop",
      quantity: 15,
      description: "Laptops for workshop use and presentations.",
    },
    {
      _id: "6",
      itemName: "Sound System",
      quantity: 3,
      description: "Complete sound system setup with speakers and mixer.",
    },
    {
      _id: "7",
      itemName: "Stage Lights",
      quantity: 8,
      description: "LED stage lights for events.",
    },
    {
      _id: "8",
      itemName: "HD Camera",
      quantity: 4,
      description: "HD cameras for event recordings.",
    },
    {
      _id: "9",
      itemName: "Tables",
      quantity: 30,
      description: "Folding tables for use in events and workshops.",
    },
    {
      _id: "10",
      itemName: "Podium",
      quantity: 2,
      description: "Wooden podiums for guest lectures and presentations.",
    },
  ]);
  //   const [loading, setLoading] = useState<Boolean>(true);
  // const [error, setError] = useState<String>('null');

  // useEffect(() => {
  //   const fetchInventoryData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/api/v1/reports/inventory');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch inventory data');
  //       }
  //       const data = await response.json();
  //       setInventoryData(data);
  //     } catch (error) {
  //       console.error('Error fetching inventory data:', error);
  //       setError('Failed to load inventory data. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchInventoryData();
  //   console.log("First run...");
  // }, []);

  // if (loading) {
  //   return <p>Loading inventory data...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <>
      <div className="flex justify-between mb-5">
        <SearchBar />
        <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.itemName}
                </th>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InventoryReport;

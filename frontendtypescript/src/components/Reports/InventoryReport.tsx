import { useState, useRef, useEffect } from "react";
import SearchBar from "@/utils/SearchBar";

const InventoryReport = () => {
  const [inventoryData, setInventoryData] = useState([
    {
      _id: "1",
      itemName: "Projector",
      quantity: 5,
      description: "High-resolution projectors for events and classrooms.",
      branch: "Computer",
      event: true,
      eventName: "Mrigaya",
    },
    // Other inventory items...
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Download file from server
  //original
  // const downloadFile = async (fileType: string) => {
  //   const endpoint =
  //     fileType === "csv" ? "/api/v1/reports/inventory/csv" : "/api/v1/reports/inventory/pdf";
    
  //   try {
  //     const response = await fetch(endpoint, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': fileType === 'csv' ? 'text/csv' : 'application/pdf',
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to download file');
  //     }

  //     const blob = await response.blob(); // Convert response to blob
  //     const url = window.URL.createObjectURL(blob); // Create URL for file

  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = `inventory_report.${fileType}`; // Set the file name
  //     document.body.appendChild(link); // Append link to body
  //     link.click(); // Simulate click to download the file
  //     link.remove(); // Clean up
  //   } catch (error) {
  //     console.error("Error downloading the file:", error);
  //   }
  // };

  const downloadFile = async (fileType: string) => {
    const endpoint = fileType === "csv" ? "http://localhost:3000/api/v1/reports/inventory/csv" : "http://localhost:3000/api/v1/reports/inventory/pdf";
    
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': fileType === 'csv' ? 'text/csv' : 'application/pdf',
          'Cache-Control': 'no-cache', // Bypass cache
        },
      });
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
  
      const blob = await response.blob(); 
      const url = window.URL.createObjectURL(blob); 
      const link = document.createElement('a');
      link.href = url;
      link.download = `inventory_report.${fileType}`; 
      document.body.appendChild(link);
      link.click(); 
      link.remove();
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleDownload = (fileType: string) => {
    setIsDropdownOpen(false);
    downloadFile(fileType);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between mb-5">
        <SearchBar />
        <div className="relative">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={toggleDropdown}
          >
            Download
          </button>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10"
            >
              <button
                onClick={() => handleDownload("csv")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Download as CSV
              </button>
              <button
                onClick={() => handleDownload("pdf")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Download as PDF
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table code remains unchanged */}
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
            Branch
          </th>
          <th scope="col" className="px-6 py-3">
            Event
          </th>
          <th scope="col" className="px-6 py-3">
            Event Name
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
            <td className="px-6 py-4">{item.branch}</td>
            <td className="px-6 py-4">{item.event === false ? 'none' : 'True'}</td>
            <td className="px-6 py-4">{item.eventName === null ? 'none': item.eventName}</td>
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

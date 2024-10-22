import { useState, useRef, useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import SearchBar from "@/utils/SearchBar";
import Modal from "@/utils/Modal"; // Import the modal component
import DescModal from "@/utils/DescModal";

interface InventoryItem {
  _id: string;
  itemName: string;
  quantity: number;
  description: string;
  request: string;
  branch: string;
  event: boolean;
  eventName?: string;
}

// const role = localStorage.getItem("role");
const role = 'Studenst';
console.log("Role:", role);

const InventoryReport = () => {
  const [inventData, setInventData] = useState<InventoryItem[]>([]);
  console.log(inventData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/inventory', {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Data fetch failed(dev)");
        }
        const inventoryDataFront: InventoryItem[] = await response.json();
        setInventData(inventoryDataFront);
        console.log(inventoryDataFront);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const [isEventFiltered, setIsEventFiltered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [selectedProduct, setSelectedProduct] = useState<InventoryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescModalOpen, setIsDescModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const downloadFile = async (fileType: string) => {
    const endpoint =
      fileType === "csv"
        ? "http://localhost:3000/api/v1/reports/inventory/csv"
        : "http://localhost:3000/api/v1/reports/inventory/pdf";

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": fileType === "csv" ? "text/csv" : "application/pdf",
          "Cache-Control": "no-cache",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
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

  const handleEventFilter = () => {
    setIsEventFiltered(!isEventFiltered);
  };

  // const handleEditClick = (product: InventoryItem) => {
  //   setSelectedProduct(product);
  //   setIsModalOpen(true);
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  const handleInfoDescClick = (product: InventoryItem) => {
    setSelectedProduct(product);
    setIsDescModalOpen(true);
  };

  const handleCloseDescModal = () => {
    setIsDescModalOpen(false);
    setSelectedProduct(null);
  };

  const handleRequestClick = () => {
    setIsModalOpen(true);
  }

  const filteredData = inventData.filter((item) => {
    const matchesSearchTerm = item.itemName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesEventFilter = isEventFiltered ? item.event === true : true;
    return matchesSearchTerm && matchesEventFilter;
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
      {role !== 'Student' &&
      <div className="mx-9 mt-5">
        <div className="flex justify-between mb-6">
          <SearchBar setSearchTerm={setSearchTerm} />
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

          <button
            onClick={handleEventFilter}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            {isEventFiltered ? "Show All" : "Event-wise"}
          </button>
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
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Event
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Requests
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
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
                  <td className="px-6 py-4">
                    {item.event === false ? "none" : "True"}
                  </td>
                  <td className="px-6 py-4">
                    {item.event === false ? "none" : item.eventName}
                  </td>
                  <td className="px-6 py-4" >
                    Approve | Decline
                  </td>
                  {/* <td className="px-6 py-4" >
                    {item.request === 'Partially Approved' ? (
                      <div className="flex gap-2" onClick={() => handleInfoDescClick(item)}>
                        {item.request} <IoInformationCircleOutline fontSize="23px"/>
                      </div>
                    ) : (
                      item.request
                    )}
                  </td> */}
                  {/* <td className="px-6 py-4"> 
                    <a
                      href="#"
                      onClick={() => handleEditClick(item)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Request
                    </a>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Render Modal conditionally */}
        {/* {isModalOpen && selectedProduct && (
          <Modal product={selectedProduct} onClose={handleCloseModal} />
        )} */}

      </div> }

      {role === 'Student' && 
      <>
      <div className="mx-9 mt-5">
        <div className="flex justify-between mb-6">
          <div className="relative">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleRequestClick}
            >
              Request Product
            </button>
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
                  Branch
                </th>
                <th scope="col" className="px-6 py-3">
                  Event
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Request Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
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
                  <td className="px-6 py-4">
                    {item.event === false ? "none" : "True"}
                  </td>
                  <td className="px-6 py-4">
                    {item.event === false ? "none" : item.eventName}
                  </td>
                  <td className="px-6 py-4" >
                    {item.request === 'Partially Approved' ? (
                      <div className="flex gap-2" onClick={() => handleInfoDescClick(item)}>
                        {item.request} <IoInformationCircleOutline fontSize="23px"/>
                      </div>
                    ) : (
                      item.request
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Render Modal conditionally */}
        {isModalOpen  && (
          <Modal  onClose={handleCloseModal} />
        )}

        {isDescModalOpen && selectedProduct && (
          <DescModal product={selectedProduct} onClose={handleCloseDescModal} />
        )}
      </div>
      </>
      }
    </>
  );
};

export default InventoryReport;
// import { useState, useEffect, useRef } from "react";

// const SearchBar = () => {
//   // State to manage the dropdown visibility and selected category
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   // Reference for the dropdown to detect clicks outside
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);  // Reference for the dropdown button

//   // Function to toggle the dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownVisible((prev) => {
//       console.log("Dropdown toggled. Current visibility:", !prev); // Debug log
//       return !prev;
//     });
//   };

//   // Function to handle category selection
//   const handleSelectCategory = (category: string) => {
//     setSelectedCategory(category); // Set the selected category
//     setIsDropdownVisible(false); // Close the dropdown
//   };

//   // Function to detect clicks outside the dropdown to close it
//   const handleClickOutside = (event: MouseEvent) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
//       setIsDropdownVisible(false); // Close the dropdown if the click is outside
//       console.log("Click detected outside. Closing dropdown.");
//     }
//   };

//   // Add event listener for clicks outside the dropdown
//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <form className="w-[45%]">
//       <div className="flex relative">
//         <label
//           htmlFor="search-dropdown"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//         >
//           Your Email
//         </label>

//         {/* Button to toggle dropdown visibility */}
//         <button
//           ref={buttonRef}
//           id="dropdown-button"
//           type="button"
//           className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
//           onClick={toggleDropdown}
//         >
//           {selectedCategory || "All categories"} {/* Display selected category */}
//           <svg
//             className="w-2.5 h-2.5 ms-2.5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </button>

//         {/* Dropdown menu */}
//         <div
//           ref={dropdownRef}
//           id="dropdown"
//           className={`${
//             isDropdownVisible ? "block" : "hidden"
//           } z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
//           style={{ marginTop: "5px" }}
//         >
//           <ul
//             className="py-2 text-sm text-gray-700 dark:text-gray-200"
//             aria-labelledby="dropdown-button"
//           >
//             <li>
//               <button
//                 type="button"
//                 className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 onClick={() => handleSelectCategory("Event-Wise")}
//               >
//                 Event-Wise
//               </button>
//             </li>
//             <li>
//               <button
//                 type="button"
//                 className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 onClick={() => handleSelectCategory("Branch-Wise")}
//               >
//                 Branch-Wise
//               </button>
//             </li>
//           </ul>
//         </div>

//         {/* Search input */}
//         <div className="relative w-full">
//           <input
//             type="search"
//             id="search-dropdown"
//             className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//             placeholder="Search products..."
//             required
//           />
//           <button
//             type="submit"
//             className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             <svg
//               className="w-4 h-4"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//             <span className="sr-only">Search</span>
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;


import { useState, useEffect, useRef } from "react";

const SearchBar = ({ setSearchTerm }: { setSearchTerm: React.Dispatch<React.SetStateAction<string>> }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  console.log(selectedCategory);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setInputValue(category);
    setIsDropdownVisible(false);
    setSearchTerm(category);  // Update the parent component with the selected term
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);  // Update the parent component with the input
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      {/* Input Field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="bg-white text-gray-700 placeholder-gray-400 focus:outline-none border border-gray-300 rounded-lg px-4 py-2 w-80 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-500"
      />

      {/* Dropdown Button */}
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="ml-2 bg-gray-200 text-gray-600 p-2 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          className="absolute left-0 mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 dark:bg-gray-800 dark:border-gray-700"
        >
          <div
            className="cursor-pointer p-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={() => handleCategorySelection("Projector")}
          >
            Projector
          </div>
          <div
            className="cursor-pointer p-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={() => handleCategorySelection("Laptop")}
          >
            Laptop
          </div>
          <div
            className="cursor-pointer p-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={() => handleCategorySelection("Microphone")}
          >
            Microphone
          </div>
          <div
            className="cursor-pointer p-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
            onClick={() => handleCategorySelection("Speaker")}
          >
            Speaker
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
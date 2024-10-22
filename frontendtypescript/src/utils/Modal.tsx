// import React, { useState } from 'react';

// interface ModalProps {
//   onClose: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ onClose }) => {
//   // State for input values
//   const [productName, setProductName] = useState(''); // Product name
//   const [requestQuantity, setRequestQuantity] = useState(''); // Quantity requested
//   const [branch, setBranch] = useState(''); // Branch name
//   const [event, setEvent] = useState(''); // Event
//   const [eventName, setEventName] = useState(''); // Event name

//   // Handle input changes
//   const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProductName(e.target.value);
//   };

//   const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRequestQuantity(e.target.value);
//   };

//   const handleBranchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setBranch(e.target.value);
//   };

//   const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEvent(e.target.value);
//   };

//   const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEventName(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Prepare the request data
//     const requestData = {
//       itemsRequested: productName,
//       quantityRequested: requestQuantity,
//       branch: branch,
//       eventt: event,
//       eventName: eventName,
//       organizerEmail: 'omapmk@gmail.com', // Static email for demo purposes
//     };

//     try {
//       const response = await fetch('http://localhost:3000/api/v1/inventory/request-items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('Response:', data);

//       // Clear the inputs after submission
//       setProductName('');
//       setRequestQuantity('');
//       setBranch('');
//       setEvent('');
//       setEventName('');

//       onClose(); // Close modal after submission
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <>
//       {/* Backdrop with blur effect */}
//       <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
//         {/* Modal content */}
//         <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
//           {/* Modal Header */}
//           <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//             <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//               Request Dialog
//             </h3>
//             <button
//               type="button"
//               onClick={onClose}
//               className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               <svg
//                 className="w-3 h-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                 />
//               </svg>
//               <span className="sr-only">Close modal</span>
//             </button>
//           </div>

//           {/* Modal Body */}
//           <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
//             <div className="mb-6">
//               <input
//                 type="text"
//                 placeholder="Product Name"
//                 value={productName}
//                 onChange={handleProductNameChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Request Quantity"
//                 value={requestQuantity}
//                 onChange={handleQuantityChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Branch"
//                 value={branch}
//                 onChange={handleBranchChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Event"
//                 value={event}
//                 onChange={handleEventChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Event Name"
//                 value={eventName}
//                 onChange={handleEventNameChange}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               />
//             </div>

//             {/* Modal Footer */}
//             <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
//               <button
//                 type="submit"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Submit Request
//               </button>
//               <button
//                 onClick={onClose}
//                 type="button"
//                 className="ml-2 text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-400"
//               >
//                 Close
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;


import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  // State for input values
  const [productName, setProductName] = useState(''); // Product name
  const [requestQuantity, setRequestQuantity] = useState(''); // Quantity requested
  const [branch, setBranch] = useState(''); // Branch name
  const [event, setEvent] = useState(false); // Event
  const [eventName, setEventName] = useState(''); // Event name

  // Handle input changes
  const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestQuantity(e.target.value);
  };

  const handleBranchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBranch(e.target.value);
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.checked); // Handle boolean toggle for event
  };

  const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (!productName || !requestQuantity || !branch) {
      alert('Please fill out all required fields.');
      return;
    }

    // Prepare the request data
    const requestData = {
      itemsRequested: productName,
      quantityRequested: requestQuantity,
      branch: branch,
      eventt: event,
      eventName: event ? eventName : undefined, // Only send eventName if event is true
      organizerEmail: 'omapmk@gmail.com', // Static email for demo purposes
    };

    try {
      const response = await fetch('http://localhost:3000/api/v1/inventory/request-items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);

      // Clear the inputs after submission
      setProductName('');
      setRequestQuantity('');
      setBranch('');
      setEvent(false);
      setEventName('');

      onClose(); // Close modal after submission
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* Backdrop with blur effect */}
      <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        {/* Modal content */}
        <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Request Dialog
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal Body */}
          <form onSubmit={handleSubmit} className="p-4 md:p-5 space-y-4">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={handleProductNameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                required
              />
              <input
                type="text"
                placeholder="Request Quantity"
                value={requestQuantity}
                onChange={handleQuantityChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                required
              />
              <input
                type="text"
                placeholder="Branch"
                value={branch}
                onChange={handleBranchChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                required
              />
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={event}
                  onChange={handleEventChange}
                  className="mr-2"
                />
                Event
              </label>
              {event && (
                <input
                  type="text"
                  placeholder="Event Name"
                  value={eventName}
                  onChange={handleEventNameChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={event} // Required only when event is true
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit Request
              </button>
              <button
                onClick={onClose}
                type="button"
                className="ml-2 text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-400"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

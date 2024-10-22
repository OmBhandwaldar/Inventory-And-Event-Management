const DescModal = ({ product, onClose }: any) => {
    return (
      <>
        {/* Backdrop with blur effect */}
        <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          {/* Modal content */}
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Response
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
            <div className="p-4 md:p-5 space-y-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quis pariatur mollitia ipsa? Velit deserunt voluptates facilis porro consequatur, beatae in es
                {/* {product.requestDesc} */}
             </div>
          </div>
        </div>
      </>
    );
  };
  
  export default DescModal;
  
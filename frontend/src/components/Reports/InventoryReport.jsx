import React, { useEffect, useState } from "react";

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
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // const fetchInventoryData = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/api/v1/reports/inventory');
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch inventory data');
    //     }
    //     const data = await response.json();
    //     setInventoryData(data);
    //   } catch (error) {
    //     console.error('Error fetching inventory data:', error);
    //     setError('Failed to load inventory data. Please try again later.');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchInventoryData();
    console.log("First run...");
  }, []);

  // if (loading) {
  //   return <p>Loading inventory data...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    // <div>
    //   <h1>Inventory Report</h1>
    //   <table style={{ width: '100%', border: '1px solid black', textAlign: 'left' }}>
    //     <thead>
    //       <tr>
    //         <th style={{ borderBottom: '1px solid black' }}>Item Name</th>
    //         <th style={{ borderBottom: '1px solid black' }}>Quantity</th>
    //         <th style={{ borderBottom: '1px solid black' }}>Description</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {inventoryData.map((item) => (
    //         <tr key={item._id}>
    //           <td style={{ padding: '8px', borderBottom: '1px solid black' }}>{item.itemName}</td>
    //           <td style={{ padding: '8px', borderBottom: '1px solid black' }}>{item.quantity}</td>
    //           <td style={{ padding: '8px', borderBottom: '1px solid black' }}>{item.description}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    //   <div style={{ marginTop: '20px' }}>
    //     <a
    //       // href="http://localhost:3000/api/reports/inventory/csv"
    //       // download="inventory_report.csv"
    //       onClick={() => alert('CSV download starting...')}
    //     >
    //       Download CSV
    //     </a>
    //     <br />
    //     <a
    //       // href="http://localhost:3000/api/reports/inventory/pdf"
    //       // download="inventory_report.pdf"
    //       onClick={() => alert('PDF download starting...')}
    //     >
    //       Download PDF
    //     </a>
    //   </div>
    // </div>
    <>
      <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
        <div class="w-full">
          <div class="flex items-center py-4">
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
              placeholder="Filter emails..."
              value=""
            />
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto"
              type="button"
              id="radix-:rd6:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              Columns{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down ml-2 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div class="rounded-md border">
            <div class="relative w-full overflow-auto">
              <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                  <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        aria-label="Select all"
                      ></button>
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Status
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        Email
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-arrow-up-down ml-2 h-4 w-4"
                        >
                          <path d="m21 16-4 4-4-4"></path>
                          <path d="M17 20V4"></path>
                          <path d="m3 8 4-4 4 4"></path>
                          <path d="M7 4v16"></path>
                        </svg>
                      </button>
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="text-right">Amount</div>
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"></th>
                  </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                  <tr
                    class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    data-state="false"
                  >
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        aria-label="Select row"
                      ></button>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="capitalize">success</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="lowercase">ken99@yahoo.com</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="text-right font-medium">$316.00</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        type="button"
                        id="radix-:rd8:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span class="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    data-state="false"
                  >
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        aria-label="Select row"
                      ></button>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="capitalize">success</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="lowercase">Abe45@gmail.com</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="text-right font-medium">$242.00</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        type="button"
                        id="radix-:rda:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span class="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    data-state="false"
                  >
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        aria-label="Select row"
                      ></button>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="capitalize">processing</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="lowercase">Monserrat44@gmail.com</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="text-right font-medium">$837.00</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        type="button"
                        id="radix-:rdc:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span class="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    data-state="false"
                  >
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        aria-label="Select row"
                      ></button>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="capitalize">success</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="lowercase">Silas22@gmail.com</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="text-right font-medium">$874.00</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        type="button"
                        id="radix-:rde:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span class="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    data-state="false"
                  >
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked="false"
                        data-state="unchecked"
                        value="on"
                        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        aria-label="Select row"
                      ></button>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="capitalize">failed</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="lowercase">carmella@hotmail.com</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div class="text-right font-medium">$721.00</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        type="button"
                        id="radix-:rdg:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span class="sr-only">Open menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex items-center justify-end space-x-2 py-4">
            <div class="flex-1 text-sm text-muted-foreground">
              0 of 5 row(s) selected.
            </div>
            <div class="space-x-2">
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                disabled=""
              >
                Previous
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                disabled=""
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryReport;

// import React, { useEffect, useState } from 'react';

// const InventoryReport = () => {
//   const [inventoryData, setInventoryData] = useState([]);

//   useEffect(() => {
//     const fetchInventoryData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/v1/reports/inventory');
//         const data = await response.json();
//         setInventoryData(data);
//       } catch (error) {
//         console.error('Error fetching inventory data:', error);
//       }
//     };

//     fetchInventoryData();
//   }, []);

//   return (
//     <div>
//       <h1>Inventory Report</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inventoryData.map((item) => (
//             <tr key={item._id}>
//               <td>{item.itemName}</td>
//               <td>{item.quantity}</td>
//               <td>{item.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <a href="http://localhost:5000/api/reports/inventory/csv" download="inventory_report.csv">
//           Download CSV
//         </a>
//         <br />
//         <a href="http://localhost:5000/api/reports/inventory/pdf" download="inventory_report.pdf">
//           Download PDF
//         </a>
//       </div>
//     </div>
//   );
// };

// export default InventoryReport;

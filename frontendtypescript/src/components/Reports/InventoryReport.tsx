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
    <div>
      <h1>Inventory Report</h1>
      <table style={{ width: '100%', border: '1px solid black', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid black' }}>Item Name</th>
            <th style={{ borderBottom: '1px solid black' }}>Quantity</th>
            <th style={{ borderBottom: '1px solid black' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item._id}>
              <td style={{ padding: '8px', borderBottom: '1px solid black' }}>{item.itemName}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid black' }}>{item.quantity}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid black' }}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <a
          // href="http://localhost:3000/api/reports/inventory/csv"
          // download="inventory_report.csv"
          onClick={() => alert('CSV download starting...')}
        >
          Download CSV
        </a>
        <br />
        <a
          // href="http://localhost:3000/api/reports/inventory/pdf"
          // download="inventory_report.pdf"
          onClick={() => alert('PDF download starting...')}
        >
          Download PDF
        </a>
      </div>
    </div>

  );
};

export default InventoryReport;
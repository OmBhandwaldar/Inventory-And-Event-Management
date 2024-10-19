import React, { useEffect, useState } from 'react';

const InventoryReport = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/reports/inventory');
        const data = await response.json();
        setInventoryData(data);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };

    fetchInventoryData();
  }, []);

  return (
    <div>
      <h1>Inventory Report</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item._id}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <a href="http://localhost:5000/api/reports/inventory/csv" download="inventory_report.csv">
          Download CSV
        </a>
        <br />
        <a href="http://localhost:5000/api/reports/inventory/pdf" download="inventory_report.pdf">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default InventoryReport;

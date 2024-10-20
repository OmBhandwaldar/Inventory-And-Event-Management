const express = require('express');
const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');
const Inventory = require('../db'); // Assuming you have a properly set up MongoDB schema for Inventory

const router = express.Router();

// Get JSON report
router.get('/inventory', async (req, res) => {
  try {
    const inventoryData = await Inventory.find({});
    res.json(inventoryData);
  } catch (error) {
    console.error('Error generating JSON report:', error);
    res.status(500).json({ message: 'Error generating report', error });
  }
});

// Generate CSV report
router.get('/inventory/csv', async (req, res) => {
  try {
    const inventoryData = await Inventory.find({});

    // Sanitize fields that may contain commas or special characters
    const fields = ['itemName', 'quantity', 'description'];
    const opts = { fields };
    
    const csv = new Parser(opts).parse(inventoryData);
    res.header('Content-Type', 'text/csv');
    res.attachment('inventory_report.csv');
    res.send(csv);
  } catch (error) {
    console.error('Error generating CSV report:', error);
    res.status(500).json({ message: 'Error generating CSV report', error });
  }
});



router.get('/inventory/pdf', async (req, res) => {
  console.log('in inventory/pdf....');
  const doc = new PDFDocument({
    autoFirstPage: false, // Manually handle page creation
    size: 'A4', // A4 page size
  });

  // Add headers to prevent caching
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Expires', '0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=inventory_report.pdf');

  doc.addPage(); // Manually add the first page

  // Set title
  doc.fontSize(25).text('Inventory Report', { align: 'center' });
  doc.moveDown(1);  // Move down slightly after title

  // Define table headers and their positions
  const headers = ['Item Name', 'Quantity', 'Branch', 'Event', 'Event Name'];
  const columnWidth = 100; // Column width
  const startX = 50;
  let startY = 100;  // Starting Y position for the table

  // Draw the table headers
  doc.fontSize(12);
  
  // Header cells with borders
  const headerCellHeight = 30; // Height of header row
  
  // Draw the header cells and text
  headers.forEach((header, index) => {
    const x = startX + index * columnWidth;  // X position for each column
    doc.rect(x, startY, columnWidth, headerCellHeight).stroke(); // Draw cell
    doc.text(header, x + 5, startY + 5, { width: columnWidth - 10, align: 'center' }); // Center the header text
  });

  // Draw horizontal line after header row
  doc.moveTo(startX, startY + headerCellHeight)
    .lineTo(startX + columnWidth * headers.length, startY + headerCellHeight)
    .stroke();

  // Inventory data (replace with actual MongoDB data)
  const inventoryData = [
    {
      _id: "1",
      itemName: "Projector",
      quantity: 5,
      branch: "Computer",
      event: true,
      eventName: "Mrigaya",
    },
    // Add more items as required
  ];


  const rowHeight = 30; // Row height
  const rowMargin = 5; // Margin inside cells

  // Iterate over the inventory data and draw each row
  inventoryData.forEach((item, rowIndex) => {
    const rowY = startY + headerCellHeight + (rowIndex * rowHeight); // Position each row

    // Draw the cells and borders for each row
    doc.rect(startX, rowY, columnWidth, rowHeight).stroke(); // Item Name
    doc.rect(startX + columnWidth, rowY, columnWidth, rowHeight).stroke(); // Quantity
    doc.rect(startX + columnWidth * 2, rowY, columnWidth, rowHeight).stroke(); // Branch
    doc.rect(startX + columnWidth * 3, rowY, columnWidth, rowHeight).stroke(); // Event
    doc.rect(startX + columnWidth * 4, rowY, columnWidth, rowHeight).stroke(); // Event Name

    // Write the actual content in each cell, centered in the cell
    doc.fontSize(10);
    doc.text(item.itemName, startX + rowMargin, rowY + rowMargin, { width: columnWidth - 2 * rowMargin, align: 'center' });
    doc.text(item.quantity.toString(), startX + columnWidth + rowMargin, rowY + rowMargin, { width: columnWidth - 2 * rowMargin, align: 'center' });
    doc.text(item.branch, startX + columnWidth * 2 + rowMargin, rowY + rowMargin, { width: columnWidth - 2 * rowMargin, align: 'center' });
    doc.text(item.event ? 'Yes' : 'No', startX + columnWidth * 3 + rowMargin, rowY + rowMargin, { width: columnWidth - 2 * rowMargin, align: 'center' });
    doc.text(item.eventName || 'N/A', startX + columnWidth * 4 + rowMargin, rowY + rowMargin, { width: columnWidth - 2 * rowMargin, align: 'center' });

    // Optional: Draw horizontal line after each row (for clarity)
    if (rowIndex < inventoryData.length - 1) {
      doc.moveTo(startX, rowY + rowHeight)
        .lineTo(startX + columnWidth * headers.length, rowY + rowHeight)
        .stroke();
    }
  });

  // End the document and pipe it to the response
  doc.end();
  doc.pipe(res);  // Pipes the PDF response to the client

});

module.exports = router;
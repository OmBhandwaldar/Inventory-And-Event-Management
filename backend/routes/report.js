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

// Generate PDF report
router.get('/inventory/pdf', async (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=inventory_report.pdf');

  try {
    doc.fontSize(25).text('Inventory Report', { align: 'center' });
    doc.moveDown();

    const inventoryData = await Inventory.find({});
    inventoryData.forEach(item => {
      doc.fontSize(12).text(`Item: ${item.itemName}, Quantity: ${item.quantity}, Description: ${item.description}`);
    });

    doc.end();
    doc.pipe(res);  // Pipes the PDF response to the client
  } catch (error) {
    console.error('Error generating PDF report:', error);
    res.status(500).json({ message: 'Error generating PDF report', error });
  }
});

module.exports = router;



// const express = require('express');
// const { Parser } = require('json2csv');
// const PDFDocument = require('pdfkit');
// const Inventory = require('../db');

// const router = express.Router();

// // Get JSON report
// router.get('/inventory', async (req, res) => {
//   try {
//     const inventoryData = await Inventory.find({});
//     res.json(inventoryData);
//   } catch (error) {
//     res.status(500).json({ message: 'Error generating report', error });
//   }
// });

// // Generate CSV report 
// router.get('/inventory/csv', async (req, res) => {
//   try {
//     const inventoryData = await Inventory.find({});
//     const csv = new Parser().parse(inventoryData);
//     res.header('Content-Type', 'text/csv');
//     res.attachment('inventory_report.csv');
//     res.send(csv);
//   } catch (error) {
//     res.status(500).json({ message: 'Error generating CSV report', error });
//   }
// });

// // Generate PDF report - isme dekhna padega thoda...i think there's a small bug 
// router.get('/inventory/pdf', async (req, res) => {
//   const doc = new PDFDocument();
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'attachment; filename=inventory_report.pdf');

//   doc.fontSize(25).text('Inventory Report', { align: 'center' });
//   doc.moveDown();

//   try {
//     const inventoryData = await Inventory.find({});
//     inventoryData.forEach(item => {
//       doc.text(`Item: ${item.itemName}, Quantity: ${item.quantity}, Description: ${item.description}`);
//     });

//     doc.end();
//     doc.pipe(res);
//   } catch (error) {
//     res.status(500).json({ message: 'Error generating PDF report', error });
//   }
// });

// module.exports = router;
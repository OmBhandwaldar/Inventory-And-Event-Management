const express = require('express');
const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');
const Inventory = require('../db');

const router = express.Router();

// Get JSON report
router.get('/inventory', async (req, res) => {
  try {
    const inventoryData = await Inventory.find({});
    res.json(inventoryData);
  } catch (error) {
    res.status(500).json({ message: 'Error generating report', error });
  }
});

// Generate CSV report 
router.get('/inventory/csv', async (req, res) => {
  try {
    const inventoryData = await Inventory.find({});
    const csv = new Parser().parse(inventoryData);
    res.header('Content-Type', 'text/csv');
    res.attachment('inventory_report.csv');
    res.send(csv);
  } catch (error) {
    res.status(500).json({ message: 'Error generating CSV report', error });
  }
});

// Generate PDF report - isme dekhna padega thoda...i think there's a small bug 
router.get('/inventory/pdf', async (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=inventory_report.pdf');

  doc.fontSize(25).text('Inventory Report', { align: 'center' });
  doc.moveDown();

  try {
    const inventoryData = await Inventory.find({});
    inventoryData.forEach(item => {
      doc.text(`Item: ${item.itemName}, Quantity: ${item.quantity}, Description: ${item.description}`);
    });

    doc.end();
    doc.pipe(res);
  } catch (error) {
    res.status(500).json({ message: 'Error generating PDF report', error });
  }
});

module.exports = router;
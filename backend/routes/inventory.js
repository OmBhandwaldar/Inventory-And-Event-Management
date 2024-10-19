const express = require('express');
import { Inventory } from '../db';
import { authenticate } from '../middleware';
const jwt = require('jsonwebtoken');
const PDFDocument = require('pdfkit');
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const inventoryData = await Inventory.find({});
      res.json(inventoryData);
    } catch (error) {
      res.status(500).json({ message: 'Error generating report', error });
    }
});

// //CSV
// const { Parser } = require('json2csv');

// router.get('/csv', async (req, res) => {
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


// //PDF
// router.get('/pdf', async (req, res) => {
//   const doc = new PDFDocument();
//   res.setHeader('Content-Type', 'application/pdf');
//   res.setHeader('Content-Disposition', 'attachment; filename=inventory_report.pdf');

//   doc.fontSize(25).text('Inventory Report', { align: 'center' });
//   doc.moveDown();

//   try {
//     const inventoryData = await Inventory.find({});
//     inventoryData.forEach(item => {
//       doc.text(`Item: ${item.itemName}, Quantity: ${item.quantity}`);
//     });

//     doc.end();
//     doc.pipe(res);
//   } catch (error) {
//     res.status(500).json({ message: 'Error generating PDF report', error });
//   }
// });

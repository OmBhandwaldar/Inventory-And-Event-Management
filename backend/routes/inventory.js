const express = require('express');
const nodemailer = require('nodemailer');
const { User, Inventory, Event } = require('../db');
const jwt = require('jsonwebtoken');
const PDFDocument = require('pdfkit');
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();



async function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Use environment variable
      pass: process.env.EMAIL_PASS   // Use environment variable
    },
    secure: false, // Use true for 465, false for other ports
    tls: {
      rejectUnauthorized: false // Avoid certificate validation errors
    }
  });
}

// Function to send request email to Inventory Manager
async function sendRequestToInventoryManager(organizerEmail, managerEmail, itemsRequested, quantityRequested, branch, eventt, eventName) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: managerEmail,
    subject: 'New Item Request for Event',
    text: `Event organizer (${organizerEmail}) has requested the following items:\n\n${itemsRequested}\n\nPlease review and approve the request \n\n ${quantityRequested}\n${branch}\n${eventt}\n${eventName}.`
  };

  return transporter.sendMail(mailOptions);
}

// Function to send approval email to Event Organizer
async function sendApprovalToEventOrganizer(organizerEmail, itemsApproved) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: organizerEmail,
    subject: 'Item Request Approved',
    text: `Your request for the following items has been approved:\n\n${itemsApproved}\n\nYou may proceed with the event preparation.`
  };

  return transporter.sendMail(mailOptions);
}

// Route to handle event organizer's item request
router.post('/request-items', async (req, res) => { 
  const { organizerEmail, itemsRequested, quantityRequested, branch, eventt, eventName } = req.body;
  const managerEmail = 'ashitosh.katale22@pccoepune.org'

  try {
    await sendRequestToInventoryManager(organizerEmail, managerEmail, itemsRequested, quantityRequested, branch, eventt, eventName);
    
    res.status(200).json({ message: 'Request email sent to Inventory Manager.' });
  } catch (error) {
    console.error('Error sending email to Inventory Manager:', error);
    res.status(500).json({ error: 'Error sending email to Inventory Manager: ' + error.message });
  }
});

// Route to handle inventory manager's approval
router.post('/request-items', async (req, res) => {
  const { organizerEmail, itemsRequested, quantityRequested, branch, eventt, eventName } = req.body;
  const managerEmail = 'yashraj.haridas22@pccoepune.org'; // Inventory Manager's email

  try {
    // Send request email to the inventory manager
    await sendRequestToInventoryManager(
      organizerEmail,
      managerEmail,
      itemsRequested,
      quantityRequested,
      branch,
      eventt,
      eventName
    );

    // Create a new request entry in the Inventory collection
    const newRequest = new Inventory({
      itemName: itemsRequested,
      quantity: quantityRequested,
      branch: branch,
      event: eventt,
      eventName: eventName,
      request: 'Pending', // Add a status field to track the request (Optional)
    });

    // Save the request data to the Inventory collection
    await newRequest.save();

    // Respond with success after saving the data and sending the email
    res.status(200).json({ message: 'Request email sent to Inventory Manager and request logged in the database.' });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Error handling request: ' + error.message });
  }
});


router.get('/', async (req, res) => {
    try {
      const inventoryData = await Inventory.find({});
      console.log('in api/v1/inventory')
      console.log(inventoryData)
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

module.exports = router;
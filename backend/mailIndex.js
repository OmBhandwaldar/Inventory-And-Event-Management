const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config(); // To use environment variables

const app = express();
app.use(express.json());

// Create a transporter for Gmail
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
async function sendRequestToInventoryManager(organizerEmail, managerEmail, itemsRequested) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: managerEmail,
    subject: 'New Item Request for Event',
    text: `Event organizer (${organizerEmail}) has requested the following items:\n\n${itemsRequested}\n\nPlease review and approve the request.`
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
app.post('/request-items', async (req, res) => {
  const { organizerEmail, managerEmail, itemsRequested } = req.body;

  try {
    await sendRequestToInventoryManager(organizerEmail, managerEmail, itemsRequested);
    res.status(200).json({ message: 'Request email sent to Inventory Manager.' });
  } catch (error) {
    console.error('Error sending email to Inventory Manager:', error);
    res.status(500).json({ error: 'Error sending email to Inventory Manager: ' + error.message });
  }
});

// Route to handle inventory manager's approval
app.post('/approve-request', async (req, res) => {
  const { organizerEmail, itemsApproved } = req.body;

  try {
    await sendApprovalToEventOrganizer(organizerEmail, itemsApproved);
    res.status(200).json({ message: 'Approval email sent to Event Organizer.' });
  } catch (error) {
    console.error('Error sending email to Event Organizer:', error);
    res.status(500).json({ error: 'Error sending approval email: ' + error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const nodemailer = require('nodemailer');

// Function to send request email to Inventory Manager
async function sendRequestToInventoryManager(organizerEmail, managerEmail, itemsRequested) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kataleashitosh123@gmail.com',
      pass: 'Ashitosh@2003' 
    }
  });

  let mailOptions = {
    from: 'kataleashitosh123@gmail.com',
    to: managerEmail, // Inventory Manager's email address
    subject: 'New Item Request for Event',
    text: `Event organizer (${organizerEmail}) has requested the following items:\n\n${itemsRequested}\n\nPlease review and approve the request.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Request email sent to Inventory Manager: ' + info.response);
  });
}

// Function to send approval email to Event Organizer
async function sendApprovalToEventOrganizer(organizerEmail, itemsApproved) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Environment variable for email
        pass: process.env.EMAIL_PASS  // Environment variable for password
      }
    });
  
    let mailOptions = {
      from: process.env.EMAIL_USER, // Use the email from environment variables
      to: organizerEmail, // Event Organizer's email address
      subject: 'Item Request Approved',
      text: `Your request for the following items has been approved:\n\n${itemsApproved}\n\nYou may proceed with the event preparation.`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Approval email sent to Event Organizer: ' + info.response);
    });
}

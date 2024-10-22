# PCCOE Inventory and Event Management System

## Introduction

The PCCOE Inventory and Event Management System is a web application that automates event planning and resource management at Pimpri Chinchwad College of Engineering. Key features include real-time inventory tracking, automated venue booking, and the automation of permission requests and money requests, enhancing coordination among departments and users. With multi-user role support and an integrated calendar, the system optimizes operational efficiency and improves the event experience at PCCOE. This unified platform aims to manage event resources, inventory, and venue booking, reducing manual errors and improving coordination.

## Main features

The proposed solution is a web-based application that automates the process of resource booking, event organization, and inventory management for PCCOE. Key features include:

- **Automated Payment Request**: Automated payment requests will sent to the respective vendors or sellers for the purchasing of products.

- **Inventory Management**: Manage inventory such as event materials, marketing supplies, and stationery. Real-time inventory tracking of various departments and keep stock levels updated.
  
- **Automated Event and Resource Booking**: Allow staff and departments to request the booking of venues (halls, classrooms, labs) for events or lectures. The system handles approvals and scheduling conflicts automatically.
  
- **Permission Requests**: Automate the process of seeking necessary permissions for event organization from department heads, faculty, and administrative offices.
  
- **Communication Tools**: Send automated notifications and updates to students, faculty, and relevant staff members about upcoming events, resource bookings, and any changes in schedules through mails, messages and in-house notifications.
  
- **Report Generation**: Generate reports on inventory consumption, branch-wise and employee-wise, and provide an overview of resource utilization for events and activities in pdf and csv format.


- **Integrated Calendar System**: A centralized calendar that displays both booked and available venues, preventing scheduling conflicts for events. Integration of google calender along with this helps keep users up-to-date.

- **Event Marketing Tools**: Includes marketing features like customizable email templates and social media integration to effectively promote events within the PCCOE community.

- **Multi-User Role Support**: Enables various access levels for event organizers, faculty, inventory managers, and administrators to manage events, book resources, and oversee inventory seamlessly.

- **Analytics Dashboard**: Provides valuable insights into event performance, resource utilization, and branch-specific inventory consumption to enhance future event planning.

## Tech Stack

- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: CSS, Tailwind CSS 


## Screenshots

### Admin Interface Overview

![UI Overview](https://github.com/user-attachments/assets/875e6bd9-b081-4812-9ccc-229a75496777)

### Event Management Dashboard

![Event Management](https://github.com/user-attachments/assets/6ad7d10a-3fb3-4fa7-a942-3ee7b3a457cc)

### Event Details View

![Event Details](https://github.com/user-attachments/assets/bc0da5e8-24e6-4397-8d23-26353875f086)

### Daily Events Display

![Daily Events](https://github.com/user-attachments/assets/a4ae4f51-2d6a-4cc1-8a33-34d9fdd3d92d)

### Additional Views

![Additional Views](https://github.com/user-attachments/assets/5d27f753-d67d-4a8b-b528-4434ad2757bc)

![More Views](https://github.com/user-attachments/assets/bd898bdd-35bc-4bdf-b69d-6bff3f9e3808)

![Final View](https://github.com/user-attachments/assets/14f9d04d-5aa7-49d2-a3ab-7f9f90a97783)

## Deployment

- **Deployed URL**: [Link to Deployed Solution](#)
- **Demo Video**: [Watch the Demo Video](https://drive.google.com/file/d/1UadcTHR1DwYydblWjME_Fp4S6WDvomr6/view?usp=drive_link)

## Running the Project

To run the application locally, use the following commands:

```bash
cd ./backend
npm install
node index.js

cd ../frontendtypescript
npm install
npm run dev

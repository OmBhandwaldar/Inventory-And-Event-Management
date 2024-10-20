import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./signup/UserLogin";
import UserSignup from "./signup/UserSignup";
import Dashboard from "./ReportDashboard/Dashboard";
import UserView from "./components/UserView/UserView";
import AdminView from "./components/AdminView/AdminView";
import EventDetails from "./components/EventDetails/EventDetails";
import AddEventModal from "./components/AddEventModal/AddEventModal";
import InventoryReport from "./components/Reports/InventoryReport";
import Navbar from "./Inventory/components/Navbar";
import Sidebar from "./Inventory/components/Sidebar";
import React, { useState } from "react";

function App() {
  const isAdmin = true;
  const [isAddEventModalOpen, setAddEventModalOpen] = useState(false); // State to manage modal visibility
  const selectedDate = new Date(); // Replace with your actual logic for selected date

  const handleAddEvent = (event: { title: string; fromTime: string; toTime: string; details: string; venue: string }) => {
    console.log("Event added:", event);
    // Add your logic to handle the added event here
    setAddEventModalOpen(false); // Close modal after adding event
  };

  const handleModalClose = () => {
    setAddEventModalOpen(false); // Close modal
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/"
            element={
              <Sidebar>
                {isAdmin ? <AdminView /> : <UserView />}
              </Sidebar>
            }
          />
          <Route
            path="/event-details"
            element={
              <Sidebar>
                <EventDetails />
              </Sidebar>
            }
          ></Route>
          <Route
            path="/add-event"
            element={
              <>
                <Sidebar>
                  <button onClick={() => setAddEventModalOpen(true)}>Add Event</button>
                </Sidebar>
                {isAddEventModalOpen && (
                  <AddEventModal
                    onAddEvent={handleAddEvent}
                    onClose={handleModalClose}
                    selectedDate={selectedDate}
                  />
                )}
              </>
            }
          ></Route>
          <Route path="/user-view" element={<UserView />}></Route>
          <Route
            path="/admin-view"
            element={
              <Sidebar>
                <AdminView />
              </Sidebar>
            }
          ></Route>
          <Route path="/inventoryreports" element={
            <Sidebar>
              <InventoryReport />
            </Sidebar>
          }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

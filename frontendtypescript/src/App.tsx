import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./signup/UserLogin";
import UserSignup from "./signup/UserSignup";
import Dashboard from "./ReportDashboard/Dashboard";
import UserView from "./components/UserView/UserView";
import AdminView from "./components/AdminView/AdminView";
import EventDetails from "./components/EventDetails/EventDetails";

// import EventDetails from "./components/EventDetails/EventDetails";
// import UserView from "./components/UserView/UserView";
// import AdminView from "./components/AdminView/AdminView";
// // import { Inventory } from "../../backend/db";
// import InventoryReport from "./components/Reports/InventoryReport";

import InventoryReport from "./components/Reports/InventoryReport";
import Layout from "./Inventory/Layout";

// import { Sidebar } from "lucide-react";

function App() {
  const isAdmin = false;
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<>Home</>}></Route> */}
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/" element={isAdmin ? <AdminView /> : <UserView />} />
          <Route path="/event-details" element={<EventDetails />}></Route>
          {/* <Route path="/temp" element = {<InventoryReport/>}></Route> */}
          <Route path="/inventory" element={<Layout />}></Route>
          <Route path="/user-view" element={<UserView />}></Route>
          <Route path="/admin-view" element={<AdminView />}></Route>
          <Route path="/event-details" element={<EventDetails />}></Route>
          <Route path="/temp" element={<InventoryReport />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

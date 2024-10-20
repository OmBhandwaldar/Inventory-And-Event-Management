import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./signup/UserLogin";
import UserSignup from "./signup/UserSignup";
import Dashboard from "./ReportDashboard/Dashboard";
import UserView from "./components/UserView/UserView";
import AdminView from "./components/AdminView/AdminView";
import EventDetails from "./components/EventDetails/EventDetails";
import InventoryReport from "./components/Reports/InventoryReport";


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<>Home</>}></Route> */}
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user-view" element={<UserView />}></Route>
          <Route path="/admin-view" element={<AdminView />}></Route>
          <Route path="/event-details" element={<EventDetails />}></Route>
          // <Route path="/temp" element = {<InventoryReport/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

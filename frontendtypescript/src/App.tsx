import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./signup/UserLogin";
import UserSignup from "./signup/UserSignup";
import Dashboard from "./ReportDashboard/Dashboard";
import UserView from "./components/UserView/UserView";
import AdminView from "./components/AdminView/AdminView";
import EventDetails from "./components/EventDetails/EventDetails";
<<<<<<< HEAD

// import EventDetails from "./components/EventDetails/EventDetails";
// import UserView from "./components/UserView/UserView";
// import AdminView from "./components/AdminView/AdminView";
// // import { Inventory } from "../../backend/db";
// import InventoryReport from "./components/Reports/InventoryReport";
=======
import InventoryReport from "./components/Reports/InventoryReport";
>>>>>>> c1fd7a7fdb3e8d88dac76f77e2b31a0c8c564bbc


function App() {
  const isAdmin = true;
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<>Home</>}></Route> */}
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
<<<<<<< HEAD
          <Route path="/" element={isAdmin ? <AdminView /> : <UserView />} />
          <Route path="/event-details" element={<EventDetails />}></Route>
          {/* <Route path="/temp" element = {<InventoryReport/>}></Route> */}
=======
          <Route path="/user-view" element={<UserView />}></Route>
          <Route path="/admin-view" element={<AdminView />}></Route>
          <Route path="/event-details" element={<EventDetails />}></Route>
          // <Route path="/temp" element = {<InventoryReport/>}></Route>
>>>>>>> c1fd7a7fdb3e8d88dac76f77e2b31a0c8c564bbc
        </Routes>
      </Router>
    </>
  );
}

export default App;

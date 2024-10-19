import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./signup/UserLogin";
import UserSignup from "./signup/UserSignup";
import Dashboard from "./ReportDashboard/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>Home</>}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          {/* <Route path="/login" element = {}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

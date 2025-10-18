import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import DemoPage from "./pages/Demo"; // Make sure this path is correct and DemoPage is exported
import ProfilePage from "./pages/Profile";
import Patient from "./pages/Patient";
import ResearchDashboard from "./pages/Researcher";
import DoctorDashbpard from "./pages/Doctor";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/patient" element={<Patient/>}/>
        <Route path="/research" element={<ResearchDashboard />} />
        <Route path="/doctor" element={<DoctorDashbpard />} />
      </Routes>
    </Router>
  );
}

export default App;

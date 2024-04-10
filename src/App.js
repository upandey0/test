import React from "react";
import "./styles/AllDashboard.css";
import "./styles/dashboard.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/sales.css";
import "./styles/upload.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import ReportsType from "./pages/ReportsType";
import Sales from "./pages/Sales";
import Signup from "./pages/SignUp";
import UploadReports from "./pages/UploadReports";
import Subscription from "./pages/Subscription";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<ReportsType />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/dashboard/:id/sales/:id" element={<Sales />} />
          <Route path="/upload" element={<UploadReports />} />
=======
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard/:id" element={<ReportsType />} />
            <Route path="/dashboard/:id/sales/:id" element={<Sales />} />
            <Route path="/upload" element={<UploadReports />} />
          </Route>
>>>>>>> origin/main
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

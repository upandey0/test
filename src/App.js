import React from "react";
import "./styles/sales.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/dashboard.css";
import "./styles/AllDashboard.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sales from "./pages/Sales";
import Dashboard from "./pages/Dashboard";
import ReportsType from "./pages/ReportsType";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<ReportsType />} />

          <Route path="/dashboard/:id/sales/:id" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

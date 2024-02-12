import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import DashboardLayout from "../Layouts/DashboardLayout";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <ProtectedRoute
          path="/"
          element={<DashboardLayout/>}
          isAuthenticated={isAuthenticated}
        />
      </Routes>
    </Router>
  );
};

export default App;

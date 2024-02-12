import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Inventory from "../Pages/Inventory/Inventory";
import Orders from "../Pages/Orders/Orders";
import Customers from "../Pages/Customers/Customers";
import DashboardLayout from "../Layouts/DashboardLayout";
import Login from "../Pages/LoginPage/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

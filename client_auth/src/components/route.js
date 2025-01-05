import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Register from "../components/Register";

const AppRoutes = () => {
  return (
  <>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  </>
  
  );
};

export default AppRoutes;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Bookings from "../pages/Bookings";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";
import SignInSide from "../pages/SignInSide";

const Router = () => {
  // Get the level from localStorage
  const userLevel = localStorage.getItem("level");

  return (
    <Routes>
      <Route
        path="/"
        element={
          userLevel !== "root" ? (
            <Navigate to="/bookings" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/sell-car" element={<SellCar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<SignInSide />} />
    </Routes>
  );
};

export default Router;

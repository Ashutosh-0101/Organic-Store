import React from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from "../modules/home/Home";
import About from "../modules/about/About";
import Dashboard from "../modules/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Nav from "../components/Nav";
const AppRoute = () => {
  return (
    <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<About />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

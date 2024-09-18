import React from "react";
import { NavLink, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/nav.css";
import Login from "./login/Login";
const Nav = () => {
  const navigate = useNavigate();

  const activeNavLink = ({ isActive }) => {
    return {
      padding: ".5rem",
      backgroundColor: isActive ? "#ccc" : null,
    };
  };

  return (
    <div className="navBar">
      <div>
        <nav>
          <NavLink style={activeNavLink} to="/">
            Home
          </NavLink>
          <NavLink style={activeNavLink} to="/public">
            Public Route
          </NavLink>
          <NavLink style={activeNavLink} to="/dashboard">
            Private Route
          </NavLink>
        </nav>
      </div>
      <div>
        <Login/>
      </div>
    </div>
  );
};

export default Nav;

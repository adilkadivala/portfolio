import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/css/admin/sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  return (
    <>
      <section id="sidebar" className={isOpen ? "" : "hide"}>
        <NavLink to="/dashboard" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </NavLink>
        <ul className="side-menu top">
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-list"></i>
              <span className="text">Dashboard</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/product" ? "active" : ""}>
            <NavLink to="/product">
              <i className="fa-solid fa-shirt"></i>
              <span className="text">Skills</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/user" ? "active" : ""}>
            <NavLink to="/user">
              <i className="fa-solid fa-users"></i>
              <span className="text">Profile</span>
            </NavLink>
          </li>
          <li className={location.pathname === "/userdata" ? "active" : ""}>
            <NavLink to="/userdata">
              <i className="fa-solid fa-user"></i>
              <span className="text">User Data</span>
            </NavLink>
          </li>
        </ul>

        <ul className="side-menu">
          <li>
            <NavLink to="/dashboard">
              <i className="fa-solid fa-gear"></i>
              <span className="text">Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="logout">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span className="text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/roles" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Roles
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
export {};
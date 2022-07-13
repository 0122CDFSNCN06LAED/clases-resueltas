import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo-DH.png";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      {
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={logo} alt="Digital House" />
          </div>
        </a>
      }

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item ">
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Actions</div>

      {/* <!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/genres" activeClassName="active">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/last-movie" activeClassName="active">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/movies" activeClassName="active">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;

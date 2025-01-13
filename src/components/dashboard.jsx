import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import "./categories.css"; 

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <div className="dashboard">
      <div className="navbar">
        <div className="title">
          <span className="title-icon">☰</span>
          <span className="title-text">Navigation</span>
        </div>

          <NavLink
    to="/"
    className="root-button"
    activeClassName="new"
  >
    <span className="root-icon">🔗</span>
    <span className="root-title">Home</span>
  </NavLink>
</div>

        <div className="home-section">
          <NavLink
            to="/Main_Dashboard"
            className="home-button"
            activeClassName="new"
          >
            <span className="home-icon">🏠︎</span>
            <span className="home-title">Dashboard</span>
          </NavLink>
        </div>

        <div className={`dropdown ${isDropdownOpen ? "active" : ""}`}>
          <button className="dropdown-button" onClick={toggleDropdown}>
            <span className="dropdown-title">Catalog</span>
            <span className="dropdown-plus">+</span>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/categories" className="dropdown-item" activeClassName="new">
                Categories
              </NavLink>
              <NavLink to="/attributes" className="dropdown-item" activeClassName="new">
                Attributes
              </NavLink>
              <NavLink to="/Products" className="dropdown-item" activeClassName="new">
                Products
              </NavLink>
            </div>
          )}
        </div>
      </div>


    </div>
    </>
  );
};

export default Dashboard;

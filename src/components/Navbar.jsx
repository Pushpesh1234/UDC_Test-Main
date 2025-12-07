import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1 .png";
import "./Navbar.css";

const Navbar = ({ onAuthOpen, onOpenForm }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar custom-navbar navbar-expand-lg px-3 px-lg-4 shadow sticky-top">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="UDC Logo"
            className="me-2 size"
            style={{ height: "40px" }}
          />
          <span className="custom-text d-none d-sm-inline">
            Unique Design Consultant
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            {/* -------- HOME ---------- */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link px-3 ${currentPath === "/" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>

            {/* -------- SOLUTIONS + DROPDOWN ---------- */}
            <li className="nav-item dropdown custom-dropdown">
              <span
                className="nav-link px-3 dropdown-toggle"
                role="button"
              >
                Products
              </span>

              <ul className="dropdown-menu custom-dropdown-menu">
                <li>
                  <Link
                    to="/bitrix24-industry-solutions"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Bitrix
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bitrix24-applications"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Zoho
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    Odoo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ZWC
                  </Link>
                </li>
              </ul>
            </li>

            {/* -------- OTHER MENU ITEMS ---------- */}
            <li className="nav-item">
              <Link
                to="/pricing"
                className={`nav-link px-3 ${currentPath === "/pricing" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link px-3 ${currentPath === "/services" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link px-3 ${currentPath === "/about" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link px-3 ${currentPath === "/contact" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

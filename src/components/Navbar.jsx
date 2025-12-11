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
                HOME
              </Link>
            </li>

            {/* -------- SOLUTIONS + DROPDOWN ---------- */}
            <li className="nav-item dropdown custom-dropdown">
              <a
                className="nav-link px-3 dropdown-toggle"
                href="#"
                role="button"
                onClick={(e) => e.preventDefault()}
              >
                PRODUCTS
              </a>

              <ul className="dropdown-menu custom-dropdown-menu">
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={(e) => e.preventDefault()}
                  >
                    BITRIX 24
                  </a>
                  <ul className="dropdown-menu custom-submenu">
                    <li>
                      <Link
                        to="/bitrix24-crm"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        CRM
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/task-projects"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        TASK & PROJECTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/social-intranet"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        SOCIAL INTRANET
                      </Link>
                    </li>
                     <li>
                      <Link
                        to="/chat-viedos"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Chat & Viedos
                      </Link>
                    </li>
                       <li>
                      <Link
                        to="/documents"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Documents
                      </Link>
                    </li>
                      <li>
                      <Link
                        to="/drive"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Drive
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/calenders"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Calenders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mail"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Mail
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cleints"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/telephony"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Telephony
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hr"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        HR
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mobile"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Mobile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sites"
                        className="dropdown-item"
                        onClick={handleNavClick}
                      >
                        Sites
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/bitrix24-applications"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ZOHO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ODOO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ZWCD
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
                PRICING
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link px-3 ${currentPath === "/services" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                SERVICES
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link px-3 ${currentPath === "/about" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link px-3 ${currentPath === "/contact" ? "active" : ""}`}
                onClick={handleNavClick}
              >
                CONTACT
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

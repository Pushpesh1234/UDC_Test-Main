import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1 .png";
import "./Navbar.css";
import b24icon from "../assets/theme/b24Icon.png";
import zicon from "../assets/theme/zIcon.png";
import Odoo from "../assets/theme/Odoo.png";
import Zwcad from "../assets/theme/Zwcad.png";

const Navbar = ({ onAuthOpen, onOpenForm }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Bitrix submenu click toggle
  const [bitrixOpen, setBitrixOpen] = useState(false);
  const [panelStatus,setPanel]=useState(false)

  const toggleBitrix = (e) => {
    e.preventDefault();
    setBitrixOpen((prev) => !prev);
  };

  const bitrixSubmenu = [
    { path: "/bitrix24-crm", content: "CRM" },
    { path: "/task-projects", content: "Task & Projects" },
    { path: "/social-intranet", content: "Social Intranet" },
    { path: "/chat-viedos", content: "Chat & Viedos" },
    { path: "/documents", content: "Documents" },
    { path: "/drive", content: "Drive" },
    { path: "/calenders", content: "Calenders" },
    { path: "/mail", content: "Mail" },
    { path: "/clients", content: "Clients" },
    { path: "/telephony", content: "Telephony" },
    { path: "hr", content: "HR" },
    { path: "mobile", content: "Mobile" },
    { path: "sites", content: "Sites" },
  ];

  const handleNavClick = () => setIsNavCollapsed(true);

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
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* HOME */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link px-3 ${
                  currentPath === "/" ? "active" : ""
                }`}
                onClick={handleNavClick}
              >
                HOME
              </Link>
            </li>

            {/* PRODUCTS DROPDOWN (Mega menu) */}
            <li className="nav-item dropdown custom-dropdown">
              <a
                className="nav-link px-3 dropdown-toggle"
                href="#"
                onClick={(e)=>{panelStatus===false?setPanel(true):setPanel(false)}}
              >
                PRODUCTS
              </a>

              {/* Mega Panel */}
              <ul className={`dropdown-menu custom-dropdown-menu ${panelStatus&&close}`}>
                {/* Bitrix24 icon + submenu */}
                <li className={`dropdown-submenu  ${bitrixOpen ? "open" : ""}`}>
                 <a
  className="dropdown-toggle bitrixToggle bitrixArrowWrapper"
  href="#"
  onClick={toggleBitrix}
>
  <img src={b24icon} style={{ width: "50px" }} />

  {/* ▼ Arrow */}
  <span className={`bitrix-arrow ${bitrixOpen ? "rotate" : ""}`}>▼</span>
</a>


                  {/* Bitrix submenu */}
                  <ul
                    className={`dropdown-menu Bitrix24Submenu  ${
                      bitrixOpen ? "show" : ""
                    }`}
                  >
                    <div className="Bitrix24SubmenuGrid">
                      {bitrixSubmenu.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className="bitrixDropdown"
                            onClick={toggleBitrix}
                          >
                            {item.content}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>

                {/* Zoho */}
                <li>
                  <Link
                    to="/bitrix24-applications"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    <img src={zicon} style={{ width: "50px" }} />
                  </Link>
                </li>

                {/* Odoo */}
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    <img src={Odoo} style={{ width: "50px" }} />
                  </Link>
                </li>

                {/* ZWCAD */}
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    <img src={Zwcad} style={{ width: "50px" }} />
                  </Link>
                </li>
              </ul>
            </li>

            {/* OTHER LINKS */}
            <li className="nav-item">
              <Link
                to="/pricing"
                className={`nav-link px-3 ${
                  currentPath === "/pricing" ? "active" : ""
                }`}
                onClick={handleNavClick}
              >
                PRICING
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link px-3 ${
                  currentPath === "/services" ? "active" : ""
                }`}
                onClick={handleNavClick}
              >
                SERVICES
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link px-3 ${
                  currentPath === "/about" ? "active" : ""
                }`}
                onClick={handleNavClick}
              >
                ABOUT
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link px-3 ${
                  currentPath === "/contact" ? "active" : ""
                }`}
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

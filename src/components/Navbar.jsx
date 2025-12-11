import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1 .png";
import "./Navbar.css";

const Navbar = ({ onAuthOpen, onOpenForm }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const bitrixSubmenu=[
    {path:"/bitrix24-crm",content:"CRM"},
    {path:"/task-projects",content:"Task & Projects"},
    {path:"/social-intranet",content:"Social Intranet"},
    {path:"/chat-viedos",content:"Chat & Viedos"},
    {path:"/documents",content:"Documents"},
    {path:"/drive",content:"Drive"},
    {path:"/calenders",content:"Calenders"},
    {path:"/mail",content:"Mail"},
    {path:"/clients",content:"Clients"},
    {path:"/telephony",content:"Telephony"},
    {path:"hr",content:"HR"},
    {path:"mobile",content:"Mobile"},
    {path:"sites",content:"Sites"}

  ]

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

                {/* unorder list for product submenu list */}
              <ul className="dropdown-menu custom-dropdown-menu">

                {/* product  submenu li -> Bitrix24 */}
                <li className="dropdown-submenu">
                  <a
                    className="dropdown-item dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={(e) => e.preventDefault()}
                  >
                    BITRIX 24
                  </a>

                  {/*product=>bitrix24 submenu items loop */}
                  <ul className="dropdown-menu">
                    <div className="Bitrix24Submenu">
                    {bitrixSubmenu.map(item=>(
                         <li>
                      <Link
                        to={item.path}
                        className="bitrixDropdown"
                        onClick={handleNavClick}
                      >
                        {item.content}
                      </Link>
                    </li>
                    ))} 
                    </div>
                  </ul>           
                </li>  
                {/* li content of product->Bitrix24 end her */}

                {/* product submenu-> zoho */}
                <li>
                  <Link
                    to="/bitrix24-applications"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ZOHO
                  </Link>
                </li>
                
                {/* product submenu -> odoo */}
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ODOO
                  </Link>
                </li>
                
                {/* product submenu -> zwcd */}
                <li>
                  <Link
                    to="/Bitrix24CRM"
                    className="dropdown-item"
                    onClick={handleNavClick}
                  >
                    ZWCD
                  </Link>
                </li>

                {/* End Product Submenu */}
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

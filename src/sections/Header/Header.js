import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import NavItem, { NavItemDropdown } from "../../components/NavItem/NavItem";

import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
          aria-controls="mainmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/#" className="nav-link">
                Browse
              </Link>
            </NavItem>

            <NavItemDropdown>
              <a
                href="/#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#fourtnite" className="dropdown-item">
                    Fourtnite
                  </a>
                </li>
                <li>
                  <a href="#call-of-duty" className="dropdown-item">
                    Call of Duty
                  </a>
                </li>
              </ul>
            </NavItemDropdown>

            <NavItem>
              <Link to="/#" className="nav-link">
                Streams
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/Profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { BUYER_ROOT } from "constants/index";
const logo = require("assets/images/khula-logo-slogan.png");

const Header = () => {
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  return (
    <div className="header-container">
      <div className="header-contents">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-links k-row k-row-center-items">
          {/* TODO: ABOUT PAGE
          <div className="link">
            <div className="nav-dropdown-title">About</div>
          </div> */}
          <div className="link">
            <div className="nav-dropdown-title">Contact Us</div>
          </div>
          <div
            className="link"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <div className="nav-dropdown-title">Register</div>
            <div className={`nav-dropdown ${loginOpen ? "open" : ""}`}>
              <div>
                <a
                  className="nav-dropdown-item"
                  href={`${BUYER_ROOT}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="item-name">As a buyer</span>
                  <span className="item-icon icon-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="link"
            onMouseEnter={() => setSignUpOpen(true)}
            onMouseLeave={() => setSignUpOpen(false)}
          >
            <div className="nav-dropdown-title">Sign In</div>
            <div className={`nav-dropdown ${signUpOpen ? "open" : ""}`}>
              <div>
                <a
                  className="nav-dropdown-item"
                  href={`${BUYER_ROOT}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="item-name">As a buyer</span>
                  <span className="item-icon icon-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

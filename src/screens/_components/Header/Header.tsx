import React from "react";
import { BUYER_ROOT } from "constants/index";
const logo = require("assets/images/khula-logo.png");

const Header = () => {
  // state: {
  //   filterItem: number;
  //   loginOpen: boolean;
  //   signUpOpen: boolean;
  // } = {
  //   filterItem: 0,
  //   loginOpen: false,
  //   signUpOpen: false,
  // };

  // const { loginOpen, signUpOpen } = this.state;
  return (
    <div className="header-container">
      <div className="header-contents">
        <div className="header-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-links k-row k-row-center-items">
          <div className="link">
            <div className="nav-dropdown-title">About</div>
          </div>
          <div className="link">
            <div className="nav-dropdown-title">Contact Us</div>
          </div>
          <div
            className="link"
            // onMouseEnter={() => this.setState({ loginOpen: true })}
            // onMouseLeave={() => this.setState({ loginOpen: false })}
          >
            <div className="nav-dropdown-title">Register</div>
            <div className={`nav-dropdown`}>
              {/* <div className={`nav-dropdown ${loginOpen ? "open" : ""}`}> */}
              <a
                className="nav-dropdown-item"
                href={`${BUYER_ROOT}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="item-name">As a buyer</span>
                <span className="item-icon icon-arrow-right"></span>
              </a>
            </div>
          </div>
          <div
            className="link"
            // onMouseEnter={() => this.setState({ signUpOpen: true })}
            // onMouseLeave={() => this.setState({ signUpOpen: false })}
          >
            <div className="nav-dropdown-title">Sign In</div>
            {/* <div
                    className={`nav-dropdown ${
                      signUpOpen ? "open" : ""
                    } right-aligned`}
                  > */}
            <div className={`nav-dropdown right-aligned`}>
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
      </div>
    </div>
  );
};

export default Header;

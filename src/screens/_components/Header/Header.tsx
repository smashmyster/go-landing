import React from "react";
import { BUYER_ROOT } from "constants/index";
const Logo = require("assets/images/Logo.svg");

/**
 * Header component
 */
export default class Header extends React.Component {
  state: {
    filterItem: number;
    loginOpen: boolean;
    signUpOpen: boolean;
  } = {
    filterItem: 0,
    loginOpen: false,
    signUpOpen: false,
  };

  render() {
    const { loginOpen, signUpOpen } = this.state;
    return (
      <div className="header-container">
        <div className="header-contents">
          <div className="header-left">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className="links">
            <div className="navbar-container k-row">
              <div className="navbar-links k-row">
                <div
                  className="link"
                  onMouseEnter={() => this.setState({ loginOpen: true })}
                  onMouseLeave={() => this.setState({ loginOpen: false })}
                >
                  <div className="nav-dropdown-title">Log in</div>
                  <div className={`nav-dropdown ${loginOpen ? "open" : ""}`}>
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
                  onMouseEnter={() => this.setState({ signUpOpen: true })}
                  onMouseLeave={() => this.setState({ signUpOpen: false })}
                >
                  <div className="nav-dropdown-title">Sign up</div>
                  <div
                    className={`nav-dropdown ${
                      signUpOpen ? "open" : ""
                    } right-aligned`}
                  >
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
        </div>
      </div>
    );
  }
}

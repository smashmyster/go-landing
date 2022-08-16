import React, { useState } from "react";
import { BUYER_ROOT, isMobile, _GoToStore } from "constants/index";
import { Link } from "react-router-dom";
const logoSlogan = require("assets/images/khula-logo-slogan.svg");
const logo = require("assets/images/khula-logo.svg");

const Header = () => {
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [signUpOpen, setSignUpOpen] = useState<boolean>(false);
  const [toggleBurger, setToggleBurger] = useState<boolean>(false);
  return (
    <div className="header-container">
      <div className="header-contents">
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <img src={isMobile ? logo : logoSlogan} alt="logo" />
            </Link>
          </div>
        </div>
        {isMobile ? (
          <div>
            <div
              className={`${toggleBurger ? "change" : ""} container `}
              onClick={() => setToggleBurger(!toggleBurger)}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <div className={`${toggleBurger ? "show-menu" : "hide-menu"}`}>
              <div className="nav-dropdown-title">
                <a
                  href={`https://techcrunch.com/2021/08/03/south-africas-khula-closes-1-3m-seed-to-scale-its-software-for-agriculture-platform/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  🎉 We&apos;ve raised $1.3M
                </a>
              </div>
              <div className="nav-dropdown-title">
                <a
                  className="nav-dropdown-item"
                  href={`${BUYER_ROOT}/sign-up`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </div>
              <div className="nav-dropdown-title">
                <a
                  className="nav-dropdown-item"
                  href={`${BUYER_ROOT}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </div>
              <div className="nav-dropdown-title intercom-ic-launch">
                Contact Us
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-links k-row k-row-center-items">
            <div className="k-row k-row-center-items action-call">
              <div className="btn nav-btn uppercase">
                <a
                  href="https://techcrunch.com/2021/08/03/south-africas-khula-closes-1-3m-seed-to-scale-its-software-for-agriculture-platform/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="emoji">🎉</span>
                  WE&apos;VE RAISED $1.3M
                  <span className="fal-long-arrow-right"></span>
                </a>
              </div>
              <div
                className="btn nav-btn uppercase secondary"
                onClick={() => _GoToStore(undefined, "farmer")}
              >
                Get the Khula Inputs App{" "}
                <span className="fal-long-arrow-down"></span>
              </div>
            </div>
            <div className="link">
              <div className="nav-dropdown-title intercom-ic-launch">
                Contact Us
              </div>
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
                    <span className="item-name">Trader web</span>
                  </a>
                  <a
                    className="nav-dropdown-item pointer"
                    onClick={() => _GoToStore(undefined, "farmer")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="item-name">Inputs app</span>
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
                    <span className="item-name">Trader web</span>
                  </a>
                  <a
                    className="nav-dropdown-item pointer"
                    onClick={() => _GoToStore(undefined, "farmer")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="item-name">Inputs app</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

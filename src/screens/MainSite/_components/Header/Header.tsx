import React, { useState } from "react";
import { BUYER_ROOT, isMobile, _GoToStore } from "constants/index";
import { Link } from "react-router-dom";
const logoSlogan = require("assets/images/khula-logo-slogan.svg");
const logo = require("assets/images/khula-logo.svg");
const absalogo = require("assets/images/absalogo.svg");

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
                  href={`https://www.foodformzansi.co.za/icymi-khula-and-absa-to-revolutionise-agritech/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="row-center">
                    <span role="img" aria-label="celebration">
                      🎉
                    </span>{" "}
                    We&apos;ve partnered with
                    <img src={absalogo} alt="absa-logo" className="ml-1 w-10" />
                  </div>
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
              <div className="nav-dropdown-title">
                <a
                  className="nav-dropdown-item"
                  href={`/blog`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
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
              <div className="btn nav-btn uppercase secondary">
                <a
                  href="https://www.foodformzansi.co.za/icymi-khula-and-absa-to-revolutionise-agritech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="emoji" role="img" aria-label="celebration">
                    🎉
                  </span>
                  WE&apos;VE PARTNERED WITH ABSA
                  <img src={absalogo} alt="absa-logo" className="ml-2 w-12" />
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
              <Link to="/blog" className="nav-dropdown-title">
                Blog
              </Link>
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
                  <div
                    className="nav-dropdown-item pointer"
                    onClick={() => _GoToStore(undefined, "farmer")}
                  >
                    <span className="item-name">Inputs app</span>
                  </div>
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
                  <div
                    className="nav-dropdown-item pointer"
                    onClick={() => _GoToStore(undefined, "farmer")}
                  >
                    <span className="item-name">Inputs app</span>
                  </div>
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

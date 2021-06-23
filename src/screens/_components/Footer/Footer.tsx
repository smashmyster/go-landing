import { isMobile } from "constants/index";
import React from "react";
const khulaLogo = require("assets/images/khula-logo.svg");
const logo = require("assets/images/khula-logo-badge.png");

const Footer = () => {
  return (
    <div className="screen footer-screen">
      <div className="logo">
        <img src={isMobile ? khulaLogo : logo} alt="khula-logo" />
        <div className="copyright">Copyright KHULA APP (PTY) LTD 2021</div>
      </div>
      <div className="contact">
        <div className="s-header">Contact</div>
        <div className="">
          <span className="fal-mobile-alt"></span>+27 72 875 5331
        </div>
        <div className="">
          <span className="fal-envelope"></span>info@khula.co.za
        </div>
      </div>
      <div className="legal contact">
        <div className="s-header">Legal</div>
        <div className="document-links">
          <a
            className="pointer"
            href="https://farmer.khula.co.za/TermsAndConditions/termsofsale.html"
          >
            Terms of Use
          </a>
          <a className="pointer" href="https://farmer.khula.co.za/privacy.html">
            Privacy policy
          </a>
        </div>
      </div>
      <div className="social-media contact">
        <div className="s-header">Follow Us</div>
        <div className="media-links">
          <a href="https://www.facebook.com/khulaapp" target="_blank">
            <span className="fab-facebook pointer"></span>
          </a>
          <a href="https://www.instagram.com/khula_ecosystem/?hl=en" target="_blank">
            <span className="fab-instagram pointer"></span>
          </a>
          <a href="https://twitter.com/khulaecosystem" target="_blank">
            <span className="fab-twitter pointer"></span>
          </a>
          <a href="https://www.linkedin.com/company/khulaagriculturetechnology" target="_blank">
            <span className="fab-linkedin pointer"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

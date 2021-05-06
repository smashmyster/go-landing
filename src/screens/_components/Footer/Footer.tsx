import React from "react";
const logo = require("assets/images/khula-logo-slogan.png");

const Footer = () => {
  return (
    <div className="screen footer-screen k-row k-row-center-items">
      <div className="media-links">
        <a href="https://www.facebook.com/khulaapp">
          <span className="fab-facebook pointer"></span>
        </a>
        <a href="https://twitter.com/khulaapp">
          <span className="fab-instagram pointer"></span>
        </a>
        <a href="https://www.instagram.com/khula_app/?hl=en">
          <span className="fab-twitter pointer"></span>
        </a>
        <a href="https://www.linkedin.com/company/khulaagriculturetechnology">
          <span className="fab-linkedin pointer"></span>
        </a>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
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
      <div className="copyright">Copyright KHULA APP (PTY) LTD 2021</div>
    </div>
  );
};

export default Footer;

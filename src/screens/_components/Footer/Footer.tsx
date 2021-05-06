import React from "react";
const logo = require("assets/images/khula-logo.png");

const Footer = () => {
  return (
    <div className="screen footer-screen k-row k-row-center-items">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="media-links">
        <span className="fal-linkedin"></span>
        <span className="fal-twitter"></span>
        <span className="fal-facebook"></span>
        <span className="fal-instagram"></span>
      </div>
      <div className="">&copy; 2021 Khula! Terms &amp; Conditions</div>
    </div>
  );
};

export default Footer;

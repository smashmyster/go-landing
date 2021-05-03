import React from "react";
const logo = require("assets/images/khula-logo.png");
const truck = require("assets/images/truck.png");

const Landing = () => {
  return (
    <div className="landing-screen k-row">
      <div className="row">
        <div className="left-section">
          <img src={logo} alt="logo" />
          <div className="company-name">Grow (Verb): Zulu</div>
          <div className="company-description">
            Tools and platforms to support and grow your business in the
            agriculture supply chain
          </div>
        </div>
        <div className="right-section">
          <img src={truck} alt="truck" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

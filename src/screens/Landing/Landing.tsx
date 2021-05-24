import React, { useEffect, useState } from "react";
const logo = require("assets/images/khula-logo.svg");
const truck = require("assets/images/truck.png");

const Landing = () => {
  const [shouldAnimate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="landing-screen k-row">
      <div className="left-section">
        <img src={logo} alt="logo" />
        <div className="company-name">Grow (Verb): Zulu</div>
        <div className="company-description">
          Tools and platforms to support and grow your business in the
          agriculture supply chain
        </div>
      </div>
      <div className="right-section">
        <img
          src={truck}
          alt="truck"
          className={`truck${shouldAnimate ? " animate" : ""}`}
        />
      </div>
    </div>
  );
};

export default Landing;

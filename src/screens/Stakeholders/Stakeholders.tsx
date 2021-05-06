import React from "react";
const aeci = require("assets/images/aeci.png");
const e2 = require("assets/images/e2.png");
const sakata = require("assets/images/sakata.png");
const absa = require("assets/images/absa.png");

const Stakeholders = () => {
  return (
    <div className="screen stakeholders-screen k-row k-row-center-items">
      <div className="title">Our Partners &amp; Stakeholders.</div>
      <div className="sub-title">
        The power of our network means gaining value from all members of the
        ecosystem.
      </div>
      <div className="stakeholder-logos row">
        <img src={aeci} alt="AECI logo" />
        <img src={absa} alt="Absa logo" />
        <img src={e2} alt="E-Squared logo" />
        <img src={sakata} alt="Sakata logo" />
      </div>
    </div>
  );
};

export default Stakeholders;

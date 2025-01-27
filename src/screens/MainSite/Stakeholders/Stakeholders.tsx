import { isMobile } from "constants/index";
import React from "react";
const aeci = require("assets/images/aeci.png");
const e2 = require("assets/images/esquared-logo.png");
const sakata = require("assets/images/sakata.png");
const absa = require("assets/images/absa.png");
const msd = require("assets/images/msd.png");
const landbank = require("assets/images/landbank.png");
const idc = require("assets/images/idc.png");
const afgri = require("assets/images/AFGRI.png");
const pepsicologo = require("assets/images/pepsico-logo.jpeg");

const Stakeholders = () => {
  return (
    <div className="screen stakeholders-screen k-row k-row-center-items">
      <div className="title">Our Partners &amp; Stakeholders.</div>
      <div className="sub-title">
        The power of our network means gaining value from all members of the
        ecosystem.
      </div>
      <div className="stakeholder-logos">
        <img src={aeci} alt="AECI logo" className="logo-img" />
        <img src={absa} alt="Absa logo" className="logo-img" />
        <img src={e2} alt="E-Squared logo" className="logo-img" />
        <img src={sakata} alt="Sakata logo" className="logo-img" />
        <img src={landbank} alt="logo" className="logo-img" />
        <img src={msd} alt="logo" className="logo-img" />
        <img src={idc} alt="logo" className="logo-img" />
        <img src={afgri} alt="logo" className="logo-img" />
        <img
          src={pepsicologo}
          alt="logo"
          className="logo-img"
          style={!isMobile ? { height: 80 } : {}}
        />
      </div>
    </div>
  );
};

export default Stakeholders;

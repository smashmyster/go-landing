import React from "react";
const web = require("assets/images/web.png");
const app = require("assets/images/trader-app.png");

const ProduceMarket = () => {
  return (
    <div className="screen produce-market-screen k-row k-row-center-items">
      <div className="title">
        Are you a Buyer, Retailer, Wholesaler, Packhouse or Export agent?
      </div>
      <div className="sub-title">
        Trade effeciently and safely with the best emerging and commercial
        farmers.
      </div>
      <div className="row">
        <div className="left-section">
          <div className="sub-title uppercase">All New</div>
          <div className="title">
            Web (Trading tools available from your Desktop)
          </div>
          <div className="section-text">
            Trade fresh produce with our various trading tools. Buy on the go
            with our Spot Market, manage direct orders or program trading.
            Flexible terms and safe payment options.
          </div>
          <div className="row action-btns">
            <div className="uppercase green-btn pointer">Contact us</div>
            {/* <div className="transparent-btn pointer">
              Find out more <span className="fal-long-arrow-right"></span>
            </div> */}
          </div>
        </div>
        <div className="right-section">
          <img src={web} alt="web platform" />
        </div>
      </div>
      <div className="row" style={{ alignItems: "center" }}>
        <div className="left-section" style={{ width: "80%" }}>
          <img src={app} alt="app platform" />
        </div>
        <div className="right-section">
          <div className="sub-title uppercase">In Beta</div>
          <div className="title">Fresh Produce Trader App</div>
          <div className="section-text">
            Access the market on the go with our frsh produce trader app. Browse
            farmer availability and chat with your{" "}
            <span className="uppercase">Khula</span> suppliers on the go.
          </div>
          <div className="row action-btns">
            <div className="uppercase green-btn pointer">Contact us</div>
            {/* <div className="transparent-btn pointer">
              Find out more <span className="fal-long-arrow-right"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduceMarket;

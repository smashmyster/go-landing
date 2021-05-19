import { isMobile } from "constants/index";
import React from "react";
const web = require("assets/images/web.png");
const webMobile = require("assets/images/web-mobile.png");
const app = require("assets/images/trader-app.png");
const appMobile = require("assets/images/trader-app-mobile.png");

const ProduceMarket = () => {
  return (
    <div className="screen produce-market-screen k-row k-row-center-items">
      <div className="title">
        Are you a Buyer, Retailer, Wholesaler, Packhouse or Export agent?
      </div>
      <div className="sub-title" style={{ marginBottom: 50 }}>
        Trade effeciently and safely with the best emerging and commercial
        farmers.
      </div>
      <div className="row">
        <div className="left-section">
          <div className="sub-title uppercase">All New</div>
          <div className="title">Web</div>
          {!isMobile && (
            <div className="title">
              (Trading tools available from your Desktop)
            </div>
          )}
          <div className="section-text">
            Trade fresh produce with our various trading tools. Buy on the go
            with our Spot Market, manage direct orders or program trading.
            Flexible terms and safe payment options.
          </div>
          {!isMobile && (
            <div className="row action-btns">
              <div className="uppercase green-btn pointer intercom-ic-launch">
                Contact us
              </div>
              {/* TODO: Create a page with more in-depth detail on the BW
              <div className="transparent-btn pointer">
                Find out more <span className="fal-long-arrow-right"></span>
              </div> */}
            </div>
          )}
        </div>
        <div className="right-section">
          <img
            src={isMobile ? webMobile : web}
            alt="web platform"
            className="web"
          />
        </div>
      </div>
      <div
        className="row"
        style={{ alignItems: "center", marginTop: isMobile ? "90px" : "unset" }}
      >
        <div
          className="left-section"
          style={{ width: "80%", marginLeft: isMobile ? 0 : "" }}
        >
          <img
            src={isMobile ? appMobile : app}
            alt="app platform"
            style={{ width: isMobile ? 200 : 500 }}
          />
        </div>
        <div
          className="right-section"
          style={{ marginLeft: isMobile ? 20 : "" }}
        >
          <div className="sub-title uppercase">In Beta</div>
          <div className="title">
            {`${isMobile ? "App" : " Fresh Produce Trader App"}`}
          </div>
          <div
            className="section-text"
            style={{ width: isMobile ? "80%" : "" }}
          >
            Access the market on the go with our fresh produce trader app.
            Browse farmer availability and chat with your{" "}
            <span className="uppercase">Khula</span> suppliers on the go.
          </div>
          {!isMobile && (
            <div className="row action-btns">
              <div className="uppercase green-btn pointer intercom-ic-launch">
                Contact us
              </div>
              {/* TODO: Create a page with more in-depth detail on the TA
              <div className="transparent-btn pointer">
                Find out more <span className="fal-long-arrow-right"></span>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProduceMarket;

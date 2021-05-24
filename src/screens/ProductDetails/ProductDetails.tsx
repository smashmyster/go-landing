import React, { useState } from "react";
import ProduceDetailsItem from "./utils/ProductDetailsItem";
import PulsatingToggleButtons from "../utils/PulsatingToggleButtons";
import { isMobile } from "constants/index";
const phoneBezel = require("assets/images/phone-bezel.png");
const phoneBackground = require("assets/images/phone-background.png");
const inputsApp = require("assets/images/inputs-app.png");
const traderApp = require("assets/images/trader-app-two.png");

const PRODUCT_DETAILS = {
  inputsMarket: {
    name: "Inputs Market",
    description:
      "Buy your inputs the smart way. More intelligence, better prices, from many suppliers at your fingertips.",
  },
  produceTrader: {
    name: "Fresh Produce Trader",
    description: `Access the market on the go with our fresh produce trader app. 
      Post your products to market and chat with your KHULA buyers on the go.`,
  },
};

const ProductDetails = () => {
  const [carouselCurrentSlide, updateCarouselCurrentSlide] = useState("L");

  return (
    <div
      className="screen products-screen col  green-bg"
      style={{ minHeight: 500 }}
    >
      {isMobile && (
        <div>
          <div className="header-txt h1 left-section-text">
            Are you a farmer?
          </div>
          <div className="header-txt h3 left-section-text">
            Toggle our solution below
          </div>
        </div>
      )}
      <div className="k-row k-row-center-items details-container">
        {!isMobile && (
          <div className="left-section section">
            <div className="header-txt h2 left-section-text">Are you a</div>
            <div className="header-txt h1 left-section-text">Farmer?</div>
            <div className="header-txt h3 left-section-text">
              Toggle our products on the right!
            </div>
            <div className="left-section-txt left-section-text">
              We offer an{" "}
              <text className="farmer-product-name">Inputs Mobile App</text> to
              buy over 2000 products,
            </div>
            <div className="left-section-txt left-section-text">
              and a{" "}
              <text className="farmer-product-name">
                Fresh Produce Trader Mobile App
              </text>{" "}
              to market your produce.
            </div>
          </div>
        )}
        <div className="input-app-container column-center">
          <div className="app-container">
            <img className="app-bezel" alt="phone-bezel" src={phoneBezel} />
            <img
              className={`input-app ${
                carouselCurrentSlide === "L"
                  ? "input-app-visible-center"
                  : "input-app-hidden-left"
              }`}
              style={{
                opacity: carouselCurrentSlide === "L" ? "1" : "0",
                visibility: carouselCurrentSlide === "L" ? "visible" : "hidden",
              }}
              src={inputsApp}
              alt="inputs market app"
            />
            <img
              className={`input-app ${
                carouselCurrentSlide === "R"
                  ? "trader-app-vissible-center"
                  : "trader-app-hidden-right"
              }`}
              style={{
                opacity: carouselCurrentSlide === "R" ? "1" : "0",
                visibility: carouselCurrentSlide === "R" ? "visible" : "hidden",
              }}
              src={traderApp}
              alt="inputs market app"
            />
            <img
              className="app-bezel"
              src={phoneBackground}
              style={{ zIndex: 7 }}
              alt="phone-background"
            />
          </div>
        </div>
        <div className="right-section section">
          <div className="slides-container">
            <ProduceDetailsItem
              productName={PRODUCT_DETAILS.inputsMarket.name}
              productDescription={PRODUCT_DETAILS.inputsMarket.description}
              displayStyle={{
                right: carouselCurrentSlide === "R" ? "290px" : "0",
                opacity: carouselCurrentSlide === "L" ? "1" : "0",
              }}
            />
            <ProduceDetailsItem
              productName={PRODUCT_DETAILS.produceTrader.name}
              productDescription={PRODUCT_DETAILS.produceTrader.description}
              displayStyle={{
                left: carouselCurrentSlide === "L" ? "400px" : "0px",
                opacity: carouselCurrentSlide === "R" ? "1" : "0",
              }}
            />
          </div>
          <div className="arrow-keys">
            <PulsatingToggleButtons
              showLeftButton={carouselCurrentSlide === "R"}
              showRightButton={carouselCurrentSlide === "L"}
              leftButtonFunc={() => {
                updateCarouselCurrentSlide("L");
              }}
              rightButtonFunc={() => {
                updateCarouselCurrentSlide("R");
              }}
            />
          </div>
          <div className="row action-btns">
            <div className="uppercase white-btn intercom-ic-launch">
              Contact us
            </div>
            {/* TODO: Implement read more
            <div className="uppercase transparent-btn">
              Read More <span className="fal-long-arrow-right"></span>
            </div>*/}
          </div>
        </div>
      </div>
      <div className="section-color"></div>
    </div>
  );
};

export default ProductDetails;

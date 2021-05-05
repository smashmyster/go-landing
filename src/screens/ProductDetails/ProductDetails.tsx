import React, { useState } from "react";
// import ProduceDetailsItem from "";
import ProduceDetailsItem from "./utils/ProductDetailsItem";
const inputsApp = require("assets/images/inputs-app.png");
const traderApp = require("assets/images/trader-app.png");

const PRODUCT_DETAILS = {
  inputsMarket: {
    name: "Inputs Market",
    description:
      "Buy your inputs the smart way. More intelligence, better prices, from many suppliers at your fingertips.",
  },
  produceTrader: {
    name: "Fresh Produce Trader",
    description:
      "Buy your inputs the smart way. More intelligence, better prices, from many suppliers at your fingertips.",
  },
};

const ProductDetails = () => {
  const [carouselCurrentSlide, updateCarouselCurrentSlide] = useState("L");

  return (
    <div className="screen products-screen col" style={{ minHeight: 500 }}>
      <div className="k-row k-row-center-items details-container green-bg">
        <div className="left-section section">
          <div className="section-name uppercase"> Our products</div>
          <div className="header-txt h2">Are you a</div>
          <div className="header-txt h1">Farmer?</div>
          <p className="left-section-txt">
            Toggle our products on the right we offer an inputs app to buy over
            2000 products, and a Fresh Produce Trader app to market your
            produce.
          </p>
        </div>
        <div className="input-app-container column-center">
          <img
            className="input-app"
            style={{
              right: carouselCurrentSlide === "R" ? "100%" : "10%",
              opacity: carouselCurrentSlide === "L" ? "1" : "0",
            }}
            src={inputsApp}
            alt="inputs market app"
          />
          <img
            className="input-app"
            style={{
              left: carouselCurrentSlide === "L" ? "100%" : "10%",
              opacity: carouselCurrentSlide === "R" ? "1" : "0",
            }}
            src={traderApp}
            alt="inputs market app"
          />
        </div>
        <div className="right-section section">
          <div className="slides-container">
            <ProduceDetailsItem
              productName={PRODUCT_DETAILS.inputsMarket.name}
              productDescription={PRODUCT_DETAILS.inputsMarket.description}
              displayStyle={{
                right: carouselCurrentSlide === "R" ? "400px" : "0",
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
          <div className="arrow-keys row">
            <div
              className="carousel-button-container"
              style={{
                transform:
                  carouselCurrentSlide === "L" ? "scale(.8)" : "scale(1)",
                opacity: carouselCurrentSlide === "L" ? 0.7 : 1,
              }}
              onClick={() => {
                updateCarouselCurrentSlide("L");
              }}
            >
              <div className="toggle-icon-container">
                <span className="icon fas-chevron-left"></span>
              </div>
              {carouselCurrentSlide === "R" && [
                <div key={0} className="pulse-animation pulse-one" />,
                <div key={1} className="pulse-animation pulse-two" />,
              ]}
            </div>
            <div
              className="carousel-button-container"
              style={{
                transform:
                  carouselCurrentSlide === "R" ? "scale(.8)" : "scale(1)",
                opacity: carouselCurrentSlide === "R" ? 0.7 : 1,
              }}
              onClick={() => {
                updateCarouselCurrentSlide("R");
              }}
            >
              <div className="toggle-icon-container">
                <span className="icon fas-chevron-right"></span>
              </div>
              {carouselCurrentSlide === "L" && [
                <div key={0} className="pulse-animation pulse-one" />,
                <div key={1} className="pulse-animation pulse-two" />,
              ]}
            </div>
          </div>
          {/* <div className="row action-btns">
            <div className="uppercase white-btn">Contact us</div>
            <div className="uppercase transparent-btn">
              Read More <span className="fal-long-arrow-right"></span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="section-color"></div>
    </div>
  );
};

export default ProductDetails;

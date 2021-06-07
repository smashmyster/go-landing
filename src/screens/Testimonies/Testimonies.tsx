import React, { useState } from "react";
import TestimonialItem from "./utils/TestimonialItem";
import PulsatingToggleButtons from "../utils/PulsatingToggleButtons";
const testimony1 = require("assets/images/nkanyiso.jpg");
const testimony2 = require("assets/images/quinton.png");
const testimony3 = require("assets/images/juan.jpg");
const testimony4 = require("assets/images/lungi.jpg");
const testimony5 = require("assets/images/lorraine.jpg");
const testimony6 = require("assets/images/dudu.jpeg");

const TESTIMONIES = [
  {
    name: "Nonkanyiso Ngubane",
    position: "Director of Dukathole Farm",
    image: testimony1,
    message: `I give the spraying program for cucumbers a thumbs up. The crop
    advisor (Johan Smith) looked after us, he was hands on and showed a
    lot of enthusiasm and willingness to help`,
  },
  {
    name: "QUINTIN CROSS",
    position: "AECI Plant Health, Managing Director",
    image: testimony2,
    message: `By identifying emerging farmers' pain points we can use 
    technology to strengthen relationship with suppliers 
    and enhance product stewardship.`,
  },
  {
    name: "Juan Harmse",
    position: "AECI Plant Health Crop Advisor in the Gauteng region",
    image: testimony3,
    message: `I work with Lungi Robela. When I receive her orders made through
    Khula! it's my responsibility to process the products, and arrange transport
    to deliver to the farm as soon as possible.`,
  },
  {
    name: "Lungi Robela",
    position: "Director of Operations of Robela Farming",
    image: testimony4,
    message: `The voucher system was essentially easy to use. I had the pleasure of 
    making use of it through the intervention of SAB since they made the investment 
    on the farm, and some of the other orders were on my behalf and others I would 
    make myself. And it was a very easy process to get through and most of my 
    products arrived on time`,
  },
  {
    name: "Lorraine Coetzee",
    position: "General Manager: HR and Logistics of Sakata Seed",
    image: testimony5,
    message: `The Khula! Inputs App allows farmers to gain access to credible suppliers
    and production information through their smartphone whenever they need it. We excited
    to partner with Khula! as Sakata seed.`,
  },
  {
    name: "Dudu Mashile",
    position:
      "Bayer, Technical sales manager: Small Holder & Pre Commercial farmers",
    image: testimony6,
    message: `Khula! has partnered with large and reputable companies. This allows farmers of
    all sizes to order and choose any inputs from the comfort of their home.`,
  },
];
type SlideToggleType = {
  direction: string | null;
  counter: number;
};
const Testimonies = () => {
  const [slideToggler, updateSlideToggler] = useState<SlideToggleType>({
    direction: null,
    counter: 0,
  });

  const slideTogglerHndlr = (direction: string) => {
    const newStateValue: SlideToggleType = {
      direction,
      counter:
        direction === "L"
          ? slideToggler.counter !== 0
            ? slideToggler.counter - 1
            : slideToggler.counter
          : slideToggler.counter !== TESTIMONIES.length - 1
          ? slideToggler.counter + 1
          : slideToggler.counter,
    };

    updateSlideToggler({ ...newStateValue });
  };
  return (
    <div className="screen testimonies-screen">
      <div className="header-text first-line-text">
        {"Don't just take our word for it.".toUpperCase()}
      </div>
      <div className="header-text title-line-text">
        What our Buyers, Suppliers and Partners have to say.
      </div>
      <div className="tesimonies-container">
        {TESTIMONIES.map((testimony: any, index: number) => {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                transition: "all 1.3s, opacity .3s",
                left: !slideToggler.direction
                  ? 100 * index + "%"
                  : slideToggler.direction === "R"
                  ? 100 * index - 100 * slideToggler.counter + "%"
                  : 100 * index - 100 * slideToggler.counter + "%",
                visibility:
                  index === slideToggler.counter ? "visible" : "hidden",
                opacity: index === slideToggler.counter ? "1" : "0",
              }}
            >
              <TestimonialItem {...testimony} />
            </div>
          );
        })}
      </div>
      <div
        style={{
          color: "white",
          marginTop: "2%",
          width: "55%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <PulsatingToggleButtons
              showLeftButton={slideToggler.counter > 0}
              showRightButton={slideToggler.counter < TESTIMONIES.length - 1}
              leftButtonFunc={() => {
                slideTogglerHndlr("L");
              }}
              rightButtonFunc={() => {
                slideTogglerHndlr("R");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

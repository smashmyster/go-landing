import React, { useState, useEffect } from "react";
import TestimonialItem from "./utils/TestimonialItem";
const testimony1 = require("assets/images/nkanyiso.jpg");

const TESTIMONIES = [
  {
    name: "Nonkanyiso Ngubane",
    position: "Director of Dukathole FArm",
    image: testimony1,
    message: `I give the spraying program for cucumbers a thumbs up. The crop
    advisor (Johan Smith) looked after us, he was hands on and showed a
    lot of enthusiasm and willingness to help`,
  },
  {
    name: "QUINTIN CROSS",
    position: "AECI Plant Health, Managing Director",
    image: testimony1,
    message: `By identifying emerging farmers' pain points we can use 
    technology to strengthen relationship with suppliers 
    and enhance product stewardship.`,
  },
  {
    name: "JANNIE WILLEMSE",
    position: "AECI Plant Health, Business Development Manager",
    image: testimony1,
    message: `When farmers order on the KHULA! Inputs app, it gives the depots more 
    lead time to get the order together instead of turning farmers away when 
    the product is out of stock at their depot`,
  },
  {
    name: "Lungi Robela",
    position: "Director of Operations of Robela Farming",
    image: testimony1,
    message: `The voucher system was essentially easy to use. I had the pleasure of 
    making use of it through the intervention of SAB since they made the investment 
    on the farm, and some of the other orders were on my behalf and others I would 
    make myself. And it was a very easy process to get through and most of my 
    products arrived on time`,
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
  useEffect(() => {
    console.log(slideToggler);
  }, [slideToggler]);
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
          // console.log('index', index);
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
          width: "30%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginBottom: "2%",
            cursor: "pointer",
          }}
          onClick={() => {
            const newStateValue: SlideToggleType = {
              direction: "L",
              counter:
                slideToggler.counter !== 0
                  ? slideToggler.counter - 1
                  : slideToggler.counter,
            };
            updateSlideToggler({ ...newStateValue });
          }}
        >
          left
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            const newStateValue: SlideToggleType = {
              direction: "R",
              counter:
                slideToggler.counter !== 3
                  ? slideToggler.counter + 1
                  : slideToggler.counter,
            };
            updateSlideToggler({ ...newStateValue });
          }}
        >
          right
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

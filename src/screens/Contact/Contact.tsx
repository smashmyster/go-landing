import React from "react";
const farmer = require("assets/images/farmer.jpg");

const Contact = () => {
  return (
    <div className="screen contact-screen k-row k-row-center-items green-bg">
      <div className="row section">
        <div className="section-graphic">
          <img src={farmer} alt="farmer" />
        </div>
        <div className="right-section">
          <div className="section-header">
            Do More and <span className="uppercase">Grow</span> with{" "}
            <span className="uppercase">Khula!</span>
          </div>
          <div className="section-txt">
            Reach out, and join us in building the future of agriculture. Want a
            Demo? Need more information to make a decision?
          </div>
          <div className="white-btn uppercase pointer">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

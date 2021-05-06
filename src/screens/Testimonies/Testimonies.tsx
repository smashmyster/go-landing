import React from "react";
const testimony1 = require("assets/images/nkanyiso.jpg");

const Testimonies = () => {
  return (
    <div className="screen testimonies-screen k-row k-row-center-items">
      <div className="uppercase sub-title">
        {`Don't just take our word for it.`}
      </div>
      <div className="title">
        What our Buyers, Suppliers and Partners have to say.
      </div>
      <div className="row section">
        <div className="left-section">
          <div className="testimony">
            {`"I give the spraying program for cucumbers a thumbs up. The crop
            advisor (Johan Smith) looked after us, he was hands on and showed a
            lot of enthusiasm and willingness to help"`}
          </div>
          <div className="name uppercase">Nonkanyiso Ngubane</div>
          <div className="company">Director of Dukathole farm</div>
        </div>
        <div className="right-section">
          <img src={testimony1} alt="client" />
        </div>
      </div>
    </div>
  );
};

export default Testimonies;

import React from "react";
const inputsApp = require("assets/images/inputs-app.png");


const ProductDetails = () => {
  return (
    <div className="screen products-screen k-row k-row-center-items green-bg" style={{minHeight:500}}>
      <div className="left-section">
        <div className="section-name uppercase"> Our products</div>
        <div className="header-txt h2">Are you a</div>
        <div className="header-txt h1">Farmer?</div>
        <p className="left-section-txt">Toggle our products on the right we offer an inputs app to buy over 2000 products, and a Fresh Produce Trader app to market your produce.</p>
      </div>
      <img className="input-app" src={inputsApp} alt="inputs market app"/>
      <div className="right-section">
        <div className="arrow-keys row">
          <span className="icon fas-caret-left"></span>
          <span className="icon fas-caret-right"></span>
          <span className="key-label">Click Me!</span>
        </div>
        <div className="row section-headers">
          <div style={{color:"white"}}>Inputs Market</div>
          <div style={{color:"#85be87"}}>Fresh Produce Trader</div>
        </div>
        <p className="right-section-txt">Buy your inputs the smart way. More intelligence, better prices, from many suppliers at your fingertips.</p>
        <div className="row action-btns">
          <div className="uppercase white-btn">Contact us</div>
          <div className="uppercase transparent-btn">Read More <span className="fal-long-arrow-right"></span></div>
        </div>
      </div>
      

    </div>
  );
};

export default ProductDetails;

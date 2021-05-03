import React from "react";
const packhouse = require("assets/images/packhouse.jpeg");


const InputsMarket = () => {
  return (
    <div className="screen inputs-market-screen k-row k-row-center-items green-alpha-bg">
      <div className="uppercase sub-title">More than an app</div>
      <div className="title">Key benefits of the <span className="uppercase">Khula</span> Inputs Market</div>
      <div className="row section">
        <div className="section-graphic">
          <img src={packhouse} alt="packhouse"/>
        </div>
        <div className="right-section">
          <div className="bullet-point">
            <div className="bullet-header"><span className=""></span> 2000+ Products.</div>
            <div>Compare over 2000 products from local and international suppliers. Find the best products, at the best price.</div>
          </div>
          <div className="bullet-point">
            <div className="bullet-header"><span className=""></span> 130+ Depots Nationwide.</div>
            <div>With over 130 depots nationwide on KHULA, we can deliver in every province, in every major agriculture region in SA.</div>
          </div>
          <div className="bullet-point">
            <div className="bullet-header"><span className=""></span> One-Stop-Shop.</div>
            <div>Our marketplace includes seed,fertilizer, agro-chemicals, animal health products and more. Buy everything you need, in one place.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputsMarket;
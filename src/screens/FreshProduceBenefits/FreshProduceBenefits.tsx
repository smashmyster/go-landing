import React from "react";
import Arrow from "./components/Arrow";

const FreshProduceBenefits = () => {
  return (
    <div className="screen fresh-produce-benefits-screen green-alpha-bg">
      <div className="f-12 main-subtitle-text center-text mb-6">Khula app</div>
      <div className="f-12 main-title-text center-text mb-18">
        Using the KHULA Fresh Produce
        <br />
        Trader means
      </div>
      <div className="k-row k-row-center-items">
        <div className="detail-container column-center">
          <div className="icon-container k-row k-row-center-items">
            <span className="icon fal-seedling" />
          </div>
          <div className="font-weight-600 f-20 grey m-5">
            Fresher <span className="green">Product.</span>
          </div>
          <div className="charcoal detail-text">
            Trading directly with the farmer means less change in hands, less
            handling, less time between farm and buyer
          </div>
        </div>
        <Arrow />
        <div className="detail-container column-center">
          <div className="icon-container k-row k-row-center-items">
            <span className="icon fal-seedling" />
          </div>
          <div className="font-weight-600 f-20 grey m-5">
            Fresher <span className="green">Product.</span>
          </div>
          <div className="charcoal detail-text">
            Trading directly with the farmer means less change in hands, less
            handling, less time between farm and buyer
          </div>
        </div>
        <Arrow />
        <div className="detail-container column-center">
          <div className="icon-container k-row k-row-center-items">
            <span className="icon fal-seedling" />
          </div>
          <div className="font-weight-600 f-20 grey m-5">
            Fresher <span className="green">Product.</span>
          </div>
          <div className="charcoal detail-text">
            Trading directly with the farmer means less change in hands, less
            handling, less time between farm and buyer
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshProduceBenefits;

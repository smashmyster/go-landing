import React from "react";
import Arrow from "./components/Arrow";

const FreshProduceBenefits = () => {
  return (
    <div className="screen fresh-produce-benefits-screen k-row-center-items k-row green-alpha-bg">
      <div className="f-12 sub-title uppercase">Khula! app</div>
      <div className="f-12 title">
        Using the KHULA Fresh Produce
        <br />
        Trader means
      </div>
      <div className="k-row k-row-center-items main-section">
        <div className="detail-container column-center">
          <div className="icon-container k-row k-row-center-items">
            <span className="icon fal-seedling" />
          </div>
          <div className="font-weight-600 f-20 grey m-5 header">
            Fresher <span className="green">Product.</span>
          </div>
          <div className="charcoal detail-text">
            Trading directly with the farmer means less change in hands, less
            handling, less time between farm and buyer.
          </div>
        </div>
        <Arrow />
        <div className="detail-container column-center">
          <div className="icon-container k-row k-row-center-items">
            <span className="icon fal-money-bill-wave-alt" />
          </div>
          <div className="font-weight-600 f-20 grey m-5 header">
            Lower <span className="green">Costs.</span>
          </div>
          <div className="charcoal detail-text">
            Trading on KHULA means lower costs, increased efficiency, and direct
            delivery, Lower/No in transit storage, no agency fees.
          </div>
        </div>
        <Arrow />
        <div className="detail-container column-center">
          <div className="icon-container k-row k-row-center-items">
            <span className="icon fal-hand-holding-seedling" />
          </div>
          <div className="font-weight-600 f-20 grey m-5 header">
            More <span className="green">Value.</span>
          </div>
          <div className="charcoal detail-text">
            KHULA Trading tools enable better decision making by buyers, and
            companies, to increase profits, planning and pricing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshProduceBenefits;

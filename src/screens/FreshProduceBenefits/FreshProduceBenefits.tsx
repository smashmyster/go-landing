import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Arrow from "./components/Arrow";

const FreshProduceBenefits = () => {
  return (
    <ScrollAnimation
      animateOnce={true}
      delay={1}
      duration={2}
      animateIn="slideInUp"
    >
      <div className="screen fresh-produce-benefits-screen green-alpha-bg">
        <div className="f-12 main-subtitle-text center-text mb-6">
          Khula app
        </div>
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
              handling, less time between farm and buyer.
            </div>
          </div>
          <Arrow />
          <div className="detail-container column-center">
            <div className="icon-container k-row k-row-center-items">
              <span className="icon fal-money-bill-wave-alt" />
            </div>
            <div className="font-weight-600 f-20 grey m-5">
              Lower <span className="green">Costs.</span>
            </div>
            <div className="charcoal detail-text">
              Trading on KHULA means lower costs, increased efficiency, and
              direct delivery, Lower/No in transit storage, no agency fees.
            </div>
          </div>
          <Arrow />
          <div className="detail-container column-center">
            <div className="icon-container k-row k-row-center-items">
              <span className="icon fal-hand-holding-seedling" />
            </div>
            <div className="font-weight-600 f-20 grey m-5">
              More <span className="green">Value.</span>
            </div>
            <div className="charcoal detail-text">
              KHULA Trading tools enable better decision making by buyers, and
              companies, to increase profits, planning and pricing.
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default FreshProduceBenefits;

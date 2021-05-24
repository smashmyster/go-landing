import React from "react";
import { useScrollSection } from "react-scroll-section";
import { EScrollSectionIds } from "constants/index";
import { isMobile } from "constants/index";

const SectionNavigation = () => {
  const farmerSection = useScrollSection(EScrollSectionIds.INPUTSMARKET);
  const buyerSection = useScrollSection(EScrollSectionIds.FRESHPRODUCEMARKET);
  const funderSection = useScrollSection(EScrollSectionIds.TESTIMONIES);
  return (
    <div className="section-navigation k-row k-row-center-items green-alpha-bg">
      <div className="nav-section">
        <div className="secondary-txt">
          Navigate conveniently to your section
        </div>
        <div className="primary-txt main-title-text">
          Unique solutions for every user
        </div>
      </div>
      {isMobile ? (
        <div className="nav-section nav-section-mobile">
          <div className="nav-btn" onClick={farmerSection.onClick}>
            Farmer <span className="fas-long-arrow-down"></span>
          </div>
        </div>
      ) : (
        <div className="nav-section">
          <div className="nav-section-header">Are you a Farmer?</div>
          <div className="nav-section-txt">
            Click here to see our solutions for you
          </div>
          <div className="nav-btn" onClick={farmerSection.onClick}>
            Go <span className="fas-long-arrow-down"></span>
          </div>
        </div>
      )}
      {isMobile ? (
        <div className="nav-section nav-section-mobile">
          <div className="nav-btn" onClick={buyerSection.onClick}>
            Buyer <span className="fas-long-arrow-down"></span>
          </div>
        </div>
      ) : (
        <div className="nav-section">
          <div className="nav-section-header">Are you a Buyer?</div>
          <div className="nav-section-txt">
            Click here to see our solutions for you
          </div>
          <div className="nav-btn" onClick={buyerSection.onClick}>
            Go <span className="fas-long-arrow-down"></span>
          </div>
        </div>
      )}
      {isMobile ? (
        <div className="nav-section nav-section-mobile">
          <div className="nav-btn" onClick={funderSection.onClick}>
            Funder <span className="fas-long-arrow-down"></span>
          </div>
        </div>
      ) : (
        <div className="nav-section">
          <div className="nav-section-header">Funder, Partner, Corporate?</div>
          <div className="nav-section-txt">
            Click here to see our solutions for you
          </div>
          <div className="nav-btn" onClick={funderSection.onClick}>
            Go <span className="fas-long-arrow-down"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionNavigation;

import React from "react";

const SectionNavigation = () => {
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
      <div className="nav-section">
        <div className="nav-section-header">Are you a Farmer?</div>
        <div className="nav-section-txt">
          Click here to see our solutions for you
        </div>
        <div className="nav-btn">
          Go <span className="fas-long-arrow-down"></span>
        </div>
      </div>
      <div className="nav-section">
        <div className="nav-section-header">Are you a Buyer?</div>
        <div className="nav-section-txt">
          Click here to see our solutions for you
        </div>
        <div className="nav-btn">
          Go <span className="fas-long-arrow-down"></span>
        </div>
      </div>
      <div className="nav-section">
        <div className="nav-section-header">Funder, Partner, Corporate?</div>
        <div className="nav-section-txt">
          Click here to see our solutions for you
        </div>
        <div className="nav-btn">
          Go <span className="fas-long-arrow-down"></span>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation;

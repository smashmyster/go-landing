import React from "react";
const logo = require("assets/images/khula-logo-badge-green.svg");

const AppLoading = () => {
  return (
    <div className="loading-screen roboto k-row k-row-center-items">
      <div className="col column-center">
        <img src={logo} alt="logo" style={{ width: 200, height: 200 }} />
      </div>
    </div>
  );
};

export default AppLoading;

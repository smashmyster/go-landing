import React from "react";
import "App.css";
import "assets/styles/index.css";
import "assets/styles/style.css";

const AppLoading = () => {
  return (
    <div className="loading-screen roboto k-row k-row-center-items">
      <div className="col column-center">
        <span>Loading...</span>
        <span>To do: a loader with the logo</span>
      </div>
    </div>
  );
};

export default AppLoading;

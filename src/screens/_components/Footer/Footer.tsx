import React from "react";
import { IListItems } from "constants/interfaces";
import ListItem from "components/ListItems/ListItems";
import { _GoToStore } from "constants/index";
import TitleLine from "./TitleLine";

/**
 * Footer component
 */
export default class Footer extends React.Component {
  state: {
    aboutUs: IListItems;
    ourProducts: IListItems;
    contactUs: IListItems;
  } = {
    aboutUs: {
      name: "About Us",
      list: [
        "Buy great food, anywhere. We serve bulk buyers, pack-houses, processors and distributers.",
        "Our Model",
        "Our Partners",
        "Our Team",
      ],
    },
    ourProducts: {
      name: "Our Products",
      list: ["Buyers App", "Farmers App", "Dashboard", "Input Market"],
    },
    contactUs: {
      name: "Contact Us",
      list: [
        "+27728755331",
        "32 Roos Street",
        "Fourways Golf Park",
        "Bayhill Building",
        "info@khula.co.za",
      ],
    },
  };

  render() {
    const { ourProducts, contactUs, aboutUs } = this.state;
    return (
      <div className="footer-container">
        <div className="footer-container-content">
          <div className="first">
            <ListItem listItem={aboutUs} className="footer-list" />
            <ListItem listItem={ourProducts} className="footer-list" />
            <div className="media footer-list">
              <div className="ls-title">Media</div>
              <TitleLine />
              <div className="media-imgs">
                <div className="row">
                </div>
                <div className="row">
                </div>
              </div>
            </div>
            <ListItem listItem={contactUs} className="footer-list" />
          </div>
          <div className="second">
            <div className="app-links">
              <div className="ls-title app-title">
                Download Our App
                <TitleLine />
              </div>
             
            </div>
          </div>
        </div>
        <div className="copyright">
          &copy; Copyright 2020. All rights reserved
        </div>
      </div>
    );
  }
}

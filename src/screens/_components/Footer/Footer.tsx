import React from "react";
import { IListItems } from "constants/interfaces";
import ListItem from "components/ListItems/ListItems";
import TitleLine from "./TitleLine";
import team from "assets/images/team.png";
import cheque from "assets/images/cheque.png";
import karidas from "assets/images/karidas.png";
import founders from "assets/images/founders.png";
import matt from "assets/images/matt.png";
import pres from "assets/images/pres.png";
import android from "assets/images/android.svg";
import ios from "assets/images/ios.svg";
import { _GoToStore } from "constants/index";

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
                  <img className="media-img" src={team} alt="khula-team" />
                  <img className="media-img" src={matt} alt="khula-team" />
                  <img className="media-img" src={cheque} alt="khula-team" />
                </div>
                <div className="row">
                  <img className="media-img" src={karidas} alt="khula-team" />
                  <img className="media-img" src={pres} alt="khula-team" />
                  <img className="media-img" src={founders} alt="khula-team" />
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
              <img
                src={android}
                onClick={() => _GoToStore("android")}
                alt="android-store"
                className="android"
              />
              <img
                src={ios}
                onClick={() => _GoToStore("ios")}
                alt="ios-store"
              />
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

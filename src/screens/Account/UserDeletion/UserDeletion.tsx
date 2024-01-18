import Intercom from "components/Intercom/Intercom";
import { _GoToStore } from "constants/index";
import React from "react";
import Footer from "screens/MainSite/_components/Footer/Footer";
import Header from "screens/MainSite/_components/Header/Header";
const phoneImg = require("./phone.png");

const UserDeletion = () => {
  return (
    <>
      <Intercom />
      <div className="user-deletion App roboto ">
        <Header />
        <div className="blog-page-title" style={{ fontSize: 40 }}>
          How do I delete my account data?
        </div>
        <div
          className="blog-page-sub-title"
          style={{ fontSize: 20, display: "block" }}
        >
          All data that Khula collects is used to enhance the experience within
          our platforms, We do not share or sell data to any third-party
          proprietors.
        </div>
        <div
          className="blog-page-sub-title"
          style={{ fontSize: 20, display: "block" }}
        >
          For any issues, queries and concerns, please email us at{" "}
          <a href="mailto:info@khula.co.za">info@khula.co.za</a> and refer to
          our{" "}
          <a
            href="https://khula.co.za/privacy.html"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>
        </div>
        <div className="blog-page-title" style={{ fontSize: 20 }}>
          Still want to remove your data?
        </div>
        <div
          className="blog-page-sub-title"
          style={{ fontSize: 16, display: "block" }}
        >
          Follow these simple steps:
        </div>
        <div
          className="blog-page-sub-title"
          style={{ fontSize: 16, display: "block" }}
        >
          <ul>
            <li>
              Open any app in the ecosystem (
              <a
                href={_GoToStore(undefined, "buyer", true)}
                target="_blank"
                rel="noreferrer"
              >
                Khula Produce Trader
              </a>{" "}
              or{" "}
              <a
                href={_GoToStore(undefined, "farmer", true)}
                target="_blank"
                rel="noreferrer"
              >
                Khula Inputs
              </a>
              )
            </li>
            <li>Open the side menu</li>
            <li>Go to settings</li>
            <li>Click `&quot;Delete account&quot;</li>
          </ul>
          <div className="k-content-center">
            <img
              src={phoneImg}
              alt="delete-account"
              className="phone-delete"
              style={{ marginBottom: 7 }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserDeletion;

import React, { useEffect, useState } from "react";
import "App.css";
import "assets/styles/index.css";
import "assets/styles/fonts/icomoon/style.css";
import MainSite from "MainSite";
import AppLoading from "components/AppLoading/AppLoading";
const logo = require("assets/images/khula-logo.png");
const logoSlogan = require("assets/images/khula-logo-slogan.png");
const truck = require("assets/images/truck.png");
const packhouse = require("assets/images/packhouse.jpeg");
const inputsApp = require("assets/images/inputs-app.png");
const aeci = require("assets/images/aeci.png");
const e2 = require("assets/images/e2.png");
const sakata = require("assets/images/sakata.png");
const absa = require("assets/images/absa.png");
const farmer = require("assets/images/farmer.jpg");
const testimony1 = require("assets/images/nkanyiso.jpg");
const app = require("assets/images/trader-app.png");
const web = require("assets/images/web.png");
const phoneBezel = require("assets/images/phone-bezel.png");
const phoneBackground = require("assets/images/phone-background.png");

const images = [
  logo,
  logoSlogan,
  truck,
  packhouse,
  inputsApp,
  aeci,
  e2,
  sakata,
  absa,
  farmer,
  testimony1,
  app,
  web,
  phoneBezel,
  phoneBackground,
];
const App = () => {
  const [appLoading, setAppLoading] = useState<boolean>(true);
  const checkImage = (path: any) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(path);
      img.onerror = () => reject(new Error("Image not loaded"));

      img.src = path;
    });
  };
  useEffect(() => {
    Promise.all(images.map((img) => checkImage(img))).then(() =>
      setAppLoading(false)
    );
  }, []);
  return appLoading ? <AppLoading /> : <MainSite />;
};

export default App;

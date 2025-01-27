import React, { useEffect, useState } from "react";
import "App.css";
import "assets/styles/index.css";
import "assets/styles/fonts/icomoon/style.css";
import MainSite from "screens/MainSite/MainSite";
import AppLoading from "components/AppLoading/AppLoading";
import { FIREBASE_CONFIG } from "constants/index";
import firebase from "firebase";
import { FirebaseAppProvider } from "reactfire";
import { Route, Routes } from "react-router-dom";
import GoogleForm from "screens/GoogleForm/GoogleForm";
import Blog from "screens/Blog/Blog";
import BlogPost from "screens/BlogPost/BlogPost";
import UserDeletion from "screens/Account/UserDeletion/UserDeletion";
const logo = require("assets/images/khula-logo.svg");
const logoSlogan = require("assets/images/khula-logo-slogan.svg");
const truck = require("assets/images/truck.png");
const phoneBezel = require("assets/images/phone-bezel.png");
const phoneBackground = require("assets/images/phone-background.png");

firebase.initializeApp(FIREBASE_CONFIG);
firebase.analytics();

const images = [logo, logoSlogan, truck, phoneBezel, phoneBackground];
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
  return (
    <FirebaseAppProvider firebaseConfig={FIREBASE_CONFIG}>
      {appLoading ? (
        <AppLoading />
      ) : (
        <Routes>
          <Route path="/account/user/deletion" element={<UserDeletion />} />
          <Route path="/fresh-produce" element={<GoogleForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<MainSite />} />
        </Routes>
      )}
    </FirebaseAppProvider>
  );
};

export default App;

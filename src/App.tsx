import React from "react";
import Header from "screens/_components/Header/Header";
import Banner from "screens/Landing/Banner/Banner";
import FarmerApp from "screens/Landing/FarmerApp/FarmerApp";
import Farmer from "screens/Landing/FarmerMarketPlace/FarmerMarketPlace";
import ClientApp from "screens/Landing/ClientApp/ClientApp";
import Client from "screens/Landing/ClientMarketPlace/ClientMarketPlace";
import Footer from "screens/_components/Footer/Footer";
import ScrollAnimation from "react-animate-on-scroll";
import "App.css";
import "assets/styles/index.css";
import "assets/styles/style.css";
import CovidBanner from "components/CovidBanner/CovidBanner";

const App = () => {
  return (
    <div className="App roboto">
      <Header />
      <div className="section">
        <CovidBanner />
        <Banner />
        <Farmer />
        <ScrollAnimation
          animateOnce={true}
          delay={2}
          duration={2}
          animateIn="slideInUp"
        >
          <FarmerApp />
        </ScrollAnimation>
        <Client />
        <ScrollAnimation
          animateOnce={true}
          delay={2}
          duration={2}
          animateIn="slideInUp"
        >
          <ClientApp />
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          delay={2}
          duration={2}
          animateIn="slideInUp"
        >
          <Footer />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default App;

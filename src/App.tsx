import React from "react";
import Header from "screens/_components/Header/Header";
import Footer from "screens/_components/Footer/Footer";
// import ScrollAnimation from "react-animate-on-scroll";
import "App.css";
import "assets/styles/index.css";
import "assets/styles/style.css";
import CovidBanner from "components/CovidBanner/CovidBanner";
import Landing from "screens/Landing/Landing";
import Stakeholders from "screens/Stakeholders/Stakeholders";
import ProductDetails from "screens/ProductDetails/ProductDetails";
import InputsMarket from "screens/InputsMarket/InputsMarket";
import ProduceMarket from "screens/ProduceMarket/ProduceMarket";
import FreshProduceBenefits from "screens/FreshProduceBenefits/FreshProduceBenefits";
import Testimonies from "screens/Testimonies/Testimonies";
import Contact from "screens/Contact/Contact";
import SectionNavigation from "screens/SectionNavigation/SectionNavigation";

const App = () => {
  return (
    <div className="App roboto">
      <Header />
      <div className="section">
        <CovidBanner />
        <Landing />
        <SectionNavigation />
        <Stakeholders />
        <ProductDetails />
        <InputsMarket />
        <ProduceMarket />
        <FreshProduceBenefits />
        <Testimonies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;

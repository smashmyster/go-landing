import React from "react";
import CovidBanner from "components/CovidBanner/CovidBanner";
import Landing from "screens/Landing/Landing";
import Stakeholders from "screens/Stakeholders/Stakeholders";
import ProductDetails from "screens/ProductDetails/ProductDetails";
import InputsMarket from "screens/InputsMarket/InputsMarket";
import ProduceMarket from "screens/ProduceMarket/ProduceMarket";
import FreshProduceBenefits from "screens/FreshProduceBenefits/FreshProduceBenefits";
import Testimonies from "screens/Testimonies/Testimonies";
import Contact from "screens/Contact/Contact";
import SectionNavigation from "screens/_components/SectionNavigation/SectionNavigation";
import Header from "screens/_components/Header/Header";
import Footer from "screens/_components/Footer/Footer";

const MainSite = () => {
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

export default MainSite;

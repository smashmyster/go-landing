import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
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
import { EScrollSectionIds } from "./constants";
import Intercom from "components/Intercom/Intercom";

const MainSite = () => {
  return (
    <>
      <Intercom />
      <ScrollingProvider scrollBehavior="smooth" offset={-65}>
        <div className="App roboto">
          <Header />
          <div className="section">
            {/* <CovidBanner /> */}
            <Landing />
            <SectionNavigation />
            <Stakeholders />
            <Section id={EScrollSectionIds.INPUTSMARKET}>
              <ProductDetails />
            </Section>
            <InputsMarket />
            <Section id={EScrollSectionIds.FRESHPRODUCEMARKET}>
              <ProduceMarket />
            </Section>
            <FreshProduceBenefits />
            <Section id={EScrollSectionIds.TESTIMONIES}>
              <Testimonies />
            </Section>
            <Contact />
            <Footer />
          </div>
        </div>
      </ScrollingProvider>
    </>
  );
};

export default MainSite;

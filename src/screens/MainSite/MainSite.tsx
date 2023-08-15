import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import Landing from "./Landing/Landing";
import Stakeholders from "./Stakeholders/Stakeholders";
import ProductDetails from "./ProductDetails/ProductDetails";
import InputsMarket from "./InputsMarket/InputsMarket";
import ProduceMarket from "./ProduceMarket/ProduceMarket";
import FreshProduceBenefits from "./FreshProduceBenefits/FreshProduceBenefits";
import Testimonies from "./Testimonies/Testimonies";
import Contact from "./Contact/Contact";
import SectionNavigation from "./_components/SectionNavigation/SectionNavigation";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { EScrollSectionIds, isMobile } from "../../constants";
import Intercom from "components/Intercom/Intercom";
import Blogs from "./Blogs/Blogs";

const MainSite = () => {
  return (
    <>
      <Intercom />
      <ScrollingProvider scrollBehavior="smooth" offset={-65}>
        <div
          className="App roboto"
          style={{ ...(isMobile && { overflow: "hidden" }) }}
        >
          <Header />
          <div className="section">
            <Landing />
            <SectionNavigation />
            <Blogs />
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

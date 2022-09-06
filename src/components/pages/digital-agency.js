import React from "react";
import Portfolio from "../portfolio";
import About from "../about";
import Features from "../features";
import Footer from "../global/footer";
import Herov4 from "../herov4";
import Faq from "../faq";
import Pricing from "../pricing";
import Blogv3 from "../blogv3";
import Contactv2 from "../contactv2";
import Cta from "../cta";
import Testimonial from "../testimonial";
import ctaData from "../../data/cta.json"
import HeaderDigital from "../global/headerDigital";

const DigitalAgency = ({ header }) => {
    const {ctav4} = ctaData;
  return (
    <>
      <HeaderDigital header={header} />
      <Herov4 isBg="yes" />
      <Features isBg="" />
      <About isBg="yes" />
      <Portfolio isBg="" />
      <Cta isBg="" cta={ctav4} />
      <Faq isBg="yes" />
      <Pricing isBg="" />
      <Testimonial isBg="yes"/>
      <Blogv3 isBg="" />
      <Contactv2 isBg="yes" />
      <Footer />
    </>
  );
};

export default DigitalAgency;

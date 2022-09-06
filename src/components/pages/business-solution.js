import React from "react";
import About from "../about";
import Blog from "../blog";
import Contact from "../contact";
import Cta from "../cta";
import Faq from "../faq";
import Footer from "../global/footer";
import Hero from "../hero";
import Pricing from "../pricing";
import Team from "../team";
import Testimonial from "../testimonial";
import WhatWeDo from "../what-we-do";
import WhyUs from "../why-us";
import ctaData from "../../data/cta.json";
import HeaderBusiness from "../global/headerBusiness";

const BusinessSolution = ({ header }) => {
  const { cta } = ctaData;
  return (
    <>
      <HeaderBusiness header={header} />
      <Hero isBg="yes" />
      <About isBg="" />
      <WhyUs isBg="yes" />
      <WhatWeDo isBg="" />
      <Cta isBg="" cta={cta} />
      <Pricing isBg="" />
      <Faq isBg="yes" />
      <Team isBg="" />
      <Testimonial isBg="yes" />
      <Blog isBg="" />
      <Contact isBg="yes" />
      <Footer />
    </>
  );
};

export default BusinessSolution;

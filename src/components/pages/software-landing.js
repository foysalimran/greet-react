import React from "react";
import Footer from "../global/footer";
import Herov5 from "../herov5";
import Overview from "../overview";
import QuickOverview from "../quick-overview";
import Cta from "../cta";
import Platform from "../platform";
import Pricing from "../pricing";
import Testimonialv3 from "../testimonialv3";
import Ctav2 from "../ctav2";
import Faq from "../faq";
import Blogv2 from "../blogv2";
import Contactv2 from "../contactv2";
import ctaData from "../../data/cta.json";
import aboutData from "../../data/about.json";
import AboutSoftware from "../about-software";
import HeaderSoftware from "../global/headerSoftwre";

const SoftwareLanding = ({ header }) => {
  const { ctav5 } = ctaData;
  const { aboutv5 } = aboutData;
  return (
    <>
      <HeaderSoftware header={header} />
      <Herov5 isBg="yes" />
      <AboutSoftware isBg="" aboutData={aboutv5} />
      <Overview isBg="yes" />
      <QuickOverview isBg="" />
      <Cta isBg="" cta={ctav5} />
      <Platform isBg="" />
      <Pricing isBg="yes" />
      <Testimonialv3 isBg="" />
      <Ctav2 isBg="yes" />
      <Faq isBg="" />
      <Blogv2 isBg="yes" />
      <Contactv2 isBg="" />
      <Footer />
    </>
  );
};

export default SoftwareLanding;

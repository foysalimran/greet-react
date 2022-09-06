import React from "react";
import AppFeatures from "../app-features";
import Footerv2 from "../global/footerv2";
import Herov6 from "../herov6";
import about from "../../data/about.json";
import Screenshot from "../screenshot";
import Download from "../download";
import Cta from "../cta";
import ctaData from "../../data/cta.json";
import Pricingv2 from "../pricingv2";
import Testimonial from "../testimonial";
import Blog from "../blog";
import Contactv3 from "../contactv3";
import AboutApps from "../about-apps";
import HeaderApps from "../global/headerApps";

const AppsLanding = ({ header }) => {
  const { ctav6 } = ctaData;
  const { aboutv6 } = about;
  return (
    <>
      <HeaderApps header={header} />
      <Herov6 isBg="yes" />
      <AppFeatures isBg="" />
      <AboutApps isBg="yes" aboutData={aboutv6} />
      <Screenshot isBg="" />
      <Download isBg="yes" />
      <Pricingv2 isBg="" />
      <Testimonial isBg="yes" />
      <Cta isBg="" cta={ctav6} />
      <Blog isBg="yes" />
      <Contactv3 isBg="" />
      <Footerv2 />
    </>
  );
};

export default AppsLanding;

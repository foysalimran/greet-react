import React from "react";
import Aboutv2 from "../aboutv2";
import Cta from "../cta";
import Ctav2 from "../ctav2";
import Blogv2 from "../blogv2";
import Footer from "../global/footer";
import Herov2 from "../herov2";
import Pricingv2 from "../pricingv2";
import Service from "../service";
import Projects from "../projects";
import Teamv2 from "../teamv2";
import Testimonialv2 from "../testimonialv2";
import Contactv2 from "../contactv2";
import ctaData from "../../data/cta.json";
import about from "../../data/about.json"
import HeaderIt from "../global/headerIt";

const ItSolution = ({ header }) => {
  const {aboutv2} = about;
  const { cta } = ctaData;
  return (
    <>
      <HeaderIt header={header} />
      <Herov2 isBg="yes" />
      <Aboutv2 isBg="" aboutData={aboutv2} />
      <Service isBg="yes" />
      <Ctav2 isBg="" />
      <Projects isBg="yes" />
      <Pricingv2 isBg="" />
      <Cta isBg="" cta={cta} />
      <Teamv2 isBg="" />
      <Testimonialv2 isBg="yes" />
      <Blogv2 isBg="" />
      <Contactv2 isBg="yes" />
      <Footer />
    </>
  );
};

export default ItSolution;

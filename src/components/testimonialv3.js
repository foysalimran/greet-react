import React, { useContext } from "react";
import TestimonialSlider from "./testimonial-slider";
import data from "../data/testimonial.json";
import { Trans } from "react-i18next";
import LocaleContext from "../LocaleContext";

const Testimonialv3 = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  const { testimonialv3 } = data;
  const { title, subtitle, image, review } = testimonialv3;
  return (
    // <!-- ========== Testimonial section start ========== -->
    <section
      id="testimonial"
      className={`testimonial3 section-padding ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img className="img-fluid" src={image} alt="title" />
          </div>
          <div className="col-md-6 offset-md-1 testimonial3__content">
            <div
              className={
                locale === "ar" ? "section-title-right" : "section-title-left"
              }
            >
              <p className="badge-text">
                <Trans i18nKey="testimonialv3.subtitle">{subtitle}</Trans>
              </p>
              <h3>
                <Trans i18nKey="testimonialv3.title">{title}</Trans>
              </h3>
            </div>
            <TestimonialSlider review={review} />
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonialv3;

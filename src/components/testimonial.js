import React, { useContext } from "react";
import CountUp from "react-countup";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import data from "../data/testimonial.json";
import LocaleContext from "../LocaleContext";
import TestimonialSlider from "./testimonial-slider";

const Testimonial = (waitLoad) => {
  const { locale } = useContext(LocaleContext);
  const { testimonial } = data;
  const {
    title,
    subtitle,
    description,
    review,
    button,
    counterNumber,
    shapeImg1,
    shapeImg2,
    shapeImg3,
    shapeImg4,
  } = testimonial;
  return (
    // <!-- ========== Testimonial section end ========== -->
    <section className="section-padding testimonial bg-one" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div
              className={
                locale === "ar" ? "section-title-right" : "section-title-left"
              }
            >
              <p className="badge-text">
                {<Trans i18nKey="testimonial.subtitle">{subtitle}</Trans>}
              </p>
              <h3>
                <CountUp end={counterNumber} enableScrollSpy="true" />
                {<Trans i18nKey="testimonial.title">{title}</Trans>}
              </h3>
            </div>
            <p className="mb-4">
              {<Trans i18nKey="testimonial.description">{description}</Trans>}
            </p>
            <Link className="btn__primary" to="#">
              <span>
                {<Trans i18nKey="testimonial.button">{button}</Trans>}
              </span>
            </Link>
          </div>
          <div className="col-lg-7">
            <div className="testimonial__slider">
              <img
                className="testimonial__slider__img-1"
                src={shapeImg1}
                alt="title"
              />
              <img
                className="testimonial__slider__img-2"
                src={shapeImg2}
                alt="title"
              />
              <img
                className="testimonial__slider__img-3"
                src={shapeImg3}
                alt="title"
              />
              <img
                className="testimonial__slider__img-5"
                src={shapeImg4}
                alt="title"
              />
  
              <TestimonialSlider review={review} />

            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonial;

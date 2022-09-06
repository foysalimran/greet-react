import React, { useContext } from "react";
import CountUp from "react-countup";
import data from "../data/hero.json";
import LocaleContext from "../LocaleContext";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";

const Herov2 = ({ isBg }) => {
  const { herov2 } = data;
  const {
    title,
    subtitle,
    description,
    button,
    image1,
    image2,
    image3,
    badge,
  } = herov2;
  const { locale } = useContext(LocaleContext);
  return (
    // <!-- ========== Hero section start ========== -->
    <section
      id="hero"
      className={`hero2 hero-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          <div
            className={
              locale === "ar"
                ? "col-lg-6 mb-5 mb-lg-0 text-center text-md-end"
                : "col-lg-6 mb-5 mb-lg-0 text-center text-md-start"
            }
          >
            <div className="badge-text">
              <Trans i18nKey="herov2.subtitle">{subtitle}</Trans>
            </div>
            <h1 className="hero2__title display-4 mb-4 text-capitalize">
              <Trans i18nKey="herov2.title">{title}</Trans>
            </h1>
            <p className="mb-4 fs-5">
              <Trans i18nKey="herov2.description">{description}</Trans>
            </p>
            <Link
              smooth={true}
              duration={500}
              offset={-60}
              to="about"
              className="btn__primary btn-md smooth"
            >
              <span>
                <Trans i18nKey="herov2.button">{button}</Trans>
              </span>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="hero2__right">
              <div className="hero2__right--col1">
                <div className="hero2__right--img1">
                  <img src={image1} alt="title" />
                </div>
              </div>
              <div className="hero2__right--col2">
                <div className="hero2__right--img2">
                  <img src={image2} alt="title" />
                </div>
                <div className="hero2__right--img3">
                  <img src={image3} alt="title" />
                </div>
              </div>
              <div className="hero2__trusted--badge">
                <h5>
                  <CountUp end={badge.counterNumber} enableScrollSpy="true" />+
                </h5>
                <p>{badge.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Herov2;

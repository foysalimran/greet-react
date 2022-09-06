import React, { useContext } from "react";
import CountUp from "react-countup";
import { Trans } from "react-i18next";
import data from "../data/hero.json";
import LocaleContext from "../LocaleContext";
import { Link } from "react-scroll";

const Hero = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  console.log(locale);
  const { herov1 } = data;
  const { badgeOne, badgeTwo, badgeThree } = herov1;
  return (
    // <!-- ========== Hero section start ========== -->
    <section
      id="hero"
      className={`hero hero-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="circle x1"></div>
      <div className="container">
        <div className="row gx-xl-5">
          <div
            className={
              locale === "ar"
                ? "col-lg-6 mb-4 mb-lg-0 d-flex align-items-center text-center text-md-end"
                : "col-lg-6 mb-4 mb-lg-0 d-flex align-items-center text-center text-md-start"
            }
          >
            <div className="hero__content">
              <p className="badge-text">
                <Trans i18nKey="herov1.subtitle">{herov1.subtitle}</Trans>
              </p>
              <h1 className="hero__title display-4 mb-4 text-capitalize">
                <Trans i18nKey="herov1.title">{herov1.title}</Trans>
              </h1>
              <p className="mb-4 fs-5">
                <Trans i18nKey="herov1.description">{herov1.description}</Trans>
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 position-relative">
                <Link
                  smooth={true}
                  duration={500}
                  offset={-60}
                  to="about"
                  className="btn__primary btn-md smooth"
                >
                  <span>
                    <Trans i18nKey="herov1.button">{herov1.button}</Trans>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <div className="image-shape"></div>
              <div
                className="image-shape-2"
                style={{ backgroundImage: `url(${herov1.bgImage})` }}
              ></div>
              <div
                className="image-shape-3"
                style={{ backgroundImage: `url(${herov1.bgImage})` }}
              ></div>
              <img src={herov1.image} alt={herov1.title} />
              <div className="hero__image__badge-1">
                <h3>
                  <CountUp
                    end={badgeOne.counterNumber}
                    enableScrollSpy="true"
                  />
                  +
                </h3>
                <p>
                  <Trans i18nKey="herov1.one">{herov1.button}</Trans>
                </p>
              </div>
              <div className="hero__image__badge-2">
                <h3>
                  <CountUp
                    end={badgeTwo.counterNumber}
                    enableScrollSpy="true"
                  />
                  +
                </h3>
                <p>
                  <Trans i18nKey="herov1.two">{herov1.button}</Trans>
                </p>
              </div>
              <div className="hero__image__badge-3">
                <h3>
                  <CountUp
                    end={badgeThree.counterNumber}
                    enableScrollSpy="true"
                  />
                  +
                </h3>
                <p>
                  <Trans i18nKey="herov1.one">{herov1.three}</Trans>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section start ========== -->
  );
};

export default Hero;

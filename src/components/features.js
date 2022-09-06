import React from "react";
import CountUp from "react-countup";
import { Trans } from "react-i18next";
import data from "../data/feature.json";
import { Link } from "react-router-dom";

const Features = ({ isBg }) => {
  const { feature } = data;
  const { featureCards, title, description, bgImage, videoLink, funFactCards } =
    feature;
  return (
    <section id="feature" className={`${isBg === "yes" ? "bg-one" : ""}`}>
      {/* <!-- ========== Hero card first ========== --> */}
      <section className="hero4-cards">
        <div className="container">
          <div className="row">
            {featureCards.map((data, i) => (
              <div
                key={i}
                className="col-sm-6 col-lg-3 mb-4 mb-lg-0 hero4-cards__wrap"
              >
                <div className="hero4-cards__single translateEffect1 h-100">
                  <div className="hero4-cards__single__icon">
                    <i className={data.icon}></i>
                  </div>
                  <h4 className="my-4">
                    <Trans i18nKey={`feature.featureCards${i + 1}.title`}>
                      {data.title}
                    </Trans>
                  </h4>
                  <p>
                    <Trans i18nKey={`feature.featureCards${i + 1}.description`}>
                      {data.description}
                    </Trans>
                  </p>
                  <div
                    className="hero4-cards__single__hover"
                    style={{ backgroundImage: `url(${data.bgImage})` }}
                  >
                    <div className="hero4-cards__single__hover__icon">
                      <i className={data.icon}></i>
                    </div>
                    <h4 className="my-4">
                      <Trans i18nKey={`feature.featureCards${i + 1}.title`}>
                        {data.title}
                      </Trans>
                    </h4>
                    <p>
                      <Trans
                        i18nKey={`feature.featureCards${i + 1}.description`}
                      >
                        {data.description}
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ========== Hero card end ========== --> */}
      {/* <!-- ========== Fun fact start ========== --> */}
      <section className="section-padding fun-fact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-column justify-content-around h-100">
                <div className="section-title-left mb-3">
                  <h3 className="mb-4">
                    <Trans i18nKey="feature.title">{title}</Trans>
                  </h3>
                  <p className="pb-3">
                    <Trans i18nKey="feature.description">{description}</Trans>
                  </p>
                </div>
                <div className="fun-fact__card mb-4 mb-lg-0">
                  <div className="row align-items-center text-center">
                    {funFactCards.map((data, i) => (
                      <div key={i} className="col-sm-4 pb-2 pb-sm-0">
                        <h4 className="fs-2">
                          <CountUp end={data.number} enableScrollSpy="true" />+
                        </h4>
                        <p>
                          <Trans i18nKey={`feature.funFactCards${i + 1}`}>
                            {data.title}
                          </Trans>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fun-fact__image">
                <div className="fun-fact__image--wrap">
                  <img className="img-fluid mx-auto" src={bgImage} alt="" />

                  <Link to={videoLink} className="glightbox3 video-btn">
                    <i className="icofont-ui-play"></i>
                  </Link>
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========== Fun fact end ========== --> */}
    </section>
  );
};

export default Features;

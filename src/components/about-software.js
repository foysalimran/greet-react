import React from "react";
import CountUp from "react-countup";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const AboutSoftware = ({ isBg, aboutData }) => {
  const {
    title,
    subtitle,
    description,
    image1,
    image2,
    itemsIcon,
    items,
    count,
    using,
  } = aboutData;
  return (
    <section
      id="about"
      className={`about2 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <SectionTitle
              subtitle={
                <Trans i18nKey="aboutSoftware.subtitle">{subtitle}</Trans>
              }
              title={<Trans i18nKey="aboutSoftware.title">{title}</Trans>}
              description={
                <Trans i18nKey="aboutSoftware.description">{description}</Trans>
              }
            />

            <div className="about2__items">
              {items.map((data, i) => (
                <div key={i} className="about2__items--single">
                  <div className="about2__items--single--icon">
                    <i className={itemsIcon}></i>
                  </div>
                  <div className="about2__items--text">
                    <h3>
                      <Trans i18nKey={`aboutSoftware.items${i + 1}.title`}>
                        {data.title}
                      </Trans>
                    </h3>
                    <p>
                      <Trans i18nKey={`aboutSoftware.items${i + 1}.desc`}>
                        {data.desc}
                      </Trans>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about2__image">
              <img src={image1} className="about2__image--one" alt="About us" />
              <img
                src={image2}
                className="about2__image--two"
                alt="About us two"
              />
              <div className="about2__image--promo">
                <span className="about2__image--promo--ico">
                  <i className="icofont-nerd-smile"></i>
                </span>
                <div className="about2__image--promo--text">
                  <h3>
                    <CountUp end={count} enableScrollSpy="true" /> +
                  </h3>
                  <Trans i18nKey="aboutSoftware.using">{using}</Trans>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSoftware;

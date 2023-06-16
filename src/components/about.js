import React from "react";
import SectionTitle from "./section-title";
import data from "../data/about.json";
import { Trans } from "react-i18next";

const About = ({ isBg }) => {
  const { about } = data;
  const { image, title, subtitle, description, card1, card2 } = about;
  return (
    // <!-- ========== About section start ========== -->
    <section
      className={`about section-padding-t  ${isBg === "yes" ? "bg-one" : ""}`}
      id="about"
    >
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-5 order-1 order-lg-0">
            <div className="about__image">
              <img src={image} alt="about us" />
              <div className="circle"></div>
            </div>
          </div>
          <div className="col-lg-7 order-0 order-lg-1 pb-4 mb-lg-0 section-padding-b">
            <div className="about__content">
              <SectionTitle
                title={<Trans i18nKey="about.title">{title}</Trans>}
                subtitle={<Trans i18nKey="about.subtitle">{subtitle}</Trans>}
                description={
                  <Trans i18nKey="about.description">{description}</Trans>
                }
              />
              <div className="row justify-content-center">
                <div className="col-md-6 translateEffect2">
                  <div className="about__content--single">
                    <div className="about__content--singleTop">
                      <div className="about__content--ico">
                        <i className="icofont-money-bag"></i>
                      </div>
                      <h3>
                        {
                          <Trans i18nKey="about.card1.title">
                            {card1.title}
                          </Trans>
                        }
                      </h3>
                    </div>
                    <p>
                      {
                        <Trans i18nKey="about.card1.description">
                          {card1.description}
                        </Trans>
                      }
                    </p>
                  </div>
                </div>
                <div className="col-md-6 translateEffect2">
                  <div className="about__content--single">
                    <div className="about__content--singleTop">
                      <div className="about__content--ico">
                        <i className="icofont-chart-growth"></i>
                      </div>
                      <h3>
                        {
                          <Trans i18nKey="about.card2.title">
                            {card2.title}
                          </Trans>
                        }
                      </h3>
                    </div>
                    <p>
                      {
                        <Trans i18nKey="about.card2.description">
                          {card2.description}
                        </Trans>
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== About section end ========== -->
  );
};

export default About;

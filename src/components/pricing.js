import React from "react";
import SectionTitle from "./section-title";
import data from "../data/pricing.json";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Pricing = ({ isBg }) => {
  const { pricing } = data;
  const { title, subtitle, button, pricingCards } = pricing;
  return (
    // <!-- ========== About section start ========== -->
    <section
      id="pricing"
      className={`pricing section-padding  ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <SectionTitle
          subtitle={<Trans i18nKey="pricing.subtitle">{subtitle}</Trans>}
          title={<Trans i18nKey="pricing.title">{title}</Trans>}
          direction="center"
        />
        <div className="row align-items-center justify-content-center">
          {pricingCards.map((card, i) => (
            <div key={i} className="col-md-6 col-lg-4 pb-4 mb-5 mb-lg-0">
              <div className="pricing__item translateEffect1">
                <span className="pricing__item__tag">
                  <Trans i18nKey={`pricing.pricingCard${i + 1}.tag`}>
                    {card.tag}
                  </Trans>
                </span>
                <div className="pricing__item__icon">
                  <i className={card.icon}></i>
                </div>
                <h3 className="fs-1 mt-2">${card.price}</h3>
                <p className="pb-3">
                  <Trans i18nKey={`pricing.pricingCard${i + 1}.format`}>
                    {card.format}
                  </Trans>
                </p>
                <hr />
                <div className="pricing__item__list">
                  <ul className="pt-3">
                    {card.pricingDetails.map((detail, i) => (
                      <li key={i}>
                        <div className="pricing__item__list--ico">
                          <i className={card.checkIcon}></i>
                        </div>
                        <p>
                          <Trans
                            i18nKey={`pricing.pricingCard${card.id}.${i + 1}`}
                          >
                            {detail.item}
                          </Trans>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="#" className="btn__primary">
                  <span>
                    <Trans i18nKey="pricing.button">{button}</Trans>{" "}
                    <i className="icofont-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    //  <!-- ========== Pricing section end ========== -->
  );
};

export default Pricing;

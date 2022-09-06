import React from "react";
import data from "../data/pricing.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Pricingv2 = ({ isBg }) => {
  const { pricingv2 } = data;
  const { title, subtitle, button, pricingCards } = pricingv2;
  return (
    <section
      className={`section-padding pricing2  ${isBg === "yes" ? "bg-one" : ""}`}
      id="pricing"
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="pricingv2.title">{title}</Trans>}
          subtitle={<Trans i18nKey="pricingv2.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row justify-content-center">
          {pricingCards.map((card, i) => (
            <div key={i} className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className={`pricing2__item ${card.tag ? "brand" : ""}`}>
                {card.tag ? (
                  <span className="brand__item">
                    <Trans i18nKey={`pricingv2.pricingCards${i + 1}.title`}>
                      {card.tag}
                    </Trans>
                  </span>
                ) : (
                  ""
                )}
                <h4 className="pricing2__item__subtitle">
                  <Trans i18nKey={`pricingv2.pricingCards${i + 1}.title`}>
                    {card.title}
                  </Trans>
                </h4>
                <h3 className="pricing2__item__title">
                  ${card.price}
                  <sub>
                    /
                    {
                      <Trans i18nKey={`pricingv2.pricingCards${i + 1}.format`}>
                        {card.format}
                      </Trans>
                    }
                  </sub>
                </h3>
                <hr />
                <ul>
                  {card.pricingDetails.map((detail, i) => (
                    <li key={i}>
                      <div className="pricing2__item__list-icon">
                        <i className={card.checkIcon}></i>
                      </div>
                      <p>
                        <Trans i18nKey={`pricing.pricingCard${card.id}.${i + 1}`}>
                          {detail.item}
                        </Trans>
                      </p>
                    </li>
                  ))}
                </ul>
                <Link to="#" className="btn__primary w-100">
                  <span>
                    <Trans i18nKey="pricingv2.button">{button}</Trans>
                    <i className="icofont-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricingv2;

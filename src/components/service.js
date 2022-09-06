import React from "react";
import SectionTitle from "./section-title";
import data from "../data/service.json";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Service = ({ isBg }) => {
  const { service } = data;
  const { title, subtitle, items } = service;
  return (
    // <!-- ========== Service section start ========== -->
    <section
      id="services"
      className={`services2 section-padding position-relative ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="service.title">{title}</Trans>}
          subtitle={<Trans i18nKey="service.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row">
          {items.map((item, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 services2__item--wrap"
            >
              <div className="services2__item translateEffect1">
                <div className="services2__item--content">
                  <span className="services2__item--content--number">
                    {item.number}
                  </span>
                  <h3>
                    <Trans i18nKey={`service.items${i + 1}`}>
                      {item.title}
                    </Trans>
                  </h3>

                  <Link className="ico__link" to="#">
                    <i className="icofont-plus"></i>
                  </Link>
                </div>
                <span className="services2__item--ico">
                  <i className={`${item.icon}`}></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Service section end ========== -->
  );
};

export default Service;

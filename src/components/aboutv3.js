import React from "react";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import data from "../data/about.json";

const Aboutv3 = ({ isBg }) => {
  const { aboutv3 } = data;
  const {
    image,
    title,
    subtitle,
    itemsIcon,
    items,
    description,
  } = aboutv3;
  return (
    <section
      id="about"
      className={`about3 section-padding-t ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-xl-0">
            <div className="about3__content">
              <SectionTitle
                title={<Trans i18nKey="aboutv3.title">{title}</Trans>}
                subtitle={<Trans i18nKey="aboutv3.subtitle">{subtitle}</Trans>}
                description={
                  <Trans i18nKey="aboutv3.description">{description}</Trans>
                }
              />
              <ul>
                {items.map((data, i) => (
                  <li key={i}>
                    <div className="about3__content--ico">
                      <i className={itemsIcon}></i>
                    </div>
                    <p>
                      <Trans i18nKey={`aboutv3.aboutList.${i + 1}`}>
                        {data.title}
                      </Trans>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
          <div class="about3__image">
              <img
                class="img-fluid"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutv3;

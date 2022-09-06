import React from "react";
import { Trans } from "react-i18next";
import data from "../data/hero.json";
import { Link } from "react-scroll";

const Herov4 = ({ isBg }) => {
  const { herov4 } = data;
  const { title, subtitle, description, button, image1, image2, orbitItems } =
    herov4;
  return (
    <section
      className={`hero4 hero-padding ${isBg === "yes" ? "bg-one" : ""}`}
      id="hero"
    >
      <div className="container">
        <div className="row gx-xl-5 align-items-center">
          <div className="col-lg-6">
            <div className="hero3__content">
              <p className="badge-text">
                <Trans i18nKey="herov4.subtitle">{subtitle}</Trans>
              </p>
              <h1 className="hero__title display-4 mb-4 text-capitalize">
                <Trans i18nKey="herov4.title">{title}</Trans>
              </h1>
              <p className="mb-4 fs-5">
                <Trans i18nKey="herov4.description">{description}</Trans>
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-3 position-relative">
                <Link
                  smooth={true}
                  duration={500}
                  offset={-60}
                  to="portfolio"
                  className="btn__primary btn-md smooth"
                >
                  <span>
                    <Trans i18nKey="herov4.button">{button}</Trans>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero4__orbit">
              <div className="orbit">
                <div className="center-image">
                  <img src={image1} alt="title" />
                  <img src={image2} alt="title" />
                </div>
                <ul>
                  {orbitItems.map((data, i) => (
                    <li key={i}>
                      <div className="orbit__icon">
                        <i className={data.icon}></i>
                      </div>
                      <p>{data.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov4;

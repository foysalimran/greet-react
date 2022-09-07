
import React, { useEffect } from "react";
import data from "../data/hero.json";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";

const Herov3 = ({ isBg }) => {
  const { herov3 } = data;
  const {
    title,
    subtitle,
    description,
    image,
    videoLink,
    identity,
    relations,
    event,
    advertising,
    mail,
    button,
  } = herov3;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    // <!-- ========== Hero section start ========== -->
    <section
      className={`hero3 hero-padding ${isBg === "yes" ? "bg-one" : ""}`}
      id="hero"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero3__content">
            <p className="badge-text">
              <Trans i18nKey="herov3.subtitle">{subtitle}</Trans>
            </p>
            <h1 className="display-4 mb-4 hero3__title">
              <Trans i18nKey="herov3.title">{title}</Trans>
            </h1>
            <p className="fs-5 mb-4">
              <Trans i18nKey="herov3.description">{description}</Trans>
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-3">
              <Link
                className="btn__primary btn-md"
                smooth={true}
                duration={500}
                offset={-60}
                to="service"
              >
                <span>
                  <Trans i18nKey="herov3.button">{button}</Trans>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero3__image">
              <img className="img-fluid" src={image} alt="title" />

              <Link smooth={true} duration={500} offset={-60} to="service">
                <div className="hero3__image__icon identity">
                  <i className={identity.icon}></i>
                  <p>
                    <Trans i18nKey="herov3.identity">{identity.title}</Trans>
                  </p>
                </div>
              </Link>
              <Link smooth={true} duration={500} offset={-60} to="service">
                <div className="hero3__image__icon relations">
                  <i className={relations.icon}></i>
                  <p>
                    <Trans i18nKey="herov3.relations">{relations.title}</Trans>
                  </p>
                </div>
              </Link>
              <Link smooth={true} duration={500} offset={-60} to="service">
                <div className="hero3__image__icon event">
                  <i className={event.icon}></i>
                  <p>
                    <Trans i18nKey="herov3.event">{event.title}</Trans>
                  </p>
                </div>
              </Link>
              <Link smooth={true} duration={500} offset={-60} to="service">
                <div className="hero3__image__icon advertising">
                  <i className={advertising.icon}></i>
                  <p>
                    <Trans i18nKey="herov3.advertising">{advertising.title}</Trans>
                  </p>
                </div>
              </Link>
              <Link smooth={true} duration={500} offset={-60} to="service">
                <div className="hero3__image__icon mail">
                  <i className={mail.icon}></i>
                  <p>
                    <Trans i18nKey="herov3.mail">{mail.title}</Trans>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Herov3;

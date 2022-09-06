import React from "react";
import data from "../../data/project-details.json";
import { Link } from "react-router-dom";
import SinglePageHeader from "../global/single-page-header";
import { Trans } from "react-i18next";
import heroData from "../../data/single-page-hero.json";
import Footer from "../global/footer";

const ProjectDetails = ({ header }) => {
  const { projectDetails } = data;
  const { singleProjectHero } = heroData;
  const {
    image1,
    image2,
    title2,
    description2,
    title3,
    description3,
    title4,
    description4,
    info,
    category,
    share,
    date,
    button,
  } = projectDetails;
  return (
    <>
      <SinglePageHeader header={header} />
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">
                <Trans i18nKey="singleProjectHero.title">
                  {singleProjectHero}
                </Trans>
              </h1>
              <ul>
                <li>
                  <Link to="/">
                    <Trans i18nKey="singleProjectHero.home">Home</Trans>
                  </Link>
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>
                </li>
                <li>
                  <Trans i18nKey="singleProjectHero.title">
                    {singleProjectHero}
                  </Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="project-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img className="img-fluid" src={image1} alt="title" />
            </div>
            <div className="col-md-6 mb-4">
              <img className="img-fluid" src={image2} alt="title" />
            </div>
            <div className="col-12">
              <h3 className="mb-3"> <Trans i18nKey="projectDetails.title2">{title2}</Trans></h3>
              <p>{description2}</p>
              <div className="feature-text">
                <h4 className="mb-2">
                  <i className="icofont-tick-mark"></i> <Trans i18nKey="projectDetails.title2">{title3}</Trans>
                </h4>
                <p><Trans i18nKey="projectDetails.description">{description3}</Trans></p>
              </div>
              <div className="feature-text">
                <h4 className="mb-2">
                  <i className="icofont-tick-mark"></i> <Trans i18nKey="projectDetails.title4">{title4}</Trans>
                </h4>
                <p><Trans i18nKey="projectDetails.description4">{description4}</Trans></p>
              </div>
              <div className="project-details__info pt-3 d-flex align-items-center flex-wrap gap-3 justify-content-between">
                <div>
                  <h4 className="mb-2"><Trans i18nKey="projectDetails.info.title">{info.title}</Trans></h4>
                  <p><Trans i18nKey="projectDetails.info.name">{info.name}</Trans></p>
                </div>
                <div>
                  <h4 className="mb-2"><Trans i18nKey="projectDetails.category.title">{category.title}</Trans></h4>
                  <p>{category.name}</p>
                </div>
                <div>
                  <h4 className="mb-2"><Trans i18nKey="projectDetails.date.title">{date.title}</Trans></h4>
                  <p><Trans i18nKey="projectDetails.date.name">{date.name}</Trans></p>
                </div>
                <div>
                  <h4 className="mb-2"><Trans i18nKey="projectDetails.share.title">{share.title}</Trans></h4>
                  <ul className="footer__social-icon">
                    {share.facebook && (
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={share.facebook}
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                    )}
                    {share.twitter && (
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={share.twitter}
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                    )}
                    {share.instagram && (
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={share.instagram}
                        >
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                    )}
                    {share.whatsapp && (
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={share.whatsapp}
                        >
                          <i className="icofont-brand-whatsapp"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <Link to="/#" className="btn__primary">
                  <span><Trans i18nKey="projectDetails.button">{button}</Trans></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;

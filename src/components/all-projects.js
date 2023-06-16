import React from "react";
import data from "../data/all-projects.json";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const AllProjects = ({ title }) => {
  const { allProject } = data;
  return (
    <>
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">
                <Trans i18nKey="allProjectHero.title">{title}</Trans>
              </h1>
              <ul>
                <li>
                  <Link to="/">
                    <Trans i18nKey="allProjectHero.home">Home</Trans>
                  </Link>
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>
                </li>
                <li>
                  <Trans i18nKey="allProjectHero.title">{title}</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section id="projects" className="portfoliov2 section-padding">
        <div className="container">
          <div className="row">
            {allProject.map((data, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6">
                <div className="portfoliov2__single translateEffect1">
                  <div className="portfoliov2__single--image">
                    <Link to="/project-details">
                      <img
                        className="img-fluid"
                        src={data.image}
                        alt="Portfolio 1"
                      />
                    </Link>
                  </div>
                  <div className="portfoliov2__single--content">
                    <Link to="/project-details">
                      <h3>
                        <Trans i18nKey={`allProject.project${i + 1}.title`}>
                          {data.title}
                        </Trans>
                      </h3>
                      <span>
                        <Trans i18nKey={`allProject.project${i + 1}.tag`}>
                          {data.tag}
                        </Trans>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjects;

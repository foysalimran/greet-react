import React from "react";
import SectionTitle from "./section-title";
import data from "../data/blog.json";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Blogv3 = ({ isBg }) => {
  const { blogv3 } = data;
  const { title, subtitle, button, blogList } = blogv3;
  return (
    <section
      id="blog"
      className={`section-padding blog3 ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="blogv3.title">{title}</Trans>}
          subtitle={<Trans i18nKey="blogv3.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row gx-xl-5 justify-content-center">
          {blogList.map((data, i) => (
            <div key={data.id} className="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <div className="blog3__card translateEffect1 h-100">
                <img className="img-fluid" src={data.image} alt="title" />
                <p className="subtitle">
                  <Trans i18nKey={`blogv3.blogList${i + 1}.subtitle`}>
                    {data.subtitle}
                  </Trans>
                </p>
                <h5>
                  <Trans i18nKey={`blogv3.blogList${i + 1}.title`}>
                    {data.title}
                  </Trans>
                </h5>
                <hr />
                <div className="d-flex align-items-center justify-content-around postman">
                  <div className="d-flex align-items-center me-4">
                    <i className="icofont-calendar"></i>
                    <p className="ms-2">{data.date}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="icofont-business-man"></i>
                    <p className="ms-2">
                      <Trans i18nKey={`blogv3.blogList${i + 1}.createBy`}>
                        {data.createBy}
                      </Trans>
                    </p>
                  </div>
                </div>
                <Link to="/blog-details" className="btn__primary">
                  <span>
                    <Trans i18nKey={`blogv3.button`}>{button}</Trans>
                  </span>
                  <i className="icofont-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogv3;

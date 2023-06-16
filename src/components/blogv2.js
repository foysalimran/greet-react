import React from "react";
import { Trans } from "react-i18next";
import data from "../data/blog.json";
import SectionTitle from "./section-title";
import { Link } from "react-router-dom";

const Blogv2 = ({ isBg }) => {
  const { blogv2 } = data;
  const { title, subtitle, blogList, blogSidebar } = blogv2;
  return (
    <section
      id="blog"
      className={`blogv2 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <SectionTitle
              title={<Trans i18nKey="blogv2.title">{title}</Trans>}
              subtitle={<Trans i18nKey="blogv2.subtitle">{subtitle}</Trans>}
              direction="center"
            />
          </div>
        </div>
        <div className="row">
          {blogList.map((blog, i) => (
            <div
              key={blog.id}
              className="col-lg-4 col-md-6 col-sm-6 mb-4 mb-lg-0"
            >
              <div className="blogv2__single translateEffect1">
                <Link to="/blog-details" className="blogv2__single--link"></Link>
                <div className="blogv2__single--image">
                  <img src={blog.image} alt="Blog" />
                </div>
                <div className="blogv2__single--content">
                  <h2>
                    <Trans i18nKey={`blogv2.blogList${blog.id}.title`}>
                      {blog.title}
                    </Trans>
                  </h2>
                  <p>
                    <Trans i18nKey={`blogv2.blogList${blog.id}.description`}>
                      {blog.description}
                    </Trans>
                  </p>
                  <div className="blogv2__single--content--meta">
                    <ul>
                      <li>
                        <i className="icofont-user-alt-4"></i>
                        <Link to="#">
                          <Trans i18nKey={`blogv2.blogList${blog.id}.createBy`}>
                            {blog.createBy}
                          </Trans>
                        </Link>
                      </li>
                      <li>
                        <i className="icofont-calendar"></i>
                        <Link to="#">{blog.date}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-4 mt-3 mt-lg-0 blogv2__right--posts">
            {blogSidebar.map((blog, i) => (
              <div
                key={i}
                className="blogv2__single blogv2__single--hr translateEffect2"
              >
                <Link to="/blog-details" className="blogv2__single--link"></Link>
                <div className="blogv2__single--image">
                  <img src={blog.image} alt="Blog" />
                </div>
                <div className="blogv2__single--content">
                  <h2>
                    <Trans i18nKey={`blogv2.blogSidebar${i + 1}.title`}>
                      {blog.title}
                    </Trans>
                  </h2>
                  <div className="blogv2__single--content--meta">
                    <ul>
                      <li>
                        <i className="icofont-user-alt-4"></i>
                        <Link to="#">
                          <Trans
                            i18nKey={`blogv2.blogSidebar${i + 1}.createBy`}
                          >
                            {blog.createBy}
                          </Trans>
                        </Link>
                      </li>
                      <li>
                        <i className="icofont-calendar"></i>
                        <Link to="#">{blog.date}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogv2;

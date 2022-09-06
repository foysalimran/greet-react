import React from "react";
import data from "../data/all-blogs.json";
import SinglePageSidebar from "./single-page-sidebar";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const AllBlogs = ({ title }) => {
  const { allBlogs } = data;
  return (
    <>
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">
                <Trans i18nKey="allBlogHero.title">{title}</Trans>
              </h1>
              <ul>
                <li>
                  <Link to="/">
                    <Trans i18nKey="allBlogHero.home">Home</Trans>
                  </Link>
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>
                </li>
                <li>
                  <Trans i18nKey="allBlogHero.title">{title}</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding all-blogs">
        <div className="container">
          <div className=" row gx-xl-5">
            <div className="col-md-12 col-lg-8 mb-4 mb-md-0 all-blogs__card">
              {allBlogs.map((allBlog, i) => (
                <Link key={i} to="/blog-details">
                  <div className="row all-blogs__card__single mb-4">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <img
                        className="img-fluid"
                        src={allBlog.image}
                        alt="title"
                      />
                    </div>
                    <div className="col-md-8">
                      <span>
                        <Trans i18nKey={`allBlogs.allBlog${i + 1}.tag`}>
                          {allBlog.tag}
                        </Trans>
                      </span>
                      <h3 className="my-3">
                        <Trans i18nKey={`allBlogs.allBlog${i + 1}.title`}>
                          {allBlog.title}
                        </Trans>
                      </h3>
                      <p>
                        <Trans i18nKey={`allBlogs.allBlog${i + 1}.description`}>
                          {allBlog.description}
                        </Trans>
                      </p>
                      <div className="all-blogs__card__single__writer">
                        <img src={allBlog.postBy.image} alt="title" />
                        <div>
                          <h5 className="mb-1">
                            <Trans
                              i18nKey={`allBlogs.allBlog${i + 1}.postBy.name`}
                            >
                              {allBlog.postBy.name}
                            </Trans>
                          </h5>
                          <p>
                            <Trans
                              i18nKey={`allBlogs.allBlog${
                                i + 1
                              }.postBy.subtitle`}
                            >
                              {allBlog.postBy.subtitle}
                            </Trans>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="all-blogs__pagination">
                <nav aria-label="Page navigation example">
                  <ul className="d-flex align-items-center gap-2">
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <aside className="col-md-12 col-lg-4 mb-4 mb-md-0 sidebar">
              <SinglePageSidebar />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;

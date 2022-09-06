import React from "react";
import data from "../data/blog.json";
import SinglePageSidebar from "./single-page-sidebar";
import BlogData from "../data/blog-details.json";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BlogDetails = ({blogDetailsTitle}) => {
  const { t } = useTranslation();
  const { blogv3 } = data;
  const { button, blogList } = blogv3;
  const { blogDetail } = BlogData;
  const {
    title,
    tag,
    blogImage1,
    blogImage2,
    blogImage3,
    blogImage4,
    postBy,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    quote,
    subtitle,
  } = blogDetail;
  return (
    <>
      <div className="blog-hero bg-one">
        <div className="container">
          <div className="row">
            <div className="blog-title">
              <h1 className="display-3">
                <Trans i18nKey="blogDetailsHero.title">{blogDetailsTitle}</Trans>
              </h1>
              <ul>
                <li>
                  <Link to="/">
                    <Trans i18nKey="blogDetailsHero.home">Home</Trans>
                  </Link>
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>
                </li>
                <li>
                  <Trans i18nKey="blogDetailsHero.title">{blogDetailsTitle}</Trans>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding blog-details">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-md-12 col-lg-8 mb-4 mb-md-0 blog-details__content">
              <div className="post__top">
                <span><Trans i18nKey="blogDetail.tag">{tag}</Trans></span>
                <h1 className="mt-4"><Trans i18nKey="blogDetail.title">{title}</Trans></h1>
                <div className="post__top__writer">
                  <img className="img-fluid" src={postBy.image} alt="title" />
                  <div>
                    <h5><Trans i18nKey="blogDetail.name">{postBy.name}</Trans></h5>
                    <p>{postBy.date}</p>
                  </div>
                </div>
              </div>
              <div className="post__main">
                <img className="img-fluid mb-3" src={blogImage1} alt="title" />
                <p className="mb-3 pt-3"><Trans i18nKey="blogDetail.text1">{text1}</Trans></p>
                <p className="mb-3"><Trans i18nKey="blogDetail.text2">{text2}</Trans></p>
                <p className="mb-3"><Trans i18nKey="blogDetail.text3">{text3}</Trans></p>
                <h3 className="mb-2"><Trans i18nKey="blogDetail.subtitle">{subtitle}</Trans></h3>
                <p className="mb-3"><Trans i18nKey="blogDetail.text4">{text4}</Trans></p>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <img
                      className="img-fluid mb-3"
                      src={blogImage2}
                      alt="title"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      className="img-fluid mb-3"
                      src={blogImage3}
                      alt="title"
                    />
                  </div>
                </div>
                <p className="mb-3 pt-3"><Trans i18nKey="blogDetail.text5">{text5}</Trans></p>
                <p className="mb-3"><Trans i18nKey="blogDetail.text6">{text6}</Trans></p>
                <img className="img-fluid mb-3" src={blogImage4} alt="title" />
                <p className="mb-3 pt-3"><Trans i18nKey="blogDetail.text7">{text7}</Trans></p>
                <blockquote>
                  <i className="icofont-quote-right"></i>
                  <p className="text-center fs-5"><Trans i18nKey="blogDetail.quote">{quote}</Trans></p>
                </blockquote>
                <p className="my-3"><Trans i18nKey="blogDetail.text8">{text8}</Trans></p>

                <div className="post__main__writer">
                  <h4 className="mb-3"><Trans i18nKey="blogDetail.author"></Trans></h4>
                  <div className="post__main__writer--details">
                    <img
                      className="img-fluid"
                      src="assets/images/client2.webp"
                      alt="title"
                    />
                    <div>
                      <h5 className="mb-1"><Trans i18nKey="blogDetail.postBy1.name">{postBy.name}</Trans></h5>
                      <p>
                      <Trans i18nKey="blogDetail.postBy1.comment"></Trans>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post__bottom">
                <div className="post__bottom__previous-post">
                  <img
                    className="img-fluid"
                    src="assets/images/blog/single-blog2.webp"
                    alt="title"
                  />
                  <div>
                    <p className="mb-1"><Trans i18nKey="blogDetail.postBy2.name"></Trans></p>
                    <h5 className="mb-1">
                    <Trans i18nKey="blogDetail.postBy2.comment"></Trans>
                    </h5>
                  </div>
                </div>
                <div className="post__bottom__comment-box">
                  <h3><span><Trans i18nKey="blogDetail.commentTitle"></Trans></span></h3>
                  <hr />
                  <div className="post__bottom__comment-box__form">
                    <div className="flex-input">
                      <input type="text" placeholder={t("blogDetail.name")} />
                      <input type="email" placeholder={t("blogDetail.email")} />
                    </div>
                    <input type="text" placeholder={t("blogDetail.website")} />
                    <textarea
                      placeholder={t("blogDetail.textarea")}
                      cols="30"
                      rows="5"
                    ></textarea>
                    <Link to="#" className="btn__primary">
                      <span><Trans i18nKey="blogDetail.commentPost"></Trans></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <aside className="col-md-12 col-lg-4 mb-4 mb-md-0 sidebar">
              <SinglePageSidebar />
            </aside>
          </div>
          <div className="related-blogs">
            <h3 className="mb-4">Related Blogs</h3>
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
        </div>
      </section>
    </>
  );
};

export default BlogDetails;

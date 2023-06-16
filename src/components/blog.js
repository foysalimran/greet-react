import React, { useContext } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/blog.json";
import SectionTitle from "./section-title";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import LocaleContext from "../LocaleContext";

const Blog = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  const { blog } = data;
  const { title, subtitle, blogList } = blog;
  return (
    <section
      className={`section-padding blog ${isBg === "yes" ? "bg-one" : ""}`}
      id="blog"
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="blog.title">{title}</Trans>}
          subtitle={<Trans i18nKey="blog.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row blog__wrapper">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              loop
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              dir={ locale === "ar" ? "rtl" : "ltr"}
              key={locale}
            >
              {blogList?.map((blogData, i) => (
                <SwiperSlide key={blogData.id}>
                  <div className="blog__item">
                    <div className="blog__item__image">
                      <Link to="/blog-details">
                        <img src={blogData.image} alt="blog" />
                      </Link>
                    </div>
                    <div className="blog__item__main">
                      <ul className="item--meta">
                        <li className="item-date">
                          <i className="icofont-calendar"></i>
                          {blogData.date}
                        </li>
                        <li className="item-author">
                          <i className="icofont-user-alt-3"></i>
                          <Link to="/#">
                            <Trans
                              i18nKey={`blog.blogList${i + 1}.createBy`}
                            >
                              {blogData.createBy}
                            </Trans>
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog__item__main__title">
                        <Trans i18nKey={`blog.blogList${i + 1}.title`}>
                          {blogData.title}
                        </Trans>
                      </h3>
                    </div>
                    <div className="blog__item__hover">
                      <h3 className="blog__item__hover__title">
                        <Link to="/blog-details">
                          <Trans i18nKey={`blog.blogList${i + 1}.title`}>
                            {blogData.title}
                          </Trans>
                        </Link>
                      </h3>
                      <p>
                        <Trans
                          i18nKey={`blog.blogList${i + 1}.description`}
                        >
                          {blogData.description}
                        </Trans>
                      </p>
                      <Link className="btn__primary" to="/blog-details">
                        <span>
                          <Trans i18nKey={`blog.blogList${i + 1}.button`}>
                            {blogData.button}
                          </Trans>
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

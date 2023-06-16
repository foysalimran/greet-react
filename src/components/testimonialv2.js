import React, { useContext, useEffect } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/testimonial.json";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";
import SectionTitle from "./section-title";
import { Link } from "react-router-dom";
import LocaleContext from "../LocaleContext";

const Testimonialv2 = () => {
  const { locale } = useContext(LocaleContext);
  const { testimonialv2 } = data;
  const { title, subtitle, review, image, videoLink } = testimonialv2;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    // <!-- ========== Testimonial section start ========== -->
    <section id="testimonial" className="section-padding bg-one testimonialv2">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-md-6 mb-4 mb-lg-0">
            <SectionTitle
              subtitle={
                <Trans i18nKey="testimonialv2.subtitle">{subtitle}</Trans>
              }
              title={<Trans i18nKey="testimonialv2.title">{title}</Trans>}
            />
            <Swiper
              className="pb-5"
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              loop
              dir={ locale === "ar" ? "rtl" : "ltr"}
              key={locale}
            >
              {review?.map((blogData, i) => (
                <SwiperSlide key={i} className="pb-3">
                  <div className="testimonialv2__contnet--single">
                    <div className="testimonialv2__contnet--info">
                      <div className="testimonialv2__contnet--info--image">
                        <img
                          className="img-fluid"
                          src="assets/images/client2.webp"
                          alt="title"
                        />
                      </div>
                      <div className="testimonialv2__contnet--info--about">
                        <h4>
                          <Trans i18nKey={`testimonialv2.review${i + 1}.name`}>
                            {blogData.name}
                          </Trans>
                        </h4>
                        <span>
                          <Trans i18nKey={`testimonialv2.review${i + 1}.title`}>
                            {blogData.title}
                          </Trans>
                        </span>
                      </div>
                    </div>
                    <div className="testimonialv2__contnet--quote">
                      <p>
                        <Trans
                          i18nKey={`testimonialv2.review${i + 1}.description`}
                        >
                          {blogData.description}
                        </Trans>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-md-6">
            <div className="testimonialv2__video">
              <img className="img-fluid" src={image} alt="title" />
              <Link to={videoLink} className="glightbox3 video-btn">
                <i className="icofont-ui-play"></i>
              </Link>
              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonialv2;

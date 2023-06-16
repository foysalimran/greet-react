import React, { useContext } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/portfolio.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import LocaleContext from "../LocaleContext";

const Portfolio = () => {
  const { locale } = useContext(LocaleContext);
  const { portfolio } = data;
  const { title, subtitle, portfolioSliders } = portfolio;
  return (
    // <!-- ========== Portfolio section start ========== -->
    <section className="section-padding portfolio4" id="portfolio">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="portfolio.title">{title}</Trans>}
          subtitle={<Trans i18nKey="portfolio.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row portfolio4__wrapper">
          <div className="col-12">
            <div className="portfolio4__slider">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                centeredSlides
                loop
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                }}
                dir={ locale === "ar" ? "rtl" : "ltr"}
                key={locale}
              >
                {portfolioSliders?.map((portfolioSlider, i) => (
                  <SwiperSlide key={i} className="pb-3">
                    <div className="swiper-slide">
                      <div className="slide__image--wrap">
                        <img
                          className="img-fluid"
                          src={portfolioSlider.image}
                          alt="title"
                        />
                      </div>
                      <div className="swiper-slide__hover">
                        <div className="portfolio4__slider--contnet">
                          <p>
                            <Trans
                              i18nKey={`portfolio.portfolioSliders${
                                i + 1
                              }.title`}
                            >
                              {portfolioSlider.title}
                            </Trans>
                          </p>
                          <h5>
                            <Trans
                              i18nKey={`portfolio.portfolioSliders${
                                i + 1
                              }.subtitle`}
                            >
                              {portfolioSlider.subtitle}
                            </Trans>
                          </h5>
                        </div>
                        <div className="portfolio4__slider--ico">
                          <Link to="/project-details">
                            <i className="icofont-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Portfolio section end ========== -->
  );
};

export default Portfolio;

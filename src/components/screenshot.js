import React, { useContext, useEffect } from "react";
import data from "../data/screenshot.json";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "./section-title";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";
import LocaleContext from "../LocaleContext";

const Screenshot = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  const { screenshot } = data;
  const { title, subtitle, screenshotContent, phoneImage } = screenshot;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox2",
    });
  }, []);

  return (
    // <!-- ========== Screenshot section start ========== -->
    <div
      className={`section-padding screenshot ${isBg === "yes" ? "bg-one" : ""}`}
      id="screenshot"
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="screenshots.title">{title}</Trans>}
          subtitle={<Trans i18nKey="screenshots.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row">
          <div className="position-relative">
            <div className="col-12">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={20}
                autoplay
                loop
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 5,
                  },
                }}
                dir={ locale === "ar" ? "rtl" : "ltr"}
                key={locale}
              >
                {screenshotContent?.map((content) => (
                  <SwiperSlide key={content.id}>
                    <div className="swiper-slide pb-5">
                      <div className="screenshot-slider__image">
                        <a
                          href={content.image}
                          className="glightbox2"
                          data-glightbox=" description: .custom-desc1; descPosition: right;"
                        >
                          <img
                            className="img-fluid"
                            src={content.image}
                            alt="title"
                          />
                        </a>
                        <div className="glightbox-desc custom-desc1">
                          <h3 className="mb-4 text-center">
                            <Trans
                              i18nKey={`screenshots.screenshot${
                                content.id + 1
                              }.title`}
                            >
                              {content.title}
                            </Trans>
                          </h3>
                          <p>
                            <Trans
                              i18nKey={`screenshots.screenshot${content.id}.text1`}
                            >
                              {content.text1}
                            </Trans>
                          </p>
                          <p>
                            <Trans
                              i18nKey={`screenshots.screenshot${content.id}.text2`}
                            >
                              {content.text2}
                            </Trans>
                          </p>
                          <p>
                            <Trans
                              i18nKey={`screenshots.screenshot${content.id}.text3`}
                            >
                              {content.text3}
                            </Trans>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="screenshot-slider__shape">
              <img src={phoneImage} alt="title" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- ========== Screenshot section end ========== -->
  );
};

export default Screenshot;

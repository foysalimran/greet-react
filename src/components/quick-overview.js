import React, { useContext, useEffect } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/quick-overview.json";
import SectionTitle from "./section-title";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";
import LocaleContext from "../LocaleContext";

const QuickOverview = () => {
  const { locale } = useContext(LocaleContext);
  const { quickOverview } = data;
  const { title, subtitle, quickOverviewContent } = quickOverview;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox2",
    });
  }, []);

  return (
    // <!-- ========== Quick Overview section start ========== -->
    <section id="overview" className="section-padding quick-overview">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="quickOverview.title">{title}</Trans>}
          subtitle={<Trans i18nKey="quickOverview.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row overview__wrapper">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              loop
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              dir={ locale === "ar" ? "rtl" : "ltr"}
              key={locale}
            >
              {quickOverviewContent?.map((overviewData, i) => (
                <SwiperSlide key={overviewData.id}>
                  <div className="pb-5">
                    <a
                      href={overviewData.image}
                      className="glightbox2"
                      data-glightbox=" description: .custom-desc1; descPosition: right;"
                    >
                      <img
                        className="img-fluid overview__wrapper__image"
                        src={overviewData.image}
                        alt="title"
                      />
                    </a>
                    <div className="glightbox-desc custom-desc1">
                      <h3 className="mb-4 text-center">
                      <Trans i18nKey={`quickOverview.quickOverviewContent${i + 1}.title`}>
                        {overviewData.title}
                      </Trans>
                      </h3>
                      <p>
                        <Trans
                          i18nKey={`quickOverview.quickOverviewContent${overviewData.id}.text1`}
                        >
                          {overviewData.text1}
                        </Trans>
                      </p>
                      <p>
                        <Trans
                          i18nKey={`quickOverview.quickOverviewContent${overviewData.id}.text2`}
                        >
                          {overviewData.text1}
                        </Trans>
                      </p>
                      <p>
                        <Trans
                          i18nKey={`quickOverview.quickOverviewContent${overviewData.id}.text3`}
                        >
                          {overviewData.text1}
                        </Trans>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Quick Overview section end ========== -->
  );
};

export default QuickOverview;

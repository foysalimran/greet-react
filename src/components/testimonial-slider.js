
import React, { useContext } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Trans } from "react-i18next";
import LocaleContext from "../LocaleContext";

const TestimonialSlider = ({ review }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay
      loop
      dir={locale === "ar" ? "rtl" : "ltr"}
      key={locale}
    >
      {review?.map((blogData, i) => (
        <SwiperSlide key={blogData.id}>
          <div className="testimonial__slide__content">
            <ul>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
              <li>
                <i className="icofont-star"></i>
              </li>
            </ul>
            <p>
              <Trans i18nKey={`testimonial.review${i + 1}.description`}>
                {blogData.description}
              </Trans>
            </p>
            <div className="user-info">
              <div className="user-info__image">
                <img src={blogData.image} alt="title" />
              </div>
              <div className="user-info__content">
                <h4>
                  <Trans i18nKey={`testimonial.review${i + 1}.name`}>
                    {blogData.name}
                  </Trans>
                </h4>
                <p>
                  <Trans i18nKey={`testimonial.review${i + 1}.title`}>
                    {blogData.title}
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;

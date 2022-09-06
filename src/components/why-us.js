import React, { useEffect } from "react";
import CountUp from "react-countup";
import data from "../data/why-us.json";
import SectionTitle from "./section-title";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";

const WhyUs = ({ isBg }) => {
  const { whyUs } = data;
  const {
    title,
    subtitle,
    description,
    listTitle1,
    number,
    listTitle2,
    list,
    image,
    listIcon,
  } = whyUs;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);
  return (
    <section
      className={`section-padding why-us  ${isBg === "yes" ? "bg-one" : ""}`}
      id="why-us"
    >
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-xl-6 mb-4 mb-xl-0">
            <div className="why-us__content">
              <SectionTitle
                subtitle={<Trans i18nKey="whyUs.subtitle">{subtitle}</Trans>}
                title={<Trans i18nKey="whyUs.title">{title}</Trans>}
                description={
                  <Trans i18nKey="whyUs.description">{description}</Trans>
                }
              />
              <h4 className="fs-4 mb-4">
                <Trans i18nKey="whyUs.listTitle1">{listTitle1}</Trans>
                <span className="fs-2 odometer">
                  <CountUp end={number} enableScrollSpy="true" />
                </span>
                <Trans i18nKey="whyUs.listTitle1">{listTitle2}</Trans>
              </h4>
              <ul>
                {list.map((data, i) => (
                  <li key={i}>
                    <div className="why-us__content--ico">
                      <i className={listIcon}></i>
                    </div>
                    <p>
                      <Trans i18nKey={"whatWeDo.itemTitle." + i}>
                        {data.item}
                      </Trans>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="why-us__image">
              <div className="blob blob__8">
                <img src={image} alt="title" />
              </div>
              <a
                href="https://www.youtube.com/watch?v=d2Q3e56iJGs"
                className="glightbox3 video-btn"
              >
                <i className="icofont-ui-play"></i>
              </a>
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

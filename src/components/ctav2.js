import React, { useEffect } from "react";
import CountUp from "react-countup";
import data from "../data/cta.json";
import SectionTitle from "./section-title";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";
import { Link as PageLink } from "react-router-dom";

const Ctav2 = ({ isBg }) => {
  const { ctav2 } = data;
  const { bgImage, title, description, counterCards, button } = ctav2;

  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);

  return (
    <section id="cta" className={`ctav2  ${isBg === "yes" ? "bg-one" : ""}`}>
      <div className="container-fluid">
        <div className="row gx-xl-5">
          <div className="col-xl-7 col-lg-6">
            <div
              className="ctav2__video"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <PageLink
                to="https://www.youtube.com/watch?v=d2Q3e56iJGs"
                className="glightbox3 video-btn"
              >
                <i className="icofont-ui-play"></i>
              </PageLink>

              <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="ctav2__content">
              <SectionTitle
                title={<Trans i18nKey="ctav2.title">{title}</Trans>}
                description={
                  <Trans i18nKey="ctav2.description">{description}</Trans>
                }
              />

              <div className="ctav2__content--counter mb-5">
                {counterCards.map((data, i) => (
                  <div key={i} className="ctav2__content--counter--single">
                    <h3>
                      <CountUp end={data.number} enableScrollSpy="true" />K
                    </h3>
                    <p>
                      <Trans i18nKey={`ctav2.counterCards${i + 1}.title`}>
                        {data.title}
                      </Trans>
                    </p>
                  </div>
                ))}
              </div>
              <Link
                smooth={true}
                duration={500}
                offset={-60}
                className="btn__primary"
                to="contact"
              >
                <span>
                  <Trans i18nKey="ctav2.button">{button}</Trans>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctav2;

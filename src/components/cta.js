import React, { useEffect } from "react";
import GLightbox from "glightbox";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const Cta = ({ isBg, cta }) => {
  const {title, description, videoLink, bgImage } = cta;
  useEffect(() => {
    GLightbox({
      selector: ".glightbox3",
    });
  }, []);
  return (
    <section
      className={`section-padding cta  ${isBg === "yes" ? "bg-one" : ""}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="cta__content">
              <h2 className="display-4 mb-3"><Trans i18nKey="cta.title">{title}</Trans></h2>
              <p className="fs-5 mb-5"><Trans i18nKey="cta.description">{description}</Trans></p>
              <div>
              <div className="position-relative">
                <Link to={videoLink} className="glightbox3 video-btn">
                  <i className="icofont-ui-play"></i>
                </Link>
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
        </div>
      </div>
    </section>
  );
};

export default Cta;

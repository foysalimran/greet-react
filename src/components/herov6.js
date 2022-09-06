import React, { useContext } from "react";
import data from "../data/hero.json";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { mailchimpLink } from "../global";
import LocaleContext from "../LocaleContext";
import { Trans, useTranslation } from "react-i18next";

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  const {t} = useTranslation()
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <div className="hero5__content__input__box">
      <div className="hero5__content__input mb-2">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder={t("herov6.email")}
        />
        <button className="btn__primary" onClick={submit}>
          <span><Trans i18nKey="herov6.button">Free Trial</Trans></span>
        </button>
      </div>
      <div className="message col mt-2">
        {status === "sending" && (
          <div className=" alert alert-warning rounded-pill">sending...</div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger rounded-pill"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status === "success" && (
        <div
          className="alert alert-success mt-2 rounded-pill"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}

const Herov6 = () => {
  const { locale } = useContext(LocaleContext);
  const { herov6 } = data;
  const { title, description, star, image, image2, image3, note } = herov6;
  return (
    // <!-- ========== Hero section start ========== -->
    <section id="hero" className="hero6 hero-padding bg-one">
      <div className="hero6-shape"></div>
      <div className="container">
        <div className="row">
          <div
            className={
              locale === "ar"
                ? "col-lg-6 mb-4 mb-lg-0 d-flex align-items-center text-center text-md-end"
                : "col-lg-6 mb-4 mb-lg-0 d-flex align-items-center text-center text-md-start"
            }
          >
            <div className="hero6__content">
              <h1 className="hero6__title display-4 mb-4 text-capitalize">
                <Trans i18nKey="herov6.title">{title}</Trans>
              </h1>
              <p className="hero6__desc mb-4 fs-5">
                <Trans i18nKey="herov6.description">{description}</Trans>
              </p>
              <ul className="d-flex align-items-center mb-4 gap-2">
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
                <li><Trans i18nKey="herov6.star">{star}</Trans></li>
              </ul>
              <MailchimpSubscribe
                url={mailchimpLink.link}
                render={({ subscribe, status, message }) => (
                  <SubscribeForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
              <p><Trans i18nKey="herov6.note">{note}</Trans></p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero6__image">
              <img className="img-fluid img1" src={image} alt="title" />
              <img className="img-fluid img2" src={image2} alt="title" />
              <img className="img-fluid img3" src={image3} alt="title" />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Herov6;

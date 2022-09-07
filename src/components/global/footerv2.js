import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import data from "../../data/footer.json";
import { socialLink, mailchimpLink } from "../../global";
import {Link} from 'react-router-dom';
import { Trans, useTranslation } from "react-i18next";

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  const [t] = useTranslation();
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <>
      <div className="footer__subscribe">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder={t("footerv2.placeholder")}
        />
        <button className="btn__primary" onClick={submit}>
        <Trans i18nKey="footerv2.submit">Submit</Trans>
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
    </>
  );
}

const Footerv2 = () => {
  const { footerv2 } = data;
  const { title, description, copyright, name, icon, number, email, location } =
    footerv2;
  return (
    <section className="footer2 footer">
      <div className="container">
        <div className="footer-padding">
          <div className="row gx-xl-5 align-items-center mb-5">
            <div className="col-md-6 col-xl-6 mb-4 mb-xl-0">
              <div className="footer__title">
                <h3 className="display-6 mb-3">
                  <Trans i18nKey="footerv2.title">{title}</Trans>
                </h3>
                <p>
                  <Trans i18nKey="footerv2.description">{description}</Trans>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-6">
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
            </div>
          </div>
          <div className="footer__middle">
            <div className="row gx-xl-5">
              <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
                <h4 className="mb-4">
                  <Trans i18nKey="footerv2.email">{email.title}</Trans>
                </h4>
                <a rel="noreferrer" href={`mailto:${email.text}`}>{email.text}</a>
              </div>
              <div className="col-sm-6 col-lg-4 mb-4 mb-md-0">
                <h4 className="mb-4">
                  <Trans i18nKey="footerv2.location">{location.title}</Trans>
                </h4>
                <p>{location.text}</p>
              </div>
              <div className="col-sm-6 col-lg-4">
                <h4 className="mb-4">
                  <Trans i18nKey="footerv2.follow">Follow us:</Trans>
                </h4>
                <ul className="footer__social-icon">
                  {socialLink.facebook === "" ? (
                    ""
                  ) : (
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={socialLink.linkedin}
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  )}

                  {socialLink.twitter === "" ? (
                    ""
                  ) : (
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={socialLink.twitter}
                      >
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                  )}
                  {socialLink.instagram === "" ? (
                    ""
                  ) : (
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={socialLink.instagram}
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  )}
                  {socialLink.whatsapp === "" ? (
                    ""
                  ) : (
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={socialLink.whatsapp}
                      >
                        <i className="icofont-brand-whatsapp"></i>
                      </a>
                    </li>
                  )}
                  {socialLink.facebook === "" ? (
                    ""
                  ) : (
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={socialLink.facebook}
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0" />
        <div className="row">
          <div className="footer__bottom justify-content-center d-md-flex align-items-center text-center">
            <p>
              &copy; <Trans i18nKey="footerv2.copyright">{copyright}</Trans>
              <i className={icon}></i> by <Link to="/">{name}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footerv2;

import React from "react";
import { contactFormAction } from "../global";
import { Trans, useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="contact__form">
      <form id="contact-form" method="post" action={contactFormAction.link}>
        <div className="message col">
          <p className="email-loading alert alert-warning">
            <img src="assets/images/loading.gif" alt="title" />
            &nbsp;&nbsp;&nbsp;Sending...
          </p>
          <p className="email-success alert alert-success">
            <i className="icon icon-icon-check-alt2"></i> Your quote has
            successfully been sent.
          </p>
          <p className="email-failed alert alert-danger">
            <i className="icon icon-icon-close-alt2"></i> Something went wrong!
          </p>
        </div>
        <div className="mb13">
          <label htmlFor="contact-name">
            <Trans i18nKey="contact.name">Name</Trans>
          </label>
          <input
            name="name"
            className="contact-name"
            id="contact-name"
            type="text"
            placeholder={t("contact.name")}
            required
          />
        </div>
        <div className="mb13">
          <label htmlFor="contact-email">
            <Trans i18nKey="contact.email">Email</Trans>
          </label>
          <input
            name="email"
            className="contact-email"
            id="contact-email"
            type="email"
            placeholder={t("contact.email")}
            required
          />
        </div>
        <div className="mb13">
          <label htmlFor="contact-subject">
            <Trans i18nKey="contact.subject">Subject</Trans>
          </label>
          <input
            name="subject"
            className="contact-subject"
            id="contact-subject"
            type="text"
            placeholder={t("contact.subject")}
            required
          />
        </div>
        <div className="mb30">
          <label htmlFor="contact-message">
            <Trans i18nKey="contact.message">Message</Trans>
          </label>
          <textarea
            name="message"
            className="contact-message"
            id="contact-message"
            placeholder={t("contact.message")}
            required
          ></textarea>
        </div>
        <button className="btn__primary">
          <span>
            <Trans i18nKey="contact.button">Send now</Trans>
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

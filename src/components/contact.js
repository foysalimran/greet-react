import React from "react";
import data from "../data/contact.json";
import ContactForm from "./contactForm";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const Contact = ({ isBg }) => {
  const { contact } = data;
  const { title, subtitle, contactInfo } = contact;
  return (
    // <!-- ========== Contact section start ========== -->
    <section
      id="contact"
      className={`contact section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="contact.title">{title}</Trans>}
          subtitle={<Trans i18nKey="contact.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row gx-xl-5 mb-5">
          {contactInfo.map((data, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="contact__item">
                <div className="contact__item--ico">
                  <i className={`${data.icon}`}></i>
                </div>
                <h4>
                  <Trans i18nKey={`contact.contactInfo${i + 1}.title`}>
                    {data.title}
                  </Trans>
                </h4>
                <p>
                  {data.info.one}
                  <br />
                  {data.info.two}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="row gx-xl-5">
          <div className="col-lg-8 mx-auto">
            <div className="contact__wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contact;

import React from "react";
import ContactForm from "./contactForm";
import data from "../data/contact.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const Contactv2 = ({ isBg }) => {
  const { contactv2 } = data;
  const { title, subtitle, contactInfo } = contactv2;
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

        <div className="row gx-xl-5">
          <div className="col-xl-10 mx-auto contact__wrapper">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact__address">
                  {contactInfo.map((information, i) => (
                    <div key={i} className="contact__address--single">
                      <div className="contact__address--single--icon">
                        <i className={`${information.icon}`}></i>
                      </div>
                      <div className="contact__address--single--content">
                        <h4>
                          <Trans i18nKey={`contact.contactInfo${i + 1}.title`}>
                            {information.title}
                          </Trans>
                        </h4>
                        <p>
                          {information.info.one} <br /> {information.info.two}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Contact section end ========== -->
  );
};

export default Contactv2;

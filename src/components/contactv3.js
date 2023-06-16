import React from "react";
import ContactForm from "./contactForm";
import data from "../data/contact.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
const Contactv3 = ({ isBg }) => {
  const { contactv3 } = data;
  const { title, subtitle, image } = contactv3;

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
          <div className="col-lg-10 mx-auto">
            <div className="row contact__wrapper">
              <div className="col-md-5 p-0">
                <div
                  className="contact__image"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </div>
              <div className="col-md-7">
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

export default Contactv3;

import React from "react";
import { Accordion } from "react-bootstrap";
import data from "../data/faq.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";

const Faq = ({ isBg }) => {
  const { faq } = data;
  const { title, subtitle, description, faqItem } = faq;

  return (
    // <!-- ========== Faq section start ========== -->
    <section
      id="faq"
      className={`section-padding faq ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-6">
            <SectionTitle
              title={<Trans i18nKey="faq.title">{title}</Trans>}
              subtitle={<Trans i18nKey="faq.subtitle">{subtitle}</Trans>}
              description={
                <Trans i18nKey="faq.description">{description}</Trans>
              }
            />
            <Link
              smooth={true}
              duration={500}
              offset={-60}
              to="contact"
              className="btn__primary smooth"
            >
              <span>Let's talk</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <Accordion
              className="accordion-flush faqs-accordion mt-4 mt-lg-0"
              defaultActiveKey="1"
            >
              {faqItem?.map((data, i) => (
                <Accordion.Item eventKey={data.id.toString()} key={data.id}>
                  <Accordion.Header>
                    <Trans i18nKey={`faq.faqItem${i + 1}.title`}>
                      {data.title}
                    </Trans>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Trans i18nKey={`faq.faqItem${i + 1}.description`}>
                      {data.description}
                    </Trans>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Faq section end ========== -->
  );
};

export default Faq;

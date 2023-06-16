import React from "react";
import data from "../data/app-features.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const AppFeatures = () => {
  const { appFeatures } = data;
  const { title, subtitle, features } = appFeatures;
  return (
    // <!-- ========== Feature section start ========== -->
    <section id="feature" className="service section-padding">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="appFeatures.title">{title}</Trans>}
          subtitle={<Trans i18nKey="appFeatures.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row pt-4 gy-5">
          {features.map((feature, i) => (
            <div key={feature.id} className="col-md-6 col-lg-4">
              <div className="service__card translateEffect1 h-100">
                <div className="service__card__icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="service__card__content">
                  <h4>
                    <Trans i18nKey={`appFeatures.features${i + 1}.title`}>
                      {feature.title}
                    </Trans>
                  </h4>
                  <p>
                    <Trans i18nKey={`appFeatures.features${i + 1}.description`}>
                      {feature.description}
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Feature section end ========== -->
  );
};

export default AppFeatures;

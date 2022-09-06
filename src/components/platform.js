import React from "react";
import data from "../data/platforms.json";
import { Trans } from "react-i18next";
import SectionTitle from "./section-title";

const Platform = () => {
  const { platforms } = data;
  const { title, subtitle, platformsData } = platforms;
  return (
    <section id="platforms" className="platforms section-padding">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="platform.subtitle">{subtitle}</Trans>}
          subtitle={<Trans i18nKey="platform.title">{title}</Trans>}
          direction="center"
        />
        <div className="row justify-content-center">
          {platformsData.map((platform, i) => (
            <div key={i} className="col-lg-2 col-md-3 col-sm-6">
              <div className="platforms__single translateEffect2">
                <div className="platforms__single--ico">
                  <i className={platform.icon}></i>
                </div>
                <div className="platforms__single--title">{platform.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;

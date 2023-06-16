import React from "react";
import { Trans } from "react-i18next";
import data from "../data/what-we-do.json";
import SectionTitle from "./section-title";

const WhatWeDo = ({ isBg }) => {
  const { whatWeDo } = data;
  const { contents, subtitle, title } = whatWeDo;
  return (
    // <!-- ========== What we do start ========== -->
    <section
      className={`section-padding what-we-do ${isBg === "yes" ? "bg-one" : ""}`}
      id="what-we-do"
    >
      <div className="container">
        <SectionTitle
          subtitle={<Trans i18nKey="whatWeDo.subtitle">{subtitle}</Trans>}
          title={<Trans i18nKey="whatWeDo.title">{title}</Trans>}
          direction="center"
        />
        <div className="row justify-content-center">
          {contents.map((content, id) => (
            <div key={id} className="col-md-6 col-lg-4 col-xl-3">
              <div className="what-we-do__item translateEffect2">
                <div className="what-we-do__item__icon">
                  <i className={`${content.icon}`}></i>
                </div>
                <h3>
                  <Trans i18nKey={"whatWeDo.itemTitle." + content.id}>
                    {content.title}
                  </Trans>
                </h3>
                <ul>
                  {content.list.map((data, i) => (
                    <div key={i}>
                      <li>
                        <Trans
                          i18nKey={`whatWeDo.itemList${data.id}.${content.id}`}
                        >
                          {content.item}
                        </Trans>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== What we do end ========== -->
  );
};

export default WhatWeDo;

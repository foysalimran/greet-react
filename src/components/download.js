import React from "react";
import data from "../data/download.json";
import SectionTitle from "./section-title";
import CountUp from "react-countup";
import { Trans } from "react-i18next";

const Download = ({ isBg }) => {
  const { download } = data;
  const {
    title,
    description,
    button,
    image,
    todayDownloads,
    user,
    satisfy,
    totalDownload,
  } = download;
  return (
    // <!-- ========== Download section start ========== -->
    <section
      className={`section-padding download bg-one ${
        isBg === "yes" ? "bg-one" : ""
      }`}
      id="download"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="download__fun-fact">
              <div className="download__fun-fact-4">
                <h3>
                  <CountUp end={todayDownloads.number} enableScrollSpy="true" />
                  +
                </h3>
                <p>
                  <Trans i18nKey="download.todayDownloads">
                    {todayDownloads.title}
                  </Trans>
                </p>
              </div>

              <div className="download__fun-fact__item-1">
                <h3>
                  <CountUp end={user.number} enableScrollSpy="true" />m
                </h3>
                <p>
                  <Trans i18nKey="download.user">{user.title}</Trans>
                </p>
              </div>
              <div className="download__fun-fact__item-2">
                <h3>
                  <CountUp end={satisfy.number} enableScrollSpy="true" />%
                </h3>
                <p>
                  <Trans i18nKey="download.satisfy">{satisfy.title}</Trans>
                </p>
              </div>
              <div className="download__fun-fact__item-3">
                <h3>
                  <CountUp end={totalDownload.number} enableScrollSpy="true" />m
                </h3>
                <p>
                  <Trans i18nKey="download.totalDownload">
                    {totalDownload.title}
                  </Trans>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <SectionTitle
              title={<Trans i18nKey="download.title">{title}</Trans>}
              description={
                <Trans i18nKey="download.description">{description}</Trans>
              }
            />
            <div className="d-flex gap-5 justify-content-center">
              <div className="download__image-1">
                <img className="img-fluid" src={image} alt="title" />
                <button className="btn__primary">
                  <span className="d-flex gap-2 align-items-center">
                    <Trans i18nKey="download.button">{button}</Trans>
                  </span>
                </button>
                <div className="icon">
                  <i className="icofont-brand-android-robot"></i>
                </div>
              </div>

              <div className="download__image-2">
                <img className="img-fluid" src={image} alt="title" />
                <button className="btn__primary">
                  <span className="d-flex gap-2 align-items-center">
                    <Trans i18nKey="download.button">{button}</Trans>
                  </span>
                </button>
                <div className="icon">
                  <i className="icofont-brand-apple"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Download section end ========== -->
  );
};

export default Download;

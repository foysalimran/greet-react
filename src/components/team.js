import React from "react";
import data from "../data/team.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const Team = ({ isBg }) => {
  const { team } = data;
  const { title, subtitle, teamMembers } = team;
  return (
    <section
      className={`section-padding team ${isBg === "yes" ? "bg-one" : ""}`}
      id="team"
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="team.title">{title}</Trans>}
          subtitle={<Trans i18nKey="team.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row justify-content-center">
          {teamMembers.map((teamMember, i) => (
            <div
              key={teamMember.id}
              className="col-xl-3 col-lg-4 col-md-6 mt-2 mb-2 mb-xl-0"
            >
              <div className="team__member">
                <div className="team__member__area">
                  <div className="team__member__area__image">
                      <img src={teamMember.image} alt="team 1" />
                  </div>
                  <h4 className="fs-4 mb-0">
                    <Trans i18nKey={`team.teamMember${i + 1}.name`}>
                      {teamMember.name}
                    </Trans>
                  </h4>
                  <p>
                    <Trans i18nKey={`team.teamMember${i + 1}.title`}>
                      {teamMember.title}
                    </Trans>
                  </p>
                  <div className="team__member__area__details" to="#">
                    <i className="icofont-plus"></i>
                  </div>

                  <div
                    className="team__member__hover"
                    style={{ backgroundImage: `url(${teamMember.image})` }}
                  >
                    <div>
                      <div className="mb-2">
                        <h4 className="fs-4 mb-0">
                          <Trans i18nKey={`team.teamMember${i + 1}.name`}>
                            {teamMember.name}
                          </Trans>
                        </h4>
                        <p className="mb-3 fs-5">
                          <Trans i18nKey={`team.teamMember${i + 1}.title`}>
                            {teamMember.title}
                          </Trans>
                        </p>
                        <p>
                          <Trans
                            i18nKey={`team.teamMember${i + 1}.description`}
                          >
                            {teamMember.description}
                          </Trans>
                        </p>
                      </div>
                      <div className="social-icon">
                        <a rel="noreferrer" target="_blank" href={teamMember.facebook}>
                          <i className="icofont-facebook"></i>
                        </a>
                        <a rel="noreferrer" target="_blank" href={teamMember.twitter}>
                          <i className="icofont-twitter"></i>
                        </a>
                        <a rel="noreferrer" target="_blank" href={teamMember.instagram}>
                          <i className="icofont-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

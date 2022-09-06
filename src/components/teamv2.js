import React from "react";
import data from "../data/team.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const Teamv2 = ({ isBg }) => {
  const { teamv2 } = data;
  const { title, subtitle, teamMembers } = teamv2;
  return (
    // <!-- ========== Team section start ========== -->
    <section
      id="team"
      className={`teamv2 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="teamv2.title">{title}</Trans>}
          subtitle={<Trans i18nKey="teamv2.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row">
          {teamMembers.map((teamMember, i) => (
            <div key={teamMember.id} className="col-lg-3 col-md-6 col-sm-6">
              <div className="teamv2__single translateEffect1">
                <div className="teamv2__single--image">
                  <img
                    className="img-fluid"
                    src={teamMember.image}
                    alt={teamMember.name}
                  />
                </div>
                <div className="teamv2__single--content">
                  <div className="teamv2__single--author">
                    <h3>
                      <Trans i18nKey={`teamv2.teamMember${i + 1}.name`}>
                        {teamMember.name}
                      </Trans>
                    </h3>
                    <span>
                      <Trans i18nKey={`teamv2.teamMember${i + 1}.title`}>
                        {teamMember.title}
                      </Trans>
                    </span>
                  </div>
                  <div className="teamv2__single--social">
                    <ul>
                      <li>
                        <a rel="noreferrer" target="_blank" href={`${teamMember.linkedin}`}>
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a rel="noreferrer" target="_blank" href={`${teamMember.instagram}`}>
                          <i className="icofont-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a rel="noreferrer" target="_blank" href={`${teamMember.twitter}`}>
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a rel="noreferrer" target="_blank" href={`${teamMember.facebook}`}>
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // /* <!-- ========== Team section end ========== --> */
  );
};

export default Teamv2;

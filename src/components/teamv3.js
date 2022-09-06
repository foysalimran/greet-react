import React from "react";
import data from "../data/team.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";

const Teamv3 = () => {
  const { teamv3 } = data;
  const { title, subtitle, teamMembers } = teamv3;
  return (
    // <!-- ========== Team member section start ========== -->
    <section id="team" className="team3 section-padding">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="teamv3.title">{title}</Trans>}
          subtitle={<Trans i18nKey="teamv3.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row">
          {teamMembers.map((teamMember, i) => (
            <div key={teamMember.id} className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="team3__wrapper__card translateEffect1">
                <img
                  className="img-fluid rounded-circle mx-auto"
                  src={teamMember.image}
                  alt={teamMember.name}
                />
                <h4 className="mt-4 fs-4">
                  <Trans i18nKey={`teamv3.teamMembers${i + 1}.name`}>
                    {teamMember.name}
                  </Trans>
                </h4>
                <p>
                  <Trans i18nKey={`teamv3.teamMembers${i + 1}.title`}>
                    {teamMember.title}
                  </Trans>
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                  <ul className="social-icon">
                    <li>
                      <a rel="noreferrer"target="_blank" href={teamMember.facebook}>
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a rel="noreferrer"target="_blank" href={teamMember.twitter}>
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a rel="noreferrer"target="_blank" href={teamMember.instagram}>
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a rel="noreferrer"target="_blank" href={teamMember.linkedin}>
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Team member section end ========== -->
  );
};

export default Teamv3;

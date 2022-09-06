import React from "react";
import data from "../data/single-page-sidebar.json";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SinglePageSidebar = () => {
  const { t } = useTranslation();
  const { sidebar } = data;
  const { title1, title2, category } = sidebar;
  return (
    <div className="sidebar">
      <div className="sidebar__search-box">
        <h3>
          <Trans i18nKey="sidebar.title1">{title1}</Trans>
        </h3>
        <hr />
        <div className="form">
          <input type="text" placeholder={t("sidebar.search")} />
          <Link to="blog-details" className="btn__primary">
            <span>
              <Trans i18nKey="sidebar.button">Search</Trans>
            </span>
          </Link>
        </div>
      </div>
      <div className="sidebar__category-box">
        <h3>
          <Trans i18nKey="sidebar.title2">{title2}</Trans>
        </h3>
        <hr />
        <ul>
          {category.map((data, i) => (
            <li key={i}>
              <Link to="/blog-details">
                <Trans i18nKey={`sidebar.category${i + 1}`}>{data.name}</Trans>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SinglePageSidebar;

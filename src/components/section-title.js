import React, { useContext } from "react";
import LocaleContext from "../LocaleContext";

const SectionTitle = ({ subtitle, title, description, direction }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      {direction === "center" ? (
        <div className="section-title-center">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              {subtitle && <p className="badge-text">{subtitle}</p>}
              {title && <h3>{title}</h3>}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            locale === "ar" ? "section-title-right" : "section-title-left"
          }
        >
          {subtitle && <p className="badge-text">{subtitle}</p>}
          {title && <h3 className="mb-4">{title}</h3>}
          {description && <p className="mb-4">{description}</p>}
        </div>
      )}
    </>
  );
};

export default SectionTitle;

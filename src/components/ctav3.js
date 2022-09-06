import React from "react";
import data from "../data/cta.json";
import { Trans } from "react-i18next";

const Ctav3 = ({ isBg }) => {
  const { ctav3 } = data;
  const { image, title } = ctav3;
  return (
    <section
      className={`cta3 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div class="container">
        <div class="row align-items-center cta3__wrapper">
          <div class="col-md-6 mb-3 mb-md-0 cta3__wrapper__content">
            <h4 class="mb-3">
            {<Trans i18nKey="ctav3.title">{title}</Trans>}
            </h4>
           <ul>
            <li>Grab html from download file and put it anywhere inside the body tag.</li>
            <li>Copy the CSS file from download file and paste it in your repository.</li>
            <li>Copy the JS file from download file and paste it in your repository.</li>
            <li>Take the JS file also and set it in your repository.</li>
            <li>Both CSS file and JS file has to be linked in your html file.</li>
            <li>Now just add your video to markup we provided and it will work fine.</li>
           </ul>
          </div>
          <div class="col-md-6">
            <img
              src={image}
              alt=""
              class="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctav3;

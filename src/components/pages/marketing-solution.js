import React from "react";
import Aboutv3 from "../aboutv3";
import Ctav3 from "../ctav3";
import Footerv2 from "../global/footerv2";
import HeaderMarketing from "../global/headerMarketing";
import GreetVideo from "../greet-video";
import Herov3 from "../herov3";
import Servicev2 from "../servicev2";
import Teamv3 from "../teamv3";
import Testimonialv3 from "../testimonialv3";
import defaultVideo from "../../assets/video/welcome.mp4";
import video1 from "../../assets/video/example1.mp4";

const greetOptions = [
  { id: 1, link: `${video1}`, laval: "Food Review", type: "video" },
  { id: 2, link: "#", laval: "Contact", type: "link" },
  { id: 3, link: "#", laval: "Send Email", type: "email_form" },
];

const MarketingSolution = ({ header }) => {
  return (
    <div>
      <HeaderMarketing header={header} />
      <Herov3 isBg="yes" />
      <Aboutv3 isBg="" />
      <Servicev2 isBg="yes" />
      <Ctav3 isBg="" />
      <Teamv3 isBg="yes" />
      <Testimonialv3 isBg="" />
      <Footerv2 />
      {/* Greet video component start */}
      <GreetVideo
        hi="hi! 👋"
        border="#7432ff"
        isLeft="no"
        btnColorBg="#7432ff"
        btnColorText="#fff"
        defaultVideo={defaultVideo}
        greetOptions={greetOptions}
        web3formsAccessKey= "YOUR_ACCESS_KEY_HERE"
      />
      {/* Greet video component end */}
    </div>
  );
};

export default MarketingSolution;

import React from "react";
import Contactv2 from "../contactv2";
import Footerv2 from "../global/footerv2";
import HeaderMarketing from "../global/headerMarketing";

const Contact = ({header}) => {
  return (
    <>
    <HeaderMarketing header={header} />
      <Contactv2 isBg="yes" />
      <Footerv2 />
    </>
  );
};

export default Contact;

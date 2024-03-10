import React from "react";
import LimoServices from "./LimoServices";
import BlacklaneLimo from "./BlacklaneLimo";
import AirportService from "./AirportService";
import LimoHero from "./LimoHero";
import Services from "../Component/Services";

const LimousineServices = () => {
  return (
    <div>
      <LimoHero />
      <Services />
      <LimoServices />
      <BlacklaneLimo />
      <AirportService />
    </div>
  );
};

export default LimousineServices;

import React from "react";
import HourlyService from "./HourlyService";
import OccasIon from "./OccasIon";
import DownloadApp from "./DownloadApp";
import HourlyHero from "./HourlyHero";
import AboutHourly from "./AboutHourly";
import Signaturebg1 from "./Signaturebg1";

const HourlyHire = () => {
  return (
    <div>
      <HourlyHero />
      <AboutHourly />
      <HourlyService />
      <OccasIon />
      <Signaturebg1 />
      <DownloadApp />
    </div>
  );
};

export default HourlyHire;

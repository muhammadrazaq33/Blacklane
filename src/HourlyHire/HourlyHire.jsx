import React from "react";
import HourlyService from "./HourlyService";
import OccasIon from "./OccasIon";
import DownloadApp from "./DownloadApp";
import HourlyHero from "./HourlyHero";
import AboutHourly from "./AboutHourly";

const HourlyHire = () => {
  return (
    <div>
      <HourlyHero />
      <AboutHourly />
      <HourlyService />
      <OccasIon />
      <DownloadApp />
    </div>
  );
};

export default HourlyHire;

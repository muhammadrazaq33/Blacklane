import React from "react";
import HourlyService from "./HourlyService";
import OccasIon from "./OccasIon";
import DownloadApp from "./DownloadApp";
import HourlyHero from "./HourlyHero";

const HourlyHire = () => {
  return (
    <div>
      <HourlyHero />
      <HourlyService />
      <OccasIon />
      <DownloadApp />
    </div>
  );
};

export default HourlyHire;

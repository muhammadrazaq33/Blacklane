import React from "react";
import SignatureBg from "../Component/SignatureBg";
import AirportToCity from "./AirportToCity";
import GetToAirport from "./GetToAirport";
import AirportSuttle from "./AirportSuttle";
import Hero from "../Component/Hero";
import Services from "../Component/Services";

const AirportTransfer = () => {
  return (
    <div>
      <Hero />
      <Services />
      <SignatureBg />
      <AirportToCity />
      <GetToAirport />
      <AirportSuttle />
    </div>
  );
};

export default AirportTransfer;

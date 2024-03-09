import React from "react";
import SignatureBg from "../Component/SignatureBg";
import AirportToCity from "./AirportToCity";
import GetToAirport from "./GetToAirport";
import AirportSuttle from "./AirportSuttle";

const AirportTransfer = () => {
  return (
    <div>
      <div>
        <SignatureBg />
      </div>
      <AirportToCity />
      <GetToAirport />
      <AirportSuttle />
    </div>
  );
};

export default AirportTransfer;

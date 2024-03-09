import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CityRide from "./CityRide/CityRide";
import HourlyHire from "./HourlyHire/HourlyHire";
import AirportTransfer from "./AirportTransfer/AirportTransfer";
import ChoufferServices from "./ChoufferServices/ChoufferServices";
import LimousineServices from "./LimousineServices/LimousineServices";
import { Header } from "./Component/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/citytocityride" element={<CityRide />} /> */}
        <Route path="/airportTransfer" element={<AirportTransfer />} />
        <Route path="/hourlyHire" element={<HourlyHire />} />
        <Route path="/choufferservices" element={<ChoufferServices />} />
        <Route path="/limousineservices" element={<LimousineServices />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="shadow-sm py-2">
      <div className="flex items-center justify-between max-w-[1200px] m-auto">
        <h1 className="text-[2rem] font-bold">BLACKLANE</h1>
        {/* links ===== */}
        <div className="flex items-center justify-between gap-5">
          <NavLink to={"/airportTransfer"}>
            <p className="text-[1rem]  font font-bold">Airport transfers</p>
          </NavLink>
          <NavLink to={"/hourlyHire"}>
            <p className="text-[1rem]  font font-bold">Hourly hire</p>
          </NavLink>{" "}
          <NavLink to={"/choufferservices"}>
            <p className="text-[1rem]  font font-bold">Chauffeur services</p>
          </NavLink>{" "}
          <NavLink to={"/limousineservices"}>
            <p className="text-[1rem]  font font-bold">Limousine services</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

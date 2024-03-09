import React from "react";
import { NavLink } from "react-router-dom";

const GetToAirport = () => {
  return (
    <div className="w-[1200px] max-w-[95vw] m-auto mt-[5rem]">
      <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[3rem] lg:gap-x-[1rem] place-content-between gap-y-4">
        {/* IMAGE   ===>*/}
        <div>
          <img src="./ASSETS/image-4.jpg" className=" md1:w-[32rem]" alt="" />
        </div>
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3">
          <h1 className="text-[28px] lg:text-[32px] font-semibold">
            Get to or from the airport
          </h1>
          <p className=" text-[16px] md1:max-w-[36.8rem] w-full">
            <span className=" font-bold hover-underline-animation mr-1">
              <NavLink to={"/limousineservices"}>
                A Blacklane chauffeur service
              </NavLink>
            </span>
            aims to achieve the very highest possible standards possible for all
            its passengers. Whether you’re stepping out of{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>LAX in California</NavLink>
            </span>{" "}
            on business or you need to be dropped off at{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>
                Bangkok International Airport
              </NavLink>
            </span>{" "}
            after a holiday in Thailand, Blacklane will get you there relaxed,
            recharged and ready with an airport pick up or transfer taxi
            service. Traveling from airports to your hotel with family or
            colleagues? A Blacklane Business Van can be shared by up to five
            people together, with plenty of room for luggage. For those after
            that little bit extra, consider our First Class service for the
            epitome of style and comfort - a great idea for special occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetToAirport;

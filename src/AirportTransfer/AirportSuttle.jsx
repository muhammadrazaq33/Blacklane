import React from "react";
import { NavLink } from "react-router-dom";

const AirportSuttle = () => {
  return (
    <div className="w-[1200px] max-w-[95vw] m-auto">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem] mb-20">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold">
            Airport shuttle booking
          </h1>
          <p className=" text-[16px] md1:max-w-[36rem] w-full">
            The booking of{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>
                Blacklane’s limousine service
              </NavLink>{" "}
            </span>
            is easy and requires just a few seconds. You can reserve your
            airport transfer in a city of your choice using the accessible
            Blacklane website, or use the smartphone app for Apple and Android
            devices. The necessary steps are simple: just provide the pickup and
            destination data and select your shuttle’s vehicle class. After
            you’ve confirmed the calculated fare and payment details, you will
            receive an email of confirmation shortly afterwards. Blacklane
            prides itself on transparency, which is why you won’t receive any
            hidden fees when you book with us and the price you see is the price
            you pay - a great way to kick off your journey.
          </p>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img src="./ASSETS/image-5.jpg" className=" md1:w-[32rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AirportSuttle;

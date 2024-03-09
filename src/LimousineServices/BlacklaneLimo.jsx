import React from "react";
import { NavLink } from "react-router-dom";

const BlacklaneLimo = () => {
  return (
    <div className="w-[1200px] max-w-[95vw] m-auto mt-[5rem]">
      <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[3rem] lg:gap-x-[1rem] place-content-between gap-y-4">
        {/* IMAGE   ===>*/}
        <div>
          <img src="./ASSETS/img-3.jpg" className=" md1:w-[32rem]" alt="" />
        </div>
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 mt-3">
          <h1 className="text-[28px] lg:text-[32px] font-semibold">
            Get around with a Blacklane limo service
          </h1>
          <p className=" text-[16px] md1:max-w-[36.8rem] w-full">
            With a Blacklane limo service you can explore any event the city has
            to offer with sophistication and ease. Blacklane’s limousine service
            fleet can be tailored to fit a variety of needs: our regular
            Business Class vehicle can be used for either as a simple A-to-B
            journey or hired by the hour for maximum flexibility on the part of
            the passenger. Our First Class limo services exist for when a
            passenger really needs to make an impact with their arrival –
            perhaps for a birthday celebration or special work engagement. Need
            a limo service for prom or a wedding limousine? We have you covered.
            Blacklane’s Business Van option allows you and your party to travel
            as one to the airport, with plenty of room for your luggage and
            belongings. Whatever you choose to do, using a{" "}
            <span className=" font-bold hover-underline-animation">
              <NavLink to={"/limousineservices"}>
                chauffeur service from Blacklane
              </NavLink>{" "}
            </span>{" "}
            means you’ll be arriving in style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlacklaneLimo;

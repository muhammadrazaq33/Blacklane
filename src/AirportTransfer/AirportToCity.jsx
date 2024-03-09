import React from "react";

const AirportToCity = () => {
  return (
    <div className="w-[1200px] max-w-[95vw] m-auto">
      <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem]">
        {/* TITLE PaRAGrAGh */}
        <div className=" flex flex-col gap-3 order-2 md1:order-1">
          <h1 className="text-[28px] lg:text-[32px] font-semibold">
            Airport transfer in the city
          </h1>
          <p className=" text-[16px] md1:max-w-[36rem] w-full">
            If you’ve just stepped off a plane, tired and aching from a long
            flight, there can be no better antidote to your ailments than a
            Blacklane airport transfer direct to your destination. Blacklane
            transfers are available in hundreds of cities and airports across
            the world, and for those who don’t look forward to deciphering
            foreign public transport maps or haggling with local taxi companies,
            Blacklane offers a service that will take you to your destination
            directly from the airport. Wherever you go, our professional drivers
            can track your flight and adjust for any delays outside of your
            control. They’re hand-picked and locally knowledgeable, so feel free
            to ask them for tips or advice on what to do during your stay.
          </p>
        </div>

        {/* IMAGE   ===>*/}
        <div className="order-1 md1:order-2">
          <img src="./ASSETS/image-3.jpg" className=" md1:w-[32rem]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AirportToCity;

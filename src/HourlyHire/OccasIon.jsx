import React from "react";

const OccasIon = () => {
  return (
    <div>
      <div className="w-[1200px] max-w-[95vw] m-auto">
        <div className="grid grid-cols-1 md1:grid-cols-2 gap-x-[5rem] place-content-between gap-y-5 mt-[2.5rem] lg:mt-[5rem]">
          {/* TITLE PaRAGrAGh */}
          <div className=" flex flex-col gap-3 order-2 md1:order-1 place-self-center">
            <h1 className="text-[28px] lg:text-[32px] font-semibold">
              By-the-hour hire for any occasion
            </h1>
            <p className=" text-[16px] md1:max-w-[36rem] w-full">
              Having an experienced Blacklane chauffeur on hand for a period of
              time gives you the freedom to create more fluid plans in advance
              of your trip. Whether for business or pleasure, a Blacklane hourly
              hire means you can change your destination on a whim, staying one
              step ahead of any obstacles or issues on the horizon.
            </p>
          </div>

          {/* IMAGE   ===>*/}
          <div className="order-1 md1:order-2">
            <img src="./ASSETS/hire-2.png" className=" md1:w-[32rem]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasIon;

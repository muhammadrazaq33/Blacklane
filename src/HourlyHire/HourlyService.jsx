import React from "react";

const HourlyService = () => {
  return (
    <div>
      <div className="w-[1200px] max-w-[95vw] m-auto mt-[5rem]">
        <div className="grid md1:grid-cols-2 grid-cols-1 gap-x-[2rem] lg:gap-x-[1.5rem]  gap-y-4">
          {/* IMAGE   ===>*/}
          <div>
            <img
              src="./ASSETS/hire-1.png"
              className=" w-full md1:w-[32rem]"
              alt=""
            />
          </div>
          {/* TITLE PaRAGrAGh */}
          <div className=" flex flex-col gap-3 place-self-center">
            <h1 className="text-[28px] lg:text-[32px] font-semibold">
              Flexibility with an hourly service
            </h1>
            <p className=" text-[16px] md1:max-w-[35.7rem] w-full">
              For some added flexibility during the course of your stay,
              Blacklane is on hand with a reliable hourly chauffeur service.
              Whether you're in Sao Paulo, San Francisco or Sydney, you can
              expect the same high levels of professionalism and excellence on
              every occasion. You can book a Blacklane by-the-hour service for a
              duration of your choosing, even if your precise destinations are
              yet to be decided. Enjoy Blacklane's industry-leading standards in
              quality and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyService;

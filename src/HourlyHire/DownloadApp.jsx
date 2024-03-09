import React from "react";

const DownloadApp = () => {
  return (
    <div className="w-[1200px] max-w-[95vw] m-auto mt-[5rem]">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-y-8 ">
        {/* dowNlOAd  =====> */}
        <div className="grid lg:place-items-start place-items-center order-2 lg:order-1">
          <div className=" flex flex-col gap-4 lg:text-left text-center">
            <h3 className=" text-[27px] font-semibold">Download the app</h3>
            <p className=" lg:max-w-[30rem] w-full">
              Easily book, change, or cancel rides on the go. Think of it as
              peace of mind in the palm of your hand.
            </p>
            {/* <div></div> */}
          </div>
        </div>

        {/* imagE =====> */}
        <div className="order-1 lg:order-2 grid lg:place-items-center ">
          <img
            src="./ASSETS/hIre-4.png"
            className=" object-contain lg:h-[100%] h-[80%] lg:w-[100%] w-[60%]"
            alt="HeLLO"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;

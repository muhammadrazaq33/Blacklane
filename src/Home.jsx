import React from "react";
import { Header } from "./Component/Header";

const Home = () => {
  return (
    <div className="max-[1200px] max-w-[91vw] m-auto">
      <div className="grid place-content-center w-full md:h-[80vh] h-[50vh]">
        <div className="lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[1.5rem] font-bold">
          Welcome To the BLACKLANE
        </div>
        <div className="w-[70%] m-auto bg-slate-400  h-2 rounded-lg"></div>
        {/* <Header /> */}
      </div>
    </div>
  );
};

export default Home;

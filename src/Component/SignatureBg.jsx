import React from "react";
import RedCard from "./RedCard";

const SignatureBg = () => {
  return (
    <div className="mt-[5rem]">
      <div className='XL:bg-[url("./ASSETS/S.webp")] md:bg-[url("./ASSETS/S-2.webp")] bg-[url("./ASSETS/S-3.webp")]  XL:h-[20rem] bg-no-repeat lg:h-[26rem] md:h-[24rem] sm:h-[40rem] h-[30rem] XL:bg-contain bg-cover relative '>
        {/*  */}
        <div className=" absolute XL:left-32 lg:left-16 md:left-12 XL:top-12 md:top-20 bottom-5 left-3 md:p-0 p-10">
          <RedCard />
          <p className=" text-white justify-end md:flex hidden">HELLO CAR</p>
        </div>
      </div>
    </div>
  );
};

export default SignatureBg;

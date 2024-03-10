import React from "react";

const Service = [
  {
    id: 1,
    img: "./ASSETS/Dollar_svg.svg",
    heading: "Competitive rates",
    text: "Access premium service at distance-based prices that are fair to you and our chauffeurs.",
  },
  {
    id: 2,
    img: "./ASSETS/Airoplan_svg.svg",
    heading: "Seamless airport travel",
    text: "Relax with 1 hour of complimentary wait time and flight tracking.",
  },
  {
    id: 3,
    img: "./ASSETS/reminder_svg.svg",
    heading: "Travel on your terms",
    text: "Stay flexible and in charge of your schedule. It’s quick and easy for you to cancel or make changes to any ride.",
  },
];
const Services = () => {
  return (
    <div className=" w-[1200px] max-w-[95vw] m-auto mt-[3.5rem]">
      {/*  */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10">
        {Service.map((curEle) => {
          const { id, img, heading, text } = curEle;
          return (
            <article
              key={id}
              className="flex flex-col gap-5 items-center shadow-sm sm:shadow-none py-12"
            >
              <img src={img} alt="" />
              <h1 className="text-[24px] font-semibold text-center">
                {heading}
              </h1>
              <p className="text-center max-w-[20rem] text-[20px] text-[#181A1F] ">
                {text}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

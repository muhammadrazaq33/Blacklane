import React from "react";

const Service = [
  {
    id: 1,
    img: "./ASSETS/web-app.svg",
    heading: "Book via app or web",
    text: "No need to call or email for a quote. Enter your ride details, see the fixed price, and book. It’s really that simple.",
  },
  {
    id: 2,
    img: "./ASSETS/car.svg",
    heading: "Your safe passage",
    text: "Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in-class service.",
  },
  {
    id: 3,
    img: "./ASSETS/reminder_svg.svg",
    heading: "Set your own schedule",
    text: "Schedule your pickup whenever you want, and leave departure boards and timetables in the rear-view mirror.",
  },
];
const AboutHourly = () => {
  return (
    <div className=" w-[1200px] max-w-[95vw] m-auto mt-[3.5rem]">
      {/*  */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-x-12 ">
        {Service.map((curEle) => {
          const { id, img, heading, text } = curEle;
          return (
            <article key={id} className="grid place-items-center gap-y-4 mb-5">
              <img src={img} alt="" />
              <h1 className="text-[24px] font-semibold text-center">
                {heading}
              </h1>
              <p className="text-center max-w-[20rem] text-[18px] ">{text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AboutHourly;

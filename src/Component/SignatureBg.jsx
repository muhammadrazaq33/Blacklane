import Wrapper from "../Shared/Wrapper";
import bgMobile from "../../public/ASSETS/bg-mobile.webp";
import bgTablet from "../../public/ASSETS/bg-tablet.webp";
import bgLaptop from "../../public/ASSETS/bg-laptop.webp";
import bgFull from "../../public/ASSETS/bg-full.webp";
// import comma from "../..public/ASSETS/comma.svg";
import signature from "../../public/ASSETS/signature.svg";

const SignatureBg = () => {
  return (
    <section className="relative">
      <Wrapper styles={"px-4 relative"}>
        <div className="btn-gradient w-[90%] md:w-[370px] md:max-w-[370px] custom-lg:max-w-[650px] custom-lg:w-[630px]  px-8 py-4 md:left-10 top-[210px]  md:top-9 absolute">
          {/* <img
            src={comma}
            alt="comma"
            className="absolute top-0 -left-3 md:-left-5"
          /> */}
          <h2 className="text-[38px] custom-lg:text-[44px] font-semibold ">
            I&apos;M MORE THAN
            <br /> A CHAUFFEUR,
          </h2>
          <p className="text-[24px] font-semibold">
            I&apos;M YOUR ALTERNATIVE <br /> TO AIRPLANE MODE.
          </p>
          <div className="absolute -bottom-20 custom-lg:-bottom-10 right-0 md:-right-8">
            <img
              src={signature}
              alt="signature"
              className="w-[130px] md:w-[200px]"
            />
            <p>BLACKLANE CHAUFFEUR</p>
          </div>
        </div>
      </Wrapper>
      <picture>
        <source
          srcSet={bgMobile}
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet={bgTablet}
          media="(max-width: 1279px)"
          type="image/webp"
        />
        <source
          srcSet={bgLaptop}
          media="(min-width: 1280px)"
          type="image/webp"
        />

        <img
          src={bgFull}
          alt="A man arrives at his home, greeting his kids while his chauffeur unloads his luggage."
          className="md:object-cover  md:object-center h-[570px] md:h-full w-screen"
        />
      </picture>
    </section>
  );
};

export default SignatureBg;

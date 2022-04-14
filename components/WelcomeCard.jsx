import React from "react";

export default function WelcomeCard() {
  return (
    <div className="relative transform -translate-x-[1.2rem] xs:-translate-x-[1.6rem] md:-translate-x-[3.3rem] -translate-y-[1.4rem] xs:-translate-y-[1.8rem] md:-translate-y-[2.5rem] w-[98%] xs:w-[85%] sm:w-[83%] md:w-[82%] xl:w-[78%] h-[13rem] sm:h-[16rem] md:h-[19rem] mx-auto mt-12 mb-[6.5rem] sm:mb-40 lg:mb-[13rem] xl:mb-[15rem]">
      <div className="bg-[#03BDC9] absolute w-full h-full z-10 flex justify-center items-center text-white text-[4rem] ">
        <span className="w-[90%] xs:w-[80%] py-[10%] font-welcome font-semibold text-center text-white text-[1.8rem] xs:text-[2.2rem] sm:text-[2.8rem] md:text-[3.3rem] lg:text-[4rem] leading-[110%]">
          Hey! its just a developer and a <br /> designer here, spicing things
          up
        </span>
      </div>
      <div className="bg-[rgba(50,197,206,0.31)] shadow-md w-full h-full absolute transform translate-x-[1.2rem] xs:translate-x-[1.6rem] md:translate-x-[3.3rem] translate-y-[1.4rem] xs:translate-y-[1.8rem] md:translate-y-[2.5rem]"></div>
    </div>
  );
}

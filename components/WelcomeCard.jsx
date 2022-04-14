import React from "react";

export default function WelcomeCard() {
  return (
    <div className="relative w-[90%] sm:w-[80%] md:w-[75vw] h-[13rem] sm:h-[15rem] md:h-[19rem] mx-auto mt-16 md:mt-12 mb-40">
      <div className="bg-[#03BDC9] absolute w-full h-full z-10 flex justify-center items-center text-white text-[4rem] ">
        <span className="w-[80%] py-[10%] font-welcome font-semibold text-center text-white text-[1.5rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[2.4rem] sm:leading-[3.5rem] md:leading-[4.5rem]">
          Hey! its just a developer and a <br /> designer here, spicing things
          up
        </span>
      </div>
      <div className="bg-[rgba(50,197,206,0.31)] shadow-md w-full h-full absolute transform translate-x-[1.2rem] md:translate-x-[3.3rem] translate-y-[1.4rem] md:translate-y-[2.5rem]"></div>
    </div>
  );
}

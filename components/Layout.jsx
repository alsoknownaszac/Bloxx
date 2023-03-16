import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isDarkMode } from "../features/dark/darkSlice";
import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function Layout({ children }) {
  const toggleDarkMode = useSelector(isDarkMode);

  return (
    <div className={toggleDarkMode.dark ? `dark` : ``}>
      <div className="h-[100vh] w-[100vw] fixed overflow-y-scroll bg-[rgba(244,244,244,1)] dark:bg-[rgba(18,18,18,1)] dark:text-white">
        <Header />
        <MobileHeader />
        {/* <div className="h-[calc(100%-15rem)] relative "> */}
        <div className="container mx-auto pt-[3rem] sm:pt-[4rem] md:pt-[6rem] px-[2rem] md:px-[2.6rem]">
          {children}
        </div>
        <Footer />
        {/* </div> */}
      </div>
    </div>
  );
}

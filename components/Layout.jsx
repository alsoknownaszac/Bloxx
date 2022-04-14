import React, { useState } from "react";
import { Header } from ".";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";

export default function Layout({ children }) {
  const [mode, setMode] = useState(false);
  return (
    <div className={mode ? `dark` : ``}>
      <div className="h-[100vh] w-[100vw] fixed overflow-y-scroll bg-[rgba(244,244,244,1)] dark:bg-[rgba(18,18,18,1)] dark:text-white">
        <Header mode={mode} setMode={setMode} />
        <MobileHeader mode={mode} setMode={setMode} />
        {/* <div className="h-[calc(100%-15rem)] relative "> */}
        <div className="container mx-auto pt-[3rem] sm:pt-[7rem] px-8 md:px-10">
          {children}
        </div>
        <Footer />
        {/* </div> */}
      </div>
    </div>
  );
}

import React from "react";
import { Header } from ".";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="h-[100vh] relative pt-[15rem]">
      <Header />
      {/* <div className="h-[calc(100%-15rem)] relative "> */}
      <div className="container mx-auto px-10">{children}</div>
      <Footer />
      {/* </div> */}
    </div>
  );
}

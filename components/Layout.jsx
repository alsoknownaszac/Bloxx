import React from "react";
import { Header } from ".";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="h-full relative pt-[15rem]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

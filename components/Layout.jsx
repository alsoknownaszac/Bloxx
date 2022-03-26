import React from "react";
import { Header } from ".";

export default function Layout({ children }) {
  return (
    <div className="h-full relative pt-[15rem]">
      <Header />
      {children}
    </div>
  );
}

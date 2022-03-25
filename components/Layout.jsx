import React from "react";
import { Header } from ".";

export default function Layout({ children }) {
  return (
    <div className="h-[100vh]">
      <Header />
      {children}
    </div>
  );
}

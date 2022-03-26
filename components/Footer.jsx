import React from "react";
import { AiFillCopyrightCircle as CopyRight } from "react-icons/ai";
import {
  FiLinkedin as LinkedIn,
  FiInstagram as Instagram,
  FiTwitter as Twitter,
} from "react-icons/fi";

export default function Footer() {
  return (
    <div className="relative bottom-0 text-[1.4rem] bg-[rgba(235,240,240,1)]">
      <div className="!container mx-auto px-10 py-8 flex items-center justify-between">
        <div className="flex items-center">
          copyright <CopyRight size={"2rem"} className="mx-3" /> 2022 spice
        </div>
        <div className="flex items-center text-[2rem]">
          <LinkedIn className="mx-3" />
          <Instagram className="mx-3" />
          <Twitter className="mx-3" />
        </div>
      </div>
    </div>
  );
}

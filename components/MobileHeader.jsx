import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { RiMoonFill, RiMoonLine, RiSearchLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { CgMenuMotion } from "react-icons/cg";

export default function MobileHeader({ mode, setMode }) {
  const [categories, setCategories] = useState([]);

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="md:hidden sticky z-50 h-[10rem] top-[0rem] flex items-end px-5 md:px-10 backdrop-blur-sm">
      <div className="container mx-auto shadow-sm grid grid-cols-12 rounded-lg p-5 items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white">
        <div className="md:float-left block col-span-4">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl ">
              NoobNotes
            </span>
          </Link>
        </div>
        <div className="col-span-4"></div>
        <div className=" col-span-4 flex items-center md:ml-auto">
          <RiSearchLine className="cursor-pointer text-[1.8rem] mr-10" />
          <div
            className="cursor-pointer text-[1.8rem] mr-10"
            onClick={() => setMode(!mode)}
          >
            {!mode ? <RiMoonLine /> : <RiMoonFill />}
          </div>
          <div
            className="cursor-pointer text-[1.8rem] mr-4"
            onClick={() => setMenu(!menu)}
          >
            {!menu ? <HiOutlineMenu /> : <CgMenuMotion />}
          </div>
        </div>
      </div>
    </div>
  );
}

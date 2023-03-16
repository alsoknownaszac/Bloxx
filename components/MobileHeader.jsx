import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { RiMoonFill, RiMoonLine, RiSearchLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import { CgMenuMotion } from "react-icons/cg";
import { isDarkMode, switchDarkMode } from "../features/dark/darkSlice";
import { useDispatch, useSelector } from "react-redux";
import BasicPopover from "./BasicPopover";
import { inputSearch } from "../features/search/searchSlice";

export default function MobileHeader() {
  const toggleDarkMode = useSelector(isDarkMode);

  const dispatch = useDispatch();

  const [menu, setMenu] = useState(false);

  return (
    <div className="md:hidden sticky z-50 h-[10rem] top-[0rem] flex items-end px-5 md:px-10 backdrop-blur-sm">
      <div className="container mx-auto shadow-sm flex  justify-between rounded-lg p-5 items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white">
        <div className="md:float-left block ">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl ">
              NoobNotes
            </span>
          </Link>
        </div>
        {/* <div className=""></div> */}
        <div className="flex items-center md:ml-auto">
          <BasicPopover
            contentStyles="top-[25px] right-0 !w-[220px] !h-fit !rounded-[5px] bg-gray-200 "
            btn={
              <RiSearchLine className="cursor-pointer text-[1.8rem] mr-10" />
            }
          >
            <div className="p-3 text-[16px] shadow-inner shadow-[black] flex items-center justify-between">
              <code className="flex text-[15px] items-center">
                [
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                ]
              </code>
              <code className="w-[84%]">
                <input
                  type="text"
                  className=" outline-none bg-transparent w-full"
                  onChange={({ target }) => dispatch(inputSearch(target.value))}
                />
              </code>
            </div>
          </BasicPopover>
          <div
            className="cursor-pointer text-[1.8rem] mr-10"
            onClick={() => dispatch(switchDarkMode())}
          >
            {!toggleDarkMode.dark ? <RiMoonLine /> : <RiMoonFill />}
          </div>
          <div
            className="cursor-pointer text-[1.8rem] mr-4"
            onClick={() => setMenu(!menu)}
          >
            {!menu ? (
              <HiOutlineMenu size={"2rem"} />
            ) : (
              <CgMenuMotion size={"2rem"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

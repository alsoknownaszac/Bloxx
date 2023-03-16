import React, { Fragment, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { toUpperCase } from "../helper/toUpperCase";
import { RiMoonFill, RiMoonLine, RiSearchLine } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md";
import { Popover, Transition } from "@headlessui/react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../query/getCategories";
import BasicPopover from "./BasicPopover";
import { useDispatch, useSelector } from "react-redux";
import { isDarkMode, switchDarkMode } from "../features/dark/darkSlice";
import { inputSearch } from "../features/search/searchSlice";

export default function Header() {
  const toggleDarkMode = useSelector(isDarkMode);

  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div className="hidden md:text-[1.45rem] lg:text-[1.7rem] md:flex sticky z-50 h-[13rem] top-[0rem] items-end px-5 md:px-10 backdrop-blur-sm">
      <div className="container mx-auto shadow-sm grid grid-cols-12 rounded-lg p-5 items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white">
        <div className="md:float-left col-span-1">
          <Link href="/">
            <span className="font-[Andika] italic cursor-pointer font-bold md:text-3xl lg:text-4xl ">
              Project88
            </span>
          </Link>
        </div>
        <div className="col-span-1"></div>
        <MdHeaderTab loading={loading} data={data?.categories} />
        <LgHeaderTab loading={loading} data={data?.categories} />
        <div className=" col-span-2 flex items-center md:ml-auto">
          <BasicPopover
            contentStyles="top-[25px] right-0 !w-[220px] !h-fit !rounded-[5px] bg-gray-200 "
            btn={
              <RiSearchLine className="cursor-pointer md:text-[1.5rem] lg:text-[1.7rem] mr-16" />
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
            className="cursor-pointer md:text-[1.5rem] lg:text-[1.7rem] mr-4"
            onClick={() => dispatch(switchDarkMode())}
          >
            {!toggleDarkMode.dark ? <RiMoonLine /> : <RiMoonFill />}
          </div>
        </div>
      </div>
    </div>
  );
}

function LgHeaderTab({ loading, data }) {
  return (
    <div
      className={`col-span-8 mx-auto hidden lg:flex items-center columns-[${
        data?.length + 2
      }] md:text-[1.45rem] lg:text-[1.7rem] `}
    >
      <Link href={`/all`}>
        <span className=" text-center font-normal mx-8 cursor-pointer">
          All Categories
        </span>
      </Link>
      {data?.map((category, i) => (
        <Link key={category.id} href={`/${category.slug}`}>
          <span className=" text-center font-normal mx-8 cursor-pointer">
            {toUpperCase(category.name)}
          </span>
        </Link>
      ))}
    </div>
  );
}

function MdHeaderTab({ loading, data }) {
  return (
    <div
      className={`col-span-8 mx-auto hidden md:flex lg:hidden items-center columns-4 md:text-[1.45rem] lg:text-[1.7rem] `}
    >
      <Link href={`/all`}>
        <span className=" text-center font-normal mx-8 cursor-pointer">
          All Categories
        </span>
      </Link>
      {data?.map(
        (category, i) =>
          i < 2 && (
            <Link key={category.id} href={`/${category.slug}`}>
              <span className=" text-center font-normal mx-8 cursor-pointer">
                {toUpperCase(category.name)}
              </span>
            </Link>
          )
      )}
      <MoreHeaderTab loading={loading} data={data} />
    </div>
  );
}

function MoreHeaderTab({ loading, data }) {
  let timeout; // NodeJS.Timeout
  const timeoutDuration = 200;

  const buttonRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  const handleClick = (open) => {
    setOpenState(!open);
    clearTimeout(timeout);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Popover className="relative px-4">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
        >
          <Popover.Button ref={buttonRef}>
            <div onClick={() => handleClick(open)}>
              <MdDoubleArrow
                className={`${
                  open ? `transform rotate-90 ` : ""
                } self-center translate-y-1 !outline-none`}
              />
            </div>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute top-12 -left-8 z-10 bg-gray-200 p-4 rounded-lg"
            >
              {data?.map(
                (category, i) =>
                  i > 1 && (
                    <Link key={category.id} href={`/${category.slug}`}>
                      <div className=" text-center font-normal px-8 py-2 mb-2 rounded-lg bg-gray-300 hover:bg-[rgba(50,197,206,0.31)] cursor-pointer">
                        {toUpperCase(category.name)}
                      </div>
                    </Link>
                  )
              )}
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}

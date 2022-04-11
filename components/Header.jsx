import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { toUpperCase } from "../helper/toUpperCase";
import { RiMoonFill, RiMoonLine, RiSearchLine } from "react-icons/ri";

// const categories = [
//   { name: "react", slug: "react" },
//   { name: "web dev", slug: "web dev" },
// ];

export default function Header({ mode, setMode }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="hidden md:flex sticky z-50 h-[13rem] top-[0rem] items-end px-5 md:px-10 backdrop-blur-sm">
      <div className="container mx-auto shadow-sm grid grid-cols-12 rounded-lg p-5 items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white">
        <div className="md:float-left block col-span-1">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl ">
              NoobNotes
            </span>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1"></div>
        <div
          className={`col-span-8 mx-auto columns-[${
            categories.length + 1
          }] items-center hidden md:contents`}
        >
          <Link href={`/category/all-categories`}>
            <span className=" text-center font-normal mx-8 cursor-pointer">
              All Categories
            </span>
          </Link>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" text-center font-normal mx-8 cursor-pointer">
                {toUpperCase(category.name)}
              </span>
            </Link>
          ))}
        </div>
        <div className=" col-span-2 flex items-center md:ml-auto">
          <RiSearchLine className="cursor-pointer text-[1.8rem] mr-16" />
          <div
            className="cursor-pointer text-[1.8rem] mr-4"
            onClick={() => setMode(!mode)}
          >
            {!mode ? <RiMoonLine /> : <RiMoonFill />}
          </div>
        </div>
      </div>
    </div>
  );
}

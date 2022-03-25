import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../services";

// const categories = [
//   { name: "react", slug: "react" },
//   { name: "web dev", slug: "web dev" },
// ];

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-6 rounded-lg py-6 items-center bg-[#F2F2F2]">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl ">
              NoobNotes
            </span>
          </Link>
        </div>
        <div
          className={`col-span-4 hidden mx-auto md:columns-${categories.length} items-center`}
        >
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" text-center font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="col-span-1 flex items-center md:float-right">
          NoobNotes
        </div>
      </div>
    </div>
  );
}

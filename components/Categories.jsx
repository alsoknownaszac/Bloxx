import React, { useState, useEffect } from "react";
// import moment from "moment";
import Link from "next/link";
import { getCategories } from "../services";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link
          key={category.slug}
          className="text-md"
          href={`/category/${category.slug}`}
        >
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

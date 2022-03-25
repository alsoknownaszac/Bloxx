import React from "react";
import moment from "moment";
import Link from "next/link";
import { AiFillCalendar as CalenderIcon } from "react-icons/ai";
import { toUpperCase } from "../helper/toUpperCase";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <div className="bg-[#ffffff02] shadow-lg rounded-lg p-0 mb-8">
      <div className="relative overflow-hidden shadow-md pb-[25rem]">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-[25rem] w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div className="p-4 pt-8">
        {post.categories.map((category) => (
          <span
            key={category.slug}
            className="p-2 px-4 rounded-sm bg-[rgba(66,172,147,0.17)]"
          >
            {toUpperCase(category.name)}
          </span>
        ))}
        <h1 className="transition duration-700 mt-4 mb-2 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className=" text-sm text-gray-700 font-normal lg:p-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center w-full">
          <div className="flex items-center lg:mb-0 lg:w-auto mr-8">
            <img
              className="align-middle rounded-full object-cover object-top"
              src={post.author.photo.url}
              height="20px"
              width="20px"
              alt={post.author.name}
            />
            <p className="inline align-middle text-gray-700 ml-3 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 items-center flex ">
            <CalenderIcon className="inline text-center mr-4" />
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
      </div>
      {/* <div className="text-center cursor-pointer">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-300 text-white py-1 px-3 text-lg font-medium rounded-full">
            Read more...
          </span>
        </Link>
      </div> */}
    </div>
  );
}

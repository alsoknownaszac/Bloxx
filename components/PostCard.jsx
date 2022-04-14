import React from "react";
import moment from "moment";
import Link from "next/link";
import { AiFillCalendar as CalenderIcon } from "react-icons/ai";
import { toUpperCase } from "../helper/toUpperCase";
import { toTitleCase } from "../helper/toTitleCase";

export function PostCard({ post, latest, recent, selectedCategory }) {
  return (
    <div className="p-0">
      <div
        className={`relative overflow-hidden shadow-md  ${
          latest
            ? "pb-[30rem]"
            : recent || selectedCategory
            ? "pb-[20rem]"
            : null
        } `}
      >
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className={`object-top absolute ${
            latest
              ? "h-[30rem]"
              : recent || selectedCategory
              ? "h-[20rem]"
              : null
          } w-full object-cover shadow-lg rounded-t-lg lg:rounded-md`}
        />
      </div>
      <div className="p-2 py-8">
        <div className="flex items-center">
          {post.categories.map((category) => (
            <div
              key={category.slug}
              className="p-4 mr-4 rounded-md w-max leading-[1.2rem] bg-[rgba(66,172,147,0.17)]"
            >
              {toUpperCase(category.name)}
            </div>
          ))}
        </div>
        <h1 className="transition duration-700 mt-6 mb-2 cursor-pointer hover:text-pink-600 text-[2.2rem] md:text-[2.5rem] leading-[110%] font-medium">
          <Link href={`/post/${post.slug}`}>{toTitleCase(post.title)}</Link>
        </h1>
        {/* <p className=" text-[1.2rem] text-gray-700 font-normal mb-4">
          {post.excerpt}
        </p> */}
        <div className="flex items-center text-[1.4rem] w-full">
          <div className="flex items-center lg:mb-0 lg:w-auto mr-10">
            <img
              className="align-middle rounded-full object-cover object-top"
              src={post.author.photo.url}
              height="25"
              width="25"
              alt={post.author.name}
            />
            <p className="inline align-middle text-gray-700 dark:text-gray-200 ml-4">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 dark:text-gray-200 flex items-center  ">
            <CalenderIcon className="mr-4" />
            <span className="text-[1.25rem]">
              {moment(post.createdAt).format(
                latest
                  ? "MMM DD, YYYY"
                  : recent || selectedCategory
                  ? "MMM DD"
                  : null
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FirstCategoryPost({ post }) {
  return (
    <div className="px-5 mb-[8rem] grid grid-cols-2 gap-12 text-[1.5rem]">
      <div className={`relative overflow-hidden shadow-md pb-[40rem]`}>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className={`object-top absolute h-[40rem] w-full object-cover shadow-lg rounded-t-lg lg:rounded-md`}
        />
      </div>
      <div className="">
        <div className="flex ">
          {post.categories.map((category) => (
            <div
              key={category.slug}
              className=" text-[1.8rem] p-2 px-4 mr-4 w-max rounded-md bg-[rgba(66,172,147,0.17)]"
            >
              {toUpperCase(category.name)}
            </div>
          ))}
        </div>
        <h1 className="transition duration-700 mt-4 mb-2 cursor-pointer hover:text-pink-600 text-[3rem] leading-[4rem] font-normal">
          <Link href={`/post/${post.slug}`}>{toTitleCase(post.title)}</Link>
        </h1>
        <p className=" text-[1.6rem] text-gray-700 dark:text-gray-400 font-normal mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-[1.4rem] w-full">
          <div className="flex items-center lg:mb-0 lg:w-auto mr-10">
            <img
              className="align-middle rounded-full object-cover object-top"
              src={post.author.photo.url}
              height="25"
              width="25"
              alt={post.author.name}
            />
            <p className="inline align-middle text-gray-700 dark:text-gray-200 ml-4">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 dark:text-gray-200 flex items-center  ">
            <CalenderIcon className="mr-4" />
            <span className="text-[1.25rem]">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

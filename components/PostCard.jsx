import React from "react";
import moment from "moment";
import Link from "next/link";
import { AiFillCalendar as CalenderIcon } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { toUpperCase } from "../helper/toUpperCase";
import { toTitleCase } from "../helper/toTitleCase";
import { PopOver } from "./PopOver";

export function PostCard({ post, latest, recent, selectedCategory }) {
  return (
    <div className="p-0">
      <div
        className={`relative overflow-hidden shadow-md  ${
          latest
            ? "pb-[30rem] sm:pb-[32rem] lg:pb-[45rem]"
            : recent || selectedCategory
            ? "pb-[18rem] sm:pb-[22rem] lg:pb-[28rem]"
            : null
        } `}
      >
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className={`object-top absolute ${
            latest
              ? "h-[30rem] sm:h-[32rem] lg:h-[45rem]"
              : recent || selectedCategory
              ? "h-[18rem] sm:h-[22rem] lg:h-[28rem]"
              : null
          } w-full object-cover shadow-lg rounded-t-lg lg:rounded-md`}
        />
      </div>
      <div className="p-2 py-8">
        <div className="flex items-center">
          {post.categories.map((category) => (
            <div
              key={category.slug}
              className="truncate p-4 mr-4 rounded-md w-max text-[1.4rem] xs:text-[1.6rem] leading-[1.2rem] bg-[rgba(66,172,147,0.17)]"
            >
              {toUpperCase(category.name)}
            </div>
          ))}
        </div>
        <h1 className="transition duration-700 my-4 cursor-pointer hover:text-pink-600 text-[2.2rem] md:text-[2.5rem] leading-[110%] font-medium">
          <Link href={`/post/${post.slug}`}>{toTitleCase(post.title)}</Link>
        </h1>
        {/* <p className=" text-[1.2rem] text-gray-700 font-normal mb-4">
          {post.excerpt}
        </p> */}
        <div className="flex items-center text-[1.2rem] sm:text-[1.4rem] w-full">
          <div className="flex items-center relative w-fit md:w-[40%] truncate lg:mb-0 lg:w-auto mr-4">
            <img
              className="hidden sm:inline align-middle over rounded-full object-cover object-top"
              src={post.author.photo.url}
              height="25"
              width="25"
              alt={post.author.name}
            />
            <PopOver
              btn={
                <p className="inline align-middle truncate text-gray-700 dark:text-gray-200 sm:ml-4">
                  {post.author.name}
                </p>
              }
            >
              {post.author.name}
            </PopOver>
          </div>
          <div className="mr-4 text-[1.4rem]">
            <BsDot />
          </div>
          <div className=" font-medium text-gray-700 text-[1.2rem] sm:text-[1.4rem] dark:text-gray-200 flex items-center  ">
            <CalenderIcon className="mr-4 hidden sm:inline" />
            <span>
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
    <div className="px-5 mb-[8rem] grid md:grid-cols-2 gap-8 md:gap-12 text-[1.5rem]">
      <div
        className={`relative overflow-hidden shadow-md h-[30rem] sm:h-[32rem] lg:h-[45rem] `}
      >
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className={`object-top absolute h-[30rem] sm:h-[32rem] lg:h-[45rem] w-full object-cover shadow-lg rounded-t-lg lg:rounded-md`}
        />
      </div>
      <div className="">
        <div className="flex ">
          {post.categories.map((category) => (
            <div
              key={category.slug}
              className=" text-[1.4rem] xs:text-[1.6rem] leading-[1.2rem] p-4 mr-4 w-max rounded-md bg-[rgba(66,172,147,0.17)]"
            >
              {toUpperCase(category.name)}
            </div>
          ))}
        </div>
        <h1 className="transition duration-700 mt-4 mb-2 cursor-pointer hover:text-pink-600 text-[2.6rem] md:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.5rem]  leading-[115%] font-normal">
          <Link href={`/post/${post.slug}`}>{toTitleCase(post.title)}</Link>
        </h1>
        <p className=" text-[1.4rem] sm:text-[1.5rem] lg:text-[1.6rem] text-gray-700 dark:text-gray-400 font-normal mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center text-[1.2rem] sm:text-[1.4rem] w-full">
          <div className="flex items-center relative w-fit md:w-[40%] truncate lg:mb-0 lg:w-auto mr-4">
            <img
              className="hidden sm:inline align-middle over rounded-full object-cover object-top"
              src={post.author.photo.url}
              height="25"
              width="25"
              alt={post.author.name}
            />
            <PopOver
              btn={
                <p className="inline align-middle truncate text-gray-700 dark:text-gray-200 sm:ml-4">
                  {post.author.name}
                </p>
              }
            >
              {post.author.name}
            </PopOver>
          </div>
          <div className="mr-4 text-[1.4rem]">
            <BsDot />
          </div>
          <div className=" font-medium text-gray-700 text-[1.2rem] sm:text-[1.4rem] dark:text-gray-200 flex items-center  ">
            <CalenderIcon className="mr-4 hidden sm:inline" />
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

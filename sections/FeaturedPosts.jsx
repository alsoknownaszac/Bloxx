import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeaturedPostCard } from "../components";
import { GET_SINGLE_POST } from "../query/getSinglePost";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = ({ slug }) => {
  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 text-white w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: {
      where: {
        slug: slug,
      },
    },
  });
  console.log(data);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  if (data.isFeaturedPost)
    return (
      <div className="mb-8">
        <Carousel
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-4"
        >
          {data?.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
        </Carousel>
      </div>
    );
};

export default FeaturedPosts;

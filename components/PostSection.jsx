import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toUpperCase } from "../helper/toUpperCase";
import { FirstCategoryPost, PostCard } from "./PostCard";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../query/getCategories";
import { GET_POSTS } from "../query/getPosts";
import { GET_POSTS_BY_CATEGORY } from "../query/getPostsByCategory";
import { useRouter } from "next/router";

export default function PostSection({ latest, recent, selectedCategory }) {
  const router = useRouter();

  const categoriesQuery = useQuery(GET_CATEGORIES);
  const postsQuery = useQuery(GET_POSTS);

  const { loading, error, data } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: {
      where: {
        categories_some: {
          slug: selectedCategory,
        },
      },
    },
  });

  let filteredCategory;
  if (selectedCategory === "all" && postsQuery.data) {
    filteredCategory = postsQuery?.data?.posts;
  } else if (data) {
    filteredCategory = data?.posts;
  }
  // else filteredCategory = postsQuery.data?.posts;

  console.log(filteredCategory);

  if (loading && categoriesQuery.loading && postsQuery.loading)
    return "Loading...";

  if (error) return `Error! ${error.message}`;

  if (categoriesQuery.error) return `Error! ${categoriesQuery.error.message}`;

  if (postsQuery.error) return `Error! ${postsQuery.error.message}`;

  return (
    <div className={`mb-20 ${recent ? "md:-mx-10" : null} `}>
      <h1 className="text-[1.8rem] xs:text-[1.9rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[110%] mb-10">
        {latest ? "Latest" : recent ? "Recent" : null}
      </h1>
      {recent && (
        <div
          className={`p-2 py-4 w-max hidden md:flex mb-14 columns-[${categoriesQuery.data?.categories.length}] items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white`}
        >
          {categoriesQuery.data?.categories.map((category) => (
            <Link key={category.slug} href={`/post/${category.slug}`}>
              <span className=" text-center font-normal mx-8 cursor-pointer">
                {toUpperCase(category.name)}
              </span>
            </Link>
          ))}
        </div>
      )}
      {selectedCategory &&
        filteredCategory?.map(
          (post, index) =>
            index === 0 && (
              <FirstCategoryPost
                post={post}
                index={index}
                key={post.title}
                latest={latest}
                recent={recent}
                selectedCategory={selectedCategory}
              />
            )
        )}
      <div
        className={`grid ${
          latest
            ? "grid-cols-1 md:grid-cols-2 gap-20"
            : recent || selectedCategory
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10"
            : null
        } `}
      >
        {!selectedCategory &&
          filteredCategory?.map((post, index) => (
            <PostCard
              post={post}
              index={index}
              key={post.title}
              latest={latest}
              recent={recent}
              selectedCategory={selectedCategory}
            />
          ))}
        {selectedCategory &&
          filteredCategory?.map(
            (post, index) =>
              index > 0 && (
                <PostCard
                  post={post}
                  index={index}
                  key={post.title}
                  latest={latest}
                  recent={recent}
                  selectedCategory={selectedCategory}
                />
              )
          )}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   const categories = (await getCategories()) || [];

//   return {
//     props: { posts, categories },
//   };
// }

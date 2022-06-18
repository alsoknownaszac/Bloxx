import React, { useState, useEffect } from "react";
import { getCategories, getPosts } from "../services";
import Link from "next/link";
import { toUpperCase } from "../helper/toUpperCase";
import { FirstCategoryPost, PostCard } from "./PostCard";

export default function PostSection({ latest, recent, selectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  console.log(selectedCategory);

  useEffect(() => {
    // getCategories().then((newCategories) => setCategories(newCategories));
    // getPosts().then((newPosts) => setPosts(newPosts));

    console.log("wow");
  }, []);

  let filteredCategory;
  if (selectedCategory === "all-categories") {
    filteredCategory = posts;
  } else if (selectedCategory && posts) {
    filteredCategory = posts.filter(({ node: { categories } }) =>
      categories.some((val) => val.slug === selectedCategory)
    );
  } else filteredCategory = posts;

  // let filteredCategory = posts;
  // console.log(filteredCategory);
  // console.log(posts);

  return (
    <div className={`mb-20 ${recent ? "md:-mx-10" : null} `}>
      <h1 className="text-[1.8rem] xs:text-[1.9rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[110%] mb-10">
        {latest ? "Latest" : recent ? "Recent" : null}
      </h1>
      {/* {recent && (
        <div
          className={`p-2 py-4 w-max hidden md:flex mb-14 columns-[${categories.length}] items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white`}
        >
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" text-center font-normal mx-8 cursor-pointer">
                {toUpperCase(category.name)}
              </span>
            </Link>
          ))}
        </div>
      )} */}
      {/* {selectedCategory &&
        filteredCategory.map(
          (post, index) =>
            index === 0 && (
              <FirstCategoryPost
                post={post.node}
                index={index}
                key={post.title}
                latest={latest}
                recent={recent}
              />
            )
        )} */}
      {/* <div
        className={`grid ${
          latest
            ? "grid-cols-1 md:grid-cols-2 gap-20"
            : recent || selectedCategory
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10"
            : null
        } `}
      >
        {!selectedCategory &&
          filteredCategory.map((post, index) => (
            <PostCard
              post={post.node}
              index={index}
              key={post.title}
              latest={latest}
              recent={recent}
              selectedCategory={selectedCategory}
            />
          ))}
        {selectedCategory &&
          filteredCategory.map(
            (post, index) =>
              index > 0 && (
                <PostCard
                  post={post.node}
                  index={index}
                  key={post.title}
                  latest={latest}
                  recent={recent}
                  selectedCategory={selectedCategory}
                />
              )
          )}
      </div> */}
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

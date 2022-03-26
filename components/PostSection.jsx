import React, { useState, useEffect } from "react";
import { getCategories, getPosts } from "../services";
import Link from "next/link";
import { toUpperCase } from "../helper/toUpperCase";
import PostCard from "./PostCard";

export default function PostSection({ latest, recent }) {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
    getPosts().then((newPosts) => setPosts(newPosts));
  }, []);

  return (
    <div className={`mb-28 ${recent ? "md:-mx-10" : null} `}>
      <h1 className="text-[3rem] mb-10">
        {latest ? "Latest" : recent ? "Recent" : null}
      </h1>
      {recent && (
        <div
          className={`p-2 py-4 w-max mb-14 columns-[${categories.length}] items-center bg-[rgba(242,242,242,1)]`}
        >
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className=" text-center font-normal mx-8 cursor-pointer">
                {toUpperCase(category.name)}
              </span>
            </Link>
          ))}
        </div>
      )}
      <div
        className={`grid ${
          latest
            ? "grid-cols-1 lg:grid-cols-2 gap-12"
            : recent
            ? "grid-cols-2 lg:grid-cols-4 gap-6"
            : null
        } `}
      >
        {posts.map((post, index) => (
          <PostCard post={post.node} key={post.title} />
        ))}
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

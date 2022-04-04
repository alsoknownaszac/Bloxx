import React, { useState, useEffect } from "react";
import { PostCard } from ".";
import { getCategories, getPosts } from "../services";

export default function SimilarPost({ selectedCategory, posts, categories }) {
  //   const [categories, setCategories] = useState([]);
  //   const [posts, setPosts] = useState([]);

  console.log(selectedCategory);

  console.log(posts);
  console.log(categories);

  let latest = true;
  let recent = false;

  //   useEffect(() => {
  //     getCategories().then((newCategories) => setCategories(newCategories));
  //     getPosts().then((newPosts) => setPosts(newPosts));
  //   }, []);

  let filteredCategory;
  if (selectedCategory === "all-categories") {
    filteredCategory = posts;
  } else if (selectedCategory && posts) {
    filteredCategory = posts.filter(({ node: { categories } }) =>
      categories.some((val) => val.slug === selectedCategory)
    );
  } else filteredCategory = posts;

  return (
    // selectedCategory &&
    <div className=" border-t-2 border-b-2 py-10 grid grid-cols-2 lg:grid-cols-3 gap-10">
      {/* {filteredCategory.map(
        (post, index) =>
          index < 2 && (
            <PostCard
              post={post.node}
              index={index}
              key={post.title}
              latest={latest}
              recent={recent}
            />
          )
      )} */}
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { posts, categories },
  };
}

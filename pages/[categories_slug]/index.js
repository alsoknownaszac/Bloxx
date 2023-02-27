import React from "react";
import { useRouter } from "next/router";
import PostSection from "../../components/PostSection";
import { Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  const { categories_slug } = router.query;

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="">
      <PostSection selectedCategory={categories_slug} />
      <PostSection recent />
    </div>
  );
};
export default CategoryPost;

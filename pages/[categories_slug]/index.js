import React from "react";
import { useRouter } from "next/router";
import PostSection from "../../components/PostSection";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  const { categories_slug } = router.query;
  // console.log(categories_slug);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="">
      <PostSection selectedCategory={categories_slug} />
    </div>
  );
};
export default CategoryPost;

// // Fetch data at build time
// export async function getStaticProps({ params }) {
//   const posts = await getCategoryPost(params.categories_slug);

//   return {
//     props: { posts },
//   };
// }

// // Specify dynamic routes to pre-render pages based on data.
// // The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const categories = await getCategories();
//   return {
//     paths: categories.map(({ categories_slug }) => ({
//       params: { categories_slug },
//     })),
//     fallback: true,
//   };
// }

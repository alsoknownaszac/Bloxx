import React, { useState } from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "../../query/getSinglePost";

export default function PostDetails() {
  const router = useRouter();

  const { post_slug } = router.query;
  console.log(post_slug);

  if (router.isFallback) {
    return <Loader />;
  }

  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: {
      where: {
        slug: post_slug,
      },
    },
  });

  console.log(data?.post);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  const post = data?.post;

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-9">
          <PostDetail post={post} />
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments comments={post.comments} />
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const data = await getPostDetails(params.slug);

//   console.log(data);
//   return {
//     props: { post: data },
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

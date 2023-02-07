import React, { useState, useEffect } from "react";
// import moment from "moment";
// import Link from "next/link";
// import { getRecentPosts, getSimilarPosts } from "../services";
import { PostCard } from "./PostCard";
import { useQuery } from "@apollo/client";
import { GET_RECENT_POSTS } from "../query/getRecentPosts";
import { GET_SIMILAR_POSTS } from "../query/getSimilarPosts";
// import { compose } from "@reduxjs/toolkit";

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  // console.log({ categories, slug });

  const recentPostsQuery = useQuery(GET_RECENT_POSTS, {
    variables: {
      orderBy: "createdAt_ASC",
      last: 3,
    },
  });

  const similarPostsQuery = useQuery(GET_SIMILAR_POSTS, {
    variables: {
      where: {
        slug_not: slug,
        AND: [
          {
            categories_some: {
              slug_in: categories,
            },
          },
        ],
      },
    },
  });

  useEffect(() => {
    if (slug && recentPostsQuery) {
      setRelatedPosts(recentPostsQuery?.data?.posts);
    } else if (slug && similarPostsQuery) {
      setRelatedPosts(similarPostsQuery?.data?.posts);
    } else null;
  }, [slug, recentPostsQuery, similarPostsQuery]);

  // console.log(relatedPosts);

  return (
    <div className="border-t-2 border-b-2 py-20 mb-20">
      <h3 className="text-[2.5rem] mb-8 font-medium pb-4">
        {slug ? "Similar Posts" : "Recent Posts"}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
        {relatedPosts?.map(
          (post, index) =>
            index < 2 && (
              <PostCard
                post={post}
                index={index}
                key={post.title}
                recent={true}
              />
            )
        )}
      </div>
    </div>
  );
}

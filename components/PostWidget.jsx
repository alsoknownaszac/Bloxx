import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
import { PostCard } from "./PostCard";

export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className="border-t-2 border-b-2 py-20 mb-20">
      <h3 className="text-xl mb-8 font-semibold pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
        {relatedPosts.map(
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
      {/* {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link className="text-md" href={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </div>
        </div>
      ))} */}
    </div>
  );
}

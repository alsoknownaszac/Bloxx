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

  // console.log(relatedPosts);

  return (
    <div className="border-t-2 border-b-2 py-20 mb-20">
      <h3 className="text-[2.5rem] mb-8 font-medium pb-4">
        {slug ? "Similar Posts" : "Recent Posts"}
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
    </div>
  );
}

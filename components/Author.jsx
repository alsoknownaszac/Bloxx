import React from "react";
import Image from "next/image";

export default function Author({ author }) {
  return (
    <div className="mt-20 mb-8 p-8">
      <h1 className="mb-8 text-[1.8rem]">Author</h1>
      <div className="flex gap-10 text-[1.5rem] relative">
        <Image
          unoptimized
          className="align-middle rounded-full"
          src={author.photo.url}
          alt={author.name}
          height="80px"
          width="80px"
        />
        <div className="py-2">
          <h3 className="mb-2 text-[1.8rem] font-bold">{author.name}</h3>
          <p className="">{author.bio}</p>
        </div>
      </div>
    </div>
  );
}

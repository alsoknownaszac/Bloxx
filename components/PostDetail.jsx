import React from "react";
import moment from "moment";
import { AiFillCalendar as CalenderIcon } from "react-icons/ai";
import { toUpperCase } from "../helper/toUpperCase";

export default function PostDetail({ post }) {
  console.log(post.content.raw.children);
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "iframe":
        return (
          <iframe
            src={obj.url}
            width={obj.width}
            height={obj.height}
            // title="W3Schools Free Online Web Tutorials"
          ></iframe>
        );
      case "block-quote":
        return (
          <blockquote cite="http://www.worldwildlife.org/who/index.html">
            {obj.children.map((quote) => quote.text)}
          </blockquote>
        );
      case "code-block":
        return (
          <pre class="max-w-full p-2 whitespace-pre-wrap">
            <code>{obj.children.map((code) => code.obj)}</code>
          </pre>
        );
      case "link":
        return <a href={obj.href}>{obj.text}</a>;
      default:
        return modifiedText;
    }
  };

  return (
    <div className="shadow-sm rounded-lg lg:p-8 pb-12 mb-8">
      <div className="flex">
        {post.categories.map((category) => (
          <div
            key={category.slug}
            className="p-4 mr-4 mb-6 w-max rounded-md text-[2rem] leading-[1.2rem] bg-[rgba(66,172,147,0.17)]"
          >
            {toUpperCase(category.name)}
          </div>
        ))}
      </div>
      <h1 className="mb-6 text-[3rem] font-semibold">{post.title}</h1>
      <div className="flex items-center mb-8 w-full">
        <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            className="align-middle rounded-full"
            src={post.author.photo.url}
            height="30px"
            width="30px"
            alt={post.author.name}
          />
          <p className="inline align-middle text-gray-700 ml-3 text-[1.6rem]">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium flex items-center text-gray-700 ">
          <CalenderIcon className="inline text-center mr-4" />
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <div className="relative overflow-hidden shadow-md mb-8">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg "
        />
      </div>
      <div className="px-4 lg:px-0 text-[1.8rem]">
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
}

import React from "react";
import moment from "moment";
import { AiFillCalendar as CalenderIcon } from "react-icons/ai";
import { toUpperCase } from "../helper/toUpperCase";
import { v4 as uuid } from "uuid";

// import { RichText } from "@graphcms/rich-text-react-renderer";

export default function PostDetail({ post }) {
  console.log(post.content.json.children);
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
      if (obj.href) {
        modifiedText = (
          <a
            className="text-blue-300 hover:underline !hover:underline-offset-8 cursor-pointer"
            target={obj.openInNewTab && "_blank"}
            href={obj.href}
            key={uuid()}
          >
            {obj.children.map((item) => (
              <React.Fragment key={uuid()}>{item.text}</React.Fragment>
            ))}
          </a>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item) => (
              <React.Fragment key={uuid()}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item) => (
              <React.Fragment key={uuid()}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item) => (
              <React.Fragment key={uuid()}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            className="mb-8"
            key={uuid()}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "iframe":
        return (
          <iframe
            className="mb-8"
            src={obj.url}
            width={obj.width}
            height={obj.height}
            target="_top"
            // title="W3Schools Free Online Web Tutorials"
          ></iframe>
        );
      case "block-quote":
        return (
          <blockquote className="bg-[#f1e7e75d] p-4 rounded-md mb-8">
            {obj.children.map((quote) => (
              <React.Fragment key={uuid()}>{quote.text}</React.Fragment>
            ))}
          </blockquote>
        );
      case "code-block":
        return (
          <pre className="mb-8 pre max-w-full p-2 whitespace-pre-wrap">
            <code className="code">
              {obj.children.map((code) => (
                <React.Fragment key={uuid()}>{code.text}</React.Fragment>
              ))}
            </code>
          </pre>
        );
      case "bulleted-list":
        return (
          <ul className="list-disc pl-12 mb-8 list-outside ">
            {obj.children.map((listItem) => {
              let { text } = ListDisplay(listItem);
              return (
                <li className="pl-2 mb-4" key={uuid()}>
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        );
      case "numbered-list":
        return (
          <ol className="list-decimal pl-10 mb-8 list-outside ">
            {obj.children.map((listItem) => {
              let { text } = ListDisplay(listItem);
              return (
                <li className="pl-4 mb-4" key={uuid()}>
                  <span>{text}</span>
                </li>
              );
            })}
          </ol>
        );
      case "class":
        return <div className={obj.className}>{modifiedText}</div>;
      default:
        return modifiedText;
    }
  };

  return (
    <div className="lg:p-8 pb-12 mb-20">
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
      <h1 className="mb-6 text-[3rem] font-medium">{post.title}</h1>
      <div className="flex items-center mb-8 w-full">
        <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            className="align-middle rounded-full"
            src={post.author.photo.url}
            height="50px"
            width="50px"
            alt={post.author.name}
          />
          <p className="inline align-middle text-gray-700 dark:text-gray-200 ml-3 text-[1.6rem]">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium flex items-center text-gray-700 dark:text-gray-200">
          <CalenderIcon className="inline text-center mr-4" />
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <div className="relative overflow-hidden shadow-md mb-10">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg "
        />
      </div>

      <div className="px-4 lg:px-0 text-[1.8rem]">
        {post.content.json.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => (
            <React.Fragment key={uuid()}>
              {getContentFragment(itemIndex, item.text, item)}
            </React.Fragment>
          ));
          return (
            <React.Fragment key={index}>
              {getContentFragment(index, children, typeObj, typeObj.type)}
            </React.Fragment>
          );
        })}
      </div>
      {/* <div className="px-4 lg:px-0 text-[1.8rem]">
        <RichText content={post.content.raw.children} />
      </div> */}
    </div>
  );
}

function ListDisplay(listItem) {
  let text;
  listItem.children.map((listItemChild) => (
    <React.Fragment key={uuid()}>
      {listItemChild.children.map((item) => (
        <React.Fragment key={uuid()}>{(text = item.text)}</React.Fragment>
      ))}
    </React.Fragment>
  ));
  return { text };
}

import React, {
  Fragment,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { toUpperCase } from "../helper/toUpperCase";
import { RiMoonFill, RiMoonLine, RiSearchLine } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md";
import { PopOver } from "./PopOver";
import { Popover, Transition } from "@headlessui/react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../query/getCategories";

// const categories = [
//   { name: "react", slug: "react" },
//   { name: "web dev", slug: "web dev" },
// ];

export default function Header({ mode, setMode }) {
  const [categories, setCategories] = useState([]);

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <div className="hidden md:text-[1.45rem] lg:text-[1.7rem] md:flex sticky z-50 h-[13rem] top-[0rem] items-end px-5 md:px-10 backdrop-blur-sm">
      <div className="container mx-auto shadow-sm grid grid-cols-12 rounded-lg p-5 items-center bg-[rgba(242,242,242,1)] dark:bg-[rgba(17,16,16,1)] dark:text-white">
        <div className="md:float-left col-span-1">
          <Link href="/">
            <span className="cursor-pointer font-bold md:text-3xl lg:text-4xl ">
              NoobNotes
            </span>
          </Link>
        </div>
        <div className="col-span-1"></div>
        <MdHeaderTab loading={loading} data={data?.categories} />
        <LgHeaderTab loading={loading} data={data?.categories} />
        <div className=" col-span-2 flex items-center md:ml-auto">
          <RiSearchLine className="cursor-pointer md:text-[1.5rem] lg:text-[1.7rem] mr-16" />
          <div
            className="cursor-pointer md:text-[1.5rem] lg:text-[1.7rem] mr-4"
            onClick={() => setMode(!mode)}
          >
            {!mode ? <RiMoonLine /> : <RiMoonFill />}
          </div>
        </div>
      </div>
    </div>
  );
}

function LgHeaderTab({ loading, data }) {
  return (
    <div
      className={`col-span-8 mx-auto hidden lg:flex items-center columns-[${
        data?.length + 2
      }] md:text-[1.45rem] lg:text-[1.7rem] `}
    >
      <Link href={`/all`}>
        <span className=" text-center font-normal mx-8 cursor-pointer">
          All Categories
        </span>
      </Link>
      {data?.map((category, i) => (
        <Link key={category.id} href={`/${category.slug}`}>
          <span className=" text-center font-normal mx-8 cursor-pointer">
            {toUpperCase(category.name)}
          </span>
        </Link>
      ))}
    </div>
  );
}

function MdHeaderTab({ loading, data }) {
  return (
    <div
      className={`col-span-8 mx-auto hidden md:flex lg:hidden items-center columns-4 md:text-[1.45rem] lg:text-[1.7rem] `}
    >
      <Link href={`/all`}>
        <span className=" text-center font-normal mx-8 cursor-pointer">
          All Categories
        </span>
      </Link>
      {data?.map(
        (category, i) =>
          i < 2 && (
            <Link key={category.id} href={`/${category.slug}`}>
              <span className=" text-center font-normal mx-8 cursor-pointer">
                {toUpperCase(category.name)}
              </span>
            </Link>
          )
      )}
      <MoreHeaderTab loading={loading} data={data} />
    </div>
  );
}

function MoreHeaderTab({ loading, data }) {
  let timeout; // NodeJS.Timeout
  const timeoutDuration = 200;

  const buttonRef = useRef(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open) => {
    setOpenState((openState) => !openState);
    buttonRef?.current?.click();
  };

  const onHover = (open, action) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      clearTimeout(timeout);
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
  };

  const handleClick = (open) => {
    setOpenState(!open);
    clearTimeout(timeout);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Popover className="relative px-4">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
        >
          <Popover.Button ref={buttonRef}>
            <div onClick={() => handleClick(open)}>
              <MdDoubleArrow
                className={`${
                  open ? `transform rotate-90 ` : ""
                } self-center translate-y-1 !outline-none`}
              />
            </div>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute top-12 -left-8 z-10 bg-gray-200 p-4 rounded-lg"
            >
              {data?.map(
                (category, i) =>
                  i > 1 && (
                    <Link key={category.id} href={`/${category.slug}`}>
                      <div className=" text-center font-normal px-8 py-2 mb-2 rounded-lg bg-gray-300 hover:bg-[rgba(50,197,206,0.31)] cursor-pointer">
                        {toUpperCase(category.name)}
                      </div>
                    </Link>
                  )
              )}
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}

// import { gql } from "graphql-request";
// import { cmsClient, hygraph } from "../pages/api/cmsClient";

// const QUERY = gql`
//   {
//     categories {
//       name
//       slug
//     }
//   }
// `;

// export async function getStaticProps() {
//   const { posts } = await hygraph.request(QUERY);

//   return {
//     props: {
//       posts,
//     },
//   };
// }

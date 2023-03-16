import Head from "next/head";
import WelcomeCard from "../components/WelcomeCard";
import PostSection from "../components/PostSection";

export default function Home({ posts }) {
  return (
    <div className="">
      <Head>
        <title>Project88 blog exploring creativity with elegance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomeCard />
      {/* <FeaturedPosts /> */}
      <PostSection latest home homeSearch />
      <PostSection recent home />
    </div>
  );
}

// function findPrimeNumber(num) {
//   if (num === 1 || num === 2) {
//     return "Prime Number";
//   }
//   if (num % 2 === 0) {
//     return "Not a Prime Number";
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return "Not a Prime number";
//     }
//   }
//   return "Prime Number";
// }

// console.log(findPrimeNumber(1));
// console.log(findPrimeNumber(2));
// console.log(findPrimeNumber(17));
// console.log(findPrimeNumber(12));
// console.log(findPrimeNumber(13));
// console.log(findPrimeNumber(15));

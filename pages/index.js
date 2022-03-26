import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
import WelcomeCard from "../components/WelcomeCard";
import PostSection from "../components/PostSection";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>NoobNotes blog exploring creativity with elegance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomeCard />
      {/* <FeaturedPosts /> */}
      <PostSection latest />
      <PostSection recent />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

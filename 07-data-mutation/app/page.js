import { Suspense } from "react";

import Posts from "@/components/posts";
import { PostsSkeleton } from "@/components/skeleton";
import { getPosts } from "@/lib/posts";

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <div className="hero-section">
        <h1>Welcome back!</h1>
        <p>
          Discover amazing content from our vibrant community. Here's what you
          might've missed.
        </p>
      </div>
      <section id="latest-posts">
        <h2>Latest Posts</h2>
        <Suspense fallback={<PostsSkeleton />}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}

import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <div className="hero-section">
        <h1>Community Feed</h1>
        <p>Explore all the amazing content shared by our community members.</p>
      </div>
      <Posts posts={posts} />
    </>
  );
}

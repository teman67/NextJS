import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";

function Post({ post }) {
  // Provide a fallback image if the post image is empty or null
  const imageUrl =
    post.image && post.image.trim() !== ""
      ? post.image
      : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop";

  return (
    <article className="post">
      <div className="post-image">
        <img src={imageUrl} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div className="post-meta">
            <h2>{post.title}</h2>
            <p>
              Shared by <strong>{post.userFirstName}</strong> on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div className="post-actions">
            <LikeButton post={post} />
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="empty-state">
        <h3>No posts yet</h3>
        <p>Be the first to share something amazing with the community!</p>
      </div>
    );
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default function PostSkeleton() {
  return (
    <div className="post skeleton">
      <div className="post-image">
        <div className="skeleton-image"></div>
      </div>
      <div className="post-content">
        <header>
          <div className="post-meta">
            <div className="skeleton-title"></div>
            <div className="skeleton-meta"></div>
          </div>
          <div className="post-actions">
            <div className="skeleton-button"></div>
          </div>
        </header>
        <div className="skeleton-content"></div>
        <div className="skeleton-content"></div>
      </div>
    </div>
  );
}

export function PostsSkeleton() {
  return (
    <ul className="posts">
      {[...Array(3)].map((_, i) => (
        <li key={i}>
          <PostSkeleton />
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";
import Image from "next/image";
import { getNews } from "../../../lib/api.js";

export default async function NewsPage() {
  let news = [];
  let error = null;

  try {
    news = await getNews();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="news-container">
        <h1 className="news-title">Latest News</h1>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ color: "#dc2626" }}>Error loading news: {error}</p>
          <p>Please make sure the backend server is running on port 8080.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-container">
      <h1 className="news-title">Latest News</h1>

      {/* Navigation Links */}
      <div className="news-nav-links">
        <Link href="/latest" className="news-nav-link primary">
          Latest News
        </Link>
        <Link href="/archive" className="news-nav-link secondary">
          Archive
        </Link>
      </div>

      <div className="news-grid">
        {news.map((article) => (
          <article key={article.id} className="news-card">
            <div className="news-card-image">
              <Link href={`/news/${article.slug}`}>
                <Image
                  src={`/images/${article.image}`}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover", cursor: "pointer" }}
                />
              </Link>
            </div>
            <div className="news-card-content">
              <h2 className="news-card-title">
                <Link href={`/news/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="news-card-date">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="news-card-excerpt">
                {article.content.slice(0, 150)}...
              </p>
              <Link
                href={`/news/${article.slug}`}
                className="news-card-read-more"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

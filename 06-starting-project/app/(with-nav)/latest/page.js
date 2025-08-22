import Link from "next/link";

// Latest news data (most recent articles)
const latestNews = [
  {
    id: "1",
    title: "Next.js 14 Released with Major Performance Improvements",
    summary:
      "The latest version of Next.js brings significant performance enhancements and new features.",
    date: "2024-01-15",
    category: "Framework Updates",
  },
  {
    id: "2",
    title: "React Server Components: A Deep Dive",
    summary:
      "Understanding the benefits and implementation of React Server Components in modern web development.",
    date: "2024-01-10",
    category: "React",
  },
];

export default function LatestPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Link
          href="/news"
          style={{
            color: "#3b82f6",
            textDecoration: "none",
            fontSize: "0.9rem",
          }}
        >
          ← Back to News
        </Link>
      </div>

      <h1 style={{ marginBottom: "2rem" }}>Latest News</h1>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {latestNews.map((article) => (
          <article
            key={article.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "2rem",
              backgroundColor: "#ffffff",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "16px",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                }}
              >
                {article.category}
              </span>
              <span style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                {article.date}
              </span>
            </div>

            <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>
              <Link
                href={`/news/${article.id}`}
                style={{
                  color: "#1f2937",
                  textDecoration: "none",
                }}
              >
                {article.title}
              </Link>
            </h2>

            <p style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
              {article.summary}
            </p>

            <Link
              href={`/news/${article.id}`}
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

// Archive news data (older articles)
const archiveNews = [
  {
    id: "3",
    title: "Web Development Trends in 2024",
    summary:
      "Exploring the latest trends and technologies shaping the future of web development.",
    date: "2024-01-05",
    category: "Industry Trends",
  },
  {
    id: "4",
    title: "Understanding Modern CSS Grid Layout",
    summary:
      "A comprehensive guide to CSS Grid and how it revolutionizes web layouts.",
    date: "2023-12-20",
    category: "CSS",
  },
  {
    id: "5",
    title: "JavaScript ES2024 Features Overview",
    summary:
      "Discover the new features and improvements coming to JavaScript in 2024.",
    date: "2023-12-15",
    category: "JavaScript",
  },
  {
    id: "6",
    title: "Building Scalable React Applications",
    summary:
      "Best practices and patterns for creating maintainable React applications at scale.",
    date: "2023-12-10",
    category: "React",
  },
  {
    id: "7",
    title: "The Future of Web Performance",
    summary:
      "Exploring new techniques and tools for optimizing web application performance.",
    date: "2023-12-05",
    category: "Performance",
  },
];

export default function ArchivePage() {
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

      <h1 style={{ marginBottom: "2rem" }}>News Archive</h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            Browse our collection of archived articles and past news updates.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
        >
          {archiveNews.map((article) => (
            <article
              key={article.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "1.5rem",
                backgroundColor: "#f8fafc",
                transition: "all 0.2s ease",
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
                    backgroundColor: "#6b7280",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "16px",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                  }}
                >
                  {article.category}
                </span>
                <span style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                  {article.date}
                </span>
              </div>

              <h2 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
                <Link
                  href={`/news/${article.id}`}
                  style={{
                    color: "#374151",
                    textDecoration: "none",
                    fontSize: "1.25rem",
                  }}
                >
                  {article.title}
                </Link>
              </h2>

              <p
                style={{
                  marginBottom: "1rem",
                  color: "#6b7280",
                  lineHeight: "1.5",
                }}
              >
                {article.summary}
              </p>

              <Link
                href={`/news/${article.id}`}
                style={{
                  color: "#6b7280",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
            Looking for more recent articles?{" "}
            <Link
              href="/latest"
              style={{
                color: "#3b82f6",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Check out our latest news
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

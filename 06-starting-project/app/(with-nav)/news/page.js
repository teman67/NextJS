import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "../../../dummy-news.js";

export default function NewsPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.5rem",
          color: "#1f2937",
        }}
      >
        Latest News
      </h1>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Link
          href="/latest"
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Latest News
        </Link>
        <Link
          href="/archive"
          style={{
            backgroundColor: "#6b7280",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Archive
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {DUMMY_NEWS.map((article) => (
          <article
            key={article.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "white",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div style={{ position: "relative", height: "200px" }}>
              <Link href={`/news/${article.slug}`}>
                <Image
                  src={`/images/${article.image}`}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover", cursor: "pointer" }}
                />
              </Link>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                }}
              >
                <Link
                  href={`/news/${article.slug}`}
                  style={{
                    color: "#1f2937",
                    textDecoration: "none",
                  }}
                >
                  {article.title}
                </Link>
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  marginBottom: "1rem",
                  fontSize: "0.875rem",
                }}
              >
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p
                style={{
                  marginBottom: "1rem",
                  color: "#4b5563",
                  lineHeight: "1.6",
                }}
              >
                {article.content.slice(0, 150)}...
              </p>
              <Link
                href={`/news/${article.slug}`}
                style={{
                  color: "#3b82f6",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                }}
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

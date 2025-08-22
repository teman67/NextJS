"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          textAlign: "center",
          backgroundColor: "white",
          padding: "3rem",
          borderRadius: "20px",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "1rem",
            color: "#1f2937",
            fontWeight: "bold",
          }}
        >
          Next.js News Hub
        </h1>
        <p
          style={{
            fontSize: "1.3rem",
            color: "#6b7280",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          Welcome to our Next.js News Application! Explore our latest news
          articles with beautiful images and full-screen viewing experience.
        </p>
        <div style={{ marginTop: "2.5rem" }}>
          <Link
            href="/news"
            style={{
              display: "inline-block",
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "1.2rem 2.5rem",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "600",
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow =
                "0 15px 25px -3px rgba(59, 130, 246, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#3b82f6";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow =
                "0 10px 15px -3px rgba(59, 130, 246, 0.4)";
            }}
          >
            Explore News Articles →
          </Link>
        </div>

        {/* Additional navigation links for easy access */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/latest"
            style={{
              color: "#6b7280",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5rem 1rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#3b82f6";
              e.target.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.color = "#6b7280";
            }}
          >
            Latest News
          </Link>
          <Link
            href="/archive"
            style={{
              color: "#6b7280",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "500",
              padding: "0.5rem 1rem",
              border: "2px solid #e5e7eb",
              borderRadius: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#3b82f6";
              e.target.style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.color = "#6b7280";
            }}
          >
            News Archive
          </Link>
        </div>
      </div>
    </div>
  );
}

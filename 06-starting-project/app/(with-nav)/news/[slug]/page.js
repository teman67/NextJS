"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news.js";
import { useState } from "react";

export default function NewsDetailPage({ params }) {
  const { slug } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const article = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
          lineHeight: "1.6",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <Link
            href="/news"
            style={{
              color: "#3b82f6",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            ← Back to News
          </Link>
        </div>

        <header style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              lineHeight: "1.2",
              color: "#1f2937",
            }}
          >
            {article.title}
          </h1>
          <div
            style={{
              color: "#6b7280",
              fontSize: "0.9rem",
              marginBottom: "2rem",
            }}
          >
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              position: "relative",
              height: "400px",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            onClick={openModal}
          >
            <Image
              src={`/images/${article.image}`}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                fontWeight: "500",
              }}
            >
              Click to view fullscreen
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
            color: "#374151",
            lineHeight: "1.8",
          }}
        >
          {article.content}
        </div>
      </article>

      {/* Full-screen Image Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
          onClick={closeModal}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={`/images/${article.image}`}
              alt={article.title}
              fill
              style={{ objectFit: "contain" }}
            />

            {/* Overlay text */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                color: "white",
                padding: "4rem 2rem 2rem",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                {article.title}
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  maxWidth: "800px",
                  margin: "0 auto",
                  opacity: 0.9,
                }}
              >
                {article.content.slice(0, 200)}...
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginTop: "1rem",
                  opacity: 0.7,
                }}
              >
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Close button */}
            <button
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "2px solid white",
                color: "white",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s",
              }}
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getNewsBySlug, getNews } from "../../../../lib/api.js";
import { useState, useEffect } from "react";

// Note: generateStaticParams must be in a server component, but this is a client component
// so we'll handle dynamic loading on the client side

export default function NewsDetailPage({ params }) {
  const { slug } = params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        setLoading(true);
        const fetchedArticle = await getNewsBySlug(slug);
        if (!fetchedArticle) {
          setError("Article not found");
          return;
        }
        setArticle(fetchedArticle);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="article-container">
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p>Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-container">
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ color: "#dc2626" }}>Error loading article: {error}</p>
          <Link href="/news">← Back to News</Link>
        </div>
      </div>
    );
  }

  if (!article) {
    notFound();
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <article className="article-container">
        <div className="article-back-link">
          <Link href="/news">← Back to News</Link>
        </div>

        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        <div className="article-image-container">
          <div className="article-image-wrapper" onClick={openModal}>
            <Image
              src={`/images/${article.image}`}
              alt={article.title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="article-image-overlay">
              Click to view fullscreen
            </div>
          </div>
        </div>

        <div className="article-content">{article.content}</div>
      </article>

      {/* Full-screen Image Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <Image
              src={`/images/${article.image}`}
              alt={article.title}
              fill
              style={{ objectFit: "contain" }}
            />

            {/* Overlay text */}
            <div className="modal-text-overlay">
              <h2 className="modal-title">{article.title}</h2>
              <p className="modal-description">
                {article.content.slice(0, 200)}...
              </p>
              <p className="modal-date">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Close button */}
            <button
              className="modal-close-button"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
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

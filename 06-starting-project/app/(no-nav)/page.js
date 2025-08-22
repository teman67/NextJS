"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Next.js News Hub</h1>
        <p className="home-description">
          Welcome to our Next.js News Application! Explore our latest news
          articles with beautiful images and full-screen viewing experience.
        </p>
        <div className="home-cta-container">
          <Link href="/news" className="home-cta-button">
            Explore News Articles →
          </Link>
        </div>

        {/* Additional navigation links for easy access */}
        <div className="home-nav-links">
          <Link href="/latest" className="home-nav-link">
            Latest News
          </Link>
          <Link href="/archive" className="home-nav-link">
            News Archive
          </Link>
        </div>
      </div>
    </div>
  );
}

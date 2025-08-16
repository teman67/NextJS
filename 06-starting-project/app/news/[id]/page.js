import Link from "next/link";
import { notFound } from "next/navigation";

// Sample news data (in a real app, this would come from a database or API)
const newsData = {
  1: {
    id: "1",
    title: "Next.js 14 Released with Major Performance Improvements",
    content: `Next.js 14 has been released with significant performance improvements and new features that make it easier than ever to build fast, modern web applications.

Key highlights include:
- Improved App Router performance
- Enhanced Server Components
- Better TypeScript support
- New caching mechanisms
- Optimized build process

The development team has focused on making the framework more efficient while maintaining the developer experience that Next.js is known for. These improvements result in faster build times and better runtime performance for your applications.`,
    date: "2024-01-15",
    author: "Next.js Team",
  },
  2: {
    id: "2",
    title: "React Server Components: A Deep Dive",
    content: `React Server Components represent a paradigm shift in how we think about rendering in React applications. They allow developers to build components that run on the server, reducing the bundle size and improving performance.

Benefits include:
- Reduced JavaScript bundle size
- Better performance on slower devices
- Improved SEO capabilities
- Enhanced data fetching patterns
- Better security for sensitive operations

Server Components work alongside Client Components to create a hybrid architecture that leverages the best of both server and client-side rendering.`,
    date: "2024-01-10",
    author: "React Core Team",
  },
  3: {
    id: "3",
    title: "Web Development Trends in 2024",
    content: `The web development landscape continues to evolve rapidly in 2024, with several key trends shaping the industry:

1. Server-Side Rendering Renaissance
   - Improved performance and SEO
   - Better user experience
   - Frameworks like Next.js leading the way

2. AI-Powered Development Tools
   - Code generation and completion
   - Automated testing and debugging
   - Enhanced developer productivity

3. Edge Computing
   - Faster response times
   - Reduced latency
   - Better global performance

4. WebAssembly Growth
   - High-performance web applications
   - Language diversity on the web
   - Better computational capabilities

These trends are driving innovation and creating new opportunities for developers to build better web experiences.`,
    date: "2024-01-05",
    author: "Web Dev Weekly",
  },
};

export default function NewsDetailPage({ params }) {
  const { id } = params;
  const article = newsData[id];

  if (!article) {
    notFound();
  }

  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "0 auto",
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
          }}
        >
          {article.title}
        </h1>
        <div
          style={{
            color: "#6b7280",
            fontSize: "0.9rem",
            marginBottom: "1rem",
          }}
        >
          <span>By {article.author}</span>
          <span style={{ margin: "0 0.5rem" }}>•</span>
          <span>{article.date}</span>
        </div>
      </header>

      <div
        style={{
          fontSize: "1.1rem",
          whiteSpace: "pre-line",
        }}
      >
        {article.content}
      </div>
    </article>
  );
}

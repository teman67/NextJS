import Link from 'next/link';

// Sample news data
const news = [
  {
    id: '1',
    title: 'Next.js 14 Released with Major Performance Improvements',
    summary: 'The latest version of Next.js brings significant performance enhancements and new features.',
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'React Server Components: A Deep Dive',
    summary: 'Understanding the benefits and implementation of React Server Components in modern web development.',
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Web Development Trends in 2024',
    summary: 'Exploring the latest trends and technologies shaping the future of web development.',
    date: '2024-01-05'
  }
];

export default function NewsPage() {
  return (
    <div>
      <h1>Latest News</h1>
      <div style={{
        display: 'grid',
        gap: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {news.map((article) => (
          <article key={article.id} style={{
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '1.5rem',
            backgroundColor: '#f9fafb'
          }}>
            <h2 style={{ marginTop: 0 }}>
              <Link href={`/news/${article.id}`} style={{
                color: '#1f2937',
                textDecoration: 'none'
              }}>
                {article.title}
              </Link>
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              {article.date}
            </p>
            <p style={{ marginBottom: 0 }}>
              {article.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

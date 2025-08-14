import Link from 'next/link';

export default function MainHeader() {
  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#1f2937',
      color: 'white',
      marginBottom: '2rem'
    }}>
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li>
            <Link href="/" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/news" style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

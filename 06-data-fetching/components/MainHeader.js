import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/latest">Latest</Link>
          </li>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

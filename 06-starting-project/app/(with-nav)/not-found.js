import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          color: "#1f2937",
        }}
      >
        404 - Page Not Found
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#6b7280",
          marginBottom: "2rem",
        }}
      >
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        style={{
          color: "#3b82f6",
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Go back to Home
      </Link>
    </div>
  );
}

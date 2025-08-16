export default function HomePage() {
  return (
    <div
      id="home"
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
        Next.js Routing & Page Rendering
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#6b7280",
          marginBottom: "2rem",
        }}
      >
        Welcome to our Next.js application! Navigate to the News page to see
        dynamic routing in action.
      </p>
    </div>
  );
}

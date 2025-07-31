export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post Title: {params.slug}</h1>
      <p>This is the content of the blog post.</p>
    </main>
  );
}

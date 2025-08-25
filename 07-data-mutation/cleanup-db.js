import sql from "better-sqlite3";

const db = new sql("posts.db");

// Update any posts with empty or null image URLs
const updateStmt = db.prepare(`
  UPDATE posts 
  SET image_url = ? 
  WHERE image_url IS NULL OR image_url = ''
`);

const fallbackImage =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=300&fit=crop";
const result = updateStmt.run(fallbackImage);

console.log(`Updated ${result.changes} posts with empty image URLs`);

// Check current posts
const selectStmt = db.prepare("SELECT id, title, image_url FROM posts");
const posts = selectStmt.all();

console.log("Current posts in database:");
posts.forEach((post) => {
  console.log(
    `- ID: ${post.id}, Title: ${post.title}, Image: ${
      post.image_url ? "Yes" : "No"
    }`
  );
});

db.close();

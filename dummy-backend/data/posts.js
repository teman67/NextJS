const fs = require("node:fs/promises");

async function getStoredPosts() {
  try {
    const rawFileContent = await fs.readFile("posts.json", {
      encoding: "utf-8",
    });

    // Check if file is empty or contains only whitespace
    if (!rawFileContent.trim()) {
      // Initialize with empty posts array
      await storePosts([]);
      return [];
    }

    const data = JSON.parse(rawFileContent);
    const storedPosts = data.posts ?? [];
    return storedPosts;
  } catch (error) {
    // If file doesn't exist or JSON is invalid, create a new one
    console.log("Initializing posts.json file...");
    await storePosts([]);
    return [];
  }
}

function storePosts(posts) {
  return fs.writeFile("posts.json", JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;

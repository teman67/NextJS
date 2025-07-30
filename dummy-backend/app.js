const express = require("express");
const bodyParser = require("body-parser");

const { getStoredPosts, storePosts } = require("./data/posts");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/posts", async (req, res) => {
  const storedPosts = await getStoredPosts();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json(storedPosts);
});

app.get("/posts/:id", async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.post("/posts", async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
    createdAt: new Date().toLocaleString(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json(newPost);
});

app.delete("/posts/:id", async (req, res) => {
  console.log("DELETE request received for post ID:", req.params.id);

  try {
    const existingPosts = await getStoredPosts();
    const postId = req.params.id;

    console.log("Current posts:", existingPosts);
    console.log("Looking for post with ID:", postId);

    const postToDelete = existingPosts.find((post) => post.id === postId);
    if (!postToDelete) {
      console.log("Post not found");
      return res.status(404).json({ error: "Post not found" });
    }

    const updatedPosts = existingPosts.filter((post) => post.id !== postId);
    console.log("Updated posts after deletion:", updatedPosts);

    await storePosts(updatedPosts);
    console.log("Posts saved successfully");

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error in DELETE endpoint:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8080);

import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import SearchBar from "./SearchBar";
import { useLoaderData, useLocation } from "react-router-dom";

function PostsList() {
  const loaderPosts = useLoaderData();
  const location = useLocation();
  const [posts, setPosts] = useState(loaderPosts);
  const [searchTerm, setSearchTerm] = useState("");

  // Update posts when loader data changes (e.g., after revalidation)
  useEffect(() => {
    setPosts(loaderPosts);
  }, [loaderPosts]);

  // Refresh posts when returning to main page
  useEffect(() => {
    if (location.pathname === "/") {
      const refreshPosts = async () => {
        try {
          const response = await fetch("http://localhost:8080/posts");
          const data = await response.json();
          setPosts(data);
        } catch (error) {
          console.error("Failed to refresh posts:", error);
        }
      };
      refreshPosts();
    }
  }, [location.pathname]);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("react-posts", JSON.stringify(posts));
  }, [posts]);

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function deletePostHandler(postId) {
    console.log("Attempting to delete post with ID:", postId);

    // Delete from backend
    fetch(`http://localhost:8080/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("Delete response status:", response.status);
        console.log("Delete response ok:", response.ok);

        if (response.ok) {
          console.log("Delete successful, updating local state");
          // Update local state
          setPosts((prevPosts) => {
            const updatedPosts = prevPosts.filter((post) => post.id !== postId);
            console.log("Updated posts:", updatedPosts);
            return updatedPosts;
          });
        } else {
          console.error("Delete failed with status:", response.status);
          throw new Error(`Delete failed with status: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        alert("Failed to delete post. Please try again.");
      });
  }

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredPosts.length > 0 && (
        <ul className={classes.posts}>
          {filteredPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              auth={post.author}
              body={post.body}
              createdAt={post.createdAt}
              onDelete={deletePostHandler}
            />
          ))}
        </ul>
      )}
      {filteredPosts.length === 0 && posts.length > 0 && (
        <>
          <h2>No posts found!</h2>
          <p style={{ textAlign: "center", color: "white" }}>
            No posts match your search criteria.
          </p>
        </>
      )}
      {posts.length === 0 && (
        <>
          <h2>Add some posts!</h2>
          <p style={{ textAlign: "center", color: "white" }}>
            No posts available.
          </p>
        </>
      )}
    </>
  );
}

export default PostsList;

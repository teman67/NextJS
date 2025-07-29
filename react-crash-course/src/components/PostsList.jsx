import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "../routes/NewPost";
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import Modal from "./Modal"; // Importing Modal component to display a modal dialog
import SearchBar from "./SearchBar";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:8080/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resData = await response.json();
        setPosts(resData);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Fallback to localStorage if backend is not available
        const savedPosts = localStorage.getItem("react-posts");
        if (savedPosts) {
          try {
            setPosts(JSON.parse(savedPosts));
          } catch (parseError) {
            console.error("Error parsing localStorage posts:", parseError);
            setPosts([]);
          }
        }
      }
    }
    fetchPosts();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

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

  function addPostHandler(postData) {
    return fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create post");
        }
        return response.json();
      })
      .then((newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]); // Add new posts at the beginning
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        throw error; // Re-throw the error to be caught in the submitHandler
      });
  }

  function deletePostHandler(postId) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
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

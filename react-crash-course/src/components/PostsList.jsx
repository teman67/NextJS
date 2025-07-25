import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks
import Modal from "./Modal"; // Importing Modal component to display a modal dialog
import SearchBar from "./SearchBar";

function PostsList({ isModalOpen, onStopPosting }) {
  const [posts, setPosts] = useState(() => {
    // Load posts from localStorage on initial render
    const savedPosts = localStorage.getItem("react-posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
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
    const newPost = {
      ...postData,
      id: Date.now() + Math.random(), // Simple unique ID
      createdAt: new Date().toLocaleString(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add new posts at the beginning
  }

  function deletePostHandler(postId) {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  }

  return (
    <>
      {isModalOpen && (
        <Modal onClose={onStopPosting}>
          <NewPost onClose={onStopPosting} addPost={addPostHandler} />
        </Modal>
      )}

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

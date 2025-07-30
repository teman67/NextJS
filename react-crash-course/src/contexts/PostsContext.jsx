import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext();

export default function PostsProvider({ children, initialPosts = [] }) {
  const [posts, setPosts] = useState(initialPosts);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("react-posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const updatePosts = (newPosts) => {
    setPosts(newPosts);
  };

  const refreshPosts = async () => {
    try {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data);
      return data;
    } catch (error) {
      console.error("Failed to refresh posts:", error);
      throw error;
    }
  };

  const value = {
    posts,
    addPost,
    deletePost,
    updatePosts,
    refreshPosts,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}

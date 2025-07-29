import "../App.css";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";
import { useState } from "react"; // Importing useState hook to manage state in functional components

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
